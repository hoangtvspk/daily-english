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
  } = useDictionaryViewModel();


  const renderWordCard = (word: any) => {
    const isExpanded = selectedWord && selectedWord.id === word.id;
    const isSaved = savedWords.includes(word.word.toLowerCase());
    return (
      <TouchableOpacity
        key={word.id}
        activeOpacity={0.9}
        onPress={() => handleSelectWord(isExpanded ? null : word)}
        style={styles.resultCard}
      >
        <View style={styles.resultHeader}>
          <Text style={styles.resultWord}>{word.word}</Text>
          <View style={styles.resultActions}>
            <TouchableOpacity style={[styles.resultActionButton, isSaved && styles.resultActionButtonActive]} onPress={() => handleSave(word.word.toLowerCase())}>
              <MaterialCommunityIcons name={isSaved ? 'bookmark' : 'bookmark-outline'} size={22} color={isSaved ? colors.primary : colors.textSecondary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.resultActionButton} onPress={() => handlePronounce(word.word)} disabled={isPlaying}>
              {isPlaying ? (
                <ActivityIndicator size={18} color={colors.primary} />
              ) : (
                <MaterialCommunityIcons name="volume-high" size={22} color={colors.primary} />
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.resultActionButton} onPress={() => handleCopy(word.word)}>
              <MaterialCommunityIcons name="content-copy" size={22} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.resultActionButton} onPress={() => handleShare(word)}>
              <MaterialCommunityIcons name="share-variant" size={22} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.resultPhonetic}>{word.phonetic}</Text>
        <Text style={styles.resultPartOfSpeech}>{word.partOfSpeech}</Text>
        <Text style={styles.resultMeaning}>{word.meaning}</Text>
        {isExpanded && (
          <>
            <View style={styles.definitionsContainer}>
              <Text style={styles.definitionsTitle}>Định nghĩa:</Text>
              {word.definitions.map((def: any, idx: number) => (
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
            {word.synonyms.length > 0 && (
              <View style={styles.synonymsContainer}>
                <Text style={styles.synonymsTitle}>Từ đồng nghĩa:</Text>
                <View style={styles.synonymsList}>
                  {word.synonyms.map((syn: string, idx: number) => (
                    <TouchableOpacity key={idx} style={styles.synonymItem} onPress={() => handleRecentSearch(syn)}>
                      <Text style={styles.synonymText}>{syn}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
            {word.antonyms.length > 0 && (
              <View style={styles.antonymsContainer}>
                <Text style={styles.antonymsTitle}>Từ trái nghĩa:</Text>
                <View style={styles.antonymsList}>
                  {word.antonyms.map((ant: string, idx: number) => (
                    <TouchableOpacity key={idx} style={styles.antonymItem} onPress={() => handleRecentSearch(ant)}>
                      <Text style={styles.antonymText}>{ant}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
          </>
        )}
      </TouchableOpacity>
    );
  };

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
      ) : searchResults.length > 0 ? (
        <ScrollView style={styles.resultScrollView}>
          {searchResults.map(renderWordCard)}
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