// define a variable by getting the id from html
const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name")



// add an event listener to our button
btnEl.addEventListener("click",async function(){
    try {
        // set the disabled function to true when clicked
        btnEl.disabled = true;
        // change btn inner text to loading
        btnEl.innerText = "LOADING...";
        // change name inner text to updating
        animeNameEl.innerText = "UPDATING..";
        // use a loading icon to make it load while fetching
        animeImgEl.src = "spinner.svg";
        // fetch the api and set variable to response
        const response = await fetch(" https://api.catboys.com/img");
        // after change the response to json
        const data = await response.json();
        // after fetch the disable button is set to false to enable clicking again
        btnEl.disabled = false;
        // change the inner text after fetching
        btnEl.innerText = "Get Anime";
        // display our anime container after fetch.set display to block
        animeContainerEl.style.display = "block";
        // show our json image data via data.url
        animeImgEl.src = data.url;
        // show our json artist name via data.artist
        animeNameEl.innerText = data.artist;
        // In order to catch error and show to user
    } catch (error) {
        // show the error
        console.log(error);
        // one can be able to click the button
        btnEl.disabled = false;
        // inner text for button to be get anime
        btnEl.innerText = "Get Anime";
        // show our error via anime name
        animeNameEl.innerText = "An error occurred, please try again";
    }
})