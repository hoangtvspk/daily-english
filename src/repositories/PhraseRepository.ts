import { phrasesData } from "../data/phraseData";
import { phraseCategories } from "../data/phraseCategory";
import { Phrase } from "../types/common";
import { PhraseCategory } from "../types/common";

const getPhrases = async ({searchQuery, categoryId}: {searchQuery?: string, categoryId?: string}): Promise<Phrase[]> => {
const allPhrases = phrasesData.map(phrase => ({
    ...phrase,
    category: phraseCategories.find(category => category.id === phrase.categoryId) || null,
  }));

  if (categoryId) {
    return allPhrases.filter(phrase => phrase.categoryId === categoryId);
  }

  if (searchQuery) {
    return allPhrases.filter(phrase => phrase.phrase.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  return allPhrases;
};

const getPhraseCategories = async (): Promise<PhraseCategory[]> => {
  return phraseCategories;
};

const getPhraseByCategory = async (categoryId: string): Promise<Phrase[]> => {
  return phrasesData.filter(phrase => phrase.categoryId === categoryId).map(phrase => ({
    ...phrase,
    category: phraseCategories.find(category => category.id === phrase.categoryId) || null,
  }));
};

export default {
  getPhrases,
  getPhraseCategories,
  getPhraseByCategory,
};

