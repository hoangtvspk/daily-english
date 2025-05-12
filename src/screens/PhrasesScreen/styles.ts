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
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    fontSize: 16,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: colors.background,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectedCategoryButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryButtonText: {
    fontSize: 14,
    color: colors.text,
  },
  selectedCategoryButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  phrasesList: {
    padding: 16,
    paddingBottom: 32,
  },
  phraseItem: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  phraseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  phraseItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    flex: 1,
    marginRight: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginLeft: 4,
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
  phraseItemMeaning: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
  },
  phraseItemExample: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  phraseItemExampleText: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 5,
    color: colors.text,
  },
  phraseItemExampleTranslation: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  phraseItemFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  phraseItemCategory: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  emptyContainer: {
    padding: 24,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
});