export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.5;
    if (success) {
      resolve('Stuff worked!');
    } else {
      reject(Error('It broke'));
    }
  });
}
