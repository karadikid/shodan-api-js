console.log("We shall Shodan");

//Search string port:1494,3389 org:"amazon web services"
//URL https://api.shodan.io/shodan/host/search?key={YOUR_API_KEY}&query={query}&facets={facets}
//https://api.shodan.io/shodan/host/search?key=6Ew4Z6p9kOwelROHLtOwn23ChCIoR0H1&query=port:1494,3389

const url = "https://api.shodan.io/shodan/host/search?key=";
const apiKey = "P6DismsMDH04p3i06eIhOmvtFVmz1Lgb";
const query = "&query=port:1494,3389 org:amazon web services";
const facets = "";

//Here Platform API initialization
var platform = new H.service.Platform({
  apikey: "lr9OdiaYn5L9AtgZaqpx1eQYTXOSkdAWz1NGNvKN9v0"
});

//Forms, Inputs, Buttons
const form = document.querySelector("form");
const formInput = form.querySelector("input");

//Urls
const urlConcat = url + apiKey + query;

//Response objects
let queryResponse = {};

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
      queryResponse = res.matches;
      // queryResponse.forEach(rawData(queryResponse));
      queryResponse.forEach(item => addChild(item));
    });
});

//Adding child items for initial data - https://www.w3schools.com/jsref/met_node_appendchild.asp
//Calling createMap() for iterating over HERE maps
function addChild(data) {
  // let child = document.createElement("section");
  // let childMap = document.createElement("section");
  // let textnodeMap = document.createTextNode(
  //   data.location.latitude + data.location.longitude
  // );
  // let textnode = document.createTextNode(
  //   data.ip_str + data.isp + data.location.longitude + data.location.latitude
  // );
  // child.appendChild(textnode);
  // document.querySelector(".rawData").appendChild(child);
  createMap(
    data.location.longitude,
    data.location.latitude,
    data.isp,
    data.ip_str
  );
  // document.querySelector("mapContainer").appendChild(childMap);
  console.log(data);
}

// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

var animatedSvg =
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" ' +
  'y="0px" style="margin:-112px 0 0 -32px" width="136px"' +
  'height="150px" viewBox="0 0 136 150"><ellipse fill="#000" ' +
  'cx="32" cy="128" rx="36" ry="4"><animate attributeName="cx" ' +
  'from="32" to="32" begin="0s" dur="1.5s" values="96;32;96" ' +
  'keySplines=".6 .1 .8 .1; .1 .8 .1 1" keyTimes="0;0.4;1"' +
  'calcMode="spline" repeatCount="indefinite"/>' +
  '<animate attributeName="rx" from="36" to="36" begin="0s"' +
  'dur="1.5s" values="36;10;36" keySplines=".6 .0 .8 .0; .0 .8 .0 1"' +
  'keyTimes="0;0.4;1" calcMode="spline" repeatCount="indefinite"/>' +
  '<animate attributeName="opacity" from=".2" to=".2"  begin="0s" ' +
  ' dur="1.5s" values=".1;.7;.1" keySplines=" .6.0 .8 .0; .0 .8 .0 1" ' +
  'keyTimes=" 0;0.4;1" calcMode="spline" ' +
  'repeatCount="indefinite"/></ellipse><ellipse fill="#1b468d" ' +
  'cx="26" cy="20" rx="16" ry="12"><animate attributeName="cy" ' +
  'from="20" to="20" begin="0s" dur="1.5s" values="20;112;20" ' +
  'keySplines=".6 .1 .8 .1; .1 .8 .1 1" keyTimes=" 0;0.4;1" ' +
  'calcMode="spline" repeatCount="indefinite"/> ' +
  '<animate attributeName="ry" from="16" to="16" begin="0s" ' +
  'dur="1.5s" values="16;12;16" keySplines=".6 .0 .8 .0; .0 .8 .0 1" ' +
  'keyTimes="0;0.4;1" calcMode="spline" ' +
  'repeatCount="indefinite"/></ellipse></svg>';

/*  TRYING TO ADD MAP ICON OBJECT
//Create an icon object, an object with geographic coordinates and a marker:
var icon = new H.map.DomIcon(animatedSvg),
  coords = { lat: data.location.latitude, lng: data.location.longitude },
  marker = new H.map.DomMarker(coords, { icon: icon });

// Set map center and zoom, add the marker to the map:
map.setCenter(coords);
map.setZoom(18);
map.addObject(marker);

END TRYING TO ADD MAP ICON OBJECT*/

// Create (and display) DEFAULT map object:
// Instantiate (and display) DEFAULT map object:
// var map = new H.Map(
//   document.getElementById("mapContainer"),
//   maptypes.vector.normal.map,
//   {
//     zoom: 10,
//     center: { lng: 13.4, lat: 52.51 }
//   }
// );


// Create (and display) iterated map object:
function createMap(long, lat, isp, ip) {
  console.log(long, lat);
  let childMap = document.createElement("section");
  let textnodeMap = document.createTextNode(
    `IP Address: ${ip} ISP: ${isp} Longitude: ${long} Latitude: ${lat}`
  );
  var map = new H.Map(
    document.getElementById("mapContainer"),
    maptypes.vector.normal.map,
    {
      zoom: 10,
      center: { lng: long, lat: lat }
    }
  );
  childMap.appendChild(textnodeMap);
  document.querySelector("#mapContainer").appendChild(childMap);
}

function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}


//STRINGIFY ATTEMPT FAIL
// function addChild(data){
//     let child = document.createElement("section");
//     let textnode = document.createTextNode(JSON.stringify(queryResponse));
//     child.appendChild(textnode);
//     document.querySelector(".rawData").appendChild(child);
// }
