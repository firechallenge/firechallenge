import { QuestionCreator } from "../question-creator";

interface Props {
  name: string;
}

export const QuestionsSection = ({ name }: Props) => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-2xl mb-4 font-bold">{name}</h1>
      <QuestionCreator />
    </div>
  );
};
