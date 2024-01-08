const HAS_BROWSER_STORAGE = typeof window !== "undefined";

export function setLocalStorageItem(key: string, value: string) {
  if (HAS_BROWSER_STORAGE) {
    window.localStorage.setItem(key, value);
  }
}

export function getLocalStorageItem(key: string) {
  if (HAS_BROWSER_STORAGE) {
    return window.localStorage.getItem(key);
  }
}

export function removeLocalStorageItem(key: string) {
  if (HAS_BROWSER_STORAGE) {
    return window.localStorage.removeItem(key);
  }
}

export function setSessionStorageItem(key: string, value: string) {
  if (HAS_BROWSER_STORAGE) {
    window.sessionStorage.setItem(key, value);
  }
}

export function getSessionStorageItem(key: string) {
  if (HAS_BROWSER_STORAGE) {
    return window.sessionStorage.getItem(key);
  }
}

export function removeSessionStorageItem(key: string) {
  if (HAS_BROWSER_STORAGE) {
    return window.sessionStorage.removeItem(key);
  }
}
