import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    padding: 20,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  quizList: {
    padding: 15,
  },
  quizItem: {
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
  completedQuizItem: {
    borderLeftWidth: 4,
    borderLeftColor: "#4ecdc4",
  },
  quizHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  quizInfo: {
    flex: 1,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  quizMeta: {
    flexDirection: "row",
    alignItems: "center",
  },
  levelBadge: {
    backgroundColor: "#4a90e2",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginRight: 10,
  },
  levelText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  quizCount: {
    fontSize: 12,
    color: "#666",
    marginRight: 10,
  },
  quizTime: {
    fontSize: 12,
    color: "#666",
  },
  completedBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#4ecdc4",
    justifyContent: "center",
    alignItems: "center",
  },
  completedText: {
    color: "white",
    fontWeight: "bold",
  },
  quizDescription: {
    fontSize: 14,
    color: "#333",
    marginBottom: 15,
  },
  quizFooter: {
    alignItems: "flex-end",
  },
  startButton: {
    backgroundColor: "#4a90e2",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  restartButton: {
    backgroundColor: "#4ecdc4",
  },
  startButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});