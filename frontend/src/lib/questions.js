// Fun facts and interesting knowledge questions database
const QUESTIONS = [
  // Science & Nature
  {
    question: "A group of flamingos is called a 'flamboyance'. What gives flamingos their pink color?",
    options: ["Their feathers are naturally pink", "The algae and shrimp they eat", "Sunlight reflection", "Pink water they swim in"],
    correct: "The algae and shrimp they eat",
    funFact: "Flamingos are actually born grey! Their diet of algae and shrimp containing carotenoids turns them pink over time.",
    type: "multiple"
  },
  {
    question: "Honey never spoils. Archaeologists have found 3000-year-old honey in Egyptian tombs that was still edible!",
    options: ["True", "False"],
    correct: "True",
    funFact: "Honey's low moisture content and acidic pH make it impossible for bacteria to grow, making it last forever!",
    type: "boolean"
  },
  {
    question: "How many hearts does an octopus have?",
    options: ["1", "2", "3", "4"],
    correct: "3",
    funFact: "Octopuses have three hearts! Two pump blood to the gills, while the third pumps it to the rest of the body.",
    type: "multiple"
  },
  {
    question: "Bananas are berries, but strawberries aren't. True or false?",
    options: ["True", "False"],
    correct: "True",
    funFact: "In botanical terms, bananas qualify as berries, but strawberries don't because their seeds are on the outside!",
    type: "boolean"
  },
  {
    question: "What is the only planet in our solar system that rotates clockwise?",
    options: ["Mars", "Venus", "Uranus", "Jupiter"],
    correct: "Venus",
    funFact: "Venus rotates clockwise (retrograde rotation), possibly due to a massive collision billions of years ago!",
    type: "multiple"
  },
  
  // History & Culture
  {
    question: "The Great Wall of China is visible from space with the naked eye.",
    options: ["True", "False"],
    correct: "False",
    funFact: "This is a myth! Astronauts say the Great Wall is very difficult to see from space without aid.",
    type: "boolean"
  },
  {
    question: "Which ancient wonder is the only one still standing today?",
    options: ["Colossus of Rhodes", "Great Pyramid of Giza", "Hanging Gardens of Babylon", "Lighthouse of Alexandria"],
    correct: "Great Pyramid of Giza",
    funFact: "The Great Pyramid of Giza has stood for over 4,500 years and was the tallest man-made structure for 3,800 years!",
    type: "multiple"
  },
  {
    question: "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.",
    options: ["True", "False"],
    correct: "True",
    funFact: "The Great Pyramid was built around 2560 BCE, Cleopatra lived around 30 BCE, and the Moon landing was in 1969 CE!",
    type: "boolean"
  },
  {
    question: "What was ketchup sold as in the 1830s?",
    options: ["A cooking sauce", "Medicine", "Hair dye", "Paint"],
    correct: "Medicine",
    funFact: "In the 1830s, ketchup was sold as a patent medicine claimed to cure indigestion, jaundice, and diarrhea!",
    type: "multiple"
  },
  
  // Animals & Wildlife
  {
    question: "What is the only mammal capable of true flight?",
    options: ["Flying squirrel", "Sugar glider", "Bat", "Flying lemur"],
    correct: "Bat",
    funFact: "Bats are the only mammals that can truly fly. Flying squirrels and sugar gliders can only glide!",
    type: "multiple"
  },
  {
    question: "A shrimp's heart is located in its head.",
    options: ["True", "False"],
    correct: "True",
    funFact: "A shrimp's heart is indeed in its head! Most of its vital organs are located in its head area.",
    type: "boolean"
  },
  {
    question: "What animal can sleep for three years straight?",
    options: ["Bear", "Snail", "Sloth", "Koala"],
    correct: "Snail",
    funFact: "Snails can sleep for up to three years straight during extreme drought conditions!",
    type: "multiple"
  },
  {
    question: "Butterflies can taste with their feet.",
    options: ["True", "False"],
    correct: "True",
    funFact: "Butterflies have taste sensors on their feet to help them find their host plants for laying eggs!",
    type: "boolean"
  },
  
  // Geography & Earth
  {
    question: "What is the driest place on Earth?",
    options: ["Sahara Desert", "Death Valley", "Antarctic Dry Valleys", "Atacama Desert"],
    correct: "Antarctic Dry Valleys",
    funFact: "Antarctica's Dry Valleys haven't seen rain for nearly 2 million years, making them drier than any hot desert!",
    type: "multiple"
  },
  {
    question: "Mount Everest is the tallest mountain from base to peak on Earth.",
    options: ["True", "False"],
    correct: "False",
    funFact: "Mauna Kea in Hawaii is actually taller from base to peak (33,500 ft), but most of it is underwater!",
    type: "boolean"
  },
  {
    question: "How many time zones does Russia have?",
    options: ["6", "9", "11", "13"],
    correct: "11",
    funFact: "Russia spans 11 time zones, the most of any country in the world!",
    type: "multiple"
  },
  
  // Human Body & Health
  {
    question: "Your brain uses 20% of your body's total oxygen and energy.",
    options: ["True", "False"],
    correct: "True",
    funFact: "Despite being only 2% of body weight, the brain consumes about 20% of the body's oxygen and calories!",
    type: "boolean"
  },
  {
    question: "How many bones does a baby have compared to an adult?",
    options: ["Fewer bones", "Same number", "About 100 more bones", "About 50 more bones"],
    correct: "About 100 more bones",
    funFact: "Babies are born with about 300 bones, but many fuse together as they grow, leaving adults with 206 bones!",
    type: "multiple"
  },
  {
    question: "The human nose can detect over 1 trillion different scents.",
    options: ["True", "False"],
    correct: "True",
    funFact: "Recent research suggests the human nose can distinguish at least 1 trillion different odors!",
    type: "boolean"
  },
  
  // Technology & Innovation
  {
    question: "What was the first item sold on eBay?",
    options: ["A book", "A broken laser pointer", "A baseball card", "A computer"],
    correct: "A broken laser pointer",
    funFact: "The first item ever sold on eBay was a broken laser pointer for $14.83 in 1995!",
    type: "multiple"
  },
  {
    question: "The first computer programmer was a woman.",
    options: ["True", "False"],
    correct: "True",
    funFact: "Ada Lovelace, in the 1840s, wrote the first algorithm for a computing machine, making her the first programmer!",
    type: "boolean"
  },
  
  // Food & Cuisine
  {
    question: "What fruit has its seeds on the outside?",
    options: ["Raspberry", "Blackberry", "Strawberry", "All of the above"],
    correct: "Strawberry",
    funFact: "A strawberry is the only fruit that wears its seeds on the outside - an average berry has about 200 seeds!",
    type: "multiple"
  },
  {
    question: "Chocolate was once used as currency by ancient civilizations.",
    options: ["True", "False"],
    correct: "True",
    funFact: "The Aztecs valued cacao beans so highly that they used them as currency to pay taxes and buy goods!",
    type: "boolean"
  },
  {
    question: "Which vegetable is actually a flower?",
    options: ["Broccoli", "Carrot", "Potato", "Cucumber"],
    correct: "Broccoli",
    funFact: "Broccoli is actually the flower of the plant. If you don't harvest it, it will bloom into yellow flowers!",
    type: "multiple"
  },
  
  // Space & Universe
  {
    question: "There are more stars in the universe than grains of sand on all Earth's beaches.",
    options: ["True", "False"],
    correct: "True",
    funFact: "Scientists estimate there are about 10 times more stars in the universe than grains of sand on all beaches!",
    type: "boolean"
  },
  {
    question: "How long does it take for light from the Sun to reach Earth?",
    options: ["1 minute", "8 minutes", "1 hour", "Instantly"],
    correct: "8 minutes",
    funFact: "Sunlight takes about 8 minutes and 20 seconds to travel the 93 million miles from the Sun to Earth!",
    type: "multiple"
  },
  {
    question: "A day on Venus is longer than a year on Venus.",
    options: ["True", "False"],
    correct: "True",
    funFact: "Venus rotates so slowly that one day (243 Earth days) is longer than its year (225 Earth days)!",
    type: "boolean"
  },
  
  // Art & Literature
  {
    question: "Who wrote 'Romeo and Juliet' in just two weeks?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    correct: "William Shakespeare",
    funFact: "Shakespeare wrote his famous tragedy 'Romeo and Juliet' in approximately two weeks in 1594!",
    type: "multiple"
  },
  {
    question: "The Mona Lisa has no eyebrows.",
    options: ["True", "False"],
    correct: "True",
    funFact: "It was fashionable in Renaissance Florence to shave eyebrows, which is why Mona Lisa appears to have none!",
    type: "boolean"
  },
  
  // Sports & Games
  {
    question: "What sport was originally called 'mintonette'?",
    options: ["Tennis", "Volleyball", "Badminton", "Squash"],
    correct: "Volleyball",
    funFact: "Volleyball was invented in 1895 and originally called 'mintonette' before being renamed just one year later!",
    type: "multiple"
  },
  {
    question: "A golf ball has exactly 336 dimples.",
    options: ["True", "False"],
    correct: "False",
    funFact: "Most golf balls have between 300-500 dimples, but there's no standard number. The dimples help the ball fly farther!",
    type: "boolean"
  },
];

export const getRandomQuestions = (count) => {
  const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getQuestionsByType = (type, count) => {
  const filtered = QUESTIONS.filter(q => q.type === type);
  const shuffled = [...filtered].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getMixedQuestions = (count) => {
  const multipleChoice = getQuestionsByType('multiple', Math.ceil(count / 2));
  const boolean = getQuestionsByType('boolean', Math.floor(count / 2));
  return [...multipleChoice, ...boolean].sort(() => 0.5 - Math.random());
};
