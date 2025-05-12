import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useProfileViewModel } from '../../viewmodels/ProfileViewModel';
import { styles } from './styles';

const ProfileScreen: React.FC = () => {
  const { userProfile, handleLogout, handleSettingPress } = useProfileViewModel();

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
            <Text style={styles.statNumber}>{userProfile.quizzesCompleted}</Text>
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
                <Text style={styles.achievementIconText}>{achievement.icon}</Text>
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

          <TouchableOpacity 
            style={styles.settingItem}
            onPress={() => handleSettingPress('notifications')}
          >
            <Text style={styles.settingText}>Thông báo hàng ngày</Text>
            <Text style={styles.settingValue}>Bật</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.settingItem}
            onPress={() => handleSettingPress('learning_goal')}
          >
            <Text style={styles.settingText}>Mục tiêu học tập</Text>
            <Text style={styles.settingValue}>10 phút/ngày</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.settingItem}
            onPress={() => handleSettingPress('language')}
          >
            <Text style={styles.settingText}>Ngôn ngữ ứng dụng</Text>
            <Text style={styles.settingValue}>Tiếng Việt</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.settingItem}
            onPress={() => handleSettingPress('account')}
          >
            <Text style={styles.settingText}>Tài khoản</Text>
            <Text style={styles.settingArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.settingItem}
            onPress={() => handleSettingPress('help')}
          >
            <Text style={styles.settingText}>Trợ giúp</Text>
            <Text style={styles.settingArrow}>›</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={styles.logoutButtonText}>Đăng xuất</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen; 