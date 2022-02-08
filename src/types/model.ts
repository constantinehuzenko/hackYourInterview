export enum QuestionModel {
  quiz = "quiz",
  theory = "theory",
}

export enum LanguageList {
  ru = "ru",
  en = "en",
}

export enum PagesList {
  quiz = "quiz",
}

export type OneOfQuestionModelType = keyof typeof QuestionModel;

export type OneOfLanguageListType = keyof typeof LanguageList;

export type OneOfPagesListType = keyof typeof PagesList;

export type CodeLanguagesType = "js" | "react";

interface ITestVariant {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface IQuestionItem {
  id: string;
  questionModel?: OneOfQuestionModelType;
  codeLanguage?: CodeLanguagesType;
  header: string | null | undefined;
  question: string | null | undefined;
  testVariants: Array<ITestVariant> | null | undefined;
  explanation: string | null | undefined;
  isMarked?: boolean;
  watched: boolean;
  rate?: number;
}

export interface IStore {
  user: {
    language: OneOfLanguageListType;
    auth: {
      isSignedIn: boolean;
    };
  };
  routing: {
    currentPage: OneOfPagesListType;
  };
  questions: {
    list: Record<
      OneOfLanguageListType,
      Array<IQuestionItem> | null | undefined
    >;
    currentQuestion: IQuestionItem | null | undefined;
    currentContent: DynamicContentTypes;
    openResetModal: boolean;
    isCorrectVisible: boolean;
  };
}

export type DynamicContentTypes = "questions" | "answers" | "explanation";