import { Quiz } from "../../types/common";

export const quizzesData: Quiz[] = [
  {
    id: "1",
    title: "Từ vựng cơ bản",
    description: "Kiểm tra kiến thức về từ vựng tiếng Anh cơ bản hàng ngày.",
    questions: [
      {
        question: 'Từ "Appreciate" có nghĩa là gì?',
        options: ["Đánh giá cao", "Phê bình", "Từ chối", "Đồng ý"],
        correctAnswer: 0,
      },
      {
        question: 'Từ "Convenient" có nghĩa là gì?',
        options: ["Khó khăn", "Thuận tiện", "Đắt đỏ", "Rẻ tiền"],
        correctAnswer: 1,
      },
    ],
    level: "Sơ cấp",
    questionsCount: 10,
    estimatedTime: "10 phút",
    completed: false,
  },
  {
    id: "2",
    title: "Cụm từ thông dụng",
    description: "Học và luyện tập các cụm từ thông dụng trong giao tiếp hàng ngày.",
    questions: [
      {
        question: 'Cụm từ "How have you been?" có nghĩa là gì?',
        options: [
          "Bạn đã đi đâu?",
          "Bạn đã làm gì?",
          "Dạo này bạn thế nào?",
          "Bạn đã ở đâu?",
        ],
        correctAnswer: 2,
      },
      {
        question: 'Cụm từ "It slipped my mind" có nghĩa là gì?',
        options: [
          "Tôi không quan tâm",
          "Tôi quên mất",
          "Tôi không hiểu",
          "Tôi không thích",
        ],
        correctAnswer: 1,
      },
    ],
    level: "Sơ cấp",
    questionsCount: 8,
    estimatedTime: "8 phút",
    completed: false,
  },
  {
    id: "3",
    title: "Ngữ pháp cơ bản",
    description: "Kiểm tra kiến thức về ngữ pháp tiếng Anh cơ bản.",
    questions: [
      {
        question: 'Câu "She ___ to the store yesterday." cần điền từ nào?',
        options: ["go", "goes", "went", "going"],
        correctAnswer: 2,
      },
      {
        question: 'Câu "They ___ studying English for 2 years." cần điền từ nào?',
        options: ["are", "have been", "has been", "were"],
        correctAnswer: 1,
      },
    ],
    level: "Trung cấp",
    questionsCount: 15,
    estimatedTime: "15 phút",
    completed: false,
  },
  {
    id: "4",
    title: "Luyện nghe",
    description: "Bài tập luyện nghe với các đoạn hội thoại ngắn.",
    questions: [
      {
        question: "Nghe và chọn câu trả lời đúng",
        options: ["Câu A", "Câu B", "Câu C", "Câu D"],
        correctAnswer: 0,
      },
      {
        question: "Nghe và điền từ còn thiếu",
        options: ["Từ A", "Từ B", "Từ C", "Từ D"],
        correctAnswer: 1,
      },
    ],
    level: "Trung cấp",
    questionsCount: 5,
    estimatedTime: "12 phút",
    completed: true,
  },
  {
    id: "5",
    title: "Từ vựng nâng cao",
    description: "Kiểm tra kiến thức về từ vựng tiếng Anh nâng cao.",
    questions: [
      {
        question: 'Từ "Ubiquitous" có nghĩa là gì?',
        options: ["Hiếm có", "Phổ biến", "Khó hiểu", "Dễ dàng"],
        correctAnswer: 1,
      },
      {
        question: 'Từ "Pragmatic" có nghĩa là gì?',
        options: ["Lý thuyết", "Thực tế", "Trừu tượng", "Phức tạp"],
        correctAnswer: 1,
      },
    ],
    level: "Cao cấp",
    questionsCount: 20,
    estimatedTime: "20 phút",
    completed: false,
  },
]; 