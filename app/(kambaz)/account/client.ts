import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const USERS_API = `${HTTP_SERVER}/api/users`;

export const signin = async (credentials: {
  username: string;
  password: string;
}) => {
  const response = await axios.post(`${USERS_API}/signin`, credentials);
  return response.data;
};
