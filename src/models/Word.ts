export interface Definition {
  definition: string;
  example: string;
  translation?: string;
  exampleTranslation?: string;
}

export interface Word {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  definitions: Definition[];
  synonyms?: string[];
  antonyms?: string[];
} 