"use client";

import { useState } from "react";
import { useGemini } from "../../context/GeminiContext";

export const TextInputForm = () => {
  const { askTextQuestion, isLoading } = useGemini();
  const [documentText, setDocumentText] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = async () => {
    if (!documentText || !question) {
      alert("Please enter a document and a question.");
      return;
    }
    await askTextQuestion(documentText, question);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Ask a Question (Text Input)</h2>
      <textarea
        value={documentText}
        onChange={(e) => setDocumentText(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm mb-4"
        rows={4}
        placeholder="Paste your document text here..."
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
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
      >
        {isLoading ? "Processing..." : "Ask (Text)"}
      </button>
    </div>
  );
};