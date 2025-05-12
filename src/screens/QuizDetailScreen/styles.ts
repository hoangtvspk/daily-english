import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  quizDetailContainer: {
    flex: 1,
    padding: 20,
  },
  quizHeader: {
    marginBottom: 15,
  },
  quizTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.text,
  },
  quizProgress: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: 4,
    marginBottom: 20,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  questionContainer: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.text,
  },
  optionButton: {
    backgroundColor: colors.background,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: colors.primaryLight,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  optionText: {
    fontSize: 16,
    color: colors.text,
  },
  navigationButtons: {
    marginTop: 'auto',
  },
  nextButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: colors.disabled,
  },
  nextButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  noQuestionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noQuestionsText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: colors.textSecondary,
  },
  backButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  backButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  quizCompletedContainer: {
    padding: 20,
  },
  quizCompletedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: colors.text,
  },
  quizCompletedScore: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: colors.primary,
  },
  resultSummary: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  resultDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  correctDot: {
    backgroundColor: colors.success,
  },
  incorrectDot: {
    backgroundColor: colors.error,
  },
  resultText: {
    fontSize: 16,
    color: colors.text,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: colors.text,
  },
  reviewItem: {
    marginBottom: 15,
  },
  reviewQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.text,
  },
  reviewAnswer: {
    padding: 10,
    borderRadius: 8,
  },
  correctAnswer: {
    backgroundColor: colors.successLight,
  },
  incorrectAnswer: {
    backgroundColor: colors.errorLight,
  },
  reviewAnswerText: {
    fontSize: 14,
    color: colors.text,
  },
  correctAnswerText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: colors.success,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  actionButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  retryButton: {
    backgroundColor: colors.success,
  },
  actionButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});