import Slider from "@react-native-community/slider";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Dữ liệu mẫu - Bài luyện nghe
const listeningExercisesData = [
  {
    id: "1",
    title: "Hội thoại hàng ngày",
    level: "Sơ cấp",
    description:
      "Luyện nghe các cuộc hội thoại thông thường trong cuộc sống hàng ngày.",
    audioUrl: "https://example.com/audio1.mp3",
    duration: "01:25",
    transcript: `
      A: Good morning! How are you today?
      B: I'm fine, thank you. And you?
      A: I'm good. What are your plans for today?
      B: I'm going to the library to study. Would you like to join me?
      A: I'd love to, but I have a doctor's appointment at 11.
      B: No problem. Maybe we can meet for lunch after that?
      A: Sounds great! Let's meet at the café near the library at 1 PM.
      B: Perfect. See you then!
    `,
    translation: `
      A: Chào buổi sáng! Hôm nay bạn thế nào?
      B: Tôi khỏe, cảm ơn bạn. Còn bạn?
      A: Tôi cũng khỏe. Hôm nay bạn có kế hoạch gì?
      B: Tôi sẽ đến thư viện để học. Bạn có muốn tham gia cùng tôi không?
      A: Tôi rất muốn, nhưng tôi có cuộc hẹn với bác sĩ lúc 11 giờ.
      B: Không sao. Có lẽ chúng ta có thể gặp nhau để ăn trưa sau đó?
      A: Nghe hay đấy! Hãy gặp nhau tại quán cà phê gần thư viện lúc 1 giờ chiều.
      B: Hoàn hảo. Hẹn gặp lại sau!
    `,
    questions: [
      {
        question: "Người B dự định làm gì trong ngày?",
        options: [
          "Đi mua sắm",
          "Đi đến thư viện để học",
          "Đi gặp bác sĩ",
          "Đi làm việc",
        ],
        correctAnswer: 1,
      },
      {
        question: "Tại sao người A không thể đi cùng người B?",
        options: [
          "Vì người A bận làm việc",
          "Vì người A có cuộc hẹn với bác sĩ",
          "Vì người A không thích đi thư viện",
          "Vì người A đã có kế hoạch khác với bạn bè",
        ],
        correctAnswer: 1,
      },
      {
        question: "Họ quyết định gặp nhau ở đâu sau đó?",
        options: [
          "Tại thư viện",
          "Tại nhà hàng",
          "Tại quán cà phê gần thư viện",
          "Tại phòng khám bác sĩ",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "2",
    title: "Tin tức thời sự",
    level: "Trung cấp",
    description: "Luyện nghe các bản tin thời sự bằng tiếng Anh.",
    audioUrl: "https://example.com/audio2.mp3",
    duration: "02:10",
    transcript: `
      Good evening. Here are today's headlines.
      
      The government has announced a new plan to reduce carbon emissions by 30% over the next five years. The plan includes incentives for renewable energy and higher taxes on fossil fuels.
      
      In sports news, the national soccer team has qualified for the World Cup after a 2-0 victory against their opponents last night. This will be their first appearance in the tournament in 12 years.
      
      Weather forecasts predict heavy rain and possible flooding in the eastern regions this weekend. Residents are advised to take necessary precautions.
      
      That's all for now. Join us again at 10 PM for more updates.
    `,
    translation: `
      Chào buổi tối. Đây là những tin tức chính trong ngày.
      
      Chính phủ đã công bố kế hoạch mới nhằm giảm 30% lượng khí thải carbon trong năm năm tới. Kế hoạch bao gồm các ưu đãi cho năng lượng tái tạo và tăng thuế đối với nhiên liệu hóa thạch.
      
      Trong tin thể thao, đội tuyển bóng đá quốc gia đã giành vé tham dự World Cup sau chiến thắng 2-0 trước đối thủ tối qua. Đây sẽ là lần đầu tiên họ tham dự giải đấu này sau 12 năm.
      
      Dự báo thời tiết cho biết sẽ có mưa lớn và có thể xảy ra lũ lụt ở các khu vực phía đông vào cuối tuần này. Người dân được khuyến cáo nên thực hiện các biện pháp phòng ngừa cần thiết.
      
      Đó là tất cả tin tức hiện tại. Hãy tiếp tục theo dõi chúng tôi lúc 10 giờ tối để cập nhật thêm thông tin.
    `,
    questions: [
      {
        question:
          "Chính phủ dự định giảm lượng khí thải carbon bao nhiêu phần trăm?",
        options: ["10%", "20%", "30%", "40%"],
        correctAnswer: 2,
      },
      {
        question:
          "Đội tuyển bóng đá quốc gia đã không tham dự World Cup trong bao nhiêu năm?",
        options: ["8 năm", "10 năm", "12 năm", "14 năm"],
        correctAnswer: 2,
      },
      {
        question: "Dự báo thời tiết cho biết điều gì sẽ xảy ra vào cuối tuần?",
        options: ["Nắng nóng", "Mưa lớn và có thể lũ lụt", "Bão", "Tuyết rơi"],
        correctAnswer: 1,
      },
    ],
  },
];

// Màn hình danh sách bài luyện nghe
const ListeningPractice = ({ navigation }) => {
  const renderExerciseItem = ({ item }) => (
    <TouchableOpacity
      style={styles.exerciseItem}
      onPress={() => navigation.navigate("ListeningDetail", { exercise: item })}
    >
      <View style={styles.exerciseHeader}>
        <Text style={styles.exerciseTitle}>{item.title}</Text>
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>{item.level}</Text>
        </View>
      </View>
      <Text style={styles.exerciseDescription}>{item.description}</Text>
      <View style={styles.exerciseFooter}>
        <Text style={styles.exerciseDuration}>Thời lượng: {item.duration}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenTitle}>Luyện nghe tiếng Anh</Text>
      <FlatList
        data={listeningExercisesData}
        renderItem={renderExerciseItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.exercisesList}
      />
    </SafeAreaView>
  );
};

// Màn hình chi tiết bài luyện nghe
const ListeningDetailScreen = ({ route }) => {
  const { exercise } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Giả lập việc tải và phát audio
  useEffect(() => {
    // Trong thực tế, bạn sẽ sử dụng thư viện như react-native-sound hoặc react-native-track-player
    setDuration(85); // Giả sử thời lượng là 85 giây

    return () => {
      // Dọn dẹp khi component unmount
      setIsPlaying(false);
    };
  }, []);

  // Giả lập việc cập nhật thời gian phát
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return prevTime + 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, duration]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (value) => {
    setCurrentTime(value);
    // Trong thực tế, bạn sẽ cần seek đến vị trí mới trong audio
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex,
    });
  };

  const handleSubmitAnswers = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correctCount = 0;
    exercise.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    return correctCount;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.detailHeader}>
          <Text style={styles.detailTitle}>{exercise.title}</Text>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>{exercise.level}</Text>
          </View>
        </View>

        <View style={styles.playerContainer}>
          <View style={styles.audioPlayer}>
            <TouchableOpacity
              style={styles.playButton}
              onPress={togglePlayPause}
            >
              <Text style={styles.playButtonText}>
                {isPlaying ? "⏸️" : "▶️"}
              </Text>
            </TouchableOpacity>

            <View style={styles.progressContainer}>
              <Slider
                style={styles.progressBar}
                minimumValue={0}
                maximumValue={duration}
                value={currentTime}
                onValueChange={handleSliderChange}
                minimumTrackTintColor="#4a90e2"
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor="#4a90e2"
              />
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
                <Text style={styles.timeText}>{formatTime(duration)}</Text>
              </View>
            </View>
          </View>

          <View style={styles.controlButtons}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => setCurrentTime(Math.max(0, currentTime - 10))}
            >
              <Text style={styles.controlButtonText}>-10s</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.controlButton}
              onPress={() =>
                setCurrentTime(Math.min(duration, currentTime + 10))
              }
            >
              <Text style={styles.controlButtonText}>+10s</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => setShowTranscript(!showTranscript)}
          >
            <Text style={styles.optionButtonText}>
              {showTranscript ? "Ẩn văn bản" : "Hiện văn bản"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => {
              setShowQuestions(!showQuestions);
              if (showResults) setShowResults(false);
            }}
          >
            <Text style={styles.optionButtonText}>
              {showQuestions ? "Ẩn câu hỏi" : "Làm bài tập"}
            </Text>
          </TouchableOpacity>
        </View>

        {showTranscript && (
          <View style={styles.transcriptContainer}>
            <View style={styles.transcriptTabs}>
              <TouchableOpacity
                style={[
                  styles.transcriptTab,
                  showTranscript === "english" && styles.activeTranscriptTab,
                ]}
                onPress={() => setShowTranscript("english")}
              >
                <Text style={styles.transcriptTabText}>Tiếng Anh</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.transcriptTab,
                  showTranscript === "vietnamese" && styles.activeTranscriptTab,
                ]}
                onPress={() => setShowTranscript("vietnamese")}
              >
                <Text style={styles.transcriptTabText}>Tiếng Việt</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.transcriptContent}>
              <Text style={styles.transcriptText}>{exercise.transcript}</Text>
              <Text style={styles.translationText}>{exercise.translation}</Text>
            </ScrollView>
          </View>
        )}

        {showQuestions && (
          <View style={styles.questionsContainer}>
            <Text style={styles.questionsTitle}>Câu hỏi</Text>

            {exercise.questions.map((question, qIndex) => (
              <View key={qIndex} style={styles.questionItem}>
                <Text style={styles.questionText}>
                  {qIndex + 1}. {question.question}
                </Text>

                {question.options.map((option, oIndex) => (
                  <TouchableOpacity
                    key={oIndex}
                    style={[
                      styles.optionItem,
                      selectedAnswers[qIndex] === oIndex &&
                        styles.selectedOption,
                      showResults &&
                        oIndex === question.correctAnswer &&
                        styles.correctOption,
                      showResults &&
                        selectedAnswers[qIndex] === oIndex &&
                        oIndex !== question.correctAnswer &&
                        styles.incorrectOption,
                    ]}
                    onPress={() =>
                      !showResults && handleAnswerSelect(qIndex, oIndex)
                    }
                    disabled={showResults}
                  >
                    <Text
                      style={[
                        styles.optionItemText,
                        showResults &&
                          oIndex === question.correctAnswer &&
                          styles.correctOptionText,
                        showResults &&
                          selectedAnswers[qIndex] === oIndex &&
                          oIndex !== question.correctAnswer &&
                          styles.incorrectOptionText,
                      ]}
                    >
                      {String.fromCharCode(65 + oIndex)}. {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}

            {!showResults ? (
              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmitAnswers}
              >
                <Text style={styles.submitButtonText}>Nộp bài</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.resultsContainer}>
                <Text style={styles.resultsText}>
                  Kết quả: {calculateScore()}/{exercise.questions.length} câu
                  đúng
                </Text>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 15,
  },
  exercisesList: {
    padding: 15,
  },
  exerciseItem: {
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
  exerciseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  levelBadge: {
    backgroundColor: "#4a90e2",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  levelText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  exerciseDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  exerciseFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  exerciseDuration: {
    fontSize: 12,
    color: "#888",
  },
  detailHeader: {
    padding: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
  playerContainer: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 15,
  },
  audioPlayer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  playButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4a90e2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  playButtonText: {
    fontSize: 24,
    color: "white",
  },
  progressContainer: {
    flex: 1,
  },
  progressBar: {
    width: "100%",
    height: 40,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeText: {
    fontSize: 12,
    color: "#666",
  },
  controlButtons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  controlButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    marginHorizontal: 10,
  },
  controlButtonText: {
    fontSize: 14,
    color: "#333",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  optionButton: {
    backgroundColor: "#4a90e2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  optionButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  transcriptContainer: {
    backgroundColor: "white",
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  transcriptTabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  transcriptTab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  activeTranscriptTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#4a90e2",
  },
  transcriptTabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transcriptContent: {
    padding: 15,
    maxHeight: 200,
  },
  transcriptText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  translationText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
  },
  questionsContainer: {
    backgroundColor: "white",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  questionsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  questionItem: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  optionItem: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: "#e6f2ff",
    borderColor: "#4a90e2",
  },
  correctOption: {
    backgroundColor: "#d4edda",
    borderColor: "#28a745",
  },
  incorrectOption: {
    backgroundColor: "#f8d7da",
    borderColor: "#dc3545",
  },
  optionItemText: {
    fontSize: 16,
  },
  correctOptionText: {
    color: "#28a745",
  },
  incorrectOptionText: {
    color: "#dc3545",
  },
  submitButton: {
    backgroundColor: "#4a90e2",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultsContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f0f7ff",
    borderRadius: 8,
    alignItems: "center",
  },
  resultsText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4a90e2",
  },
});

export { ListeningDetailScreen, ListeningPractice };
