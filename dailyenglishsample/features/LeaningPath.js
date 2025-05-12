import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Dữ liệu mẫu - Lộ trình học
const learningPathsData = [
  {
    id: "1",
    title: "Giao tiếp cơ bản",
    description:
      "Học các kỹ năng giao tiếp tiếng Anh cơ bản cho người mới bắt đầu.",
    level: "Sơ cấp",
    progress: 65,
    totalLessons: 30,
    completedLessons: 19,
    image: "https://example.com/basic-communication.jpg",
    units: [
      {
        id: "101",
        title: "Chào hỏi và giới thiệu",
        lessons: 5,
        completed: 5,
        locked: false,
      },
      {
        id: "102",
        title: "Hỏi và chỉ đường",
        lessons: 4,
        completed: 4,
        locked: false,
      },
      {
        id: "103",
        title: "Đặt món và gọi đồ uống",
        lessons: 6,
        completed: 5,
        locked: false,
      },
      {
        id: "104",
        title: "Mua sắm và trả giá",
        lessons: 5,
        completed: 3,
        locked: false,
      },
      {
        id: "105",
        title: "Đặt phòng khách sạn",
        lessons: 5,
        completed: 2,
        locked: false,
      },
      {
        id: "106",
        title: "Đi máy bay và du lịch",
        lessons: 5,
        completed: 0,
        locked: true,
      },
    ],
  },
  {
    id: "2",
    title: "Tiếng Anh công sở",
    description:
      "Học tiếng Anh chuyên ngành cho môi trường làm việc văn phòng.",
    level: "Trung cấp",
    progress: 30,
    totalLessons: 25,
    completedLessons: 7,
    image: "https://example.com/business-english.jpg",
    units: [
      {
        id: "201",
        title: "Giao tiếp trong văn phòng",
        lessons: 5,
        completed: 3,
        locked: false,
      },
      {
        id: "202",
        title: "Email và thư tín doanh nghiệp",
        lessons: 5,
        completed: 2,
        locked: false,
      },
      {
        id: "203",
        title: "Họp và thuyết trình",
        lessons: 5,
        completed: 2,
        locked: false,
      },
      {
        id: "204",
        title: "Đàm phán và thương lượng",
        lessons: 5,
        completed: 0,
        locked: true,
      },
      {
        id: "205",
        title: "Phỏng vấn xin việc",
        lessons: 5,
        completed: 0,
        locked: true,
      },
    ],
  },
  {
    id: "3",
    title: "Luyện thi IELTS",
    description:
      "Chuẩn bị cho kỳ thi IELTS với các bài học và đề thi thực hành.",
    level: "Cao cấp",
    progress: 10,
    totalLessons: 40,
    completedLessons: 4,
    image: "https://example.com/ielts-prep.jpg",
    units: [
      {
        id: "301",
        title: "Giới thiệu về IELTS",
        lessons: 3,
        completed: 3,
        locked: false,
      },
      {
        id: "302",
        title: "Kỹ năng Nghe",
        lessons: 8,
        completed: 1,
        locked: false,
      },
      {
        id: "303",
        title: "Kỹ năng Nói",
        lessons: 8,
        completed: 0,
        locked: true,
      },
      {
        id: "304",
        title: "Kỹ năng Đọc",
        lessons: 8,
        completed: 0,
        locked: true,
      },
      {
        id: "305",
        title: "Kỹ năng Viết",
        lessons: 8,
        completed: 0,
        locked: true,
      },
      {
        id: "306",
        title: "Đề thi thử",
        lessons: 5,
        completed: 0,
        locked: true,
      },
    ],
  },
];

