"use client"

export const AnswerDisplay = ({ answer }: { answer: string }) => {
    return (
      <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
        <strong>Answer:</strong> {answer}
      </div>
    );
  };