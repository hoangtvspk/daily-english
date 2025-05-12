import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useQuizViewModel } from '../../viewmodels/QuizViewModel';
import { styles } from './styles';
import { Quiz } from '../../types/common';

const QuizScreen: React.FC = () => {
  const { quizzes, navigateToQuizDetail } = useQuizViewModel();

  const renderQuizItem = ({ item }: { item: Quiz }) => (
    <TouchableOpacity
      style={[styles.quizItem, item.completed && styles.completedQuizItem]}
      onPress={() => navigateToQuizDetail(item)}
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
          onPress={() => navigateToQuizDetail(item)}
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
        data={quizzes}
        renderItem={renderQuizItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.quizList}
      />
    </SafeAreaView>
  );
};

export default QuizScreen; 