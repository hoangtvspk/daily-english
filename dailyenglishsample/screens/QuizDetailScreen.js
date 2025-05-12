import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  ScrollView
} from 'react-native';

const QuizDetailScreen = ({ route, navigation }) => {
  const { quiz } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);
  
  // Nếu không có câu hỏi, hiển thị thông báo
  if (!quiz.questions || quiz.questions.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.noQuestionsContainer}>
          <Text style={styles.noQuestionsText}>
            Bài tập này đang được cập nhật. Vui lòng quay lại sau.
          </Text>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Quay lại</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };
  
  const handleNextQuestion = () => {
    // Lưu câu trả lời
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = {
      question: quiz.questions[currentQuestion].question,
      selectedOption: selectedOption,
      correctOption: quiz.questions[currentQuestion].correctAnswer,
      isCorrect: selectedOption === quiz.questions[currentQuestion].correctAnswer
    };
    setAnswers(newAnswers);
    
    // Cập nhật điểm số
    if (selectedOption === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    // Chuyển sang câu hỏi tiếp theo hoặc kết thúc bài tập
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };
  
  if (quizCompleted) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.quizCompletedContainer}>
            <Text style={styles.quizCompletedTitle}>Bài tập hoàn thành!</Text>
            <Text style={styles.quizCompletedScore}>
              Điểm số: {score}/{quiz.questions.length}
            </Text>
            
            <View style={styles.resultSummary}>
              <View style={styles.resultItem}>
                <View style={[styles.resultDot, styles.correctDot]} />
                <Text style={styles.resultText}>Đúng: {score}</Text>
              </View>
              <View style={styles.resultItem}>
                <View style={[styles.resultDot, styles.incorrectDot]} />
                <Text style={styles.resultText}>Sai: {quiz.questions.length - score}</Text>
              </View>
            </View>
            
            <Text style={styles.reviewTitle}>Xem lại câu trả lời:</Text>
            
            {answers.map((answer, index) => (
              <View key={index} style={styles.reviewItem}>
                <Text style={styles.reviewQuestion}>
                  {index + 1}. {answer.question}
                </Text>
                <View style={[
                  styles.reviewAnswer,
                  answer.isCorrect ? styles.correctAnswer : styles.incorrectAnswer
                ]}>
                  <Text style={styles.reviewAnswerText}>
                    Bạn chọn: {quiz.questions[index].options[answer.selectedOption]}
                  </Text>
                  {!answer.isCorrect && (
                    <Text style={styles.correctAnswerText}>
                      Đáp án đúng: {quiz.questions[index].options[answer.correctOption]}
                    </Text>
                  )}
                </View>
              </View>
            ))}
            
            <View style={styles.actionButtons}>
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.actionButtonText}>Quay lại</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.actionButton, styles.retryButton]}
                onPress={() => {
                  setCurrentQuestion(0);
                  setSelectedOption(null);
                  setScore(0);
                  setQuizCompleted(false);
                  setAnswers([]);
                }}
              >
                <Text style={styles.actionButtonText}>Làm lại</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.quizDetailContainer}>
        <View style={styles.quizHeader}>
          <Text style={styles.quizTitle}>{quiz.title}</Text>
          <Text style={styles.quizProgress}>
            Câu hỏi {currentQuestion + 1}/{quiz.questions.length}
          </Text>
        </View>
        
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }
            ]} 
          />
        </View>
        
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {currentQuestion + 1}. {quiz.questions[currentQuestion].question}
          </Text>
          
          {quiz.questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedOption === index && styles.selectedOption
              ]}
              onPress={() => handleOptionSelect(index)}
            >
              <Text style={styles.optionText}>
                {String.fromCharCode(65 + index)}. {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={[
              styles.nextButton,
              selectedOption === null && styles.disabledButton
            ]}
            onPress={handleNextQuestion}
            disabled={selectedOption === null}
          >
            <Text style={styles.nextButtonText}>
              {currentQuestion === quiz.questions.length - 1 ? 'Hoàn thành' : 'Câu tiếp theo'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  quizDetailContainer: {
    flex: 1,
    padding: 20,
  },
  quizHeader: {
    marginBottom: 15,
  },
  quizTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  quizProgress: {
    fontSize: 16,
    color: '#666',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 20,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4a90e2',
    borderRadius: 4,
  },
  questionContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#d0e8ff',
    borderWidth: 2,
    borderColor: '#4a90e2',
  },
  optionText: {
    fontSize: 16,
  },
  navigationButtons: {
    marginTop: 'auto',
  },
  nextButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noQuestionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noQuestionsText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  backButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  quizCompletedContainer: {
    padding: 20,
  },
  quizCompletedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  quizCompletedScore: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#4a90e2',
  },
  resultSummary: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  resultDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  correctDot: {
    backgroundColor: '#4ecdc4',
  },
  incorrectDot: {
    backgroundColor: '#ff6b6b',
  },
  resultText: {
    fontSize: 16,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  reviewItem: {
    marginBottom: 15,
  },
  reviewQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewAnswer: {
    padding: 10,
    borderRadius: 8,
  },
  correctAnswer: {
    backgroundColor: '#d4edda',
  },
  incorrectAnswer: {
    backgroundColor: '#f8d7da',
  },
  reviewAnswerText: {
    fontSize: 14,
  },
  correctAnswerText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#28a745',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  actionButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  retryButton: {
    backgroundColor: '#4ecdc4',
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default QuizDetailScreen;