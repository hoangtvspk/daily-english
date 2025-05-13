// Question data type definition
export interface QuestionData {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questionsData: QuestionData[] = [
  {
    id: "1",
    question: "What is the meaning of 'Appreciate'?",
    options: ["Đánh giá cao, cảm kích", "Phàn nàn", "Phớt lờ", "Từ chối"],
    correctAnswer: 0,
  },
  {
    id: "2",
    question: "Choose the correct pronunciation of 'Convenient'",
    options: [
      "/kənˈviːniənt/",
      "/kənˈveniənt/",
      "/kənˈviniənt/",
      "/kənˈviniːnt/",
    ],
    correctAnswer: 0,
  },
  {
    id: "3",
    question: "Which sentence uses 'Accomplish' correctly?",
    options: [
      "She accomplished all her goals.",
      "She accomplished to the store.",
      "She accomplished her friend.",
      "She accomplished the book.",
    ],
    correctAnswer: 0,
  },
  {
    id: "4",
    question: "What is the opposite of 'Convenient'?",
    options: ["Inconvenient", "Conveniently", "Convenience", "Convened"],
    correctAnswer: 0,
  },
  {
    id: "5",
    question: "Choose the correct meaning of 'Appreciate'",
    options: [
      "To recognize the value of something",
      "To ignore something",
      "To destroy something",
      "To forget something",
    ],
    correctAnswer: 0,
  },
  {
    id: "6",
    question: 'Cụm từ "It slipped my mind" có nghĩa là gì?',
    options: [
      "Tôi không quan tâm",
      "Tôi quên mất",
      "Tôi không hiểu",
      "Tôi không thích",
    ],
    correctAnswer: 1,
  },
  {
    id: "7",
    question: 'Câu "She ___ to the store yesterday." cần điền từ nào?',
    options: ["go", "goes", "went", "going"],
    correctAnswer: 2,
  },
  {
    id: "8",
    question: 'Câu "They ___ studying English for 2 years." cần điền từ nào?',
    options: ["are", "have been", "has been", "were"],
    correctAnswer: 1,
  },
  {
    id: "9",
    question: "Nghe và chọn câu trả lời đúng",
    options: ["Câu A", "Câu B", "Câu C", "Câu D"],
    correctAnswer: 0,
  },
  {
    id: "10",
    question: "Nghe và điền từ còn thiếu",
    options: ["Từ A", "Từ B", "Từ C", "Từ D"],
    correctAnswer: 1,
  },
  {
    id: "11",
    question: 'Từ "Ubiquitous" có nghĩa là gì?',
    options: ["Hiếm có", "Phổ biến", "Khó hiểu", "Dễ dàng"],
    correctAnswer: 1,
  },
  {
    id: "12",
    question: 'Từ "Pragmatic" có nghĩa là gì?',
    options: ["Lý thuyết", "Thực tế", "Trừu tượng", "Phức tạp"],
    correctAnswer: 1,
  },
];
