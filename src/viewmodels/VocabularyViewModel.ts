import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Word, VocabularyCategory } from "../types/common";
import { dailyWordsData, categories } from "../data/vocabularyData";
import { NavigationProp } from "../types/navigation";

export const useVocabularyViewModel = () => {
  const navigation = useNavigation<NavigationProp>();
  const [words, setWords] = useState<Word[]>(dailyWordsData);
  const [vocabularyCategories] = useState<VocabularyCategory[]>(categories);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryPress = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId) {
      if (categoryId === selectedCategory) {
        setSelectedCategory("");
        setWords(dailyWordsData);
      } else {
        const filteredWords = dailyWordsData.filter(
          (word) => word.category === categoryId
        );
        setWords(filteredWords);
      }
    } else {
      setWords(dailyWordsData);
    }
  };

  const handleWordPress = (word: Word) => {
    navigation.navigate("WordDetail", { word });
  };

  return {
    words,
    vocabularyCategories,
    selectedCategory,
    handleCategoryPress,
    handleWordPress,
  };
};
