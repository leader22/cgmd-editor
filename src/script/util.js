export function getStorage(key) {
  if (global.localStorage) {
    return localStorage.getItem(key);
  }
  return null;
};

export function setStorage(key, str) {
  if (global.localStorage) {
    localStorage.setItem(key, str);
  }
};
