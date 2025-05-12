import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList,
  SafeAreaView,
  TextInput,
  ScrollView
} from 'react-native';

// Dữ liệu mẫu - Cụm từ thông dụng
const phrasesData = [
  {
    id: '1',
    phrase: 'How have you been?',
    meaning: 'Dạo này bạn thế nào?',
    example: 'Long time no see! How have you been?',
    exampleTranslation: 'Lâu rồi không gặp! Dạo này bạn thế nào?',
    category: 'Chào hỏi'
  },
  {
    id: '2',
    phrase: 'I couldn\'t agree more.',
    meaning: 'Tôi hoàn toàn đồng ý.',
    example: 'That movie was amazing. I couldn\'t agree more.',
    exampleTranslation: 'Bộ phim đó thật tuyệt vời. Tôi hoàn toàn đồng ý.',
    category: 'Đồng ý'
  },
  {
    id: '3',
    phrase: 'It slipped my mind.',
    meaning: 'Tôi quên mất.',
    example: 'I was supposed to call you yesterday, but it slipped my mind.',
    exampleTranslation: 'Đáng lẽ tôi phải gọi cho bạn hôm qua, nhưng tôi quên mất.',
    category: 'Xin lỗi'
  },
  {
    id: '4',
    phrase: 'I\'ll get back to you on that.',
    meaning: 'Tôi sẽ trả lời bạn sau về việc đó.',
    example: 'I need to check my schedule first. I\'ll get back to you on that.',
    exampleTranslation: 'Tôi cần kiểm tra lịch trình trước. Tôi sẽ trả lời bạn sau về việc đó.',
    category: 'Công việc'
  },
  {
    id: '5',
    phrase: 'It\'s on the tip of my tongue.',
    meaning: 'Tôi suýt nhớ ra rồi (ý nói gần như nhớ ra điều gì đó).',
    example: 'What\'s the name of that actor? It\'s on the tip of my tongue.',
    exampleTranslation: 'Tên của diễn viên đó là gì nhỉ? Tôi suýt nhớ ra rồi.',
    category: 'Giao tiếp hàng ngày'
  },
  {
    id: '6',
    phrase: 'Let\'s call it a day.',
    meaning: 'Hãy kết thúc công việc hôm nay.',
    example: 'We\'ve been working for hours. Let\'s call it a day and continue tomorrow.',
    exampleTranslation: 'Chúng ta đã làm việc nhiều giờ rồi. Hãy kết thúc hôm nay và tiếp tục vào ngày mai.',
    category: 'Công việc'
  },
  {
    id: '7',
    phrase: 'That rings a bell.',
    meaning: 'Điều đó nghe quen quen.',
    example: 'That name rings a bell, but I can\'t remember where I\'ve heard it before.',
    exampleTranslation: 'Cái tên đó nghe quen quen, nhưng tôi không nhớ đã nghe nó ở đâu trước đây.',
    category: 'Giao tiếp hàng ngày'
  },
  {
    id: '8',
    phrase: 'I\'m all ears.',
    meaning: 'Tôi đang lắng nghe đây.',
    example: 'You wanted to tell me something important? I\'m all ears.',
    exampleTranslation: 'Bạn muốn nói với tôi điều gì đó quan trọng? Tôi đang lắng nghe đây.',
    category: 'Giao tiếp hàng ngày'
  }
];

const PhrasesScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPhrases, setFilteredPhrases] = useState(phrasesData);
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  
  const categories = ['Tất cả', 'Chào hỏi', 'Đồng ý', 'Xin lỗi', 'Công việc', 'Giao tiếp hàng ngày'];
  
  React.useEffect(() => {
    filterPhrases();
  }, [searchQuery, selectedCategory]);
  
  const filterPhrases = () => {
    let filtered = phrasesData;
    
    // Lọc theo danh mục
    if (selectedCategory !== 'Tất cả') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Lọc theo từ khóa tìm kiếm
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.phrase.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.meaning.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredPhrases(filtered);
  };
  
  const renderPhraseItem = ({ item }) => (
    <View style={styles.phraseItem}>
      <Text style={styles.phraseItemTitle}>{item.phrase}</Text>
      <Text style={styles.phraseItemMeaning}>{item.meaning}</Text>
      <View style={styles.phraseItemExample}>
        <Text style={styles.phraseItemExampleText}>{item.example}</Text>
        <Text style={styles.phraseItemExampleTranslation}>{item.exampleTranslation}</Text>
      </View>
      <View style={styles.phraseItemFooter}>
        <Text style={styles.phraseItemCategory}>{item.category}</Text>
        <TouchableOpacity style={styles.practiceButton}>
          <Text style={styles.practiceButtonText}>Luyện tập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
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
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selectedCategoryButton
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text 
                style={[
                  styles.categoryButtonText,
                  selectedCategory === category && styles.selectedCategoryButtonText
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <FlatList
        data={filteredPhrases}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  searchContainer: {
    padding: 15,
  },
  searchInput: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  categoriesContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  selectedCategoryButton: {
    backgroundColor: '#4a90e2',
  },
  categoryButtonText: {
    fontSize: 14,
    color: '#333',
  },
  selectedCategoryButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  phrasesList: {
    padding: 15,
  },
  phraseItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  phraseItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  phraseItemMeaning: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  phraseItemExample: {
    backgroundColor: '#f0f7ff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  phraseItemExampleText: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  phraseItemExampleTranslation: {
    fontSize: 14,
    color: '#666',
  },
  phraseItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  phraseItemCategory: {
    fontSize: 14,
    color: '#666',
  },
  practiceButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  practiceButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});

export default PhrasesScreen;