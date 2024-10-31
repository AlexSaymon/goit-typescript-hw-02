import axios from "axios";

const ACCESS_KEY = "mdCHMsrJE1UYSJfXIPBncbmI6D-6jTO6JdmUzq3Wcgk";

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface FetchArticlesResponse {
  total_pages: number;
  results: Image[];
}

export const fetchArticles = async (
  page: number = 0,
  query: string
): Promise<FetchArticlesResponse> => {
  const { data } = await axios.get<FetchArticlesResponse>(
    `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${query}&page=${page}&per_page=10`
  );
  return data;
};
