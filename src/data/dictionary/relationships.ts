// Word-Definition relationship data type definition
export interface WordDefinitionData {
  wordId: string;
  definitionId: string;
}

export const wordDefinitionData: WordDefinitionData[] = [
  // Basic words
  { wordId: "apple-1", definitionId: "apple-def-1" },
  { wordId: "book-1", definitionId: "book-def-1" },
  { wordId: "cat-1", definitionId: "cat-def-1" },
  { wordId: "dog-1", definitionId: "dog-def-1" },
  { wordId: "elephant-1", definitionId: "elephant-def-1" },
  { wordId: "fish-1", definitionId: "fish-def-1" },
  { wordId: "grape-1", definitionId: "grape-def-1" },
  { wordId: "house-1", definitionId: "house-def-1" },
  { wordId: "ice-1", definitionId: "ice-def-1" },
  { wordId: "juice-1", definitionId: "juice-def-1" },
  { wordId: "kite-1", definitionId: "kite-def-1" },
  { wordId: "lion-1", definitionId: "lion-def-1" },
  { wordId: "monkey-1", definitionId: "monkey-def-1" },
  { wordId: "notebook-1", definitionId: "notebook-def-1" },
  { wordId: "orange-1", definitionId: "orange-def-1" },
  { wordId: "pencil-1", definitionId: "pencil-def-1" },
  { wordId: "queen-1", definitionId: "queen-def-1" },
  { wordId: "rabbit-1", definitionId: "rabbit-def-1" },
  { wordId: "sun-1", definitionId: "sun-def-1" },
  { wordId: "tree-1", definitionId: "tree-def-1" },
  { wordId: "umbrella-1", definitionId: "umbrella-def-1" },
  { wordId: "violin-1", definitionId: "violin-def-1" },
  { wordId: "window-1", definitionId: "window-def-1" },
  { wordId: "xylophone-1", definitionId: "xylophone-def-1" },
  { wordId: "yogurt-1", definitionId: "yogurt-def-1" },
  { wordId: "zebra-1", definitionId: "zebra-def-1" },

  // Communication words
  { wordId: "hello-1", definitionId: "hello-def-1" },
  { wordId: "hello-1", definitionId: "hello-def-2" },
  { wordId: "goodbye-1", definitionId: "goodbye-def-1" },
  { wordId: "thank-you-1", definitionId: "thank-you-def-1" },
  { wordId: "please-1", definitionId: "please-def-1" },

  // Business & Office words
  { wordId: "meeting-1", definitionId: "meeting-def-1" },
  { wordId: "deadline-1", definitionId: "deadline-def-1" },
  { wordId: "presentation-1", definitionId: "presentation-def-1" },

  // Technology words
  { wordId: "software-1", definitionId: "software-def-1" },
  { wordId: "database-1", definitionId: "database-def-1" },
  { wordId: "algorithm-1", definitionId: "algorithm-def-1" },

  // Travel words
  { wordId: "itinerary-1", definitionId: "itinerary-def-1" },
  { wordId: "reservation-1", definitionId: "reservation-def-1" },
  { wordId: "destination-1", definitionId: "destination-def-1" },

  // Health & Medical words
  { wordId: "symptom-1", definitionId: "symptom-def-1" },
  { wordId: "diagnosis-1", definitionId: "diagnosis-def-1" },
  { wordId: "treatment-1", definitionId: "treatment-def-1" },

  // Education words
  { wordId: "curriculum-1", definitionId: "curriculum-def-1" },
  { wordId: "assignment-1", definitionId: "assignment-def-1" },
  { wordId: "graduation-1", definitionId: "graduation-def-1" },

  // Environment words
  { wordId: "sustainable-1", definitionId: "sustainable-def-1" },
  { wordId: "renewable-1", definitionId: "renewable-def-1" },
  { wordId: "conservation-1", definitionId: "conservation-def-1" }
];

// Word-Synonym relationship data type definition
export interface WordSynonymData {
  wordId: string;
  synonym: string;
}

