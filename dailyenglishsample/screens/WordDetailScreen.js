import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const WordDetailScreen = ({ route }) => {
  const { word } = route.params;
  const [practiceText, setPracticeText] = useState("");
  const [showPracticeResult, setShowPracticeResult] = useState(false);

  const handleSubmit = () => {
    if (practiceText.trim()) {
      setShowPracticeResult(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wordDetailCard}>
          <Text style={styles.wordDetailTitle}>{word.word}</Text>
          <Text style={styles.wordDetailPronunciation}>
            {word.pronunciation}
          </Text>
          <Text style={styles.wordDetailMeaning}>{word.meaning}</Text>

          <View style={styles.wordDetailSection}>
            <Text style={styles.wordDetailSectionTitle}>Ví dụ:</Text>
            <Text style={styles.wordDetailExample}>{word.example}</Text>
            <Text style={styles.wordDetailExampleTranslation}>
              {word.exampleTranslation}
            </Text>
          </View>

          <View style={styles.wordDetailSection}>
            <Text style={styles.wordDetailSectionTitle}>Phát âm:</Text>
            <TouchableOpacity style={styles.pronunciationButton}>
              <Text style={styles.pronunciationButtonText}>Nghe phát âm</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.wordDetailSection}>
            <Text style={styles.wordDetailSectionTitle}>Luyện tập:</Text>
            <Text style={styles.practiceInstruction}>
              Viết một câu sử dụng từ &quot;{word.word}&quot;:
            </Text>
            <TextInput
              style={styles.practiceInput}
              placeholder="Viết câu của bạn ở đây..."
              multiline
              value={practiceText}
              onChangeText={setPracticeText}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Gửi</Text>
            </TouchableOpacity>

            {showPracticeResult && (
              <View style={styles.practiceResultContainer}>
                <Text style={styles.practiceResultTitle}>Phản hồi:</Text>
                <Text style={styles.practiceResultText}>
                  Câu của bạn đã sử dụng từ &quot;{word.word}&quot; đúng ngữ
                  cảnh. Tiếp tục luyện tập để cải thiện kỹ năng!
                </Text>
              </View>
            )}
          </View>

          <View style={styles.wordDetailSection}>
            <Text style={styles.wordDetailSectionTitle}>Từ liên quan:</Text>
            <View style={styles.relatedWordsContainer}>
              <TouchableOpacity style={styles.relatedWordButton}>
                <Text style={styles.relatedWordText}>grateful</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.relatedWordButton}>
                <Text style={styles.relatedWordText}>thankful</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.relatedWordButton}>
                <Text style={styles.relatedWordText}>value</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Thêm vào danh sách ôn tập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Đánh dấu đã học</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  wordDetailCard: {
    padding: 20,
  },
  wordDetailTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  wordDetailPronunciation: {
    fontSize: 18,
    color: "#666",
    marginBottom: 15,
  },
  wordDetailMeaning: {
    fontSize: 20,
    marginBottom: 20,
  },
  wordDetailSection: {
    marginBottom: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  wordDetailSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4a90e2",
  },
  wordDetailExample: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 5,
  },
  wordDetailExampleTranslation: {
    fontSize: 16,
    color: "#666",
  },
  pronunciationButton: {
    backgroundColor: "#4a90e2",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    width: 150,
  },
  pronunciationButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  practiceInstruction: {
    fontSize: 16,
    marginBottom: 10,
  },
  practiceInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    height: 100,
    textAlignVertical: "top",
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  submitButton: {
    backgroundColor: "#4a90e2",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  practiceResultContainer: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#f0f7ff",
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#4a90e2",
  },
  practiceResultTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  practiceResultText: {
    fontSize: 14,
    lineHeight: 20,
  },
  relatedWordsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  relatedWordButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    margin: 5,
  },
  relatedWordText: {
    fontSize: 14,
    color: "#4a90e2",
  },
  actionButtons: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  actionButton: {
    flex: 1,
    backgroundColor: "#4a90e2",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  actionButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default WordDetailScreen;
