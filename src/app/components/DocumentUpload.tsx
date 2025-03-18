"use client"
import { ChangeEvent } from "react";

interface DocumentUploadProps {
  onFileChange: (file: File) => void;
}

export const DocumentUpload = ({ onFileChange }: DocumentUploadProps) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange(e.target.files[0]);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Upload Document (PDF)
      </label>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
      />
    </div>
  );
};