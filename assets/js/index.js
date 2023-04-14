
function feelingsToggleChecker(){ //function that checks the values of all of the toggles
    var happyToggle = document.getElementsByName('toggleCheckbox-Happy')[0].checked
    var calmToggle = document.getElementsByName('toggleCheckbox-Calm')[0].checked
    var relaxedToggle = document.getElementsByName('toggleCheckbox-Relaxed')[0].checked
    var energeticToggle = document.getElementsByName('toggleCheckbox-Energetic')[0].checked
    var optimisticToggle = document.getElementsByName('toggleCheckbox-Optimistic')[0].checked

    var oldFeelingsArray = [{happy: happyToggle,calm: calmToggle,relaxed: relaxedToggle,energetic: energeticToggle,optimistic: optimisticToggle}] //puts all of the feelings into an array as an object with a key:value
    var newFeelingsArray = [] //declares new feelings array for function below

    for(const property in oldFeelingsArray[0]){ //for loop for the length of properties/keys in the old feelings array
        if (`${oldFeelingsArray[0][property]}` === "true"){ //if the feeling is toggled, then it saves that and saves them to new array
            newFeelingsArray.unshift(`${property}`)
        }
    }
    feelingsQuerier(newFeelingsArray) //transfer newFeelingsArray to querier function
}

function feelingsQuerier(newFeelingsArray){
    var variablemood = newFeelingsArray[(Math.floor(Math.random() * newFeelingsArray.length))] //gets a random feeling from the newFeelingsArray
    getUnsplash(variablemood) //sends that feeling to be used to generate random picture from unsplash api
    quotesChanger(); //calls on the stoic quotes api to generate a random stoic quote
}

function quotesChanger(){ //function for calling random quotes from stoic api
    fetch('https://stoic-quotes.com/api/quote')
    .then(function(r){
        return r.json();
    })
    .then(function(data){ //function to change the hero lines to correspond with the new quote and author
        document.querySelector('#heroFirstLine').textContent = data.text
        document.querySelector('#heroSecondLine').textContent = "- " + data.author
        document.querySelector('#startButton').textContent = "Again?" //changes the start button to say again
    })
}

document.querySelector('#genreConfirmButton').addEventListener('click', feelingsToggleChecker)//event listener to start the feelings checker along with the stoic api and unsplash api functions

function getUnsplash(variablemood){
  let clientID = "5EBER4yF6LOq05pKyvvFhc3yQkLyidB-RSL4FRW0a3c";
  let endpoint = "https://api.unsplash.com/photos/random/?query=" + variablemood + "&client_id=" + clientID;

  let imageEl = document.querySelector("#splash-img");

  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function(jsonData) {
      imageEl.setAttribute('style', `background-image: url(${jsonData.urls.regular})`)
    })
}

//LOCAL STORAGE SECTION FOR MOODS
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("genreConfirmButton").addEventListener('click',function(){
        moodStorage();
    });

    var moodToggles = document.querySelectorAll('input[type=checkbox]');
    for(var i=0; i<moodToggles.length; i++) {
        var key = moodToggles[i].id;
        var value = localStorage.getItem(key);
        if(value === 'true') {
            moodToggles[i].checked = true;
        }
    }
});

function moodStorage() {
    var moodToggles = document.querySelectorAll('input[type=checkbox]');
    for(var i=0; i<moodToggles.length; i++) {
        var key = moodToggles[i].id;
        var value = moodToggles[i].checked;
        localStorage.setItem(key, value);
    }
}

anime({ //anime.js function to animate the welcome to cheerio hero text and start button on initial load
    targets: '#startContent', //selects target
    scale: [0.9, 1], //starts out the scale a little smaller than usual and eases into normal scale
    easing: 'easeInOutQuad', //easing method
    opacity: [0, 1], //starts out with 0% opacity and transitions into 100%
    duration: 1000 //duration set in milliseconds
});