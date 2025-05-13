export interface Phrase {
  id: string;
  phrase: string;
  meaning: string;
  example: string;
  exampleTranslation: string;
  category: string;
}

// This is just a type definition, no logic here
export type PhraseModel = Phrase[];
