let colorPallete = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];

var httpHeaders = {
  "X-Mashape-Key": "3ssNrLwQaHmshdrfDEyfjHezXQ7mp1U8sBYjsna3g8jeRSTOW3"
};

var request = new Request(
  "https://andruxnet-random-famous-quotes.p.mashape.com/",
  {
    headers: new Headers({
      "X-Mashape-Key": "3ssNrLwQaHmshdrfDEyfjHezXQ7mp1U8sBYjsna3g8jeRSTOW3"
    })
  }
);

function getQuote() {
  fetch(request)
    .then(response => response.json())
    .then(json => {
      let color = colorPallete[Math.floor(12 * Math.random())];
      document.getElementById(
        "quote"
      ).innerHTML = `<i class="fas fa-quote-left"></i>
      ${json[0].quote}<i class="fas fa-quote-right"></i>
      `;
      document.getElementById("author").innerHTML = `- ${json[0].author}`;
      document.getElementById("category").innerHTML = `${json[0].category}`;
      document.getElementById("getQuote").style.backgroundColor = color;
      document.getElementById("category").style.backgroundColor = color;
      document.body.style.color = color;
      document.body.style.backgroundColor = color;
    })
    .catch(error => console.log(error));
}

getQuote();
