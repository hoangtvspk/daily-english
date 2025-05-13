import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { useWordDetailViewModel } from '../../viewmodels/WordDetailViewModel';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

const WordDetailScreen: React.FC = () => {
  const {
    word,
    isFavorite,
    isPlaying,
    isLoading,
    handlePlayPronunciation,
    handleAddToFavorites,
    handleCopyToClipboard,
    handleShare,
  } = useWordDetailViewModel();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  if (!word) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Word not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.wordContainer}>
          <View style={styles.wordRow}>
            <Text style={styles.word}>{word.word}</Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={[
                  styles.actionButton,
                  styles.favoriteButton,
                  isFavorite && styles.favoriteButtonActive,
                ]}
                onPress={handleAddToFavorites}
              >
                <MaterialCommunityIcons
                  name={isFavorite ? 'heart' : 'heart-outline'}
                  size={24}
                  color={isFavorite ? colors.error : colors.primary}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, styles.playButton]}
                onPress={handlePlayPronunciation}
                disabled={isPlaying}
              >
                {isPlaying ? (
                  <ActivityIndicator size={20} color={colors.white} />
                ) : (
                  <MaterialCommunityIcons
                    name="volume-high"
                    size={24}
                    color={colors.white}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, styles.copyButton]}
                onPress={handleCopyToClipboard}
              >
                <MaterialCommunityIcons
                  name="content-copy"
                  size={24}
                  color={colors.primary}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, styles.shareButton]}
                onPress={handleShare}
              >
                <MaterialCommunityIcons
                  name="share-variant"
                  size={24}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.phonetic}>{word.pronunciation}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nghĩa</Text>
          <Text style={styles.meaning}>{word.meaning}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ví dụ</Text>
          <View style={styles.exampleContainer}>
            <Text style={styles.example}>{word.example}</Text>
            <Text style={styles.exampleTranslation}>{word.exampleTranslation}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryLabel}>Chủ đề:</Text>
            <Text style={styles.category}>{word.category?.title}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WordDetailScreen; 