import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useHomeViewModel } from '../../viewmodels/HomeViewModel';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';
import { styles } from './styles';
import { quizzesData } from '../QuizScreen/data';
import { Word } from '../../types/common';
const HomeScreen: React.FC = () => {
  const { todayWord, formattedDate, streakCount, dailyWords } = useHomeViewModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Xin chào!</Text>
          <Text style={styles.dateText}>Hoàng Trần</Text>
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
            onPress={() => navigation.navigate('WordDetail', { word: todayWord as Word })}
          >
            <Text style={styles.practiceButtonText}>Luyện tập</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.streakCard}>
          <Text style={styles.streakTitle}>Chuỗi ngày học</Text>
          <View style={styles.streakInfo}>
            <Text style={styles.streakCount}>{streakCount}</Text>
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
              <View style={[styles.suggestionIcon, { backgroundColor: '#FFD700' }]}> 
                <Text style={styles.suggestionIconText}>📝</Text>
              </View>
              <Text style={styles.suggestionTitle}>Cụm từ thông dụng</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.suggestionCard}
              onPress={() => navigation.navigate('QuizDetail', { quiz: quizzesData[0] })}
            >
              <View style={[styles.suggestionIcon, { backgroundColor: '#FF6B6B' }]}> 
                <Text style={styles.suggestionIconText}>🎮</Text>
              </View>
              <Text style={styles.suggestionTitle}>Bài tập hôm nay</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.suggestionCard}
              onPress={() => navigation.navigate('Dictionary')}
            >
              <View style={[styles.suggestionIcon, { backgroundColor: '#4ECDC4' }]}> 
                <Text style={styles.suggestionIconText}>📚</Text>
              </View>
              <Text style={styles.suggestionTitle}>Từ điển</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Tính năng nổi bật</Text>

          <TouchableOpacity
            style={styles.featuredCard}
            onPress={() => {}}
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
            onPress={() => {}}
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



export default HomeScreen; 