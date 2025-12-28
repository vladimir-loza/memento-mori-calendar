
export const useLocalStorage = () => {

  const getItemByKey = (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  const setItemByKey = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const removeItemByKey = (key: string) => {
    localStorage.removeItem(key);
  }

  return {
    getItemByKey,
    setItemByKey,
    removeItemByKey,
  }
}