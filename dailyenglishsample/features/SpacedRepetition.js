import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Thuật toán lặp lại ngắt quãng (Spaced Repetition)
const calculateNextReviewDate = (level) => {
  // Dựa trên thuật toán SM-2
  const intervals = [1, 2, 4, 7, 15, 30, 60, 120, 240];
  const days =
    level < intervals.length
      ? intervals[level]
      : intervals[intervals.length - 1];

  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

const SpacedRepetition = () => {
  const [reviewItems, setReviewItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isReviewComplete, setIsReviewComplete] = useState(false);

  useEffect(() => {
    loadReviewItems();
  }, []);

  const loadReviewItems = async () => {
    try {
      // Trong thực tế, dữ liệu này sẽ được lấy từ cơ sở dữ liệu
      const mockItems = [
        {
          id: "1",
          word: "Appreciate",
          meaning: "Đánh giá cao, cảm kích",
          example: "I really appreciate your help.",
          level: 0,
          nextReview: new Date(),
        },
        {
          id: "2",
          word: "Convenient",
          meaning: "Thuận tiện, tiện lợi",
          example: "Is this time convenient for you?",
          level: 0,
          nextReview: new Date(),
        },
        {
          id: "3",
          word: "Accomplish",
          meaning: "Hoàn thành, đạt được",
          example: "She accomplished all her goals.",
          level: 0,
          nextReview: new Date(),
        },
      ];

      // Lọc các từ cần ôn tập hôm nay
      const today = new Date();
      const itemsToReview = mockItems.filter(
        (item) => new Date(item.nextReview) <= today
      );

      setReviewItems(itemsToReview);
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu ôn tập:", error);
    }
  };

  const handleResponse = (remembered) => {
    if (currentIndex >= reviewItems.length) return;

    const updatedItems = [...reviewItems];
    const currentItem = updatedItems[currentIndex];

    if (remembered) {
      // Nếu nhớ được từ, tăng cấp độ
      currentItem.level += 1;
    } else {
      // Nếu không nhớ, đặt lại cấp độ
      currentItem.level = 0;
    }

    // Tính toán ngày ôn tập tiếp theo
    currentItem.nextReview = calculateNextReviewDate(currentItem.level);

    // Lưu dữ liệu đã cập nhật
    // Trong thực tế, dữ liệu này sẽ được lưu vào cơ sở dữ liệu

    setShowAnswer(false);

    if (currentIndex < reviewItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsReviewComplete(true);
    }
  };

  if (reviewItems.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Không có từ vựng cần ôn tập hôm nay!
          </Text>
          <Text style={styles.emptySubText}>
            Quay lại vào ngày mai hoặc thêm từ mới để học.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (isReviewComplete) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.completeContainer}>
          <Text style={styles.completeTitle}>Chúc mừng!</Text>
          <Text style={styles.completeText}>
            Bạn đã hoàn thành phiên ôn tập hôm nay.
          </Text>
          <Text style={styles.completeStats}>
            Đã ôn tập: {reviewItems.length} từ
          </Text>
          <TouchableOpacity
            style={styles.completeButton}
            onPress={() => {
              setCurrentIndex(0);
              setIsReviewComplete(false);
              loadReviewItems();
            }}
          >
            <Text style={styles.completeButtonText}>Quay lại</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const currentItem = reviewItems[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          {currentIndex + 1} / {reviewItems.length}
        </Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${((currentIndex + 1) / reviewItems.length) * 100}%` },
            ]}
          />
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardWord}>{currentItem.word}</Text>

          {showAnswer ? (
            <View style={styles.answerContainer}>
              <Text style={styles.cardMeaning}>{currentItem.meaning}</Text>
              <View style={styles.exampleContainer}>
                <Text style={styles.cardExample}>{currentItem.example}</Text>
              </View>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.showAnswerButton}
              onPress={() => setShowAnswer(true)}
            >
              <Text style={styles.showAnswerText}>Hiển thị nghĩa</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {showAnswer && (
        <View style={styles.responseContainer}>
          <TouchableOpacity
            style={[styles.responseButton, styles.forgotButton]}
            onPress={() => handleResponse(false)}
          >
            <Text style={styles.responseButtonText}>Không nhớ</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.responseButton, styles.rememberedButton]}
            onPress={() => handleResponse(true)}
          >
            <Text style={styles.responseButtonText}>Nhớ rồi</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  progressContainer: {
    padding: 20,
  },
  progressText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  progressBar: {
    height: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4a90e2",
    borderRadius: 5,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  cardWord: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  showAnswerButton: {
    backgroundColor: "#4a90e2",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  showAnswerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  answerContainer: {
    width: "100%",
    alignItems: "center",
  },
  cardMeaning: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: "center",
  },
  exampleContainer: {
    backgroundColor: "#f0f7ff",
    padding: 15,
    borderRadius: 8,
    width: "100%",
  },
  cardExample: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
  },
  responseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  responseButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 10,
  },
  forgotButton: {
    backgroundColor: "#ff6b6b",
  },
  rememberedButton: {
    backgroundColor: "#4ecdc4",
  },
  responseButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  emptySubText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  completeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  completeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  completeText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  completeStats: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  completeButton: {
    backgroundColor: "#4a90e2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  completeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SpacedRepetition;
