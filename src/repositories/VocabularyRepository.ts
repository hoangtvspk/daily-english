import { VocabularyCategory, Word } from "../types/common";
import { categoriesData } from "../data/categoryData";
import { wordsData } from "../data/wordData";
import { categoryWordData } from "../data/categoryWordData";

const transformCategoryData = (category: VocabularyCategory): VocabularyCategory => {
  return {
    ...category,
    wordCount: categoryWordData.filter(cw => cw.categoryId === category.id).length,
  };
};

const transformWordData = (word: Omit<Word, 'category'>): Word => {
  const categoryId = categoryWordData.find(cw => cw.wordId === word.id)?.categoryId;
  if (!categoryId) {
    throw new Error(`No category found for word ${word.id}`);
  }

  const category = categoriesData.find(c => c.id === categoryId);
  if (!category) {
    throw new Error(`Category ${categoryId} not found for word ${word.id}`);
  }

  return {
    ...word,
    category: transformCategoryData(category),
  };
};

export const getWords = async (): Promise<Word[]> => {
  // In the future, this will be an API call
  return wordsData.map(transformWordData).sort((a, b) => a.word.localeCompare(b.word));
};

export const getWordsByCategory = async (categoryId: string): Promise<Word[]> => {
  // In the future, this will be an API call
  const wordIds = categoryWordData
    .filter(cw => cw.categoryId === categoryId)
    .map(cw => cw.wordId);
  
  return wordsData
    .filter(word => wordIds.includes(word.id))
    .map(transformWordData)
    .sort((a, b) => a.word.localeCompare(b.word));
};

export const getCategories = async (): Promise<VocabularyCategory[]> => {
  // In the future, this will be an API call
  return categoriesData.map(transformCategoryData);
};

export const getWordDetail = async (wordId: string): Promise<Word> => {
  // In the future, this will be an API call
  const word = wordsData.find(w => w.id === wordId);
  if (!word) {
    throw new Error("Word not found");
  }

  return transformWordData(word);
}; 