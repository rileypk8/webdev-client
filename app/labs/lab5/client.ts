import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${HTTP_SERVER}/lab5/welcome`);
  return response.data;
};

export type Assignment = {
  id: number;
  title: string;
  description: string;
  due: string;
  completed: boolean;
  score: number;
};

const ASSIGNMENT_API = `${HTTP_SERVER}/lab5/assignment`;

export const fetchAssignment = async (): Promise<Assignment> => {
  const response = await axios.get(ASSIGNMENT_API);
  return response.data;
};

export const updateTitle = async (title: string): Promise<Assignment> => {
  const response = await axios.get(
    `${ASSIGNMENT_API}/title/${encodeURIComponent(title)}`
  );
  return response.data;
};
