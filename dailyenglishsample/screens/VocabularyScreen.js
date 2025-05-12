import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Dữ liệu mẫu - Từ vựng hàng ngày
const dailyWordsData = [
  {
    id: "1",
    date: "12/05/2025",
    word: "Appreciate",
    pronunciation: "/əˈpriːʃieɪt/",
    meaning: "Đánh giá cao, cảm kích",
    example: "I really appreciate your help.",
    exampleTranslation: "Tôi thực sự cảm kích sự giúp đỡ của bạn.",
    category: "Giao tiếp hàng ngày",
  },
  {
    id: "2",
    date: "11/05/2025",
    word: "Convenient",
    pronunciation: "/kənˈviːniənt/",
    meaning: "Thuận tiện, tiện lợi",
    example: "Is this time convenient for you?",
    exampleTranslation: "Thời gian này có thuận tiện cho bạn không?",
    category: "Giao tiếp hàng ngày",
  },
  {
    id: "3",
    date: "10/05/2025",
    word: "Accomplish",
    pronunciation: "/əˈkʌmplɪʃ/",
    meaning: "Hoàn thành, đạt được",
    example: "She accomplished all her goals.",
    exampleTranslation: "Cô ấy đã hoàn thành tất cả các mục tiêu của mình.",
    category: "Công việc",
  },
  {
    id: "4",
    date: "09/05/2025",
    word: "Determine",
    pronunciation: "/dɪˈtɜːmɪn/",
    meaning: "Xác định, quyết định",
    example: "We need to determine the cause of the problem.",
    exampleTranslation: "Chúng ta cần xác định nguyên nhân của vấn đề.",
    category: "Công việc",
  },
  {
    id: "5",
    date: "08/05/2025",
    word: "Enhance",
    pronunciation: "/ɪnˈhɑːns/",
    meaning: "Nâng cao, cải thiện",
    example: "These exercises will enhance your vocabulary.",
    exampleTranslation: "Những bài tập này sẽ cải thiện vốn từ vựng của bạn.",
    category: "Học tập",
  },
  {
    id: "6",
    date: "07/05/2025",
    word: "Crucial",
    pronunciation: "/ˈkruːʃl/",
    meaning: "Quan trọng, then chốt",
    example: "Communication is crucial in any relationship.",
    exampleTranslation:
      "Giao tiếp là điều quan trọng trong bất kỳ mối quan hệ nào.",
    category: "Giao tiếp hàng ngày",
  },
];

const VocabularyScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredWords, setFilteredWords] = useState(dailyWordsData);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const categories = ["Tất cả", "Giao tiếp hàng ngày", "Công việc", "Học tập"];

  useEffect(() => {
    filterWords();
  }, [searchQuery, selectedCategory]);

  const filterWords = () => {
    let filtered = dailyWordsData;

    // Lọc theo danh mục
    if (selectedCategory !== "Tất cả") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    // Lọc theo từ khóa tìm kiếm
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.meaning.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredWords(filtered);
  };

  const renderWordItem = ({ item }) => (
    <TouchableOpacity
      style={styles.wordItem}
      onPress={() => navigation.navigate("WordDetail", { word: item })}
    >
      <View style={styles.wordItemContent}>
        <Text style={styles.wordItemTitle}>{item.word}</Text>
        <Text style={styles.wordItemMeaning}>{item.meaning}</Text>
      </View>
      <Text style={styles.wordItemCategory}>{item.category}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm từ vựng..."
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
                selectedCategory === category && styles.selectedCategoryButton,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory === category &&
                    styles.selectedCategoryButtonText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredWords}
        renderItem={renderWordItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.wordsList}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Không tìm thấy từ vựng phù hợp</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  searchContainer: {
    padding: 15,
  },
  searchInput: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  categoriesContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    marginRight: 10,
  },
  selectedCategoryButton: {
    backgroundColor: "#4a90e2",
  },
  categoryButtonText: {
    fontSize: 14,
    color: "#333",
  },
  selectedCategoryButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  wordsList: {
    padding: 15,
  },
  wordItem: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  wordItemContent: {
    marginBottom: 10,
  },
  wordItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  wordItemMeaning: {
    fontSize: 16,
    color: "#333",
  },
  wordItemCategory: {
    fontSize: 14,
    color: "#666",
    alignSelf: "flex-end",
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
});

export default VocabularyScreen;
