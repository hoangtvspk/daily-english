import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { useDictionaryViewModel } from '../../viewmodels/DictionaryViewModel';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

const DictionaryScreen: React.FC = () => {
  const {
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
  } = useDictionaryViewModel();

  const isSaved = searchResult && savedWords.includes(searchResult.word.toLowerCase());

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Nhập từ cần tra cứu..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={() => handleSearch()}
          returnKeyType="search"
        />
        <TouchableOpacity style={styles.searchButton} onPress={() => handleSearch()}>
          <MaterialCommunityIcons name="magnify" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.loadingText}>Đang tìm kiếm...</Text>
        </View>
      ) : searchResult ? (
        <ScrollView style={styles.resultScrollView}>
          <View style={styles.resultCard}>
            <View style={styles.resultHeader}>
              <Text style={styles.resultWord}>{searchResult.word}</Text>
              <View style={styles.resultActions}>
                <TouchableOpacity style={[styles.resultActionButton, isSaved && styles.resultActionButtonActive]} onPress={() => handleSave(searchResult.word.toLowerCase())}>
                  <MaterialCommunityIcons name={isSaved ? 'bookmark' : 'bookmark-outline'} size={22} color={isSaved ? colors.primary : colors.textSecondary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.resultActionButton} onPress={() => handlePronounce(searchResult.word)} disabled={isPlaying}>
                  {isPlaying ? (
                    <ActivityIndicator size={18} color={colors.primary} />
                  ) : (
                    <MaterialCommunityIcons name="volume-high" size={22} color={colors.primary} />
                  )}
                </TouchableOpacity>
                <TouchableOpacity style={styles.resultActionButton} onPress={() => handleCopy(searchResult.word)}>
                  <MaterialCommunityIcons name="content-copy" size={22} color={colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.resultActionButton} onPress={() => handleShare(searchResult)}>
                  <MaterialCommunityIcons name="share-variant" size={22} color={colors.primary} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.resultPhonetic}>{searchResult.phonetic}</Text>
            <Text style={styles.resultPartOfSpeech}>{searchResult.partOfSpeech}</Text>
            <Text style={styles.resultMeaning}>{searchResult.meaning}</Text>
            <View style={styles.definitionsContainer}>
              <Text style={styles.definitionsTitle}>Định nghĩa:</Text>
              {searchResult.definitions.map((def: any, idx: number) => (
                <View key={idx} style={styles.definitionItem}>
                  <Text style={styles.definitionText}>{idx + 1}. {def.definition}</Text>
                  <Text style={styles.definitionTranslation}>{def.translation}</Text>
                  {def.example && (
                    <View style={styles.exampleContainer}>
                      <Text style={styles.exampleText}>"{def.example}"</Text>
                      <Text style={styles.exampleTranslation}>"{def.exampleTranslation}"</Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
            {searchResult.synonyms.length > 0 && (
              <View style={styles.synonymsContainer}>
                <Text style={styles.synonymsTitle}>Từ đồng nghĩa:</Text>
                <View style={styles.synonymsList}>
                  {searchResult.synonyms.map((syn: string, idx: number) => (
                    <TouchableOpacity key={idx} style={styles.synonymItem} onPress={() => handleRecentSearch(syn)}>
                      <Text style={styles.synonymText}>{syn}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
            {searchResult.antonyms.length > 0 && (
              <View style={styles.antonymsContainer}>
                <Text style={styles.antonymsTitle}>Từ trái nghĩa:</Text>
                <View style={styles.antonymsList}>
                  {searchResult.antonyms.map((ant: string, idx: number) => (
                    <TouchableOpacity key={idx} style={styles.antonymItem} onPress={() => handleRecentSearch(ant)}>
                      <Text style={styles.antonymText}>{ant}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      ) : searchQuery ? (
        <View style={styles.noResultContainer}>
          <Text style={styles.noResultText}>Không tìm thấy kết quả cho "{searchQuery}".</Text>
          <Text style={styles.noResultSuggestion}>Hãy kiểm tra lại chính tả hoặc thử tìm kiếm từ khác.</Text>
        </View>
      ) : (
        <View style={styles.placeholderContainer}>
          <View style={styles.recentSearchesContainer}>
            <Text style={styles.recentSearchesTitle}>Tìm kiếm gần đây:</Text>
            <View style={styles.recentSearchesList}>
              {recentSearches.map((term, idx) => (
                <TouchableOpacity key={idx} style={styles.recentSearchItem} onPress={() => handleRecentSearch(term)}>
                  <Text style={styles.recentSearchText}>{term}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <Text style={styles.placeholderText}>Nhập từ tiếng Anh để tra cứu nghĩa và cách sử dụng.</Text>
          <Text style={styles.placeholderSuggestion}>Gợi ý: thử tìm "hello", "goodbye", "thank you" hoặc "please"</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default DictionaryScreen; 