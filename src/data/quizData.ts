import { Quiz } from "../models/QuizModel";
import { questionsData } from "./questionData";
import { quizQuestionData } from "./quizQuestionData";

// Quiz data type definition
export interface QuizData {
  id: string;
  title: string;
  description?: string;
  level: string;
  questionsCount: number;
  estimatedTime: string;
  completed: boolean;
}

export const quizzesData: QuizData[] = [
  {
    id: "1",
    title: "Từ vựng cơ bản",
    description: "Kiểm tra kiến thức về từ vựng tiếng Anh cơ bản hàng ngày.",
    level: "Sơ cấp",
    questionsCount: 10,
    estimatedTime: "10 phút",
    completed: false,
  },
  {
    id: "2",
    title: "Cụm từ thông dụng",
    description:
      "Học và luyện tập các cụm từ thông dụng trong giao tiếp hàng ngày.",
    level: "Sơ cấp",
    questionsCount: 8,
    estimatedTime: "8 phút",
    completed: false,
  },
  {
    id: "3",
    title: "Ngữ pháp cơ bản",
    description: "Kiểm tra kiến thức về ngữ pháp tiếng Anh cơ bản.",
    level: "Trung cấp",
    questionsCount: 15,
    estimatedTime: "15 phút",
    completed: false,
  },
  {
    id: "4",
    title: "Luyện nghe",
    description: "Bài tập luyện nghe với các đoạn hội thoại ngắn.",
    level: "Trung cấp",
    questionsCount: 5,
    estimatedTime: "12 phút",
    completed: true,
  },
  {
    id: "5",
    title: "Từ vựng nâng cao",
    description: "Kiểm tra kiến thức về từ vựng tiếng Anh nâng cao.",
    level: "Cao cấp",
    questionsCount: 20,
    estimatedTime: "20 phút",
    completed: false,
  },
];
