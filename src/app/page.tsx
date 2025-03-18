"use client";

import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TextInputForm } from "./components/TextInputForm";
import { FileUploadForm } from "./components/FileUploadForm";
import { AnswerDisplay } from "./components/AnswerDisplay";
import { useGemini } from "../context/GeminiContext";

export default function Home() {
  const { answer, error, setAnswer } = useGemini();
  const [isTextInput, setIsTextInput] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <div className="max-w-4xl mx-auto">
          {/* Toggle Button */}
          <div className="mb-6">
            <button
              onClick={() => {
                setIsTextInput(!isTextInput)
                setAnswer("")
              }}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700"
            >
              Switch to {isTextInput ? "File Upload" : "Text Input"}
            </button>
          </div>

          {/* Render the Selected Component */}
          {isTextInput ? <TextInputForm /> : <FileUploadForm />}

          {/* Display Answer or Error */}
          {error && (
            <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              {error}
            </div>
          )}
          {answer && <AnswerDisplay answer={answer} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}