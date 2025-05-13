import { Quiz } from "../types/common";
import * as QuizRepository from "../repositories/QuizRepository";

export const getQuizzes = async (): Promise<Quiz[]> => {
  try {
    return await QuizRepository.getQuizzes();
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    throw error;
  }
};

export const getQuizById = async (id: string): Promise<Quiz | null> => {
  try {
    return await QuizRepository.getQuizById(id);
  } catch (error) {
    console.error(`Error fetching quiz with id ${id}:`, error);
    throw error;
  }
};
