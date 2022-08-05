export default async function fetchQuote(callback) {
  const url = 'https://api.quotable.io/random';
  const quote = await (await fetch(url)).json();
  console.log(quote);
  callback(quote);
};
