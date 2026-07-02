/*
 * Quote deck for "Finish the Line" — the pop-culture quote board game.
 *
 * Each entry:
 *   category  – used for the category filter and tile colour
 *   before    – the prompt shown to the player (the setup of the quote)
 *   answer    – the canonical completion (shown on reveal)
 *   accept    – array of accepted answers, all lowercased & punctuation-light.
 *               The player's guess is normalised the same way before matching,
 *               so "full of stars" matches "Full of stars!".
 *   source    – where it's from (shown after the round)
 *   points    – how many spaces a correct answer moves you (harder = more)
 */
const QUOTE_DECK = [
  // ---- Movies ----
  {
    category: "Movies",
    before: "Oh my God, it's",
    answer: "full of stars",
    accept: ["full of stars"],
    source: "2001: A Space Odyssey (2010 line)",
    points: 3,
  },
  {
    category: "Movies",
    before: "Here's looking at you,",
    answer: "kid",
    accept: ["kid"],
    source: "Casablanca",
    points: 1,
  },
  {
    category: "Movies",
    before: "May the Force be",
    answer: "with you",
    accept: ["with you"],
    source: "Star Wars",
    points: 1,
  },
  {
    category: "Movies",
    before: "I'm going to make him an offer he",
    answer: "can't refuse",
    accept: ["can't refuse", "cannot refuse"],
    source: "The Godfather",
    points: 2,
  },
  {
    category: "Movies",
    before: "You're gonna need a bigger",
    answer: "boat",
    accept: ["boat"],
    source: "Jaws",
    points: 1,
  },
  {
    category: "Movies",
    before: "Life is like a box of",
    answer: "chocolates",
    accept: ["chocolates", "chocolate"],
    source: "Forrest Gump",
    points: 1,
  },
  {
    category: "Movies",
    before: "Frankly, my dear, I don't give a",
    answer: "damn",
    accept: ["damn"],
    source: "Gone with the Wind",
    points: 2,
  },
  {
    category: "Movies",
    before: "Say hello to my little",
    answer: "friend",
    accept: ["friend"],
    source: "Scarface",
    points: 1,
  },
  {
    category: "Movies",
    before: "Why so",
    answer: "serious?",
    accept: ["serious"],
    source: "The Dark Knight",
    points: 2,
  },
  {
    category: "Movies",
    before: "You had me at",
    answer: "hello",
    accept: ["hello"],
    source: "Jerry Maguire",
    points: 2,
  },
  {
    category: "Movies",
    before: "To infinity and",
    answer: "beyond",
    accept: ["beyond"],
    source: "Toy Story",
    points: 1,
  },
  {
    category: "Movies",
    before: "I'll be",
    answer: "back",
    accept: ["back"],
    source: "The Terminator",
    points: 1,
  },
  {
    category: "Movies",
    before: "There's no place like",
    answer: "home",
    accept: ["home"],
    source: "The Wizard of Oz",
    points: 1,
  },
  {
    category: "Movies",
    before: "Just keep",
    answer: "swimming",
    accept: ["swimming"],
    source: "Finding Nemo",
    points: 1,
  },

  // ---- TV ----
  {
    category: "TV",
    before: "How you",
    answer: "doin'?",
    accept: ["doin", "doing", "doin'"],
    source: "Friends (Joey)",
    points: 2,
  },
  {
    category: "TV",
    before: "Winter is",
    answer: "coming",
    accept: ["coming"],
    source: "Game of Thrones",
    points: 1,
  },
  {
    category: "TV",
    before: "I am the one who",
    answer: "knocks",
    accept: ["knocks"],
    source: "Breaking Bad",
    points: 2,
  },
  {
    category: "TV",
    before: "That's what",
    answer: "she said",
    accept: ["she said"],
    source: "The Office (Michael Scott)",
    points: 2,
  },
  {
    category: "TV",
    before: "Legen — wait for it —",
    answer: "dary",
    accept: ["dary", "legendary"],
    source: "How I Met Your Mother (Barney)",
    points: 2,
  },
  {
    category: "TV",
    before: "Live long and",
    answer: "prosper",
    accept: ["prosper"],
    source: "Star Trek",
    points: 1,
  },
  {
    category: "TV",
    before: "Yada yada",
    answer: "yada",
    accept: ["yada"],
    source: "Seinfeld",
    points: 2,
  },

  // ---- Music ----
  {
    category: "Music",
    before: "Is this the real life? Is this just",
    answer: "fantasy?",
    accept: ["fantasy"],
    source: "Queen — Bohemian Rhapsody",
    points: 2,
  },
  {
    category: "Music",
    before: "'Cause baby, you're a",
    answer: "firework",
    accept: ["firework", "fire work"],
    source: "Katy Perry — Firework",
    points: 2,
  },
  {
    category: "Music",
    before: "We don't need no",
    answer: "education",
    accept: ["education"],
    source: "Pink Floyd — Another Brick in the Wall",
    points: 2,
  },
  {
    category: "Music",
    before: "I want it",
    answer: "that way",
    accept: ["that way"],
    source: "Backstreet Boys — I Want It That Way",
    points: 2,
  },
  {
    category: "Music",
    before: "Hello from the",
    answer: "other side",
    accept: ["other side", "otherside"],
    source: "Adele — Hello",
    points: 2,
  },
  {
    category: "Music",
    before: "Sweet dreams are made of",
    answer: "this",
    accept: ["this", "these"],
    source: "Eurythmics — Sweet Dreams",
    points: 2,
  },
  {
    category: "Music",
    before: "Never gonna give you",
    answer: "up",
    accept: ["up"],
    source: "Rick Astley — Never Gonna Give You Up",
    points: 1,
  },

  // ---- Internet / Memes ----
  {
    category: "Internet",
    before: "All your base are belong to",
    answer: "us",
    accept: ["us"],
    source: "Zero Wing (meme)",
    points: 3,
  },
  {
    category: "Internet",
    before: "One does not simply walk into",
    answer: "Mordor",
    accept: ["mordor"],
    source: "LOTR / meme",
    points: 2,
  },
  {
    category: "Internet",
    before: "It's over 9",
    answer: "000!",
    accept: ["000", "9000", "thousand"],
    source: "Dragon Ball Z (meme)",
    points: 2,
  },
  {
    category: "Internet",
    before: "But that's none of my",
    answer: "business",
    accept: ["business"],
    source: "Kermit / meme",
    points: 2,
  },
  {
    category: "Internet",
    before: "I can haz",
    answer: "cheezburger?",
    accept: ["cheezburger", "cheeseburger", "cheezburger?"],
    source: "LOLcats",
    points: 2,
  },

  // ---- Games ----
  {
    category: "Games",
    before: "The cake is a",
    answer: "lie",
    accept: ["lie"],
    source: "Portal",
    points: 2,
  },
  {
    category: "Games",
    before: "It's dangerous to go alone! Take",
    answer: "this",
    accept: ["this", "this."],
    source: "The Legend of Zelda",
    points: 2,
  },
  {
    category: "Games",
    before: "War. War never",
    answer: "changes",
    accept: ["changes"],
    source: "Fallout",
    points: 2,
  },
  {
    category: "Games",
    before: "A man chooses, a slave",
    answer: "obeys",
    accept: ["obeys"],
    source: "BioShock",
    points: 3,
  },
  {
    category: "Games",
    before: "Do a",
    answer: "barrel roll!",
    accept: ["barrel roll", "barrel roll!"],
    source: "Star Fox 64",
    points: 2,
  },
];

// Expose for the browser (no modules, so it just works from file://).
if (typeof window !== "undefined") {
  window.QUOTE_DECK = QUOTE_DECK;
}
