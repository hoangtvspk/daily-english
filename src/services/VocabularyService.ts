import { VocabularyCategory, Word } from "../types/common";
import { VocabularyState } from "../models/VocabularyModel";
import * as VocabularyRepository from "../repositories/VocabularyRepository";

let state: VocabularyState = {
  words: [],
  categories: [],
  selectedCategory: null,
  isLoading: false,
  error: null,
};

const setState = (newState: Partial<VocabularyState>) => {
  state = { ...state, ...newState };
};

export const getWords = async (): Promise<Word[]> => {
  try {
    return await VocabularyRepository.getWords();
  } catch (error) {
    console.error("Error getting words:", error);
    throw error;
  }
};

export const getWordsByCategory = async (categoryId: string): Promise<Word[]> => {
  try {
    return await VocabularyRepository.getWordsByCategory(categoryId);
  } catch (error) {
    console.error("Error getting words by category:", error);
    throw error;
  }
};

export const getCategories = async (): Promise<VocabularyCategory[]> => {
  try {
    return await VocabularyRepository.getCategories();
  } catch (error) {
    console.error("Error getting categories:", error);
    throw error;
  }
};

export const getWordDetail = async (wordId: string): Promise<Word> => {
  try {
    return await VocabularyRepository.getWordDetail(wordId);
  } catch (error) {
    console.error("Error getting word detail:", error);
    throw error;
  }
};

export const selectCategory = async (categoryId: string | null): Promise<void> => {
  try {
    setState({ isLoading: true, error: null });
    if (categoryId === state.selectedCategory) {
      await getWords();
      setState({ selectedCategory: null });
    } else {
      await getWordsByCategory(categoryId!);
      setState({ selectedCategory: categoryId });
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    setState({ error: errorMessage, isLoading: false });
    throw error;
  }
};

export const getState = (): VocabularyState => state; 