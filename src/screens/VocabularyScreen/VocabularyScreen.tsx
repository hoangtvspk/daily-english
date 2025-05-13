import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useVocabularyViewModel } from '../../viewmodels/VocabularyViewModel';
import { Word, VocabularyCategory } from '../../types/common';
import { styles } from './styles';

const VocabularyScreen: React.FC = () => {
  const { words, vocabularyCategories, selectedCategory, handleCategoryPress, handleWordPress } = useVocabularyViewModel();

  const renderCategoryItem = ({ item }: { item: VocabularyCategory }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        selectedCategory === item.id && styles.selectedCategoryItem,
      ]}
      onPress={() => handleCategoryPress(item.id)}
    >
      <View style={styles.categoryIcon}>
        <Text style={styles.categoryIconText}>{item.icon}</Text>
      </View>
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryTitle}>{item.title}</Text>
        <Text style={styles.categoryCount}>{item.wordCount} từ</Text>
      </View>
    </TouchableOpacity>
  );

  const renderWordItem = ({ item }: { item: Word }) => (
    <TouchableOpacity
      style={styles.wordItem}
      onPress={() => handleWordPress(item.id)}
    >
      <View style={styles.wordInfo}>
        <Text style={styles.wordText}>{item.word}</Text>
        <Text style={styles.wordPhonetic}>{item.pronunciation}</Text>
      </View>
      <Text style={styles.wordMeaning}>{item.meaning}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Từ vựng</Text>
        <Text style={styles.headerSubtitle}>
          Học từ vựng theo chủ đề và cấp độ
        </Text>
      </View>

      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Chủ đề</Text>
        <FlatList
          data={vocabularyCategories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        />
      </View>

      <View style={styles.wordsSection}>
        <Text style={styles.sectionTitle}>{selectedCategory ? vocabularyCategories.find(category => category.id === selectedCategory)?.title : 'Toàn bộ từ vựng'}</Text>
        <FlatList
          data={words}
          renderItem={renderWordItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.wordsList}
        />
      </View>
    </SafeAreaView>
  );
};

export default VocabularyScreen; 