import { Phrase, PhraseCategory } from "../types/common";

// This is just a type definition, no logic here
export type PhraseModel = {
  phrases: Phrase[];
  categories: PhraseCategory[];
};
