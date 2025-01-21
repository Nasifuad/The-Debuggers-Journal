export const getData = async () => {
  const response = await fetch(
    "https://the-debuggers-journal-e2f6.vercel.app/blogs"
  );
  const data = await response.json();
  return data;
};
