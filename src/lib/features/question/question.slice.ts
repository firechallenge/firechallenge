import { RootState } from "@/lib/store";
import { Question } from "@/models/question.model";
import { createSlice } from "@reduxjs/toolkit";

interface QuestionSlice {
  questions: Question[];
  questionEditingIndex: number;
  questionEditingId: string;
}

const initialState: QuestionSlice = {
  questions: [],
  questionEditingIndex: -1,
  questionEditingId: "",
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setQuestionEditingId: (state, action) => {
      state.questionEditingId = action.payload;
      state.questionEditingIndex = state.questions.findIndex(
        (question) => question.id === action.payload
      );
    },
    addQuestion: (state, action) => {
      state.questions.push({
        ...action.payload,
        id: state.questions.length.toString(),
        name: `Question ${state.questions.length + 1}`,
      });
      state.questionEditingIndex = state.questions.length - 1;
      state.questionEditingId = state.questions[state.questionEditingIndex].id;
    },
    updateQuestion: (state, action) => {
      state.questions[state.questionEditingIndex] = action.payload;
    },
  },
});

export default questionSlice.reducer;
export const {
  setQuestions,
  setQuestionEditingId,
  addQuestion,
  updateQuestion,
} = questionSlice.actions;

export const selectActiveQuestion = (state: RootState) => {
  if (
    state.question.questionEditingId === "" ||
    state.question.questions.length === 0
  ) {
    return null;
  }
  return state.question.questions[state.question.questionEditingIndex];
};

export const selectQuestions = (state: RootState) => {
  return state.question.questions;
};
