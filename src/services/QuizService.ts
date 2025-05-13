import { Quiz } from "../models/QuizModel";
import { QuizRepository } from "../repositories/QuizRepository";

export class QuizService {
  private repository: QuizRepository;

  constructor() {
    this.repository = new QuizRepository();
  }

  async getQuizzes(): Promise<Quiz[]> {
    try {
      return await this.repository.getQuizzes();
    } catch (error) {
      console.error("Error fetching quizzes:", error);
      throw error;
    }
  }

  async getQuizById(id: string): Promise<Quiz | null> {
    try {
      return await this.repository.getQuizById(id);
    } catch (error) {
      console.error(`Error fetching quiz with id ${id}:`, error);
      throw error;
    }
  }
}
