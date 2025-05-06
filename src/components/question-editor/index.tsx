import { updateQuestion } from "@/lib/features/question/question.slice";
import { Question } from "@/models/question.model";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { QuestionTypeEditor } from "./question-type-editor";

interface Props {
  question: Question;
}

export const QuestionEditor = ({ question }: Props) => {
  const [initialId, setInitialId] = useState(question.id);
  const [questionText, setQuestionText] = useState(question.question);
  const [questionName, setQuestionName] = useState(question.name);

  const questionTextRef = useRef<HTMLTextAreaElement>(null);
  const questionNameRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (question.id !== initialId) {
      setInitialId(question.id);
      setQuestionText(question.question);
      setQuestionName(question.name);
    }
  }, [question, initialId]);

  const handleSave = () => {
    dispatch(
      updateQuestion({
        ...question,
        name: questionName,
        question: questionText,
      })
    );
  };

  return (
    <div className="hero bg-base-200 rounded-md">
      <div className="hero-content w-full text-center">
        <div className="w-full">
          <input
            value={questionName}
            onKeyDown={(e) => {
              // If enter is pressed, exit edit mode
              if (e.key === "Enter") {
                questionNameRef.current?.blur();
              }
            }}
            onChange={(e) => {
              setQuestionName(e.target.value);
            }}
            onClick={() => {
              questionNameRef.current?.select();
            }}
            onBlur={() => {
              handleSave();
            }}
            className="input input-ghost w-full text-center input-sm"
            ref={questionNameRef}
          />
          <textarea
            value={questionText}
            onKeyDown={(e) => {
              // If enter is pressed, exit edit mode
              if (e.key === "Enter") {
                questionTextRef.current?.blur();
              }
            }}
            onChange={(e) => {
              setQuestionText(e.target.value);
              // Grow textarea to fit content
              if (questionTextRef.current) {
                questionTextRef.current.style.height = "auto";
                questionTextRef.current.style.height =
                  questionTextRef.current.scrollHeight + "px";
              }
            }}
            className="textarea textarea-ghost w-full text-4xl font-bold text-center my-2 w-full resize-none"
            onClick={() => {
              // Select text on click
              questionTextRef.current?.select();
            }}
            onBlur={() => {
              handleSave();
            }}
            ref={questionTextRef}
          ></textarea>
          <QuestionTypeEditor question={question} />
        </div>
      </div>
    </div>
  );
};
