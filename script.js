const quotes = [
  "“Every day may not be good, but there's something good in every day.”",
  "“You are not alone — your story matters.”",
  "“Even the darkest night will end and the sun will rise.”",
  "“Peace begins when the noise in your head quiets down.”",
  "“Small steps every day lead to big change.”",
  "“You are stronger than you think.”",
  "“Your mind is a powerful thing. Fill it with positive thoughts.”",
  "“When you can’t find the sunshine, be the sunshine.”"
];

let index = 0;
const quoteEl = document.querySelector('.quote');

function showQuote() {
  quoteEl.textContent = quotes[index];
  index = (index + 1) % quotes.length;
}

showQuote();
setInterval(showQuote, 10000);
