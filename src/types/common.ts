// Quiz

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
  difficulty?: 'easy' | 'medium' | 'hard';
  timeLimit?: number; // in seconds
  completed: boolean;
  level: string;
  questionsCount: number;
  estimatedTime: string;
}



// Profile

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface UserProfile {
  name: string;
  level: string;
  streak: number;
  wordsLearned: number;
  phrasesLearned: number;
  quizzesCompleted: number;
  points: number;
  achievements: Achievement[];
}

export interface VocabularyCategory {
  id: string;
  title: string;
  icon: string;
  wordCount: number;
}

export interface Word {
  id: string;
  date: string;
  word: string;
  pronunciation: string;
  meaning: string;
  example: string;
  exampleTranslation: string;
  category: string;
} 