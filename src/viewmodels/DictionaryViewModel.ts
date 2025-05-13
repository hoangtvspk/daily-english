import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';
import * as Clipboard from 'expo-clipboard';
import * as Sharing from 'expo-sharing';
import { DictionaryService } from '../services/DictionaryService';
import { DictionaryWord } from '../types/common';

const RECENT_KEY = '@dictionary_recent';
const SAVED_KEY = '@dictionary_saved';

export function useDictionaryViewModel() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<DictionaryWord[]>([]);
  const [selectedWord, setSelectedWord] = useState<DictionaryWord | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [savedWords, setSavedWords] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // On mount, show all words by default
    const all = DictionaryService.getAllWords();
    setSearchResults(all.words);
    loadRecent();
    loadSaved();
  }, []);

  // Debounced search on input change
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const loadRecent = async () => {
    try {
      const data = await AsyncStorage.getItem(RECENT_KEY);
      setRecentSearches(data ? JSON.parse(data) : []);
    } catch {
      setRecentSearches([]);
    }
  };

  const loadSaved = async () => {
    try {
      const data = await AsyncStorage.getItem(SAVED_KEY);
      setSavedWords(data ? JSON.parse(data) : []);
    } catch {
      setSavedWords([]);
    }
  };

  const handleSearch = async (query?: string) => {
    const term = (query ?? searchQuery).trim().toLowerCase();
    setIsLoading(true);
    try {
      let result;
      if (!term) {
        result = DictionaryService.getAllWords();
      } else {
        result = DictionaryService.searchWords(term);
      }
      setSearchResults(result.words);
      if (term) updateRecent(term);
    } catch {
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const updateRecent = async (term: string) => {
    let updated = [term, ...recentSearches.filter(t => t !== term)].slice(0, 5);
    setRecentSearches(updated);
    await AsyncStorage.setItem(RECENT_KEY, JSON.stringify(updated));
  };

  const handleRecentSearch = (term: string) => {
    setSearchQuery(term);
    handleSearch(term);
  };

  const handlePronounce = async (word: string) => {
    try {
      setIsPlaying(true);
      await Speech.speak(word, { language: 'en-US', pitch: 1.0, rate: 0.95 });
    } catch {
      Alert.alert('Lỗi', 'Không thể phát âm từ này');
    } finally {
      setIsPlaying(false);
    }
  };

  const handleCopy = async (word: string) => {
    try {
      await Clipboard.setStringAsync(word);
      Alert.alert('Thành công', 'Đã sao chép từ vào clipboard');
    } catch {
      Alert.alert('Lỗi', 'Không thể sao chép từ');
    }
  };

  const handleShare = async (word: DictionaryWord) => {
    try {
      const isAvailable = await Sharing.isAvailableAsync();
      if (!isAvailable) {
        Alert.alert('Lỗi', 'Chức năng chia sẻ không khả dụng trên thiết bị này');
        return;
      }
      const shareText = [
        `Word: ${word.word}`,
        `Meaning: ${word.meaning}`,
        word.definitions[0]?.example ? `Example: ${word.definitions[0].example}` : '',
        word.definitions[0]?.translation ? `Translation: ${word.definitions[0].translation}` : '',
      ].filter(Boolean).join('\n');
      await Sharing.shareAsync(shareText, {
        mimeType: 'text/plain',
        dialogTitle: 'Chia sẻ từ điển',
      });
    } catch {
      Alert.alert('Lỗi', 'Không thể chia sẻ từ này');
    }
  };

  const handleSave = async (wordId: string) => {
    try {
      let updated;
      if (savedWords.includes(wordId)) {
        updated = savedWords.filter(w => w !== wordId);
      } else {
        updated = [...savedWords, wordId];
      }
      setSavedWords(updated);
      await AsyncStorage.setItem(SAVED_KEY, JSON.stringify(updated));
      Alert.alert('Thành công', savedWords.includes(wordId) ? 'Đã xóa khỏi mục đã lưu' : 'Đã lưu từ này');
    } catch {
      Alert.alert('Lỗi', 'Không thể lưu từ này');
    }
  };

  const handleSelectWord = (word: DictionaryWord | null) => {
    setSelectedWord(word);
  };

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    selectedWord,
    handleSelectWord,
    isLoading,
    recentSearches,
    savedWords,
    isPlaying,
    handleSearch,
    handleRecentSearch,
    handlePronounce,
    handleCopy,
    handleShare,
    handleSave,
  };
} 