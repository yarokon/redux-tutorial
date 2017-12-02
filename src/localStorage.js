export const loadState = () => {
  try {
    const serializedSate = localStorage.getItem('state');

    if (serializedSate) {
      return JSON.parse(serializedSate);
    }
  } catch (err) {
    console.warn(err);
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedSate = JSON.stringify(state);
    localStorage.setItem('state', serializedSate);
  } catch (err) {
    console.warn(err);
  }
}
