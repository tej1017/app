import React from 'react';
import { cn } from '@/lib/utils';

const Bottle = ({ colors = [], selected = false, onClick }) => {
  const segments = 4;
  const bottleHeight = 128;
  const segmentHeight = bottleHeight / segments;

  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group" onClick={onClick}>
      <div
        className={cn(
          "relative w-16 h-32 rounded-t-xl rounded-b-2xl border-4 transition-all duration-300",
          "bg-white/30 backdrop-blur-sm",
          selected 
            ? "border-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)] scale-110" 
            : "border-[hsl(var(--bottle-border))] hover:scale-105",
          "group-hover:shadow-md"
        )}
        style={{
          boxShadow: selected ? 'var(--shadow-glow)' : 'var(--shadow-sm)',
        }}
      >
        {/* Bottle segments from bottom to top */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden rounded-b-xl">
          {colors.map((color, index) => (
            <div
              key={index}
              className="transition-all duration-300 animate-bounce-in"
              style={{
                backgroundColor: color,
                height: `${segmentHeight}px`,
                animationDelay: `${index * 0.1}s`,
              }}
            />
          ))}
        </div>
        
        {/* Bottle cap */}
        <div 
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-3 rounded-t-md border-2 transition-colors",
            selected ? "bg-primary border-primary" : "bg-muted border-[hsl(var(--bottle-border))]"
          )}
        />
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-xl rounded-b-2xl pointer-events-none" />
      </div>
    </div>
  );
};

export default Bottle;
