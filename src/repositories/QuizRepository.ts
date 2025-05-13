import { Quiz } from "../models/QuizModel";
import { quizzesData } from "../data/quizData";
import { questionsData } from "../data/questionData";
import { quizQuestionData } from "../data/quizQuestionData";

export class QuizRepository {
  private transformQuestionData(questionData: any) {
    return {
      id: questionData.id,
      question: questionData.question,
      options: questionData.options,
      correctAnswer: questionData.correctAnswer,
    };
  }

  private transformQuizData(quizData: any, questions: any[]) {
    return {
      id: quizData.id,
      title: quizData.title,
      description: quizData.description,
      level: quizData.level,
      questionsCount: quizData.questionsCount,
      estimatedTime: quizData.estimatedTime,
      completed: quizData.completed,
      questions,
    };
  }

  async getQuizzes(): Promise<Quiz[]> {
    // In the future, this will be an API call
    return quizzesData.map((quizData) => {
      const quizQuestionIds = quizQuestionData
        .filter((qq) => qq.quizId === quizData.id)
        .map((qq) => qq.questionId);

      const questions = questionsData
        .filter((q) => quizQuestionIds.includes(q.id))
        .map(this.transformQuestionData);

      return this.transformQuizData(quizData, questions);
    });
  }

  async getQuizById(id: string): Promise<Quiz | null> {
    const quizData = quizzesData.find((q) => q.id === id);
    if (!quizData) return null;

    const quizQuestionIds = quizQuestionData
      .filter((qq) => qq.quizId === id)
      .map((qq) => qq.questionId);

    const questions = questionsData
      .filter((q) => quizQuestionIds.includes(q.id))
      .map(this.transformQuestionData);

    return this.transformQuizData(quizData, questions);
  }
}
