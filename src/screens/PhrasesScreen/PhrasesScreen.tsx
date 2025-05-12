import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { usePhrasesViewModel } from '../../viewmodels/PhrasesViewModel';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

const PhrasesScreen: React.FC = () => {
  const {
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
  } = usePhrasesViewModel();

  const renderPhraseItem = ({ item }: any) => {
    const isFavorite = favoriteIds.includes(item.id);
    const isPlaying = isPlayingId === item.id;
    return (
      <View style={styles.phraseItem}>
        <View style={styles.phraseHeader}>
          <Text style={styles.phraseItemTitle}>{item.phrase}</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={[styles.actionButton, styles.favoriteButton, isFavorite && styles.favoriteButtonActive]}
              onPress={() => handleFavorite(item.id)}
            >
              <MaterialCommunityIcons
                name={isFavorite ? 'heart' : 'heart-outline'}
                size={22}
                color={isFavorite ? colors.error : colors.primary}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.playButton]}
              onPress={() => handlePlay(item.phrase, item.id)}
              disabled={isPlaying}
            >
              {isPlaying ? (
                <ActivityIndicator size={18} color={colors.white} />
              ) : (
                <MaterialCommunityIcons name="volume-high" size={22} color={colors.white} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.copyButton]}
              onPress={() => handleCopy(item.phrase)}
            >
              <MaterialCommunityIcons name="content-copy" size={22} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.shareButton]}
              onPress={() => handleShare(item)}
            >
              <MaterialCommunityIcons name="share-variant" size={22} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.phraseItemMeaning}>{item.meaning}</Text>
        <View style={styles.phraseItemExample}>
          <Text style={styles.phraseItemExampleText}>{item.example}</Text>
          <Text style={styles.phraseItemExampleTranslation}>{item.exampleTranslation}</Text>
        </View>
        <View style={styles.phraseItemFooter}>
          <Text style={styles.phraseItemCategory}>{item.category}</Text>
        </View>
      </View>
    );
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm cụm từ..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, idx) => (
            <TouchableOpacity
              key={idx}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selectedCategoryButton,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory === category && styles.selectedCategoryButtonText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={phrases}
        renderItem={renderPhraseItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.phrasesList}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Không tìm thấy cụm từ phù hợp</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default PhrasesScreen; 