console.log("js loaded")

const url = "https://api.thecatapi.com/v1/images/search";
const urlCategories = "https://api.thecatapi.com/v1/images/search?category_ids=";
const apiKey = "15d9e5a0-5a2d-4813-98ca-b2557dda6a28";

const form = document.querySelector("form");
const formInput = form.querySelector("input");
const randomButton = document.querySelector("button");
const randomCatImage = document.querySelector(".randomCatImage");
const categoryCatImage = document.querySelector(".categoryCatImage");

console.log(randomCatImage);

//Random Cat Image click Display
randomButton.addEventListener("click", rando => {
    fetch(url)
    fetch(url, {
        headers: {
            "x-api-key" : apiKey
        }
    })
        .then (res => res.json())
        // .then(res => console.log("Success", res))
        .then(res => {
            console.log(res[0].url);
            const randomCatImageUrl = res[0].url;
            randomCatImage.setAttribute("src", randomCatImageUrl);
        });
    // console.log(rando);
})

//Form Submit Category ID

form.addEventListener("submit", evt => {
    evt.preventDefault();

    const value = formInput.value;
    fetch(urlCategories + value, {
        headers: {
            "x-api-key" : apiKey
        }
    })
   // console.log(urlCategories + value);
    .then(res => res.json())
    .then(res => {
        console.log(res);
        const categoryCatImageUrl = res[0].url;
        console.log(res[0].url)
        categoryCatImage.setAttribute("src", categoryCatImageUrl);

    }); 

})


// form.addEventListener("submit", evt => {
//     evt.preventDefault();
//     const value = formInput.value;
// })

// fetch(url, {
//     headers: {
//         "x-api-key" : apiKey
//     }
// })
//     .then (res => res.json())
//     // .then(res => console.log("Success", res))
//     .then(res => {
//         console.log(res);
//     });

    