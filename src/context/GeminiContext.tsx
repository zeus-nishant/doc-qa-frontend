"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { askQuestion, uploadFile } from "../services/geminiService";

interface GeminiContextType {
  answer: string;
  setAnswer: (answer: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  askTextQuestion: (document: string, question: string) => Promise<void>;
  askFileQuestion: (file: File, question: string) => Promise<void>;
}

const GeminiContext = createContext<GeminiContextType | undefined>(undefined);

export const GeminiProvider = ({ children }: { children: ReactNode }) => {
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const askTextQuestion = async (document: string, question: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await askQuestion({ document, question });
      setAnswer(response.answer);
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const askFileQuestion = async (file: File, question: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await uploadFile({ file, question });
      setAnswer(response.answer);
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GeminiContext.Provider
      value={{
        answer,
        setAnswer,
        isLoading,
        setIsLoading,
        error,
        setError,
        askTextQuestion,
        askFileQuestion,
      }}
    >
      {children}
    </GeminiContext.Provider>
  );
};

export const useGemini = () => {
  const context = useContext(GeminiContext);
  if (!context) {
    throw new Error("useGemini must be used within a GeminiProvider");
  }
  return context;
};