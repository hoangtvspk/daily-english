import { Quiz, Question } from "../models/QuizModel";

export type { Quiz, Question };

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
