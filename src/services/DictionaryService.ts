import { DictionaryModel } from '../models/DictionaryModel';
import { DictionaryWord } from '../types/common';
import { DictionaryRepository } from '../repositories/DictionaryRepository';

export const DictionaryService = {
  getAllWords: (): DictionaryModel => {
    return DictionaryRepository.getAll();
  },

  getWordById: (id: string): DictionaryWord | undefined => {
    return DictionaryRepository.getById(id);
  },

  searchWords: (term: string): DictionaryModel => {
    if (!term.trim()) {
      return { words: [] };
    }
    return DictionaryRepository.search(term);
  },

  getWordsByDifficulty: (difficulty: 'beginner' | 'intermediate' | 'advanced'): DictionaryModel => {
    return DictionaryRepository.getByDifficulty(difficulty);
  },

  getWordsByTopic: (topic: string): DictionaryModel => {
    if (!topic.trim()) {
      return { words: [] };
    }
    return DictionaryRepository.getByTopic(topic);
  },

  // Business logic methods
  getActiveWords: (): DictionaryModel => {
    const allWords = DictionaryRepository.getAll();
    return {
      words: allWords.words.filter(word => word.isActive)
    };
  },

  getWordsByDateRange: (startDate: string, endDate: string): DictionaryModel => {
    const allWords = DictionaryRepository.getAll();
    return {
      words: allWords.words.filter(word => 
        word.createdAt >= startDate && word.createdAt <= endDate
      )
    };
  },

  getWordsWithAudio: (): DictionaryModel => {
    const allWords = DictionaryRepository.getAll();
    return {
      words: allWords.words.filter(word => word.audioUrl)
    };
  },

  getWordsWithImages: (): DictionaryModel => {
    const allWords = DictionaryRepository.getAll();
    return {
      words: allWords.words.filter(word => word.imageUrl)
    };
  },

  getWordsByPartOfSpeech: (partOfSpeech: string): DictionaryModel => {
    const allWords = DictionaryRepository.getAll();
    return {
      words: allWords.words.filter(word => 
        word.partOfSpeech.toLowerCase() === partOfSpeech.toLowerCase()
      )
    };
  },

  getWordsByUsage: (usage: string): DictionaryModel => {
    const allWords = DictionaryRepository.getAll();
    return {
      words: allWords.words.filter(word => 
        word.usage.some(u => u.toLowerCase() === usage.toLowerCase())
      )
    };
  }
}; 