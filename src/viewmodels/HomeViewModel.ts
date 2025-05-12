import { dailyWordsData } from "../screens/HomeScreen/data";
import { Word } from "../types/common";


export function useHomeViewModel() {
  const dailyWords = dailyWordsData;
  const todayWord: Word = dailyWords[0];
  const today = new Date();
  const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  const streakCount = 7;
  return { todayWord, formattedDate, streakCount, dailyWords };
} 