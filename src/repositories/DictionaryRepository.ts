import { DictionaryModel} from '../models/DictionaryModel';

import { words } from '../data/dictionary/words';
import { definitions } from '../data/dictionary/definitions';
import {
  wordDefinitionData,
  wordSynonymData,
  wordAntonymData,
} from '../data/dictionary/relationships';
import { DictionaryDefinition, DictionaryWord } from '../types/common';

function buildDictionaryWord(wordId: string): DictionaryWord | undefined {
  const word = words[wordId as keyof typeof words];
  if (!word) return undefined;

  // Get definitions
  const defs = wordDefinitionData
    .filter(rel => rel.wordId === wordId)
    .map(rel => definitions[rel.definitionId as keyof typeof definitions]) as DictionaryDefinition[];

  // Get synonyms
  const syns = wordSynonymData
    .filter(rel => rel.wordId === wordId)
    .map(rel => rel.synonym);

  // Get antonyms
  const ants = wordAntonymData
    .filter(rel => rel.wordId === wordId)
    .map(rel => rel.antonym);

  return {
    ...word,
    difficulty: word.difficulty as 'beginner' | 'intermediate' | 'advanced',
    definitions: defs,
    synonyms: syns,
    antonyms: ants,
  };
}

export const DictionaryRepository = {
  getAll: (): DictionaryModel => {
    const allWords = Object.keys(words)
      .map(buildDictionaryWord)
      .filter((w): w is DictionaryWord => !!w);

    return { words: allWords };
  },

  getById: (id: string): DictionaryWord | undefined => {
    return buildDictionaryWord(id);
  },

  search: (term: string): DictionaryModel => {
    const lower = term.toLowerCase();
    const allWords = DictionaryRepository.getAll().words;
    const filteredWords = allWords.filter(word =>
      word.meaning.toLowerCase().startsWith(lower) ||
      word.word.toLowerCase().startsWith(lower)
    );
    return { words: filteredWords };
  },

  getByDifficulty: (difficulty: 'beginner' | 'intermediate' | 'advanced'): DictionaryModel => {
    const allWords = DictionaryRepository.getAll().words;
    const filteredWords = allWords.filter(word => word.difficulty === difficulty);
    return { words: filteredWords };
  },

  getByTopic: (topic: string): DictionaryModel => {
    const allWords = DictionaryRepository.getAll().words;
    const filteredWords = allWords.filter(word => word.topics.includes(topic));
    return { words: filteredWords };
  },
}; 