console.log("Script Loaded");

//Search string port:1494,3389 org:"amazon web services"
//URL https://api.shodan.io/shodan/host/search?key={YOUR_API_KEY}&query={query}&facets={facets}
//https://api.shodan.io/shodan/host/search?key=6Ew4Z6p9kOwelROHLtOwn23ChCIoR0H1&query=port:1494,3389

const url = "https://api.shodan.io/shodan/host/search?key=";
const apiKey = "6Ew4Z6p9kOwelROHLtOwn23ChCIoR0H1";
const query = "&query=port:1494,3389 org:amazon web services";
const facets = "";

//Forms, Inputs, Buttons
const form = document.querySelector("form");
const formInput = form.querySelector("input");

//Urls
const urlConcat = url + apiKey + query;

//Response objects
let queryResponse ={};

//HTML Content
//let rawData = document.querySelector("rawData");

console.log(url);

//Initial Query
// fetch(urlConcat)
//   .then(console.log(urlConcat))
//   .then(res => res.json())
//   .then(res => console.log(res));

form.addEventListener("submit", evt => {
  evt.preventDefault();

  const value = formInput.value;
//   fetch(url  apiKey + "&" + value)
  fetch(`${url}${apiKey}&query=${value}`)
    .then(console.log(url + apiKey + "&" + value))
    .then(res => res.json())
    .then(res => {
        queryResponse = res.matches
        queryResponse.forEach(rawData(queryResponse));
        //queryResponse.forEach(element => (rawData(element)));
        // jsDotList.forEach(jsDotList => jsDotList.addEventListener ('click', scoreUpdate));  From Dot Lab!
        //Goal:  Iterate over each item then present it to the browser as text.  Allow it to print to the page
        // innerHtml of a class of div / section / article - some container that will get CSS'd
      //const categoryCatImageUrl = res[0].url;
      //console.log(res[0].url)
      //categoryCatImage.setAttribute("src", categoryCatImageUrl);
    });
    
});

function rawData(data){
    document.querySelector(".rawData").innerHTML= JSON.stringify(queryResponse);
}