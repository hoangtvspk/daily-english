import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  // Dữ liệu mẫu cho hồ sơ người dùng
  const userProfile = {
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileHeader}>
          <View style={styles.profileAvatar}>
            <Text style={styles.profileAvatarText}>HV</Text>
          </View>
          <Text style={styles.profileName}>{userProfile.name}</Text>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>{userProfile.level}</Text>
          </View>
          <Text style={styles.profilePoints}>{userProfile.points} điểm</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userProfile.streak}</Text>
            <Text style={styles.statLabel}>Ngày học</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userProfile.wordsLearned}</Text>
            <Text style={styles.statLabel}>Từ đã học</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {userProfile.quizzesCompleted}
            </Text>
            <Text style={styles.statLabel}>Bài tập</Text>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Thành tích</Text>

          {userProfile.achievements.map((achievement) => (
            <View
              key={achievement.id}
              style={[
                styles.achievementItem,
                !achievement.unlocked && styles.lockedAchievement,
              ]}
            >
              <View style={styles.achievementIcon}>
                <Text style={styles.achievementIconText}>
                  {achievement.icon}
                </Text>
              </View>
              <View style={styles.achievementInfo}>
                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                <Text style={styles.achievementDescription}>
                  {achievement.description}
                </Text>
              </View>
              {!achievement.unlocked && (
                <View style={styles.lockIcon}>
                  <Text>🔒</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Cài đặt</Text>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Thông báo hàng ngày</Text>
            <Text style={styles.settingValue}>Bật</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Mục tiêu học tập</Text>
            <Text style={styles.settingValue}>10 phút/ngày</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Ngôn ngữ ứng dụng</Text>
            <Text style={styles.settingValue}>Tiếng Việt</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Tài khoản</Text>
            <Text style={styles.settingArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Trợ giúp</Text>
            <Text style={styles.settingArrow}>›</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Đăng xuất</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  profileHeader: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#4a90e2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  profileAvatarText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  levelBadge: {
    backgroundColor: "#4a90e2",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 5,
  },
  levelText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  profilePoints: {
    fontSize: 16,
    color: "#666",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "white",
    marginTop: 1,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4a90e2",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  sectionContainer: {
    backgroundColor: "white",
    marginTop: 15,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  achievementItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f7ff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  lockedAchievement: {
    backgroundColor: "#f0f0f0",
    opacity: 0.7,
  },
  achievementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  achievementIconText: {
    fontSize: 20,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  achievementDescription: {
    fontSize: 14,
    color: "#666",
  },
  lockIcon: {
    marginLeft: 10,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  settingText: {
    fontSize: 16,
  },
  settingValue: {
    fontSize: 14,
    color: "#666",
  },
  settingArrow: {
    fontSize: 18,
    color: "#666",
  },
  logoutButton: {
    margin: 20,
    backgroundColor: "#ff6b6b",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
