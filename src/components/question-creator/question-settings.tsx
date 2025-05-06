import { QuestionTypes } from "./question-types";
import { Question } from "@/models/question.model";
import { useDispatch } from "react-redux";
import { updateQuestion } from "@/lib/features/question/question.slice";

interface Props {
  question: Question | null;
}

export const QuestionSettings = ({ question }: Props) => {
  const dispatch = useDispatch();

  const handleQuestionTypeChange = (questionType: string) => {
    dispatch(updateQuestion({ ...question, type: questionType }));
  };

  if (!question) {
    return <div className="w-96"></div>;
  }

  return (
    <div className="w-96">
      <h2 className="font-bold text-gray-500">Question Settings</h2>
      <div className="relative dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="btn">
          Change Question Type
        </div>
        <div
          tabIndex={0}
          className="dropdown-content absolute z-50 mt-2 w-96 rounded-md shadow-lg bg-white"
        >
          <QuestionTypes
            onSelect={handleQuestionTypeChange}
            activeQuestionType={question.type}
          />
        </div>
      </div>
    </div>
  );
};
