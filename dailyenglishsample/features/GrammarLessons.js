import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Dữ liệu mẫu - Bài học ngữ pháp
const grammarLessonsData = [
  {
    id: "1",
    title: "Thì hiện tại đơn (Present Simple)",
    level: "Cơ bản",
    description:
      "Thì hiện tại đơn dùng để diễn tả thói quen, sự thật hiển nhiên hoặc hành động lặp đi lặp lại.",
    content: `
      <h2>Cách sử dụng</h2>
      <p>Thì hiện tại đơn được sử dụng để:</p>
      <ul>
        <li>Diễn tả thói quen, hành động lặp đi lặp lại: <em>I usually wake up at 6 AM.</em></li>
        <li>Diễn tả sự thật hiển nhiên: <em>The sun rises in the east.</em></li>
        <li>Diễn tả lịch trình, thời gian biểu: <em>The train leaves at 8 PM tonight.</em></li>
      </ul>
      
      <h2>Cấu trúc</h2>
      <p><strong>Khẳng định:</strong></p>
      <ul>
        <li>I/You/We/They + V(nguyên thể)</li>
        <li>He/She/It + V(nguyên thể) + s/es</li>
      </ul>
      
      <p><strong>Phủ định:</strong></p>
      <ul>
        <li>I/You/We/They + do not (don't) + V(nguyên thể)</li>
        <li>He/She/It + does not (doesn't) + V(nguyên thể)</li>
      </ul>
      
      <p><strong>Nghi vấn:</strong></p>
      <ul>
        <li>Do + I/you/we/they + V(nguyên thể)?</li>
        <li>Does + he/she/it + V(nguyên thể)?</li>
      </ul>
    `,
    examples: [
      {
        english: "I work in a bank.",
        vietnamese: "Tôi làm việc trong một ngân hàng.",
        explanation: 'Khẳng định với chủ ngữ "I"',
      },
      {
        english: "She doesn't like coffee.",
        vietnamese: "Cô ấy không thích cà phê.",
        explanation: 'Phủ định với chủ ngữ "She"',
      },
      {
        english: "Do they live in Vietnam?",
        vietnamese: "Họ có sống ở Việt Nam không?",
        explanation: 'Câu hỏi với chủ ngữ "they"',
      },
    ],
  },
  {
    id: "2",
    title: "Thì hiện tại tiếp diễn (Present Continuous)",
    level: "Cơ bản",
    description:
      "Thì hiện tại tiếp diễn dùng để diễn tả hành động đang diễn ra tại thời điểm nói hoặc gần với thời điểm nói.",
    content: `
      <h2>Cách sử dụng</h2>
      <p>Thì hiện tại tiếp diễn được sử dụng để:</p>
      <ul>
        <li>Diễn tả hành động đang diễn ra tại thời điểm nói: <em>I am studying English now.</em></li>
        <li>Diễn tả hành động đang diễn ra trong giai đoạn hiện tại: <em>I am reading a good book these days.</em></li>
        <li>Diễn tả hành động đã được lên kế hoạch trong tương lai: <em>I am meeting John tomorrow.</em></li>
      </ul>
      
      <h2>Cấu trúc</h2>
      <p><strong>Khẳng định:</strong></p>
      <ul>
        <li>I + am + V-ing</li>
        <li>You/We/They + are + V-ing</li>
        <li>He/She/It + is + V-ing</li>
      </ul>
      
      <p><strong>Phủ định:</strong></p>
      <ul>
        <li>I + am not + V-ing</li>
        <li>You/We/They + are not (aren't) + V-ing</li>
        <li>He/She/It + is not (isn't) + V-ing</li>
      </ul>
      
      <p><strong>Nghi vấn:</strong></p>
      <ul>
        <li>Am + I + V-ing?</li>
        <li>Are + you/we/they + V-ing?</li>
        <li>Is + he/she/it + V-ing?</li>
      </ul>
    `,
    examples: [
      {
        english: "She is cooking dinner.",
        vietnamese: "Cô ấy đang nấu bữa tối.",
        explanation: 'Khẳng định với chủ ngữ "She"',
      },
      {
        english: "They aren't watching TV.",
        vietnamese: "Họ không đang xem TV.",
        explanation: 'Phủ định với chủ ngữ "They"',
      },
      {
        english: "Is he working now?",
        vietnamese: "Anh ấy có đang làm việc bây giờ không?",
        explanation: 'Câu hỏi với chủ ngữ "he"',
      },
    ],
  },
  {
    id: "3",
    title: "Thì quá khứ đơn (Past Simple)",
    level: "Cơ bản",
    description:
      "Thì quá khứ đơn dùng để diễn tả hành động đã xảy ra và kết thúc trong quá khứ.",
    content: `
      <h2>Cách sử dụng</h2>
      <p>Thì quá khứ đơn được sử dụng để:</p>
      <ul>
        <li>Diễn tả hành động đã xảy ra và kết thúc trong quá khứ: <em>I visited my grandmother last week.</em></li>
        <li>Diễn tả chuỗi hành động xảy ra liên tiếp trong quá khứ: <em>He came home, had dinner, and went to bed.</em></li>
        <li>Diễn tả thói quen trong quá khứ: <em>When I was a child, I played soccer every day.</em></li>
      </ul>
      
      <h2>Cấu trúc</h2>
      <p><strong>Khẳng định:</strong></p>
      <ul>
        <li>Chủ ngữ + V-ed (động từ quá khứ)</li>
      </ul>
      
      <p><strong>Phủ định:</strong></p>
      <ul>
        <li>Chủ ngữ + did not (didn't) + V(nguyên thể)</li>
      </ul>
      
      <p><strong>Nghi vấn:</strong></p>
      <ul>
        <li>Did + chủ ngữ + V(nguyên thể)?</li>
      </ul>
    `,
    examples: [
      {
        english: "I worked in a restaurant last year.",
        vietnamese: "Tôi đã làm việc trong một nhà hàng năm ngoái.",
        explanation: 'Khẳng định với động từ quy tắc "work"',
      },
      {
        english: "She didn't go to the party.",
        vietnamese: "Cô ấy đã không đi dự tiệc.",
        explanation: 'Phủ định với động từ "go"',
      },
      {
        english: "Did they finish the project?",
        vietnamese: "Họ đã hoàn thành dự án chưa?",
        explanation: 'Câu hỏi với động từ "finish"',
      },
    ],
  },
];

