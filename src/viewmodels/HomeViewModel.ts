import { useEffect, useState } from "react";
import { Word } from "../types/common";
import * as HomeService from "../services/HomeService";

export function useHomeViewModel() {
  const [todayWord, setTodayWord] = useState<Word | null>(null);
  const [streakCount, setStreakCount] = useState<number>(0);
  const [dailyWords, setDailyWords] = useState<Word[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const [word, streak, words] = await Promise.all([
        HomeService.getTodayWord(),
        HomeService.getStreakCount(),
        HomeService.getDailyWords(),
      ]);

      setTodayWord(word || words[0]); // Fallback to first word if no today's word
      setStreakCount(streak);
      setDailyWords(words);
      setError(null);
    } catch (error) {
      console.error("Error fetching home data:", error);
      setError("Failed to load home data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const today = new Date();
  const formattedDate = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  // Return a default word structure if data is not loaded yet
  const defaultWord: Word = {
    id: "",
    word: "Loading...",
    pronunciation: "",
    meaning: "",
    example: "",
    exampleTranslation: "",
    category: null,
  };

  return {
    todayWord: todayWord || defaultWord,
    formattedDate,
    streakCount,
    dailyWords,
    isLoading,
    error,
    refresh: fetchData,
  };
}
