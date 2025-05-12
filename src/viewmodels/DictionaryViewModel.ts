import React, { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';
import * as Clipboard from 'expo-clipboard';
import * as Sharing from 'expo-sharing';
import { dictionarySample } from '../screens/DictionaryScreen/data';

const RECENT_KEY = '@dictionary_recent';
const SAVED_KEY = '@dictionary_saved';

export function useDictionaryViewModel() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [savedWords, setSavedWords] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  // Load recent and saved words on mount
  React.useEffect(() => {
    loadRecent();
    loadSaved();
  }, []);

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
    if (!term) return;
    setIsLoading(true);
    setTimeout(() => {
      const result = (dictionarySample as Record<string, any>)[term];
      setSearchResult(result || null);
      updateRecent(term);
      setIsLoading(false);
    }, 600);
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

  const handleShare = async (result: any) => {
    try {
      const isAvailable = await Sharing.isAvailableAsync();
      if (!isAvailable) {
        Alert.alert('Lỗi', 'Chức năng chia sẻ không khả dụng trên thiết bị này');
        return;
      }
      await Sharing.shareAsync(
        `Word: ${result.word}\nMeaning: ${result.meaning}\nExample: ${result.definitions[0]?.example}`,
        {
          mimeType: 'text/plain',
          dialogTitle: 'Chia sẻ từ điển',
        }
      );
    } catch {
      Alert.alert('Lỗi', 'Không thể chia sẻ từ này');
    }
  };

  const handleSave = async (word: string) => {
    try {
      let updated;
      if (savedWords.includes(word)) {
        updated = savedWords.filter(w => w !== word);
      } else {
        updated = [...savedWords, word];
      }
      setSavedWords(updated);
      await AsyncStorage.setItem(SAVED_KEY, JSON.stringify(updated));
      Alert.alert('Thành công', savedWords.includes(word) ? 'Đã xóa khỏi mục đã lưu' : 'Đã lưu từ này');
    } catch {
      Alert.alert('Lỗi', 'Không thể lưu từ này');
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    searchResult,
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