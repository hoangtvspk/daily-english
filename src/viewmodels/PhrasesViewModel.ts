import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Clipboard from "expo-clipboard";
import * as Sharing from "expo-sharing";
import * as Speech from "expo-speech";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Phrase } from "../models/PhraseModel";
import { phrasesSample } from "../screens/PhrasesScreen/data";

const FAVORITE_PHRASES_KEY = "@favorite_phrases";

export function usePhrasesViewModel() {
  const [phrases, setPhrases] = useState<Phrase[]>(phrasesSample);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isPlayingId, setIsPlayingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    filterPhrases();
  }, [searchQuery, selectedCategory]);

  const loadFavorites = async () => {
    try {
      const favs = await AsyncStorage.getItem(FAVORITE_PHRASES_KEY);
      setFavoriteIds(favs ? JSON.parse(favs) : []);
      setCategories([
        "Tất cả",
        ...Array.from(new Set(phrasesSample.map((p) => p.category))),
      ]);
    } catch (e) {
      setFavoriteIds([]);
    } finally {
      setIsLoading(false);
    }
  };

  const filterPhrases = () => {
    let filtered = phrasesSample;
    if (selectedCategory !== "Tất cả") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.phrase.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.meaning.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setPhrases(filtered);
  };

  const handleFavorite = async (id: string) => {
    try {
      let newFavs;
      if (favoriteIds.includes(id)) {
        newFavs = favoriteIds.filter((favId) => favId !== id);
      } else {
        newFavs = [...favoriteIds, id];
      }
      setFavoriteIds(newFavs);
      await AsyncStorage.setItem(FAVORITE_PHRASES_KEY, JSON.stringify(newFavs));
    } catch (e) {
      Alert.alert("Lỗi", "Không thể cập nhật yêu thích");
    }
  };

  const handlePlay = async (phrase: string, id: string) => {
    try {
      setIsPlayingId(id);
      await Speech.speak(phrase, {
        language: "en-US",
        pitch: 1.0,
        rate: 0.95,
      });
    } catch (e) {
      Alert.alert("Lỗi", "Không thể phát âm cụm từ này");
    } finally {
      setIsPlayingId(null);
    }
  };

  const handleCopy = async (phrase: string) => {
    try {
      await Clipboard.setStringAsync(phrase);
      Alert.alert("Thành công", "Đã sao chép cụm từ vào clipboard");
    } catch (e) {
      Alert.alert("Lỗi", "Không thể sao chép cụm từ");
    }
  };

  const handleShare = async (phraseObj: Phrase) => {
    try {
      const isAvailable = await Sharing.isAvailableAsync();
      if (!isAvailable) {
        Alert.alert(
          "Lỗi",
          "Chức năng chia sẻ không khả dụng trên thiết bị này"
        );
        return;
      }
      await Sharing.shareAsync(
        `Phrase: ${phraseObj.phrase}\nMeaning: ${phraseObj.meaning}\nExample: ${phraseObj.example}`,
        {
          mimeType: "text/plain",
          dialogTitle: "Chia sẻ cụm từ",
        }
      );
    } catch (e) {
      Alert.alert("Lỗi", "Không thể chia sẻ cụm từ này");
    }
  };

  return {
    phrases,
    categories,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    favoriteIds,
    isPlayingId,
    isLoading,
    handleFavorite,
    handlePlay,
    handleCopy,
    handleShare,
  };
}
