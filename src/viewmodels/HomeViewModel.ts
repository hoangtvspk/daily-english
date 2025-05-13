import { dailyWordsData } from "../data/homeData";
import { Word, WordModel } from "../models/WordModel";

export function useHomeViewModel() {
  const wordModel: WordModel = {
    words: dailyWordsData,
  };

  const todayWord: Word = wordModel.words[0]; // Get first word as daily word
  const today = new Date();
  const formattedDate = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;
  const streakCount = 7;

  return { todayWord, formattedDate, streakCount, dailyWords: wordModel.words };
}
