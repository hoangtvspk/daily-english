import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Dữ liệu mẫu - Bài đăng cộng đồng
const communityPostsData = [
  {
    id: "1",
    user: {
      id: "101",
      name: "Nguyễn Văn A",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      level: "Trung cấp",
    },
    content:
      'Xin chào mọi người! Tôi đang gặp khó khăn với cách phát âm từ "thoroughly". Ai có thể giúp tôi không?',
    timestamp: "2 giờ trước",
    likes: 5,
    comments: [
      {
        id: "101",
        user: {
          id: "102",
          name: "Trần Thị B",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        content:
          'Bạn có thể phát âm là "thuh-ruh-lee". Nhấn mạnh âm đầu tiên nhé!',
        timestamp: "1 giờ trước",
      },
      {
        id: "102",
        user: {
          id: "103",
          name: "Lê Văn C",
          avatar: "https://randomuser.me/api/portraits/men/62.jpg",
        },
        content:
          "Tôi gợi ý bạn nghe phát âm trên từ điển Cambridge: https://dictionary.cambridge.org/pronunciation/english/thoroughly",
        timestamp: "45 phút trước",
      },
    ],
  },
  {
    id: "2",
    user: {
      id: "102",
      name: "Trần Thị B",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      level: "Cao cấp",
    },
    content:
      "Mình vừa hoàn thành bài kiểm tra IELTS và đạt 7.0! Cảm ơn ứng dụng Daily English đã giúp mình rất nhiều trong việc luyện tập.",
    timestamp: "5 giờ trước",
    likes: 24,
    comments: [
      {
        id: "201",
        user: {
          id: "101",
          name: "Nguyễn Văn A",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        content: "Chúc mừng bạn! Bạn có thể chia sẻ kinh nghiệm học không?",
        timestamp: "4 giờ trước",
      },
      {
        id: "202",
        user: {
          id: "104",
          name: "Phạm Thị D",
          avatar: "https://randomuser.me/api/portraits/women/17.jpg",
        },
        content: "Thật tuyệt vời! Mình cũng đang chuẩn bị thi IELTS tháng sau.",
        timestamp: "3 giờ trước",
      },
    ],
  },
  {
    id: "3",
    user: {
      id: "105",
      name: "Hoàng Văn E",
      avatar: "https://randomuser.me/api/portraits/men/91.jpg",
      level: "Sơ cấp",
    },
    content:
      "Có ai biết tài liệu nào tốt để học ngữ pháp tiếng Anh không? Mình đang muốn củng cố kiến thức cơ bản.",
    timestamp: "1 ngày trước",
    likes: 8,
    comments: [
      {
        id: "301",
        user: {
          id: "106",
          name: "Vũ Thị F",
          avatar: "https://randomuser.me/api/portraits/women/67.jpg",
        },
        content:
          'Mình khuyên bạn nên dùng "English Grammar in Use" của Raymond Murphy. Rất dễ hiểu và có nhiều bài tập.',
        timestamp: "20 giờ trước",
      },
    ],
  },
];

// Dữ liệu mẫu - Bảng xếp hạng
const leaderboardData = [
  {
    id: "101",
    name: "Trần Thị B",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    points: 1250,
    streak: 30,
  },
  {
    id: "102",
    name: "Nguyễn Văn A",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    points: 980,
    streak: 14,
  },
  {
    id: "103",
    name: "Lê Văn C",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    points: 875,
    streak: 21,
  },
  {
    id: "104",
    name: "Phạm Thị D",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    points: 820,
    streak: 10,
  },
  {
    id: "105",
    name: "Hoàng Văn E",
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
    points: 750,
    streak: 7,
  },
];

// Màn hình Cộng đồng
const CommunityScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("posts");

  const renderPostItem = ({ item }) => (
    <View style={styles.postItem}>
      <View style={styles.postHeader}>
        <View style={styles.userInfo}>
          <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
          <View>
            <Text style={styles.userName}>{item.user.name}</Text>
            <Text style={styles.userLevel}>{item.user.level}</Text>
          </View>
        </View>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>

      <Text style={styles.postContent}>{item.content}</Text>

      <View style={styles.postActions}></View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Thanh điều hướng */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabItem,
            activeTab === "posts" && styles.activeTabItem,
          ]}
          onPress={() => setActiveTab("posts")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "posts" && styles.activeTabText,
            ]}
          >
            Bài viết
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabItem,
            activeTab === "leaderboard" && styles.activeTabItem,
          ]}
          onPress={() => setActiveTab("leaderboard")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "leaderboard" && styles.activeTabText,
            ]}
          >
            Bảng xếp hạng
          </Text>
        </TouchableOpacity>
      </View>

      {/* Nội dung */}
      {activeTab === "posts" ? (
        <FlatList
          data={communityPostsData}
          renderItem={renderPostItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <FlatList
          data={leaderboardData}
          renderItem={({ item }) => (
            <View style={styles.leaderboardItem}>
              <Image
                source={{ uri: item.avatar }}
                style={styles.leaderboardAvatar}
              />
              <View>
                <Text style={styles.leaderboardName}>{item.name}</Text>
                <Text>
                  Điểm: {item.points} | Chuỗi: {item.streak}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTabItem: {
    borderBottomWidth: 2,
    borderBottomColor: "#007bff",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  activeTabText: {
    fontWeight: "bold",
  },
  postItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userLevel: {
    fontSize: 12,
    color: "gray",
  },
  timestamp: {
    fontSize: 12,
    color: "gray",
  },
  postContent: {
    fontSize: 14,
    marginBottom: 10,
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    marginLeft: 5,
    color: "gray",
  },
  leaderboardItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  leaderboardAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
});

export default CommunityScreen;
