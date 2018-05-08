console.log("Hello World");

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

function searchWeatherByCity() {
  fetch(request)
    .then(response => response.json())
    .then(json => {
      console.log(JSON.stringify(json));
      document.getElementById("quote").innerHTML = `"${json.quote}"`;
      document.getElementById("author").innerHTML = `-${json.author}`;
      document.getElementById("category").innerHTML = json.category;
    })
    .catch(error => console.log(error));
}
