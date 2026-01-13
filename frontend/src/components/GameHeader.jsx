import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, RotateCcw, RefreshCw, Trophy, Timer, Zap } from 'lucide-react';

const GameHeader = ({ 
  level, 
  score, 
  moves, 
  timeLeft, 
  hints, 
  onHint, 
  onUndo, 
  onReset,
  canUndo 
}) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="p-4 shadow-md">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Stats */}
        <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center sm:justify-start">
          <Badge variant="outline" className="text-base px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0">
            <Trophy className="h-4 w-4 mr-2" />
            Level {level}
          </Badge>
          
          <Badge variant="outline" className="text-base px-4 py-2 border-accent text-accent-foreground">
            <Zap className="h-4 w-4 mr-2" />
            {score}
          </Badge>
          
          <Badge variant="outline" className="text-base px-4 py-2">
            Moves: {moves}
          </Badge>
          
          {timeLeft !== null && (
            <Badge 
              variant={timeLeft < 30 ? "destructive" : "outline"} 
              className="text-base px-4 py-2"
            >
              <Timer className="h-4 w-4 mr-2" />
              {formatTime(timeLeft)}
            </Badge>
          )}
        </div>
        
        {/* Actions */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onHint}
            disabled={hints === 0}
            className="relative"
          >
            <Lightbulb className="h-4 w-4 mr-2" />
            Hint
            <Badge 
              variant="secondary" 
              className="ml-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
            >
              {hints}
            </Badge>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={onUndo}
            disabled={!canUndo}
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Undo
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={onReset}
          >
            <RefreshCw className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Reset</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default GameHeader;
