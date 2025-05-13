import { UserProfile } from "../types/common";

export const profileData: UserProfile = {
  name: "Học Viên",
  level: "Sơ cấp",
  streak: 7,
  wordsLearned: 21,
  phrasesLearned: 12,
  quizzesCompleted: 5,
  points: 350,
  achievements: [
    {
      id: "1",
      title: "7 ngày liên tiếp",
      description: "Học tiếng Anh 7 ngày liên tiếp",
      icon: "🔥",
      unlocked: true,
    },
    {
      id: "2",
      title: "Từ vựng cơ bản",
      description: "Học 20 từ vựng cơ bản",
      icon: "📚",
      unlocked: true,
    },
    {
      id: "3",
      title: "Bậc thầy ngữ pháp",
      description: "Hoàn thành 10 bài tập ngữ pháp",
      icon: "🏆",
      unlocked: false,
    },
  ],
};
