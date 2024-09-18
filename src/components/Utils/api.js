const API_URL = process.env.REACT_APP_WOUESSI_API_URL;

export const fetchBlog = async (id, language) => {
  const response = await fetch(`${API_URL}/blogs/${id}?language=${language}`);
  const data = await response.json();
  return data;
};
