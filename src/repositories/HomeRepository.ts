
import { dailyWordsData } from "../data/homeData";
import { Word } from "../types/common";

const transformWordData = (wordData: any): Word => ({
  id: wordData.id,
  word: wordData.word,
  pronunciation: wordData.pronunciation,
  meaning: wordData.meaning,
  example: wordData.example,
  exampleTranslation: wordData.exampleTranslation,
  category: wordData.category,
});

export const getDailyWords = async (): Promise<Word[]> => {
  // In the future, this will be an API call
  return dailyWordsData.map(transformWordData);
};

export const getTodayWord = async (): Promise<Word | null> => {
  // In the future, this will be an API call
  const today = new Date();
  const formattedDate = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;
  
  const todayWord = dailyWordsData.find(word => word.date === formattedDate);
  return todayWord ? transformWordData(todayWord) : null;
};

export const getStreakCount = async (): Promise<number> => {
  // In the future, this will be an API call
  // For now, return a mock value
  return 7;
}; 