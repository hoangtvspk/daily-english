import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList,
  SafeAreaView,
  Image,
  ScrollView
} from 'react-native';

// Dữ liệu mẫu - Từ vựng hàng ngày
const dailyWordsData = [
  {
    id: '1',
    date: '12/05/2025',
    word: 'Appreciate',
    pronunciation: '/əˈpriːʃieɪt/',
    meaning: 'Đánh giá cao, cảm kích',
    example: 'I really appreciate your help.',
    exampleTranslation: 'Tôi thực sự cảm kích sự giúp đỡ của bạn.',
    category: 'Giao tiếp hàng ngày'
  },
  {
    id: '2',
    date: '11/05/2025',
    word: 'Convenient',
    pronunciation: '/kənˈviːniənt/',
    meaning: 'Thuận tiện, tiện lợi',
    example: 'Is this time convenient for you?',
    exampleTranslation: 'Thời gian này có thuận tiện cho bạn không?',
    category: 'Giao tiếp hàng ngày'
  },
  {
    id: '3',
    date: '10/05/2025',
    word: 'Accomplish',
    pronunciation: '/əˈkʌmplɪʃ/',
    meaning: 'Hoàn thành, đạt được',
    example: 'She accomplished all her goals.',
    exampleTranslation: 'Cô ấy đã hoàn thành tất cả các mục tiêu của mình.',
    category: 'Công việc'
  },
];

const HomeScreen = ({ navigation }) => {
  const today = new Date();
  const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  const todayWord = dailyWordsData[0]; // Lấy từ mới nhất

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Xin chào!</Text>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </View>
        
        <View style={styles.dailyWordCard}>
          <Text style={styles.cardTitle}>Từ vựng hôm nay</Text>
          <Text style={styles.wordText}>{todayWord.word}</Text>
          <Text style={styles.pronunciationText}>{todayWord.pronunciation}</Text>
          <Text style={styles.meaningText}>{todayWord.meaning}</Text>
          <View style={styles.exampleBox}>
            <Text style={styles.exampleText}>{todayWord.example}</Text>
            <Text style={styles.exampleTranslationText}>{todayWord.exampleTranslation}</Text>
          </View>
          <TouchableOpacity 
            style={styles.practiceButton}
            onPress={() => navigation.navigate('WordDetail', { word: todayWord })}
          >
            <Text style={styles.practiceButtonText}>Luyện tập</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.streakCard}>
          <Text style={styles.streakTitle}>Chuỗi ngày học</Text>
          <View style={styles.streakInfo}>
            <Text style={styles.streakCount}>7</Text>
            <Text style={styles.streakText}>ngày liên tiếp</Text>
          </View>
          <View style={styles.streakDays}>
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <View key={day} style={styles.streakDay}>
                <Text style={styles.streakDayText}>{day}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.suggestionsSection}>
          <Text style={styles.sectionTitle}>Đề xuất cho bạn</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity 
              style={styles.suggestionCard}
              onPress={() => navigation.navigate('Phrases')}
            >
              <View style={[styles.suggestionIcon, {backgroundColor: '#FFD700'}]}>
                <Text style={styles.suggestionIconText}>📝</Text>
              </View>
              <Text style={styles.suggestionTitle}>Cụm từ thông dụng</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.suggestionCard}
              onPress={() => navigation.navigate('Quiz')}
            >
              <View style={[styles.suggestionIcon, {backgroundColor: '#FF6B6B'}]}>
                <Text style={styles.suggestionIconText}>🎮</Text>
              </View>
              <Text style={styles.suggestionTitle}>Bài tập hôm nay</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.suggestionCard}
              onPress={() => navigation.navigate('Dictionary')}
            >
              <View style={[styles.suggestionIcon, {backgroundColor: '#4ECDC4'}]}>
                <Text style={styles.suggestionIconText}>📚</Text>
              </View>
              <Text style={styles.suggestionTitle}>Từ điển</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.suggestionCard}
              onPress={() => navigation.navigate('SpacedRepetition')}
            >
              <View style={[styles.suggestionIcon, {backgroundColor: '#A569BD'}]}>
                <Text style={styles.suggestionIconText}>🔄</Text>
              </View>
              <Text style={styles.suggestionTitle}>Ôn tập từ vựng</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.suggestionCard}
              onPress={() => navigation.navigate('GrammarLessons')}
            >
              <View style={[styles.suggestionIcon, {backgroundColor: '#58D68D'}]}>
                <Text style={styles.suggestionIconText}>📖</Text>
              </View>
              <Text style={styles.suggestionTitle}>Ngữ pháp</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Tính năng nổi bật</Text>
          
          <TouchableOpacity 
            style={styles.featuredCard}
            onPress={() => navigation.navigate('ListeningPractice')}
          >
            <View style={styles.featuredCardContent}>
              <View style={styles.featuredCardIcon}>
                <Text style={styles.featuredCardIconText}>🎧</Text>
              </View>
              <View style={styles.featuredCardInfo}>
                <Text style={styles.featuredCardTitle}>Luyện nghe tiếng Anh</Text>
                <Text style={styles.featuredCardDescription}>
                  Luyện nghe với các đoạn hội thoại thực tế và bài tập
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.featuredCard}
            onPress={() => navigation.navigate('LearningHome')}
          >
            <View style={styles.featuredCardContent}>
              <View style={styles.featuredCardIcon}>
                <Text style={styles.featuredCardIconText}>🗺️</Text>
              </View>
              <View style={styles.featuredCardInfo}>
                <Text style={styles.featuredCardTitle}>Lộ trình học</Text>
                <Text style={styles.featuredCardDescription}>
                  Học tiếng Anh theo lộ trình có cấu trúc
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#4a90e2',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  dateText: {
    fontSize: 16,
    color: 'white',
    opacity: 0.8,
  },
  dailyWordCard: {
    margin: 15,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 10,
  },
  wordText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  pronunciationText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  meaningText: {
    fontSize: 18,
    marginBottom: 15,
  },
  exampleBox: {
    backgroundColor: '#f0f7ff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  exampleText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  exampleTranslationText: {
    fontSize: 16,
    color: '#666',
  },
  practiceButton: {
    backgroundColor: '#4a90e2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  practiceButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  streakCard: {
    margin: 15,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  streakTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  streakInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  streakCount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginRight: 10,
  },
  streakText: {
    fontSize: 16,
    color: '#666',
  },
  streakDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  streakDay: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  streakDayText: {
    color: 'white',
    fontWeight: 'bold',
  },
  suggestionsSection: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  suggestionCard: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  suggestionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  suggestionIconText: {
    fontSize: 24,
  },
  suggestionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  featuredSection: {
    margin: 15,
    marginBottom: 30,
  },
  featuredCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  featuredCardContent: {
    flexDirection: 'row',
    padding: 15,
  },
  featuredCardIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f7ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  featuredCardIconText: {
    fontSize: 24,
  },
  featuredCardInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  featuredCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  featuredCardDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;