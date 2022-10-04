import axios from "axios";

export const fetcher = () => {

  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  })

  return instance
}

export const request = async (url) => {
  try {
    const response = await fetcher()(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Request error", error.response || error.message);
    } else {
      console.error("Request error", error.message);
    }
    return null;
  }
};
