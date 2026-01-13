import React, { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Trophy, Star } from 'lucide-react';

const AchievementToast = ({ achievements, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 animate-bounce-in">
      {achievements.map((achievement, index) => (
        <Card 
          key={index} 
          className="p-4 shadow-lg border-2 border-accent"
          style={{ 
            background: 'var(--gradient-achievement)',
            animationDelay: `${index * 0.2}s`
          }}
        >
          <div className="flex items-start gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-white flex items-center gap-2">
                {achievement.title}
                <Star className="h-4 w-4 animate-pulse" />
              </h4>
              <p className="text-sm text-white/90">{achievement.desc}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AchievementToast;
