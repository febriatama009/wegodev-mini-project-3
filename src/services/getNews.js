import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({ searchQuery = "technology" }) => {
  try {
    const path = "/everything";
    const query = `?q=${searchQuery}&apiKey=${NEWS_API_KEY}`;
    const endPointUrl = `${BASE_URL}${path}${query}`;

    //fetch endpoint
    const res = await axios.get(endPointUrl);

    //logic
    if (res.status === 200) {
      const additionalObj = {
        category: searchQuery,
      };
      const resData = { ...res.data, ...additionalObj };

      return resData;
    }
  } catch (error) {
    console.error("Error getting Tech News: ", error);
  }
};
