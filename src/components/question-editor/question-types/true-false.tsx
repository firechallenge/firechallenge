import { Question } from "@/models/question.model";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateQuestion } from "@/lib/features/question/question.slice";

interface Props {
  question: Question;
}

export const TrueFalseQuestionTypeEditor = ({ question }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!question.options) {
      dispatch(
        updateQuestion({
          ...question,
          options: [
            { id: "1", text: "True", isCorrect: true },
            { id: "2", text: "False", isCorrect: false },
          ],
        })
      );
    }
  }, [question, dispatch]);

  return <div className="p-4">True or False Question Type Editor</div>;
};