// Dữ liệu mẫu - Chi tiết bài học
const lessonDetailData = {
  id: "1031",
  title: "Đặt món trong nhà hàng",
  path: "Giao tiếp cơ bản > Đặt món và gọi đồ uống",
  duration: "15 phút",
  content: `
    <h1>Đặt món trong nhà hàng</h1>
    
    <p>Trong bài học này, bạn sẽ học cách đặt món ăn trong nhà hàng bằng tiếng Anh.</p>
    
    <h2>Từ vựng hữu ích</h2>
    <ul>
      <li><strong>Menu</strong>: Thực đơn</li>
      <li><strong>Appetizer</strong>: Món khai vị</li>
      <li><strong>Main course</strong>: Món chính</li>
      <li><strong>Dessert</strong>: Món tráng miệng</li>
      <li><strong>Bill/Check</strong>: Hóa đơn</li>
      <li><strong>Waiter/Waitress</strong>: Nhân viên phục vụ nam/nữ</li>
    </ul>
    
    <h2>Cụm từ hữu ích</h2>
    <ul>
      <li><strong>I'd like to order...</strong>: Tôi muốn đặt...</li>
      <li><strong>Could I have...</strong>: Tôi có thể dùng...</li>
      <li><strong>How would you like your steak?</strong>: Bạn muốn bít tết chín như thế nào?</li>
      <li><strong>Rare/Medium/Well-done</strong>: Tái/Vừa/Chín kỹ</li>
      <li><strong>Could we have the bill, please?</strong>: Chúng tôi có thể thanh toán được không?</li>
    </ul>
  `,
  dialogues: [
    {
      title: "Đối thoại 1: Đặt bàn",
      content: [
        {
          speaker: "Customer",
          text: "Hello, I'd like to make a reservation for tonight.",
        },
        {
          speaker: "Staff",
          text: "Certainly. For how many people?",
        },
        {
          speaker: "Customer",
          text: "For four people.",
        },
        {
          speaker: "Staff",
          text: "What time would you like to come?",
        },
        {
          speaker: "Customer",
          text: "Around 7:30 PM, if possible.",
        },
        {
          speaker: "Staff",
          text: "Let me check... Yes, we have a table available at 7:30. May I have your name, please?",
        },
        {
          speaker: "Customer",
          text: "It's John Smith.",
        },
        {
          speaker: "Staff",
          text: "Thank you, Mr. Smith. Your reservation is confirmed for tonight at 7:30 for four people.",
        },
        {
          speaker: "Customer",
          text: "Great, thank you very much.",
        },
      ],
    },
    {
      title: "Đối thoại 2: Gọi món",
      content: [
        {
          speaker: "Waiter",
          text: "Are you ready to order?",
        },
        {
          speaker: "Customer",
          text: "Yes, I'd like the chicken soup for starter.",
        },
        {
          speaker: "Waiter",
          text: "And for the main course?",
        },
        {
          speaker: "Customer",
          text: "I'll have the grilled salmon, please.",
        },
        {
          speaker: "Waiter",
          text: "Would you like any side dishes with that?",
        },
        {
          speaker: "Customer",
          text: "Yes, a side salad, please.",
        },
        {
          speaker: "Waiter",
          text: "And what would you like to drink?",
        },
        {
          speaker: "Customer",
          text: "Just water for now, thank you.",
        },
        {
          speaker: "Waiter",
          text: "Thank you. I'll bring your order shortly.",
        },
      ],
    },
  ],
  exercises: [
    {
      type: "multiple-choice",
      question: "Bạn muốn gọi món khai vị. Bạn nên nói gì?",
      options: [
        "I'd like a dessert, please.",
        "I'd like an appetizer, please.",
        "I'd like the main course, please.",
        "I'd like the bill, please.",
      ],
      correctAnswer: 1,
    },
    {
      type: "fill-in-blank",
      question:
        'Để hỏi hóa đơn, bạn có thể nói: "Could we have the _____, please?"',
      answer: "bill",
    },
    {
      type: "matching",
      instructions: "Nối từ với nghĩa tương ứng:",
      pairs: [
        { term: "Menu", definition: "Thực đơn" },
        { term: "Appetizer", definition: "Món khai vị" },
        { term: "Main course", definition: "Món chính" },
        { term: "Dessert", definition: "Món tráng miệng" },
      ],
    },
  ],
};

