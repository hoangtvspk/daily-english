import { wordsData } from "./wordData";

interface DailyWord {
  id: string;
  date: string;
  word: string;
  pronunciation: string;
  meaning: string;
  example: string;
  exampleTranslation: string;
}

export const dailyWordsData: DailyWord[] = wordsData;
