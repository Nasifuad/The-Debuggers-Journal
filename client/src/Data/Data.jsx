export const getData = async () => {
  const response = await fetch("http://localhost:3001/blogs");
  const data = await response.json();
  return data;
};