export const wordSynonymData: WordSynonymData[] = [
  { wordId: "hello-1", synonym: "hi" },
  { wordId: "hello-1", synonym: "greetings" },
  { wordId: "hello-1", synonym: "good day" },
  { wordId: "hello-1", synonym: "howdy" },
  { wordId: "goodbye-1", synonym: "bye" },
  { wordId: "goodbye-1", synonym: "farewell" },
  { wordId: "goodbye-1", synonym: "see you" },
  { wordId: "goodbye-1", synonym: "so long" },
  { wordId: "thank-you-1", synonym: "thanks" },
  { wordId: "thank-you-1", synonym: "many thanks" },
  { wordId: "thank-you-1", synonym: "cheers" },
  { wordId: "please-1", synonym: "kindly" },
  { wordId: "please-1", synonym: "if you would be so kind" },
  { wordId: "meeting-1", synonym: "conference" },
  { wordId: "meeting-1", synonym: "gathering" },
  { wordId: "meeting-1", synonym: "assembly" },
  { wordId: "deadline-1", synonym: "due date" },
  { wordId: "deadline-1", synonym: "cutoff" },
  { wordId: "presentation-1", synonym: "lecture" },
  { wordId: "presentation-1", synonym: "talk" },
  { wordId: "software-1", synonym: "program" },
  { wordId: "software-1", synonym: "application" },
  { wordId: "database-1", synonym: "repository" },
  { wordId: "database-1", synonym: "data store" },
  { wordId: "algorithm-1", synonym: "procedure" },
  { wordId: "algorithm-1", synonym: "method" },
  { wordId: "itinerary-1", synonym: "schedule" },
  { wordId: "itinerary-1", synonym: "agenda" },
  { wordId: "reservation-1", synonym: "booking" },
  { wordId: "reservation-1", synonym: "appointment" },
  { wordId: "destination-1", synonym: "endpoint" },
  { wordId: "destination-1", synonym: "goal" },
  { wordId: "symptom-1", synonym: "indication" },
  { wordId: "symptom-1", synonym: "sign" },
  { wordId: "diagnosis-1", synonym: "assessment" },
  { wordId: "diagnosis-1", synonym: "evaluation" },
  { wordId: "treatment-1", synonym: "therapy" },
  { wordId: "treatment-1", synonym: "care" },
  { wordId: "curriculum-1", synonym: "syllabus" },
  { wordId: "curriculum-1", synonym: "course of study" },
  { wordId: "assignment-1", synonym: "task" },
  { wordId: "assignment-1", synonym: "project" },
  { wordId: "graduation-1", synonym: "commencement" },
  { wordId: "graduation-1", synonym: "convocation" },
  { wordId: "sustainable-1", synonym: "maintainable" },
  { wordId: "sustainable-1", synonym: "viable" },
  { wordId: "renewable-1", synonym: "replenishable" },
  { wordId: "renewable-1", synonym: "sustainable" },
  { wordId: "conservation-1", synonym: "preservation" },
  { wordId: "conservation-1", synonym: "protection" }
];

// Word-Antonym relationship data type definition
export interface WordAntonymData {
  wordId: string;
  antonym: string;
}

export const wordAntonymData: WordAntonymData[] = [
  { wordId: "hello-1", antonym: "goodbye" },
  { wordId: "hello-1", antonym: "bye" },
  { wordId: "goodbye-1", antonym: "hello" },
  { wordId: "goodbye-1", antonym: "hi" },
  { wordId: "sustainable-1", antonym: "unsustainable" },
  { wordId: "renewable-1", antonym: "non-renewable" },
  { wordId: "conservation-1", antonym: "destruction" },
  { wordId: "graduation-1", antonym: "enrollment" },
  { wordId: "meeting-1", antonym: "dismissal" },
  { wordId: "deadline-1", antonym: "extension" },
  { wordId: "presentation-1", antonym: "listening" },
  { wordId: "software-1", antonym: "hardware" },
  { wordId: "database-1", antonym: "data loss" },
  { wordId: "algorithm-1", antonym: "random" },
  { wordId: "itinerary-1", antonym: "disorganization" },
  { wordId: "reservation-1", antonym: "cancellation" },
  { wordId: "destination-1", antonym: "origin" },
  { wordId: "symptom-1", antonym: "cause" },
  { wordId: "diagnosis-1", antonym: "misdiagnosis" },
  { wordId: "treatment-1", antonym: "neglect" },
  { wordId: "curriculum-1", antonym: "extracurricular" },
  { wordId: "assignment-1", antonym: "leisure" }
]; 