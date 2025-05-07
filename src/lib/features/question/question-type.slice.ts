import { RootState } from "@/lib/store";
import { QuestionType } from "@/models/question-type.model";
import { createSlice } from "@reduxjs/toolkit";

interface QuestionTypeState {
  questionTypes: QuestionType[];
}

const initialState: QuestionTypeState = {
  questionTypes: [
    {
      id: "multiple-choice",
      name: "Multiple Choice",
      description: "Multiple choice question type",
      image: "/images/multiple-choice.jpg",
    },
    {
      id: "true-false",
      name: "True or False",
      description: "True or False question type",
      image: "/images/true-false.jpg",
    },
  ],
};

const questionTypeSlice = createSlice({
  name: "questionType",
  initialState,
  reducers: {
    setQuestionTypes: (state, action) => {
      state.questionTypes = action.payload;
    },
  },
});

export default questionTypeSlice.reducer;
export const { setQuestionTypes } = questionTypeSlice.actions;

export const selectQuestionTypes = (state: RootState) => {
  return state.questionType.questionTypes;
};
