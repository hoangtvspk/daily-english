import { Word, VocabularyCategory } from "../types/common";

export interface VocabularyState {
  words: Word[];
  categories: VocabularyCategory[];
  selectedCategory: string | null;
  isLoading: boolean;
  error: string | null;
}

// This is just a type definition, no logic here
export type VocabularyModel = {
  words: Word[];
  categories: VocabularyCategory[];
}; 