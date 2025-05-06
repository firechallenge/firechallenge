import { IconPlus } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectQuestions,
  setQuestionEditingId,
} from "@/lib/features/question/question.slice";

export const QuestionSideNav = () => {
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch();

  return (
    <div className="w-96">
      <div className="flex flex-col gap-4">
        {questions.map((question) => (
          <div
            className="card bg-base-100 card-sm shadow-sm hover:bg-base-200 transition-colors duration-200 cursor-pointer"
            key={question.id}
            onClick={() => {
              dispatch(setQuestionEditingId(question.id));
            }}
          >
            <div className="card-body">
              <h2 className="card-title">{question.name}</h2>
              <p>{question.question}</p>
            </div>
          </div>
        ))}

        <div
          className="card bg-base-200 card-sm shadow-sm flex items-center justify-center min-h-24 cursor-pointer hover:bg-base-300 transition-colors duration-200 group"
          onClick={() => {
            dispatch(setQuestionEditingId(""));
          }}
        >
          <IconPlus
            className="text-gray-500 group-hover:text-primary"
            width={60}
            height={60}
          />
        </div>
      </div>
    </div>
  );
};
