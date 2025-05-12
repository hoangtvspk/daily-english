import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Dữ liệu mẫu - Bài tập
const quizzesData = [
  {
    id: "1",
    title: "Từ vựng cơ bản",
    description: "Kiểm tra kiến thức về từ vựng tiếng Anh cơ bản hàng ngày.",
    questions: [
      {
        question: 'Từ "Appreciate" có nghĩa là gì?',
        options: ["Đánh giá cao", "Phê bình", "Từ chối", "Đồng ý"],
        correctAnswer: 0,
      },
      {
        question: 'Từ "Convenient" có nghĩa là gì?',
        options: ["Khó khăn", "Thuận tiện", "Đắt đỏ", "Rẻ tiền"],
        correctAnswer: 1,
      },
    ],
    level: "Sơ cấp",
    questionsCount: 10,
    estimatedTime: "10 phút",
    completed: false,
  },
  {
    id: "2",
    title: "Cụm từ thông dụng",
    description:
      "Học và luyện tập các cụm từ thông dụng trong giao tiếp hàng ngày.",
    questions: [
      {
        question: 'Cụm từ "How have you been?" có nghĩa là gì?',
        options: [
          "Bạn đã đi đâu?",
          "Bạn đã làm gì?",
          "Dạo này bạn thế nào?",
          "Bạn đã ở đâu?",
        ],
        correctAnswer: 2,
      },
      {
        question: 'Cụm từ "It slipped my mind" có nghĩa là gì?',
        options: [
          "Tôi không quan tâm",
          "Tôi quên mất",
          "Tôi không hiểu",
          "Tôi không thích",
        ],
        correctAnswer: 1,
      },
    ],
    level: "Sơ cấp",
    questionsCount: 8,
    estimatedTime: "8 phút",
    completed: false,
  },
  {
    id: "3",
    title: "Ngữ pháp cơ bản",
    description: "Kiểm tra kiến thức về ngữ pháp tiếng Anh cơ bản.",
    questions: [
      {
        question: 'Câu "She ___ to the store yesterday." cần điền từ nào?',
        options: ["go", "goes", "went", "going"],
        correctAnswer: 2,
      },
      {
        question:
          'Câu "They ___ studying English for 2 years." cần điền từ nào?',
        options: ["are", "have been", "has been", "were"],
        correctAnswer: 1,
      },
    ],
    level: "Trung cấp",
    questionsCount: 15,
    estimatedTime: "15 phút",
    completed: false,
  },
  {
    id: "4",
    title: "Luyện nghe",
    description: "Bài tập luyện nghe với các đoạn hội thoại ngắn.",
    level: "Trung cấp",
    questionsCount: 5,
    estimatedTime: "12 phút",
    completed: true,
  },
  {
    id: "5",
    title: "Từ vựng nâng cao",
    description: "Kiểm tra kiến thức về từ vựng tiếng Anh nâng cao.",
    level: "Cao cấp",
    questionsCount: 20,
    estimatedTime: "20 phút",
    completed: false,
  },
];

const QuizScreen = ({ navigation }) => {
  const renderQuizItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.quizItem, item.completed && styles.completedQuizItem]}
      onPress={() => navigation.navigate("QuizDetail", { quiz: item })}
    >
      <View style={styles.quizHeader}>
        <View style={styles.quizInfo}>
          <Text style={styles.quizTitle}>{item.title}</Text>
          <View style={styles.quizMeta}>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>{item.level}</Text>
            </View>
            <Text style={styles.quizCount}>{item.questionsCount} câu hỏi</Text>
            <Text style={styles.quizTime}>{item.estimatedTime}</Text>
          </View>
        </View>
        {item.completed && (
          <View style={styles.completedBadge}>
            <Text style={styles.completedText}>✓</Text>
          </View>
        )}
      </View>

      <Text style={styles.quizDescription}>{item.description}</Text>

      <View style={styles.quizFooter}>
        <TouchableOpacity
          style={[styles.startButton, item.completed && styles.restartButton]}
          onPress={() => navigation.navigate("QuizDetail", { quiz: item })}
        >
          <Text style={styles.startButtonText}>
            {item.completed ? "Làm lại" : "Bắt đầu"}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bài tập luyện tập</Text>
        <Text style={styles.headerSubtitle}>
          Hoàn thành các bài tập để cải thiện kỹ năng tiếng Anh
        </Text>
      </View>

      <FlatList
        data={quizzesData}
        renderItem={renderQuizItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.quizList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    padding: 20,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  quizList: {
    padding: 15,
  },
  quizItem: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  completedQuizItem: {
    borderLeftWidth: 4,
    borderLeftColor: "#4ecdc4",
  },
  quizHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  quizInfo: {
    flex: 1,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  quizMeta: {
    flexDirection: "row",
    alignItems: "center",
  },
  levelBadge: {
    backgroundColor: "#4a90e2",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginRight: 10,
  },
  levelText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  quizCount: {
    fontSize: 12,
    color: "#666",
    marginRight: 10,
  },
  quizTime: {
    fontSize: 12,
    color: "#666",
  },
  completedBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#4ecdc4",
    justifyContent: "center",
    alignItems: "center",
  },
  completedText: {
    color: "white",
    fontWeight: "bold",
  },
  quizDescription: {
    fontSize: 14,
    color: "#333",
    marginBottom: 15,
  },
  quizFooter: {
    alignItems: "flex-end",
  },
  startButton: {
    backgroundColor: "#4a90e2",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  restartButton: {
    backgroundColor: "#4ecdc4",
  },
  startButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default QuizScreen;
