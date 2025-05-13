// Word-Definition relationship data type definition
export interface WordDefinitionData {
  wordId: string;
  definitionId: string;
}

export const wordDefinitionData: WordDefinitionData[] = [
  { wordId: "hello-1", definitionId: "hello-def-1" },
  { wordId: "hello-1", definitionId: "hello-def-2" },
  { wordId: "goodbye-1", definitionId: "goodbye-def-1" },
  { wordId: "thank-you-1", definitionId: "thank-you-def-1" },
  { wordId: "please-1", definitionId: "please-def-1" }
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
  { wordId: "please-1", synonym: "if you would be so kind" }
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
  { wordId: "goodbye-1", antonym: "hi" }
]; 