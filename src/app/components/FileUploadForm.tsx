"use client";

import { useState } from "react";
import { useGemini } from "../../context/GeminiContext";

export const FileUploadForm = () => {
  const { askFileQuestion, isLoading } = useGemini();
  const [file, setFile] = useState<File | null>(null);
  const [question, setQuestion] = useState("");

  const handleSubmit = async () => {
    if (!file || !question) {
      alert("Please upload a file and enter a question.");
      return;
    }
    await askFileQuestion(file, question);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Ask a Question (File Upload)</h2>
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm mb-4"
      />
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm mb-4"
        placeholder="Enter your question"
      />
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:bg-green-300"
      >
        {isLoading ? "Processing..." : "Ask (File)"}
      </button>
    </div>
  );
};