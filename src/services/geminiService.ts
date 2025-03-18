import api from "../utils/api";

interface AskQuestionPayload {
  document: string;
  question: string;
}

interface UploadFilePayload {
  file: File;
  question: string;
}

export const askQuestion = async (payload: AskQuestionPayload) => {
  const response = await api.post("/ask", payload);
  return response.data;
};

export const uploadFile = async (payload: UploadFilePayload) => {
  const formData = new FormData();
  formData.append("file", payload.file);
  formData.append("question", payload.question);

  const response = await api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};