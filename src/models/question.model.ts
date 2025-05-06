export interface Question {
  id: string;
  name: string;
  question: string;
  type: string;
  options?: QuestionOption[];
}

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
}
