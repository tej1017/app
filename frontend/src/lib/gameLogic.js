// Game colors - vibrant and easy to distinguish
const COLORS = [
  '#8B5CF6', // Purple
  '#14B8A6', // Teal
  '#F59E0B', // Orange
  '#EC4899', // Pink
  '#10B981', // Green
  '#3B82F6', // Blue
  '#EF4444', // Red
  '#F97316', // Dark Orange
  '#8B5CF6', // Violet
  '#06B6D4', // Cyan
];

export const generateLevel = (level) => {
  // Calculate difficulty
  const numColors = Math.min(3 + Math.floor(level / 2), 8);
  const bottlesPerColor = 4;
  const emptyBottles = Math.max(2, Math.min(3, Math.floor(level / 3)));
  
  const totalBottles = numColors + emptyBottles;
  
  // Create bottles with colors
  const bottles = [];
  const colorPool = [];
  
  // Fill color pool
  for (let i = 0; i < numColors; i++) {
    for (let j = 0; j < bottlesPerColor; j++) {
      colorPool.push(COLORS[i]);
    }
  }
  
  // Shuffle colors
  for (let i = colorPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colorPool[i], colorPool[j]] = [colorPool[j], colorPool[i]];
  }
  
  // Fill bottles
  for (let i = 0; i < numColors; i++) {
    bottles.push(colorPool.splice(0, bottlesPerColor));
  }
  
  // Add empty bottles
  for (let i = 0; i < emptyBottles; i++) {
    bottles.push([]);
  }
  
  return bottles;
};

export const canPour = (fromBottle, toBottle) => {
  // Can't pour from empty bottle
  if (fromBottle.length === 0) return false;
  
  // Can pour into empty bottle
  if (toBottle.length === 0) return true;
  
  // Can't pour into full bottle
  if (toBottle.length >= 4) return false;
  
  // Can only pour if top colors match
  const fromColor = fromBottle[fromBottle.length - 1];
  const toColor = toBottle[toBottle.length - 1];
  
  return fromColor === toColor;
};

export const isLevelComplete = (bottles) => {
  for (const bottle of bottles) {
    // Empty bottles are ok
    if (bottle.length === 0) continue;
    
    // Bottles must be full
    if (bottle.length !== 4) return false;
    
    // All colors in bottle must match
    const firstColor = bottle[0];
    if (!bottle.every(color => color === firstColor)) {
      return false;
    }
  }
  
  return true;
};

export const findHint = (bottles) => {
  for (let i = 0; i < bottles.length; i++) {
    if (bottles[i].length > 0) {
      for (let j = 0; j < bottles.length; j++) {
        if (i !== j && canPour(bottles[i], bottles[j])) {
          return { from: i, to: j };
        }
      }
    }
  }
  return null;
};