// Màn hình Lộ trình học
const LearningPathScreen = ({ navigation }) => {
  const renderPathItem = ({ item }) => (
    <TouchableOpacity
      style={styles.pathItem}
      onPress={() => navigation.navigate("PathDetail", { path: item })}
    >
      <View style={styles.pathHeader}>
        <View>
          <Text style={styles.pathTitle}>{item.title}</Text>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>{item.level}</Text>
          </View>
        </View>
        <Text style={styles.pathProgress}>{item.progress}%</Text>
      </View>

      <Text style={styles.pathDescription}>{item.description}</Text>

      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${item.progress}%` }]} />
      </View>

      <Text style={styles.pathStats}>
        {item.completedLessons}/{item.totalLessons} bài học hoàn thành
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenTitle}>Lộ trình học</Text>
      <FlatList
        data={learningPathsData}
        renderItem={renderPathItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.pathsList}
      />
    </SafeAreaView>
  );
};

// Màn hình Chi tiết lộ trình
const PathDetailScreen = ({ route, navigation }) => {
  const { path } = route.params;

  const renderUnitItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.unitItem, item.locked && styles.lockedUnit]}
      onPress={() =>
        !item.locked &&
        navigation.navigate("UnitDetail", { unit: item, pathTitle: path.title })
      }
      disabled={item.locked}
    >
      <View style={styles.unitHeader}>
        <Text style={styles.unitTitle}>{item.title}</Text>
        {item.locked && (
          <View style={styles.lockIcon}>
            <Text>🔒</Text>
          </View>
        )}
      </View>

      <View style={styles.unitProgressContainer}>
        <View
          style={[
            styles.unitProgressBar,
            { width: `${(item.completed / item.lessons) * 100}%` },
          ]}
        />
      </View>

      <Text style={styles.unitStats}>
        {item.completed}/{item.lessons} bài học hoàn thành
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.pathDetailHeader}>
          <Text style={styles.pathDetailTitle}>{path.title}</Text>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>{path.level}</Text>
          </View>
        </View>

        <Text style={styles.pathDetailDescription}>{path.description}</Text>

        <View style={styles.pathDetailProgressContainer}>
          <Text style={styles.pathDetailProgressTitle}>Tiến độ tổng thể</Text>
          <View style={styles.progressBarContainer}>
            <View
              style={[styles.progressBar, { width: `${path.progress}%` }]}
            />
          </View>
          <Text style={styles.pathDetailProgressText}>
            {path.progress}% ({path.completedLessons}/{path.totalLessons} bài
            học)
          </Text>
        </View>

        <Text style={styles.unitsTitle}>Các chương học</Text>

        <FlatList
          data={path.units}
          renderItem={renderUnitItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.unitsList}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// Màn hình Chi tiết chương học
const UnitDetailScreen = ({ route, navigation }) => {
  const { unit, pathTitle } = route.params;

  // Giả lập danh sách bài học trong chương
  const lessons = Array.from({ length: unit.lessons }, (_, i) => ({
    id: `${unit.id}-${i + 1}`,
    title: `Bài ${i + 1}: ${i < unit.completed ? "Đã hoàn thành" : "Chưa học"}`,
    completed: i < unit.completed,
    duration: "15 phút",
  }));

  const renderLessonItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.lessonItem, item.completed && styles.completedLesson]}
      onPress={() =>
        navigation.navigate("LessonDetail", { lesson: lessonDetailData })
      }
    >
      <View style={styles.lessonHeader}>
        <Text style={styles.lessonTitle}>{item.title}</Text>
        {item.completed && (
          <View style={styles.completedIcon}>
            <Text>✓</Text>
          </View>
        )}
      </View>

      <Text style={styles.lessonDuration}>Thời lượng: {item.duration}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.unitDetailHeader}>
        <Text style={styles.unitDetailPath}>{pathTitle}</Text>
        <Text style={styles.unitDetailTitle}>{unit.title}</Text>
        <Text style={styles.unitDetailProgress}>
          {unit.completed}/{unit.lessons} bài học hoàn thành
        </Text>
      </View>

      <FlatList
        data={lessons}
        renderItem={renderLessonItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lessonsList}
      />
    </SafeAreaView>
  );
};

// Màn hình Chi tiết bài học
const LessonDetailScreen = ({ route }) => {
  const { lesson } = route.params;
  const [activeTab, setActiveTab] = useState("content");

  const renderHTML = (htmlContent) => {
    // Đây chỉ là mô phỏng đơn giản, trong thực tế bạn sẽ cần một thư viện như react-native-render-html
    return (
      <Text style={styles.lessonContentText}>
        {htmlContent.replace(/<[^>]*>/g, "")}
      </Text>
    );
  };

  const renderDialogue = (dialogue) => (
    <View style={styles.dialogueContainer} key={dialogue.title}>
      <Text style={styles.dialogueTitle}>{dialogue.title}</Text>
      {dialogue.content.map((line, index) => (
        <View
          key={index}
          style={[
            styles.dialogueLine,
            line.speaker === "Customer"
              ? styles.customerLine
              : styles.staffLine,
          ]}
        >
          <Text style={styles.dialogueSpeaker}>{line.speaker}:</Text>
          <Text style={styles.dialogueText}>{line.text}</Text>
        </View>
      ))}
    </View>
  );

  const renderExercise = (exercise, index) => {
    switch (exercise.type) {
      case "multiple-choice":
        return (
          <View style={styles.exerciseContainer} key={index}>
            <Text style={styles.exerciseQuestion}>
              {index + 1}. {exercise.question}
            </Text>
            {exercise.options.map((option, optionIndex) => (
              <TouchableOpacity key={optionIndex} style={styles.exerciseOption}>
                <Text style={styles.exerciseOptionText}>
                  {String.fromCharCode(65 + optionIndex)}. {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );

      case "fill-in-blank":
        return (
          <View style={styles.exerciseContainer} key={index}>
            <Text style={styles.exerciseQuestion}>
              {index + 1}. {exercise.question}
            </Text>
            <TextInput
              style={styles.exerciseInput}
              placeholder="Nhập câu trả lời..."
            />
          </View>
        );

      case "matching":
        return (
          <View style={styles.exerciseContainer} key={index}>
            <Text style={styles.exerciseQuestion}>
              {index + 1}. {exercise.instructions}
            </Text>
            {exercise.pairs.map((pair, pairIndex) => (
              <View style={styles.matchingPair} key={pairIndex}>
                <Text style={styles.matchingTerm}>{pair.term}</Text>
                <Text style={styles.matchingArrow}>→</Text>
                <Text style={styles.matchingDefinition}>{pair.definition}</Text>
              </View>
            ))}
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.lessonDetailHeader}>
          <Text style={styles.lessonDetailPath}>{lesson.path}</Text>
          <Text style={styles.lessonDetailTitle}>{lesson.title}</Text>
          <Text style={styles.lessonDetailDuration}>
            Thời lượng: {lesson.duration}
          </Text>
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
            style={[styles.tab, activeTab === "dialogues" && styles.activeTab]}
            onPress={() => setActiveTab("dialogues")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "dialogues" && styles.activeTabText,
              ]}
            >
              Đối thoại
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
          {activeTab === "content" && (
            <View style={styles.lessonContent}>
              {renderHTML(lesson.content)}
            </View>
          )}

          {activeTab === "dialogues" && (
            <View style={styles.dialoguesContainer}>
              {lesson.dialogues.map((dialogue) => renderDialogue(dialogue))}
            </View>
          )}

          {activeTab === "exercises" && (
            <View style={styles.exercisesContainer}>
              {lesson.exercises.map((exercise, index) =>
                renderExercise(exercise, index)
              )}

              <TouchableOpacity style={styles.submitExercisesButton}>
                <Text style={styles.submitExercisesButtonText}>Nộp bài</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.lessonNavigation}>
        <TouchableOpacity style={styles.navigationButton}>
          <Text style={styles.navigationButtonText}>← Bài trước</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.completeButton}>
          <Text style={styles.completeButtonText}>Hoàn thành</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationButton}>
          <Text style={styles.navigationButtonText}>Bài tiếp →</Text>
        </TouchableOpacity>
      </View>
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
  pathsList: {
    padding: 15,
  },
  pathItem: {
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
  pathHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  pathTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  levelBadge: {
    backgroundColor: "#4a90e2",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  levelText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  pathProgress: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4a90e2",
  },
  pathDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    marginBottom: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#4a90e2",
  },
  pathStats: {
    fontSize: 14,
    color: "#666",
    textAlign: "right",
  },
  pathDetailHeader: {
    padding: 20,
    backgroundColor: "white",
  },
  pathDetailTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pathDetailDescription: {
    fontSize: 16,
    color: "#333",
    padding: 20,
  },
  pathDetailProgressContainer: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 20,
  },
  pathDetailProgressTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  pathDetailProgressText: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
  },
  unitsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 15,
  },
  unitsList: {
    padding: 15,
    paddingTop: 0,
  },
  unitItem: {
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
  lockedUnit: {
    opacity: 0.7,
  },
  unitHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  unitTitle: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  lockIcon: {
    marginLeft: 10,
  },
  unitProgressContainer: {
    height: 6,
    backgroundColor: "#e0e0e0",
    borderRadius: 3,
    marginBottom: 10,
    overflow: "hidden",
  },
  unitProgressBar: {
    height: "100%",
    backgroundColor: "#4a90e2",
  },
  unitStats: {
    fontSize: 12,
    color: "#666",
  },
  unitDetailHeader: {
    padding: 20,
    backgroundColor: "white",
  },
  unitDetailPath: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  unitDetailTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  unitDetailProgress: {
    fontSize: 14,
    color: "#4a90e2",
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
  completedLesson: {
    borderLeftWidth: 4,
    borderLeftColor: "#4ecdc4",
  },
  lessonHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  completedIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#4ecdc4",
    justifyContent: "center",
    alignItems: "center",
  },
  lessonDuration: {
    fontSize: 12,
    color: "#666",
  },
  lessonDetailHeader: {
    padding: 20,
    backgroundColor: "white",
  },
  lessonDetailPath: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  lessonDetailTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  lessonDetailDuration: {
    fontSize: 14,
    color: "#666",
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
    padding: 15,
  },
  lessonContent: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  lessonContentText: {
    fontSize: 16,
    lineHeight: 24,
  },
  dialoguesContainer: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  dialogueContainer: {
    marginBottom: 20,
  },
  dialogueTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  dialogueLine: {
    flexDirection: "row",
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  customerLine: {
    backgroundColor: "#e6f2ff",
    alignSelf: "flex-end",
    maxWidth: "80%",
  },
  staffLine: {
    backgroundColor: "#f0f0f0",
    alignSelf: "flex-start",
    maxWidth: "80%",
  },
  dialogueSpeaker: {
    fontWeight: "bold",
    marginRight: 5,
  },
  dialogueText: {
    flex: 1,
  },
  exercisesContainer: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  exerciseContainer: {
    marginBottom: 20,
  },
  exerciseQuestion: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  exerciseOption: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 8,
  },
  exerciseOptionText: {
    fontSize: 16,
  },
  exerciseInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  matchingPair: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  matchingTerm: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  matchingArrow: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  matchingDefinition: {
    fontSize: 16,
    flex: 1,
  },
  submitExercisesButton: {
    backgroundColor: "#4a90e2",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  submitExercisesButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  lessonNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  navigationButton: {
    padding: 10,
  },
  navigationButtonText: {
    color: "#4a90e2",
    fontSize: 16,
  },
  completeButton: {
    backgroundColor: "#4a90e2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  completeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export {
  LearningPathScreen,
  LessonDetailScreen,
  PathDetailScreen,
  UnitDetailScreen,
};
