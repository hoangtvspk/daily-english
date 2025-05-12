export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
  description?: string;
} 