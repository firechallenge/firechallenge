export interface Question {
  id: string;
  name: string;
  question: string;
  type: string;
  options?: QuestionOption[];
  settings: QuestionSettings;
}

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuestionSettings {
  duration: number;
}
