import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  categoriesSection: {
    backgroundColor: 'white',
    marginTop: 1,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoriesList: {
    paddingRight: 15,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f7ff',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    width: 200,
  },
  selectedCategoryItem: {
    backgroundColor: '#4a90e2',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  categoryIconText: {
    fontSize: 20,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  categoryCount: {
    fontSize: 14,
    color: '#666',
  },
  wordsSection: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 15,
    padding: 15,
  },
  wordsList: {
    paddingBottom: 20,
  },
  wordItem: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  wordInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  wordText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  wordPhonetic: {
    fontSize: 14,
    color: '#666',
  },
  wordMeaning: {
    fontSize: 16,
    color: '#333',
  },
});