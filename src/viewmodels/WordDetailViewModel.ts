import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { WordDetailScreenRouteProp } from '../types/navigation';
import { Word } from '../types/common';
import * as Speech from 'expo-speech';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Clipboard from 'expo-clipboard';
import * as Sharing from 'expo-sharing';
import { Alert } from 'react-native';

const FAVORITES_KEY = '@favorites';

export const useWordDetailViewModel = () => {
  const route = useRoute<WordDetailScreenRouteProp>();
  const { word } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkFavoriteStatus();
  }, []);

  const checkFavoriteStatus = async () => {
    try {
      const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
      const favoritesArray = favorites ? JSON.parse(favorites) : [];
      setIsFavorite(favoritesArray.some((w: Word) => w.id === word.id));
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể kiểm tra trạng thái yêu thích');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlayPronunciation = async () => {
    try {
      setIsPlaying(true);
      await Speech.speak(word.word, {
        language: 'en-US',
        pitch: 1.0,
        rate: 0.5,
      });
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể phát âm từ này');
    } finally {
      setIsPlaying(false);
    }
  };

  const handleAddToFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
      const favoritesArray = favorites ? JSON.parse(favorites) : [];
      const newFavorites = isFavorite 
        ? favoritesArray.filter((w: Word) => w.id !== word.id)
        : [...favoritesArray, word];
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      setIsFavorite(!isFavorite);
      Alert.alert(
        'Thành công',
        isFavorite ? 'Đã xóa khỏi yêu thích' : 'Đã thêm vào yêu thích'
      );
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể cập nhật yêu thích');
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      await Clipboard.setStringAsync(word.word);
      Alert.alert('Thành công', 'Đã sao chép từ vào clipboard');
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể sao chép từ');
    }
  };

  const handleShare = async () => {
    try {
      const isAvailable = await Sharing.isAvailableAsync();
      if (!isAvailable) {
        Alert.alert('Lỗi', 'Chức năng chia sẻ không khả dụng trên thiết bị này');
        return;
      }

      await Sharing.shareAsync(
        `Word: ${word.word}\nMeaning: ${word.meaning}\nExample: ${word.example}`,
        {
          mimeType: 'text/plain',
          dialogTitle: 'Chia sẻ từ vựng',
        }
      );
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể chia sẻ từ này');
    }
  };

  return {
    word,
    isFavorite,
    isPlaying,
    isLoading,
    handlePlayPronunciation,
    handleAddToFavorites,
    handleCopyToClipboard,
    handleShare,
  };
}; 