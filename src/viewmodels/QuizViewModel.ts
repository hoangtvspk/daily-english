import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as QuizService from "../services/QuizService";
import { QuizModel } from "../models/QuizModel";

// Define navigation param list type
type RootStackParamList = {
  QuizDetail: { quizId: string };
};

// Define navigation prop type
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "QuizDetail"
>;

export const useQuizViewModel = () => {
  const navigation = useNavigation<NavigationProp>();
  const [quizModel, setQuizModel] = useState<QuizModel>({ quizzes: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadQuizzes();
  }, []);

  const loadQuizzes = async () => {
    try {
      setIsLoading(true);
      const quizzes = await QuizService.getQuizzes();
      setQuizModel({ quizzes });
      setError(null);
    } catch (err) {
      setError("Failed to load quizzes");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateToQuizDetail = (quizId: string) => {
    navigation.navigate("QuizDetail", { quizId });
  };

  return {
    quizzes: quizModel.quizzes,
    navigateToQuizDetail,
    isLoading,
    error,
    refresh: loadQuizzes,
  };
};
