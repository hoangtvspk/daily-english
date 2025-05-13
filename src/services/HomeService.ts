import { Word } from "../types/common";
import * as HomeRepository from "../repositories/HomeRepository";

export const getDailyWords = async (): Promise<Word[]> => {
  try {
    return await HomeRepository.getDailyWords();
  } catch (error) {
    console.error("Error fetching daily words:", error);
    throw error;
  }
};

export const getTodayWord = async (): Promise<Word | null> => {
  try {
    return await HomeRepository.getTodayWord();
  } catch (error) {
    console.error("Error fetching today's word:", error);
    throw error;
  }
};

export const getStreakCount = async (): Promise<number> => {
  try {
    return await HomeRepository.getStreakCount();
  } catch (error) {
    console.error("Error fetching streak count:", error);
    throw error;
  }
}; 