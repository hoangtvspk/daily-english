
interface VocabularyCategory {
  id: string;
  title: string;
  icon: string;
  wordCount: number;
}

export const categoriesData: VocabularyCategory[] = [
  { id: "1", title: "Giao tiếp", icon: "💬", wordCount: 10 },
  { id: "2", title: "Du lịch", icon: "✈️", wordCount: 10 },
  { id: "3", title: "Công việc", icon: "💼", wordCount: 10 },
  { id: "4", title: "Ẩm thực", icon: "🍽️", wordCount: 10 },
  { id: "5", title: "Giải trí", icon: "🎬", wordCount: 10 },
  { id: "6", title: "Thể thao", icon: "⚽", wordCount: 10 },
  { id: "7", title: "Gia đình", icon: "👨‍👩‍👧‍👦", wordCount: 10 },
  { id: "8", title: "Sức khỏe", icon: "💊", wordCount: 10 },
  { id: "9", title: "Thời tiết", icon: "☀️", wordCount: 10 },
  { id: "10", title: "Công nghệ", icon: "💻", wordCount: 10 },
]; 