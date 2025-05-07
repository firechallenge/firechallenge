import Image from "next/image";
import { useSelector } from "react-redux";
import { selectQuestionTypes } from "@/lib/features/question/question-type.slice";

interface Props {
  onSelect: (questionType: string) => void;
  activeQuestionType?: string;
}

export const QuestionTypes = ({ onSelect, activeQuestionType }: Props) => {
  const questionTypes = useSelector(selectQuestionTypes);

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Most Popular
      </li>

      {questionTypes?.map((questionType) => (
        <li
          className="rounded-none list-row cursor-pointer hover:bg-base-200 transition-colors duration-200 aria-selected:bg-base-200 aria-selected:text-black aria-selected:font-bold aria-selected:opacity-100"
          key={questionType.id}
          onClick={() => onSelect(questionType.id)}
          role="option"
          aria-selected={questionType.id === activeQuestionType}
        >
          <div className="flex items-center">
            <Image
              className="w-12"
              src={questionType.image}
              alt={questionType.name}
              width={96}
              height={69}
            />
          </div>
          <div className="flex flex-col">
            <div>{questionType.name}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {questionType.description}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
