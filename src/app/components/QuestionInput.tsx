"use client"
import { ChangeEvent } from "react";

interface QuestionInputProps {
  question: string;
  onQuestionChange: (question: string) => void;
}

export const QuestionInput = ({
  question,
  onQuestionChange,
}: QuestionInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onQuestionChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Question
      </label>
      <input
        type="text"
        value={question}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        placeholder="Enter your question"
      />
    </div>
  );
};