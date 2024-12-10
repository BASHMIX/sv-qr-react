/**
 * check if string is a valid url
 * @param url
 */
export const isValidUrl = (url: string) => {
  try {
    new URL(url);
  } catch (_) {
    return false;
  }
  return true;
};
