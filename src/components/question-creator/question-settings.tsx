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

  const availableDurations = [
    { value: 2, label: "2 seconds" },
    { value: 5, label: "5 seconds" },
    { value: 10, label: "10 seconds" },
    { value: 15, label: "15 seconds" },
  ];

  return (
    <div className="w-96">
      <h2 className="font-bold text-gray-500">Question Settings</h2>
      {/* Question Type */}
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
      {/* Duration */}
      <div className="relative dropdown dropdown-bottom dropdown-end mt-4">
        <div tabIndex={0} role="button" className="btn">
          Duration - {question.settings.duration} seconds
        </div>
        <div
          tabIndex={0}
          className="dropdown-content absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white"
        >
          <ul className="list bg-base-100 rounded-box shadow-md">
            {availableDurations.map((duration) => (
              <li
                className="list-row cursor-pointer hover:bg-base-200 transition-colors duration-200 rounded-none aria-selected:bg-base-200 aria-selected:text-black aria-selected:font-bold aria-selected:opacity-100"
                key={duration.value}
                role="option"
                aria-selected={duration.value === question.settings.duration}
                onClick={() =>
                  dispatch(
                    updateQuestion({
                      ...question,
                      settings: {
                        ...question.settings,
                        duration: duration.value,
                      },
                    })
                  )
                }
              >
                <a>{duration.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
