import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./features/question/question.slice";
import questionTypeReducer from "./features/question/question-type.slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      question: questionReducer,
      questionType: questionTypeReducer,
    },
    // devTools are enabled by default in development mode with Redux Toolkit
    // No additional configuration needed
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
