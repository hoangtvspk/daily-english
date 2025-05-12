import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../types/navigation';
import { Quiz } from '../types/common';
import { useState } from 'react';
import { quizzesData } from '../screens/QuizScreen/data';

export const useQuizViewModel = () => {
  const navigation = useNavigation<NavigationProp>();
  const [quizzes] = useState<Quiz[]>(quizzesData);

  const navigateToQuizDetail = (quiz: Quiz) => {
    navigation.navigate('QuizDetail', { quiz });
  };

  return {
    quizzes,
    navigateToQuizDetail,
  };
}; 