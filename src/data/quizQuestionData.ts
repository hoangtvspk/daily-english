import { QuizQuestion } from "../models/QuizModel";

// Quiz-Question relationship data type definition
export interface QuizQuestionData {
  quizId: string;
  questionId: string;
}

export const quizQuestionData: QuizQuestionData[] = [
  { quizId: "1", questionId: "1" },
  { quizId: "1", questionId: "2" },
  { quizId: "1", questionId: "3" },
  { quizId: "1", questionId: "4" },
  { quizId: "1", questionId: "5" },
  { quizId: "2", questionId: "6" },
  { quizId: "2", questionId: "7" },
  { quizId: "2", questionId: "8" },
  { quizId: "3", questionId: "9" },
  { quizId: "3", questionId: "10" },
  { quizId: "4", questionId: "11" },
  { quizId: "4", questionId: "12" },
];
