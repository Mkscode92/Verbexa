export const subjects = [
  "math",
  "language",
  "science",
  "history",
  "coding",
  "economics",
  "computer science", 
  "machine learning"
];

export const durationRanges = [
  {label: "0-15 min", min: 0, max: 15},
  {label: "15-30 min", min: 15, max: 30},
  {label: "30-60 min", min: 30, max: 60}, 
  {label: "60+ min", min: 60, max: 0}
]
// two new subjects added cs & ml 
export const subjectsColors = {
  science: "#E5D0FF",
  math: "#27C2F5",
  language: "#BDE7FF",
  coding: "#CEE1ED",
  history: "#FFECC8",
  economics: "#C8FFDF",
  computerscience: "#34D6F0",
  machinelearning: "#F9AC07"
};

export const voices = {
  male: { casual: "2BJW5coyhAzSr8STdHbE", formal: "c6SfcYrb2t09NHXiT80T" },
  female: { casual: "ZIlrSGI4jZqobxRKprJz", formal: "sarah" },
};

export const recentSessions = [
  {
    id: "1",
    subject: "science",
    name: "Neura the Brainy Explorer",
    topic: "Neural Network of the Brain",
    duration: 45,
    color: "#E5D0FF",
  },
  {
    id: "2",
    subject: "maths",
    name: "Countsy the Number Wizard",
    topic: "Derivatives & Integrals",
    duration: 30,
    color: "#FFDA6E",
  },
  {
    id: "3",
    subject: "language",
    name: "Verba the Vocabulary Builder",
    topic: "English Literature",
    duration: 30,
    color: "#BDE7FF",
  },
  {
    id: "4",
    subject: "coding",
    name: "Codey the Logic Hacker",
    topic: "Intro to If-Else Statements",
    duration: 45,
    color: "#FFC8E4",
  },
  {
    id: "5",
    subject: "history",
    name: "Memo, the Memory Keeper",
    topic: "World Wars: Causes & Consequences",
    duration: 15,
    color: "#FFECC8",
  },
  {
    id: "6",
    subject: "economics",
    name: "The Market Maestro",
    topic: "The Basics of Supply & Demand",
    duration: 10,
    color: "#C8FFDF",
  },
  // two new sessions added, cs & ml 
  {
    id: "7",
    subject: "computerscience",
    name: "Picheswarao the Professor",
    topic: "The Basics of Computer Science",
    duration: 10,
    color: "#34d6f0",
  },
  {
    id: "8",
    subject: "machinelearning",
    name: "Machy the Machine Maniac",
    topic: "Intro to Decision Trees",
    duration: 15,
    color: "#F9AC07",
  },

];
