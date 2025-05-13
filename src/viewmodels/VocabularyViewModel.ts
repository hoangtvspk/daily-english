import { useState, useEffect } from "react";
import { Word } from "../types/common";
import * as VocabularyService from "../services/VocabularyService";
import { VocabularyCategory } from "../types/common";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useVocabularyViewModel = () => {
  const navigation = useNavigation<NavigationProp>();
  const [words, setWords] = useState<Word[]>([]);
  const [vocabularyCategories, setVocabularyCategories] = useState<VocabularyCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadWords = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await VocabularyService.getWords();
      setWords(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load words");
    } finally {
      setIsLoading(false);
    }
  };

  const loadWordsByCategory = async (categoryId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await VocabularyService.getWordsByCategory(categoryId);
      setWords(data);
      setSelectedCategory(categoryId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load words by category");
    } finally {
      setIsLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await VocabularyService.getCategories();
      setVocabularyCategories(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load categories");
    } finally {
      setIsLoading(false);
    }
  };

  const getWordDetail = async (wordId: string): Promise<Word> => {
    try {
      setIsLoading(true);
      setError(null);
      return await VocabularyService.getWordDetail(wordId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load word detail");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryPress = async (categoryId: string) => {
    if (selectedCategory === categoryId) {
      await loadWords();
      setSelectedCategory(null);
    } else {
      await loadWordsByCategory(categoryId);
    }
  };

  const handleWordPress = async (wordId: string) => {
    try {
      navigation.navigate("WordDetail", { wordId });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load word detail");
    }
  };

  useEffect(() => {
    loadCategories();
    loadWords();
  }, []);

  return {
    words,
    vocabularyCategories,
    selectedCategory,
    isLoading,
    error,
    handleCategoryPress,
    handleWordPress,
  };
};
