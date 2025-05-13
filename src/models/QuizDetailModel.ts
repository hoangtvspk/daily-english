import { Quiz, Question } from "./QuizModel";

export interface Answer {
  question: string;
  selectedOption: number;
  correctOption: number;
  isCorrect: boolean;
}

export interface QuizDetailState {
  currentQuestion: number;
  selectedOption: number | null;
  score: number;
  quizCompleted: boolean;
  answers: Answer[];
  progress: number;
}

export interface QuizDetailModel {
  quiz: Quiz;
  state: QuizDetailState;
}
