import { useState } from 'react';
import { Quiz, Question } from '../types/common';

interface QuizAnswer {
  question: string;
  selectedOption: number;
  correctOption: number;
  isCorrect: boolean;
}

export const useQuizDetailViewModel = (quiz: Quiz) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) return;

    // Save answer
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = {
      question: quiz.questions[currentQuestion].question,
      selectedOption: selectedOption,
      correctOption: quiz.questions[currentQuestion].correctAnswer,
      isCorrect: selectedOption === quiz.questions[currentQuestion].correctAnswer
    };
    setAnswers(newAnswers);

    // Update score
    if (selectedOption === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Move to next question or complete quiz
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  return {
    currentQuestion,
    selectedOption,
    score,
    quizCompleted,
    answers,
    handleOptionSelect,
    handleNextQuestion,
    resetQuiz,
    progress: ((currentQuestion + 1) / quiz.questions.length) * 100,
    currentQuestionData: quiz.questions[currentQuestion],
    totalQuestions: quiz.questions.length
  };
}; 