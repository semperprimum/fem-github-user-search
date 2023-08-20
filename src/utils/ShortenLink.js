export const shortenLink = (url) => {
  const shortened = url.replace(/^(https?:\/\/)?(www\.)?/, "");
  return shortened.split("/")[0];
};
