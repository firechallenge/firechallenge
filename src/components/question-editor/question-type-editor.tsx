import { Question } from "@/models/question.model";
import { MultipleChoiceQuestionTypeEditor } from "./question-types/multiple-choice";
import { TrueFalseQuestionTypeEditor } from "./question-types/true-false";

interface Props {
  question: Question;
}

export const QuestionTypeEditor = ({ question }: Props) => {
  switch (question.type) {
    case "multiple-choice":
      return <MultipleChoiceQuestionTypeEditor question={question} />;
    case "true-false":
      return <TrueFalseQuestionTypeEditor question={question} />;
    default:
      return <div>Question Type Editor</div>;
  }
};