// Màn hình danh sách bài học ngữ pháp
const GrammarLessons = ({ navigation }) => {
  const renderLessonItem = ({ item }) => (
    <TouchableOpacity
      style={styles.lessonItem}
      onPress={() => navigation.navigate("GrammarDetail", { lesson: item })}
    >
      <View style={styles.lessonHeader}>
        <Text style={styles.lessonTitle}>{item.title}</Text>
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>{item.level}</Text>
        </View>
      </View>
      <Text style={styles.lessonDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenTitle}>Bài học ngữ pháp</Text>
      <FlatList
        data={grammarLessonsData}
        renderItem={renderLessonItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lessonsList}
      />
    </SafeAreaView>
  );
};

// Màn hình chi tiết bài học ngữ pháp
const GrammarDetailScreen = ({ route }) => {
  const { lesson } = route.params;
  const [activeTab, setActiveTab] = useState("content");

  const renderHTML = (htmlContent) => {
    // Đây chỉ là mô phỏng đơn giản, trong thực tế bạn sẽ cần một thư viện như react-native-render-html
    return (
      <Text style={styles.contentText}>
        {htmlContent.replace(/<[^>]*>/g, "")}
      </Text>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.detailHeader}>
          <Text style={styles.detailTitle}>{lesson.title}</Text>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>{lesson.level}</Text>
          </View>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "content" && styles.activeTab]}
            onPress={() => setActiveTab("content")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "content" && styles.activeTabText,
              ]}
            >
              Nội dung
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "examples" && styles.activeTab]}
            onPress={() => setActiveTab("examples")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "examples" && styles.activeTabText,
              ]}
            >
              Ví dụ
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "exercises" && styles.activeTab]}
            onPress={() => setActiveTab("exercises")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "exercises" && styles.activeTabText,
              ]}
            >
              Bài tập
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tabContent}>
          {activeTab === "content" && <View>{renderHTML(lesson.content)}</View>}

          {activeTab === "examples" && (
            <View>
              {lesson.examples.map((example, index) => (
                <View key={index} style={styles.exampleItem}>
                  <Text style={styles.exampleEnglish}>{example.english}</Text>
                  <Text style={styles.exampleVietnamese}>
                    {example.vietnamese}
                  </Text>
                  <Text style={styles.exampleExplanation}>
                    {example.explanation}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {activeTab === "exercises" && (
            <View style={styles.exercisesContainer}>
              <Text style={styles.exercisesTitle}>Bài tập luyện tập</Text>
              <Text style={styles.exercisesDescription}>
                Hoàn thành các bài tập sau để củng cố kiến thức về{" "}
                {lesson.title}.
              </Text>

              <TouchableOpacity style={styles.exerciseButton}>
                <Text style={styles.exerciseButtonText}>Bắt đầu làm bài</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 15,
  },
  lessonsList: {
    padding: 15,
  },
  lessonItem: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  lessonHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  levelBadge: {
    backgroundColor: "#4a90e2",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  levelText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  lessonDescription: {
    fontSize: 14,
    color: "#666",
  },
  detailHeader: {
    padding: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#4a90e2",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  activeTabText: {
    color: "#4a90e2",
    fontWeight: "bold",
  },
  tabContent: {
    padding: 20,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
  },
  exampleItem: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 3,
    borderLeftColor: "#4a90e2",
  },
  exampleEnglish: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  exampleVietnamese: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  exampleExplanation: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
  },
  exercisesContainer: {
    alignItems: "center",
  },
  exercisesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  exercisesDescription: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#666",
  },
  exerciseButton: {
    backgroundColor: "#4a90e2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  exerciseButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export { GrammarDetailScreen, GrammarLessons };
