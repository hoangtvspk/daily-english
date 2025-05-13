import { useState, useEffect } from "react";
import { Answer, QuizDetailState } from "../types/common";
import {
  QuizDetailModel,
} from "../models/QuizDetailModel";

import * as QuizService from "../services/QuizService";

export const useQuizDetailViewModel = (quizId: string) => {
  const [quizDetailModel, setQuizDetailModel] =
    useState<QuizDetailModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadQuizDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizId]);

  const loadQuizDetail = async () => {
    try {
      setIsLoading(true);
      const quiz = await QuizService.getQuizById(quizId);

      if (!quiz) {
        setError("Quiz not found");
        setQuizDetailModel(null);
        return;
      }

      const initialState: QuizDetailState = {
        currentQuestion: 0,
        selectedOption: null,
        score: 0,
        quizCompleted: false,
        answers: [],
        progress: 0,
      };

      setQuizDetailModel({
        quiz,
        state: initialState,
      });
      setError(null);
    } catch (err) {
      setError("Failed to load quiz detail");
      setQuizDetailModel(null);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (!quizDetailModel) return;

    setQuizDetailModel((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        state: {
          ...prev.state,
          selectedOption: optionIndex,
        },
      };
    });
  };

  const handleNextQuestion = () => {
    if (!quizDetailModel || quizDetailModel.state.selectedOption === null)
      return;

    const currentQuestion = quizDetailModel.state.currentQuestion;
    const selectedOption = quizDetailModel.state.selectedOption;
    const currentQuestionData = quizDetailModel.quiz.questions[currentQuestion];

    // Create new answer
    const newAnswer: Answer = {
      question: currentQuestionData.question,
      selectedOption: selectedOption,
      correctOption: currentQuestionData.correctAnswer,
      isCorrect: selectedOption === currentQuestionData.correctAnswer,
    };

    // Update state
    setQuizDetailModel((prev) => {
      if (!prev) return prev;
      const newAnswers = [...prev.state.answers];
      newAnswers[currentQuestion] = newAnswer;

      const newScore = newAnswer.isCorrect
        ? prev.state.score + 1
        : prev.state.score;
      const isLastQuestion = currentQuestion === prev.quiz.questions.length - 1;

      return {
        ...prev,
        state: {
          ...prev.state,
          answers: newAnswers,
          score: newScore,
          currentQuestion: isLastQuestion
            ? currentQuestion
            : currentQuestion + 1,
          selectedOption: isLastQuestion ? selectedOption : null,
          quizCompleted: isLastQuestion,
          progress: ((currentQuestion + 1) / prev.quiz.questions.length) * 100,
        },
      };
    });
  };

  const resetQuiz = () => {
    if (!quizDetailModel) return;

    const initialState: QuizDetailState = {
      currentQuestion: 0,
      selectedOption: null,
      score: 0,
      quizCompleted: false,
      answers: [],
      progress: 0,
    };

    setQuizDetailModel((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        state: initialState,
      };
    });
  };

  // Always return a consistent object
  const quiz = quizDetailModel ? quizDetailModel.quiz : undefined;
  const state = quizDetailModel ? quizDetailModel.state : undefined;
  const currentQuestionData =
    quiz && state ? quiz.questions[state.currentQuestion] : undefined;
  const totalQuestions = quiz ? quiz.questions.length : 0;

  return {
    quiz,
    currentQuestion: state?.currentQuestion,
    selectedOption: state?.selectedOption,
    score: state?.score,
    quizCompleted: state?.quizCompleted,
    answers: state?.answers,
    handleOptionSelect,
    handleNextQuestion,
    resetQuiz,
    progress: state?.progress,
    currentQuestionData,
    totalQuestions,
    isLoading,
    error,
    refresh: loadQuizDetail,
  };
};
