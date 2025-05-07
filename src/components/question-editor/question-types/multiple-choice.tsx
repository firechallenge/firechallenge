import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Question } from "@/models/question.model";
import { updateQuestion } from "@/lib/features/question/question.slice";
import { IconPlus } from "@tabler/icons-react";

interface Props {
  question: Question;
}

export const MultipleChoiceQuestionTypeEditor = ({ question }: Props) => {
  const dispatch = useDispatch();

  const [options, setOptions] = useState(question.options || []);

  const colorOptions = [
    { bgColor: "bg-blue-600", hoverBgColor: "hover:bg-blue-700" },
    { bgColor: "bg-green-600", hoverBgColor: "hover:bg-green-700" },
    { bgColor: "bg-red-600", hoverBgColor: "hover:bg-red-700" },
    { bgColor: "bg-yellow-600", hoverBgColor: "hover:bg-yellow-700" },
    { bgColor: "bg-purple-600", hoverBgColor: "hover:bg-purple-700" },
    { bgColor: "bg-pink-600", hoverBgColor: "hover:bg-pink-700" },
    { bgColor: "bg-orange-600", hoverBgColor: "hover:bg-orange-700" },
    { bgColor: "bg-cyan-600", hoverBgColor: "hover:bg-cyan-700" },
    { bgColor: "bg-teal-600", hoverBgColor: "hover:bg-teal-700" },
    { bgColor: "bg-indigo-600", hoverBgColor: "hover:bg-indigo-700" },
  ];

  useEffect(() => {
    const newOptions = [
      { id: "1", text: "Option 1", isCorrect: true },
      { id: "2", text: "Option 2", isCorrect: false },
      { id: "3", text: "Option 3", isCorrect: false },
      { id: "4", text: "Option 4", isCorrect: false },
    ];

    if (
      question.options &&
      question.options.length > 0 &&
      options.length === 0
    ) {
      setOptions(question.options);
    }

    if (!question.options) {
      dispatch(
        updateQuestion({
          ...question,
          options: newOptions,
        })
      );
    }
  }, [question, dispatch, options]);

  const handleSave = () => {
    dispatch(
      updateQuestion({
        ...question,
        options,
      })
    );
  };

  const handleAddOption = () => {
    setOptions([
      ...options,
      {
        id: (options.length + 1).toString(),
        text: "Option " + (options.length + 1),
        isCorrect: false,
      },
    ]);

    handleSave();
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        {options?.map((option, optionIndex) => (
          <div
            key={option.id}
            className={
              "card " +
              colorOptions[optionIndex].bgColor +
              " " +
              colorOptions[optionIndex].hoverBgColor +
              " transition-colors duration-200 cursor-pointer text-white"
            }
          >
            <h2 className="card-title">
              <input
                value={option.text}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  // If enter is pressed, exit edit mode
                  if (e.key === "Enter") {
                    handleSave();
                    e.currentTarget.blur();
                  }
                }}
                onChange={(e) => {
                  setOptions(
                    options.map((option, index) =>
                      option.id === option.id && index === optionIndex
                        ? { ...option, text: e.target.value }
                        : option
                    )
                  );
                }}
                onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                  e.currentTarget.select();
                }}
                onBlur={() => {
                  handleSave();
                }}
                className="input input-ghost w-full text-lg text-center input-sm px-2 py-8"
              />
            </h2>
          </div>
        ))}
        <button
          onClick={handleAddOption}
          className="btn btn-ghost btn-lg col-start-1 col-span-2"
          disabled={options.length >= 6}
        >
          <IconPlus /> Add Option
          {options.length >= 6 && " (Max 6 options)"}
        </button>
      </div>
    </div>
  );
};
