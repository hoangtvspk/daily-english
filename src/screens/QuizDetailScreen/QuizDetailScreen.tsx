import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useQuizDetailViewModel } from '../../viewmodels/QuizDetailViewModel';
import { styles } from './styles';
import { Quiz } from '../../types/common';
import { useNavigation, useRoute } from '@react-navigation/native';
import { QuizDetailScreenRouteProp } from '../../types/navigation';

const QuizDetailScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<QuizDetailScreenRouteProp>();
  const { quiz } = route.params;

  const {
    currentQuestion,
    selectedOption,
    score,
    quizCompleted,
    answers,
    handleOptionSelect,
    handleNextQuestion,
    resetQuiz,
    progress,
    currentQuestionData,
    totalQuestions
  } = useQuizDetailViewModel(quiz);

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

  if (quizCompleted) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.quizCompletedContainer}>
            <Text style={styles.quizCompletedTitle}>Bài tập hoàn thành!</Text>
            <Text style={styles.quizCompletedScore}>
              Điểm số: {score}/{totalQuestions}
            </Text>
            
            <View style={styles.resultSummary}>
              <View style={styles.resultItem}>
                <View style={[styles.resultDot, styles.correctDot]} />
                <Text style={styles.resultText}>Đúng: {score}</Text>
              </View>
              <View style={styles.resultItem}>
                <View style={[styles.resultDot, styles.incorrectDot]} />
                <Text style={styles.resultText}>Sai: {totalQuestions - score}</Text>
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
                onPress={resetQuiz}
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
            Câu hỏi {currentQuestion + 1}/{totalQuestions}
          </Text>
        </View>
        
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${progress}%` }
            ]} 
          />
        </View>
        
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {currentQuestion + 1}. {currentQuestionData.question}
          </Text>
          
          {currentQuestionData.options.map((option, index) => (
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
              {currentQuestion === totalQuestions - 1 ? 'Hoàn thành' : 'Câu tiếp theo'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default QuizDetailScreen; 