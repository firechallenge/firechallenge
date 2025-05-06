import { QuestionSideNav } from "./question-sidenav";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "@/lib/features/question/question.slice";
import { selectActiveQuestion } from "@/lib/features/question/question.slice";
import { QuestionEditor } from "../question-editor";
import { QuestionTypes } from "./question-types";
import { QuestionSettings } from "./question-settings";

export const QuestionCreator = () => {
  const dispatch = useDispatch();
  const activeQuestion = useSelector(selectActiveQuestion);

  const handleAddQuestion = (questionType: string) => {
    dispatch(addQuestion({ type: questionType, question: "Click to Edit" }));
  };

  return (
    <div className="flex flex-row gap-6 w-full">
      <QuestionSideNav />
      <section className="w-full">
        <div className="flex flex-col gap-6">
          {!activeQuestion && <QuestionTypes onSelect={handleAddQuestion} />}
          {activeQuestion && <QuestionEditor question={activeQuestion} />}
        </div>
      </section>
      <QuestionSettings question={activeQuestion} />
    </div>
  );
};
