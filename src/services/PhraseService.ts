import PhraseRepository from "../repositories/PhraseRepository";

const phraseService = {
  getPhrases: async ({categoryId, searchQuery}: {searchQuery?: string, categoryId?: string }) => {
    return PhraseRepository.getPhrases({searchQuery,categoryId});
  },
  getPhraseCategories: async () => {
    return PhraseRepository.getPhraseCategories();
  },
};

export default phraseService;
