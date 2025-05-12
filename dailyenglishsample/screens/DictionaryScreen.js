import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  TextInput,
  ScrollView,
  ActivityIndicator
} from 'react-native';

const DictionaryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    'hello', 'goodbye', 'thank you', 'please'
  ]);
  
  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    
    // Giả lập tìm kiếm từ điển (trong thực tế sẽ gọi API)
    setTimeout(() => {
      if (searchQuery.toLowerCase() === 'hello') {
        setSearchResult({
          word: 'Hello',
          phonetic: '/həˈləʊ/',
          partOfSpeech: 'exclamation, noun',
          meaning: 'Xin chào',
          definitions: [
            {
              definition: 'Used as a greeting or to begin a phone conversation.',
              example: 'Hello there, how are you?',
              translation: 'Dùng để chào hỏi hoặc bắt đầu cuộc trò chuyện qua điện thoại.',
              exampleTranslation: 'Xin chào, bạn khỏe không?'
            },
            {
              definition: 'An utterance of "hello"; a greeting.',
              example: 'She was met by a chorus of hellos.',
              translation: 'Lời chào "hello"; một lời chào.',
              exampleTranslation: 'Cô ấy được chào đón bởi một loạt các lời chào hello.'
            }
          ],
          synonyms: ['hi', 'greetings', 'good day', 'howdy'],
          antonyms: ['goodbye', 'bye']
        });
        
        // Thêm vào danh sách tìm kiếm gần đây nếu chưa có
        if (!recentSearches.includes('hello')) {
          setRecentSearches([searchQuery.toLowerCase(), ...recentSearches].slice(0, 5));
        }
      } else if (searchQuery.toLowerCase() === 'goodbye') {
        setSearchResult({
          word: 'Goodbye',
          phonetic: '/ˌɡʊdˈbaɪ/',
          partOfSpeech: 'exclamation, noun',
          meaning: 'Tạm biệt',
          definitions: [
            {
              definition: 'Used when parting from someone.',
              example: 'He waved goodbye to his friends.',
              translation: 'Dùng khi chia tay ai đó.',
              exampleTranslation: 'Anh ấy vẫy tay tạm biệt bạn bè.'
            }
          ],
          synonyms: ['bye', 'farewell', 'see you', 'so long'],
          antonyms: ['hello', 'hi']
        });
        
        if (!recentSearches.includes('goodbye')) {
          setRecentSearches([searchQuery.toLowerCase(), ...recentSearches].slice(0, 5));
        }
      } else {
        setSearchResult(null);
        
        // Vẫn thêm vào danh sách tìm kiếm gần đây
        if (!recentSearches.includes(searchQuery.toLowerCase())) {
          setRecentSearches([searchQuery.toLowerCase(), ...recentSearches].slice(0, 5));
        }
      }
      
      setIsLoading(false);
    }, 1000);
  };
  
  const handleRecentSearch = (term) => {
    setSearchQuery(term);
    
    // Đưa từ được chọn lên đầu danh sách
    const updatedSearches = [
      term,
      ...recentSearches.filter(item => item !== term)
    ].slice(0, 5);
    
    setRecentSearches(updatedSearches);
    
    // Thực hiện tìm kiếm
    if (term === 'hello') {
      setSearchResult({
        word: 'Hello',
        phonetic: '/həˈləʊ/',
        partOfSpeech: 'exclamation, noun',
        meaning: 'Xin chào',
        definitions: [
          {
            definition: 'Used as a greeting or to begin a phone conversation.',
            example: 'Hello there, how are you?',
            translation: 'Dùng để chào hỏi hoặc bắt đầu cuộc trò chuyện qua điện thoại.',
            exampleTranslation: 'Xin chào, bạn khỏe không?'
          },
          {
            definition: 'An utterance of "hello"; a greeting.',
            example: 'She was met by a chorus of hellos.',
            translation: 'Lời chào "hello"; một lời chào.',
            exampleTranslation: 'Cô ấy được chào đón bởi một loạt các lời chào hello.'
          }
        ],
        synonyms: ['hi', 'greetings', 'good day', 'howdy'],
        antonyms: ['goodbye', 'bye']
      });
    } else if (term === 'goodbye') {
      setSearchResult({
        word: 'Goodbye',
        phonetic: '/ˌɡʊdˈbaɪ/',
        partOfSpeech: 'exclamation, noun',
        meaning: 'Tạm biệt',
        definitions: [
          {
            definition: 'Used when parting from someone.',
            example: 'He waved goodbye to his friends.',
            translation: 'Dùng khi chia tay ai đó.',
            exampleTranslation: 'Anh ấy vẫy tay tạm biệt bạn bè.'
          }
        ],
        synonyms: ['bye', 'farewell', 'see you', 'so long'],
        antonyms: ['hello', 'hi']
      });
    } else if (term === 'thank you') {
      setSearchResult({
        word: 'Thank you',
        phonetic: '/θæŋk juː/',
        partOfSpeech: 'exclamation, noun',
        meaning: 'Cảm ơn',
        definitions: [
          {
            definition: 'Used to express gratitude.',
            example: 'Thank you for your help.',
            translation: 'Dùng để bày tỏ lòng biết ơn.',
            exampleTranslation: 'Cảm ơn vì sự giúp đỡ của bạn.'
          }
        ],
        synonyms: ['thanks', 'many thanks', 'cheers'],
        antonyms: []
      });
    } else if (term === 'please') {
      setSearchResult({
        word: 'Please',
        phonetic: '/pliːz/',
        partOfSpeech: 'adverb, verb',
        meaning: 'Xin vui lòng, làm ơn',
        definitions: [
          {
            definition: 'Used as a polite way of asking for something or of asking someone to do something.',
            example: 'Please could you help me?',
            translation: 'Dùng như một cách lịch sự để yêu cầu điều gì đó hoặc nhờ ai đó làm gì.',
            exampleTranslation: 'Làm ơn bạn có thể giúp tôi không?'
          }
        ],
        synonyms: ['kindly', 'if you would be so kind'],
        antonyms: []
      });
    } else {
      setSearchResult(null);
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dictionarySearchContainer}>
        <TextInput
          style={styles.dictionarySearchInput}
          placeholder="Nhập từ cần tra cứu..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity 
          style={styles.dictionarySearchButton}
          onPress={handleSearch}
        >
          <Text style={styles.dictionarySearchButtonText}>Tìm</Text>
        </TouchableOpacity>
      </View>
      
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4a90e2" />
          <Text style={styles.loadingText}>Đang tìm kiếm...</Text>
        </View>
      ) : searchResult ? (
        <ScrollView style={styles.resultScrollView}>
          <View style={styles.dictionaryResult}>
            <Text style={styles.dictionaryResultWord}>{searchResult.word}</Text>
            <Text style={styles.dictionaryResultPhonetic}>{searchResult.phonetic}</Text>
            <Text style={styles.dictionaryResultPartOfSpeech}>{searchResult.partOfSpeech}</Text>
            <Text style={styles.dictionaryResultMeaning}>{searchResult.meaning}</Text>
            
            <View style={styles.definitionsContainer}>
              <Text style={styles.definitionsTitle}>Định nghĩa:</Text>
              {searchResult.definitions.map((def, index) => (
                <View key={index} style={styles.definitionItem}>
                  <Text style={styles.definitionText}>{index + 1}. {def.definition}</Text>
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
                  {searchResult.synonyms.map((synonym, index) => (
                    <TouchableOpacity 
                      key={index}
                      style={styles.synonymItem}
                      onPress={() => {
                        setSearchQuery(synonym);
                        handleSearch();
                      }}
                    >
                      <Text style={styles.synonymText}>{synonym}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
            
            {searchResult.antonyms.length > 0 && (
              <View style={styles.antonymsContainer}>
                <Text style={styles.antonymsTitle}>Từ trái nghĩa:</Text>
                <View style={styles.antonymsList}>
                  {searchResult.antonyms.map((antonym, index) => (
                    <TouchableOpacity 
                      key={index}
                      style={styles.antonymItem}
                      onPress={() => {
                        setSearchQuery(antonym);
                        handleSearch();
                      }}
                    >
                      <Text style={styles.antonymText}>{antonym}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
            
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Nghe phát âm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Lưu từ này</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      ) : searchQuery ? (
        <View style={styles.dictionaryNoResult}>
          <Text style={styles.dictionaryNoResultText}>
            Không tìm thấy kết quả cho "{searchQuery}".
          </Text>
          <Text style={styles.dictionaryNoResultSuggestion}>
            Hãy kiểm tra lại chính tả hoặc thử tìm kiếm từ khác.
          </Text>
        </View>
      ) : (
        <View style={styles.dictionaryPlaceholder}>
          <View style={styles.recentSearchesContainer}>
            <Text style={styles.recentSearchesTitle}>Tìm kiếm gần đây:</Text>
            <View style={styles.recentSearchesList}>
              {recentSearches.map((term, index) => (
                <TouchableOpacity 
                  key={index}
                  style={styles.recentSearchItem}
                  onPress={() => handleRecentSearch(term)}
                >
                  <Text style={styles.recentSearchText}>{term}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          <Text style={styles.dictionaryPlaceholderText}>
            Nhập từ tiếng Anh để tra cứu nghĩa và cách sử dụng.
          </Text>
          <Text style={styles.dictionaryPlaceholderSuggestion}>
            Gợi ý: thử tìm "hello", "goodbye", "thank you" hoặc "please"
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  dictionarySearchContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dictionarySearchInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  dictionarySearchButton: {
    backgroundColor: '#4a90e2',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
  },
  dictionarySearchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  resultScrollView: {
    flex: 1,
  },
  dictionaryResult: {
    margin: 15,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  dictionaryResultWord: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dictionaryResultPhonetic: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  dictionaryResultPartOfSpeech: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 10,
  },
  dictionaryResultMeaning: {
    fontSize: 18,
    marginBottom: 20,
    color: '#4a90e2',
  },
  definitionsContainer: {
    marginBottom: 20,
  },
  definitionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  definitionItem: {
    marginBottom: 15,
  },
  definitionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  definitionTranslation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  exampleContainer: {
    backgroundColor: '#f0f7ff',
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
  },
  exampleText: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  exampleTranslation: {
    fontSize: 14,
    color: '#666',
  },
  synonymsContainer: {
    marginBottom: 15,
  },
  synonymsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  synonymsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  synonymItem: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    margin: 5,
  },
  synonymText: {
    fontSize: 14,
    color: '#4a90e2',
  },
  antonymsContainer: {
    marginBottom: 20,
  },
  antonymsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  antonymsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  antonymItem: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    margin: 5,
  },
  antonymText: {
    fontSize: 14,
    color: '#ff6b6b',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dictionaryNoResult: {
    margin: 15,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  dictionaryNoResultText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  dictionaryNoResultSuggestion: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  dictionaryPlaceholder: {
    flex: 1,
    padding: 20,
  },
  recentSearchesContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  recentSearchesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recentSearchesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  recentSearchItem: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    margin: 5,
  },
  recentSearchText: {
    fontSize: 14,
  },
  dictionaryPlaceholderText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  dictionaryPlaceholderSuggestion: {
    fontSize: 14,
    color: '#4a90e2',
    textAlign: 'center',
  },
});

export default DictionaryScreen;