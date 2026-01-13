import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Bottle from './Bottle';
import QuizModal from './QuizModal';
import GameHeader from './GameHeader';
import AchievementToast from './AchievementToast';
import { generateLevel, isLevelComplete, canPour } from '@/lib/gameLogic';
import { getRandomQuestions } from '@/lib/questions';
import { Trophy, Lightbulb, RotateCcw, Play } from 'lucide-react';

export const GameBoard = () => {
  const [gameState, setGameState] = useState('menu'); // menu, playing, quiz, complete
  const [level, setLevel] = useState(1);
  const [bottles, setBottles] = useState([]);
  const [selectedBottle, setSelectedBottle] = useState(null);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [hints, setHints] = useState(3);
  const [timeLeft, setTimeLeft] = useState(null);
  const [achievements, setAchievements] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [moveHistory, setMoveHistory] = useState([]);

  useEffect(() => {
    if (gameState === 'playing') {
      initLevel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, gameState]);

  useEffect(() => {
    if (gameState === 'playing' && timeLeft !== null && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleGameOver();
    }
  }, [timeLeft, gameState]);

  const initLevel = () => {
    const newBottles = generateLevel(level);
    setBottles(newBottles);
    setMoves(0);
    setSelectedBottle(null);
    setMoveHistory([]);
    
    // Add time limit for levels 5+
    if (level >= 5) {
      setTimeLeft(120 - (level * 5)); // Decreasing time as level increases
    } else {
      setTimeLeft(null);
    }
  };

  const handleBottleClick = (index) => {
    if (selectedBottle === null) {
      // Select bottle if it has liquid
      if (bottles[index].length > 0) {
        setSelectedBottle(index);
      }
    } else {
      // Try to pour
      if (selectedBottle === index) {
        setSelectedBottle(null);
        return;
      }

      if (canPour(bottles[selectedBottle], bottles[index])) {
        const newBottles = [...bottles];
        const fromBottle = [...newBottles[selectedBottle]];
        const toBottle = [...newBottles[index]];
        
        // Save state for undo
        setMoveHistory([...moveHistory, { bottles: [...bottles], moves, selectedBottle }]);
        
        // Get the top color
        const topColor = fromBottle[fromBottle.length - 1];
        
        // Move all consecutive colors of the same type
        while (fromBottle.length > 0 && fromBottle[fromBottle.length - 1] === topColor) {
          if (toBottle.length < 4) {
            toBottle.push(fromBottle.pop());
          } else {
            break;
          }
        }
        
        newBottles[selectedBottle] = fromBottle;
        newBottles[index] = toBottle;
        
        setBottles(newBottles);
        setMoves(moves + 1);
        setSelectedBottle(null);
        
        // Check if level is complete
        if (isLevelComplete(newBottles)) {
          handleLevelComplete();
        }
      } else {
        // Invalid move - shake animation
        setSelectedBottle(null);
      }
    }
  };

  const handleLevelComplete = () => {
    const levelScore = Math.max(1000 - (moves * 10) + (timeLeft || 0) * 5, 100);
    setScore(score + levelScore);
    
    // Check for achievements
    const newAchievements = [];
    if (moves <= 10) {
      newAchievements.push({ title: 'Efficiency Master!', desc: 'Completed in 10 moves or less' });
    }
    if (level % 5 === 0) {
      newAchievements.push({ title: 'Milestone Reached!', desc: `Reached Level ${level}` });
    }
    
    setAchievements(newAchievements);
    
    // Show quiz after level
    setTimeout(() => {
      setCurrentQuestions(getRandomQuestions(2));
      setShowQuiz(true);
    }, 1500);
  };

  const handleQuizComplete = (correct) => {
    const bonusScore = correct * 100;
    setScore(score + bonusScore);
    setShowQuiz(false);
    setLevel(level + 1);
  };

  const handleGameOver = () => {
    setGameState('complete');
  };

  const useHint = () => {
    if (hints > 0) {
      setHints(hints - 1);
      // Find a valid move
      for (let i = 0; i < bottles.length; i++) {
        if (bottles[i].length > 0) {
          for (let j = 0; j < bottles.length; j++) {
            if (i !== j && canPour(bottles[i], bottles[j])) {
              // Highlight the hint
              setSelectedBottle(i);
              setTimeout(() => {
                setSelectedBottle(null);
              }, 2000);
              return;
            }
          }
        }
      }
    }
  };

  const handleUndo = () => {
    if (moveHistory.length > 0) {
      const lastState = moveHistory[moveHistory.length - 1];
      setBottles(lastState.bottles);
      setMoves(lastState.moves);
      setSelectedBottle(lastState.selectedBottle);
      setMoveHistory(moveHistory.slice(0, -1));
    }
  };

  const resetLevel = () => {
    initLevel();
  };

  const startGame = () => {
    setGameState('playing');
    setLevel(1);
    setScore(0);
    setHints(3);
  };

  if (gameState === 'menu') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--gradient-game)' }}>
        <Card className="max-w-2xl w-full p-8 text-center space-y-6 shadow-lg">
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Bottle Sort Challenge
            </h1>
            <p className="text-lg text-muted-foreground">
              Sort the colors, expand your mind!
            </p>
          </div>
          
          <div className="flex justify-center gap-4 py-4">
            <div className="animate-float" style={{ animationDelay: '0s' }}>
              <Bottle colors={['#8B5CF6', '#8B5CF6', '#8B5CF6', '#8B5CF6']} selected={false} onClick={() => {}} />
            </div>
            <div className="animate-float" style={{ animationDelay: '0.2s' }}>
              <Bottle colors={['#14B8A6', '#14B8A6', '#14B8A6', '#14B8A6']} selected={false} onClick={() => {}} />
            </div>
            <div className="animate-float" style={{ animationDelay: '0.4s' }}>
              <Bottle colors={['#F59E0B', '#F59E0B', '#F59E0B', '#F59E0B']} selected={false} onClick={() => {}} />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-muted rounded-lg p-4 text-left space-y-2">
              <h3 className="font-semibold text-foreground">How to Play:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Tap a bottle to select it, then tap another to pour</li>
                <li>• Pour only onto the same color or empty bottles</li>
                <li>• Complete levels to unlock fun knowledge questions</li>
                <li>• Use hints wisely - they're limited!</li>
              </ul>
            </div>
            
            <Button size="lg" className="w-full text-lg h-14" onClick={startGame}>
              <Play className="mr-2 h-5 w-5" />
              Start Game
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (gameState === 'complete') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--gradient-game)' }}>
        <Card className="max-w-md w-full p-8 text-center space-y-6">
          <Trophy className="h-24 w-24 mx-auto text-accent animate-level-complete" />
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">Game Over!</h2>
            <p className="text-muted-foreground">You reached Level {level}</p>
            <p className="text-3xl font-bold text-primary">Score: {score}</p>
          </div>
          <Button size="lg" className="w-full" onClick={() => setGameState('menu')}>
            Play Again
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-6" style={{ backgroundColor: 'hsl(var(--game-bg))' }}>
      <div className="max-w-6xl mx-auto space-y-6">
        <GameHeader 
          level={level}
          score={score}
          moves={moves}
          timeLeft={timeLeft}
          hints={hints}
          onHint={useHint}
          onUndo={handleUndo}
          onReset={resetLevel}
          canUndo={moveHistory.length > 0}
        />
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
          {bottles.map((bottle, index) => (
            <Bottle
              key={index}
              colors={bottle}
              selected={selectedBottle === index}
              onClick={() => handleBottleClick(index)}
            />
          ))}
        </div>
        
        {achievements.length > 0 && (
          <AchievementToast achievements={achievements} onClose={() => setAchievements([])} />
        )}
        
        {showQuiz && (
          <QuizModal
            questions={currentQuestions}
            onComplete={handleQuizComplete}
            level={level}
          />
        )}
      </div>
    </div>
  );
};

export default GameBoard;
