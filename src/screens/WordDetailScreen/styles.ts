import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  wordContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  wordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  word: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  favoriteButton: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  favoriteButtonActive: {
    backgroundColor: colors.error,
    borderColor: colors.error,
  },
  playButton: {
    backgroundColor: colors.primary,
  },
  copyButton: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  shareButton: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  phonetic: {
    fontSize: 16,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
  section: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  meaning: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
  },
  exampleContainer: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
  },
  example: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  exampleTranslation: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginRight: 8,
  },
  category: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginRight: 8,
  },
  date: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});