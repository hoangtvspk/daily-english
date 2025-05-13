// This is just a type definition, no logic here
export interface Word {
  id: string;
  date: string;
  word: string;
  pronunciation: string;
  meaning: string;
  example: string;
  exampleTranslation: string;
  category: string;
}

export interface WordModel {
  words: Word[];
}
