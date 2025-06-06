export const hostExtractor = () => {
  // This function extracts the host from the current URL.
  // It is used in the content script to get the site name.
  const content = window.location;
  console.log("Content object:", content);
  const siteName =
    content.hostname.split(".")[content.hostname.split(".").length > 2 ? 1 : 0];
  console.log("Hello", siteName);
  return siteName;
};
