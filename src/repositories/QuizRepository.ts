
import { quizzesData } from "../data/quizData";
import { questionsData } from "../data/questionData";
import { quizQuestionData } from "../data/quizQuestionData";
import { Quiz } from "../types/common";
import { Question } from "../types/common";

const transformQuestionData = (questionData: any): Question => ({
  id: questionData.id,
  question: questionData.question,
  options: questionData.options,
  correctAnswer: questionData.correctAnswer,
});

const transformQuizData = (quizData: any, questions: Question[]): Quiz => ({
  id: quizData.id,
  title: quizData.title,
  description: quizData.description,
  level: quizData.level,
  questionsCount: quizData.questionsCount,
  estimatedTime: quizData.estimatedTime,
  completed: quizData.completed,
  questions,
});

export const getQuizzes = async (): Promise<Quiz[]> => {
  // In the future, this will be an API call
  return quizzesData.map((quizData) => {
    const quizQuestionIds = quizQuestionData
      .filter((qq) => qq.quizId === quizData.id)
      .map((qq) => qq.questionId);

    const questions = questionsData
      .filter((q) => quizQuestionIds.includes(q.id))
      .map(transformQuestionData);

    return transformQuizData(quizData, questions);
  });
};

export const getQuizById = async (id: string): Promise<Quiz | null> => {
  const quizData = quizzesData.find((q) => q.id === id);
  if (!quizData) return null;

  const quizQuestionIds = quizQuestionData
    .filter((qq) => qq.quizId === id)
    .map((qq) => qq.questionId);

  const questions = questionsData
    .filter((q) => quizQuestionIds.includes(q.id))
    .map(transformQuestionData);

  return transformQuizData(quizData, questions);
};
