
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

// Word
export interface Word {
  id: string;
  word: string;
  pronunciation: string;
  meaning: string;
  example: string;
  exampleTranslation: string;
  category: VocabularyCategory | null;
}

// Vocabulary
export interface VocabularyCategory {
  id: string;
  title: string;
  icon: string;
  wordCount: number;
}

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


// Quiz Detail

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

// Dictionary
export interface DictionaryDefinition {
  id: string;
  definition: string;
  example: string;
  translation: string;
  exampleTranslation: string;
}

export interface DictionaryWord {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
  usage: string[];
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  source: string;
  audioUrl?: string;
  imageUrl?: string;
  notes?: string;
  definitions: DictionaryDefinition[];
  synonyms: string[];
  antonyms: string[];
}