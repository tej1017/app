import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, Brain } from 'lucide-react';

const QuizModal = ({ questions, onComplete, level }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === question.correct) {
      setCorrectAnswers(correctAnswers + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setTimeout(() => {
          onComplete(correctAnswers + (answer === question.correct ? 1 : 0));
        }, 1000);
      }
    }, 2000);
  };

  return (
    <Dialog open={true} modal={true}>
      <DialogContent className="sm:max-w-2xl" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Brain className="h-6 w-6 text-primary" />
            Knowledge Break!
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="flex justify-between items-center">
            <Badge variant="outline" className="text-base">
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
            <Badge variant="secondary" className="text-base">
              Score: {correctAnswers} ✓
            </Badge>
          </div>
          
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
            <p className="text-lg font-medium leading-relaxed">{question.question}</p>
          </Card>
          
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === question.correct;
              const showFeedback = showResult && isSelected;
              
              return (
                <Button
                  key={index}
                  variant={showFeedback ? (isCorrect ? 'default' : 'destructive') : 'outline'}
                  className="w-full justify-start text-left h-auto py-4 px-6 relative"
                  onClick={() => !showResult && handleAnswer(option)}
                  disabled={showResult}
                  style={{
                    backgroundColor: showFeedback 
                      ? (isCorrect ? 'hsl(var(--success))' : 'hsl(var(--destructive))')
                      : undefined
                  }}
                >
                  <span className="flex-1">{option}</span>
                  {showFeedback && (
                    isCorrect 
                      ? <CheckCircle2 className="h-5 w-5 ml-2" />
                      : <XCircle className="h-5 w-5 ml-2" />
                  )}
                </Button>
              );
            })}
          </div>
          
          {showResult && (
            <Card className="p-4 bg-muted animate-bounce-in">
              <p className="text-sm text-muted-foreground">
                <strong>Fun Fact:</strong> {question.funFact}
              </p>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuizModal;
