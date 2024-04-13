export const simulateServer = () => {
  return new Promise<void>((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve();
    }
    const t = window.setTimeout(() => {
      reject();
      return clearTimeout(t);
    }, 1000);
  });
};
