# Bottle Sort Challenge - Game Features

## 🎮 Core Game Mechanics

### Bottle Sorting Gameplay
- **Objective:** Sort colored liquids into bottles where each bottle contains only one color
- **Controls:** Tap/click a bottle to select it, then tap another to pour
- **Rules:**
  - Can only pour onto matching colors or into empty bottles
  - Can't pour into full bottles (4 segments max)
  - Bottles must be completely sorted (4 identical colors) to win

### Progressive Difficulty System
1. **More Colors:** Starts with 3 colors at level 1, increases to 8 colors by level 15
2. **More Bottles:** Complexity increases with more bottles per level
3. **Time Limits:** Introduced from level 5+ with decreasing time as difficulty increases
4. **Complex Arrangements:** Liquids are shuffled more randomly at higher levels

## 🧠 Educational Integration

### Knowledge Questions After Each Level
- **Question Format:** Mix of multiple choice (4 options) and true/false
- **Content:** 30+ fun facts covering:
  - Science & Nature
  - History & Culture  
  - Animals & Wildlife
  - Geography & Earth
  - Human Body & Health
  - Technology & Innovation
  - Food & Cuisine
  - Space & Universe
  - Art & Literature
  - Sports & Games

### Learning Features
- 2 random questions per level completion
- Immediate feedback on answers
- Fun fact displayed after each question
- Bonus points awarded for correct answers (100 points each)

## 🎯 Gamification Elements

### Scoring System
- Base level score: 1000 points
- Deductions: -10 points per move
- Time bonus: +5 points per second remaining
- Quiz bonus: +100 points per correct answer
- Minimum level score: 100 points

### Achievement System
- **Efficiency Master:** Complete level in ≤10 moves
- **Milestone Reached:** Every 5th level completed
- Toast notifications with trophy icons
- Achievement descriptions

### Game Assists
- **Hint System:** 
  - 3 hints available per game
  - Highlights a valid move suggestion
  - Visual indication for 2 seconds
  
- **Undo Function:**
  - Undo last move
  - Full state restoration
  - Unlimited undos
  
- **Reset Level:**
  - Restart current level
  - Preserves overall score
  - Resets move counter

## 🎨 Visual Design

### Color Palette
- **Primary:** Vibrant Purple (#8B5CF6) for main actions
- **Secondary:** Bright Teal (#14B8A6) for accents
- **Accent:** Energetic Orange (#F59E0B) for highlights
- **Success:** Bright Green for achievements
- **Background:** Purple-to-Teal gradient

### Bottle Design
- Glass-like appearance with shine effects
- Rounded corners and borders
- Colored caps on top
- Smooth pour animations
- Selection glow effect (purple with shadow)
- Hover scale effect (1.05x)
- Selected scale (1.1x)

### Animations
- **Menu:** Floating bottles with staggered delays
- **Selection:** Scale and glow transitions
- **Pouring:** Smooth color transfer
- **Level Complete:** Trophy rotation and scale
- **Achievements:** Bounce-in effect
- **Shake:** Invalid move feedback

## 📱 Responsive Design

### Breakpoints
- **Mobile:** 375px - 3-4 bottles per row
- **Tablet:** 768px - 4-5 bottles per row
- **Desktop:** 1920px - 6 bottles per row

### Adaptive UI
- Header stats stack on mobile
- Button text hidden on small screens
- Touch-friendly tap targets (64x128px bottles)
- Readable text at all sizes

## 🎪 Game States

### Menu Screen
- Vibrant gradient background
- Animated preview bottles
- Game title with gradient text
- Instructions panel
- Large "Start Game" button

### Playing State
- Game header with stats
- Bottle grid
- Active timer (levels 5+)
- Interactive controls

### Quiz Modal
- Full-screen modal overlay
- Question counter
- Answer options as buttons
- Visual feedback (green/red)
- Fun fact display
- Auto-progression to next question

### Game Complete
- Trophy celebration
- Final score display
- Level reached
- "Play Again" option

## 💾 Technical Features

### State Management
- React hooks for game state
- Move history tracking
- Score calculation
- Achievement detection

### Game Logic (`/lib/gameLogic.js`)
- Level generation algorithm
- Pour validation
- Win condition checking
- Color pool shuffling

### Question Database (`/lib/questions.js`)
- 30+ curated questions
- Random selection
- Mixed question types
- Educational content

### Local Storage (Frontend Only)
- No backend integration
- All data stored in browser memory
- Progress persists during session
- Resets on page refresh

## 🎮 User Experience

### Accessibility
- High contrast colors
- Large touch targets
- Clear visual feedback
- Readable typography
- Keyboard navigable

### Performance
- Smooth 60fps animations
- Instant response to interactions
- Optimized re-renders
- Fast level generation

### Polish
- Sound-free gameplay (visual feedback only)
- No ads or interruptions
- Quick restart capabilities
- Clear game rules

## 🚀 Future Enhancement Ideas

1. **Sound Effects:** Pour sounds, success chimes, background music
2. **Difficulty Modes:** Easy, Medium, Hard presets
3. **Daily Challenges:** Unique puzzles each day
4. **Leaderboard:** High score tracking
5. **More Question Categories:** Custom topics, age-specific content
6. **Power-ups:** Extra hints, time freeze, color preview
7. **Themes:** Different bottle styles, backgrounds
8. **Multiplayer:** Race mode, cooperative solving
9. **Tutorial:** Interactive first-time user guide
10. **Statistics:** Games played, average moves, accuracy

## 📊 Target Audience

✅ **Children (8-12 years):**
- Colorful visuals
- Simple mechanics
- Educational content
- Achievement rewards

✅ **Teenagers (13-17 years):**
- Challenging puzzles
- Quick gameplay
- Interesting facts
- Score competition

✅ **Adults (18-60 years):**
- Brain training
- Relaxing gameplay
- Knowledge testing
- Stress relief

✅ **Seniors (60+ years):**
- Large touch targets
- Clear visuals
- Memory exercise
- Gentle difficulty curve

All ages benefit from:
- Universal appeal of color sorting
- Educational knowledge questions
- Progressive difficulty
- No violence or inappropriate content
