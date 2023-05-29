export const GetAPI = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message, "Could not fetch data");
  }
};

export const getAPIALL = async (url) => {
  const info = await Promise.all(
    url.map((element) => fetch(element).then((element) => element.json()))
  );
  return info;
};
