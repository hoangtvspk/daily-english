export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
  category?: string;
  difficulty?: "easy" | "medium" | "hard";
  timeLimit?: number; // in seconds
  completed: boolean;
  level: string;
  questionsCount: number;
  estimatedTime: string;
}

export interface QuizQuestion {
  quizId: string;
  questionId: string;
  order?: number; // Optional: to maintain question order in quiz
}

export interface QuizModel {
  quizzes: Quiz[];
}
