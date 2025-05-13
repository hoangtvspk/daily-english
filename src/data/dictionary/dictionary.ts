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
  definitions: DictionaryDefinition[];
  synonyms: string[];
  antonyms: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];  // e.g., ['greeting', 'business', 'travel']
  usage: string[];   // e.g., ['formal', 'informal', 'slang']
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  source: string;    // e.g., 'oxford', 'cambridge', 'custom'
  audioUrl?: string; // URL to pronunciation audio file
  imageUrl?: string; // URL to related image
  notes?: string;    // Additional notes or usage tips
}

export interface DictionarySearchResult {
  id: string;
  word: string;
  phonetic: string;
  meaning: string;
  partOfSpeech: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
}

export interface DictionaryFilter {
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  topics?: string[];
  partOfSpeech?: string;
  usage?: string[];
  searchTerm?: string;
} 