import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
  Vocabulary: undefined;
  WordDetail: { wordId: string };
  Dictionary: undefined;
  Quiz: undefined;
  QuizDetail: { quizId: string };
  Phrases: undefined;
  Profile: undefined;
  HomeTabs: undefined;
  // Thêm các màn hình khác nếu có
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type QuizDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "QuizDetail"
>;
export type WordDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "WordDetail"
>;
