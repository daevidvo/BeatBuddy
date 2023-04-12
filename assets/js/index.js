//DAVID'S SECTION

function feelingsToggleChecker(){
    var happyToggle = document.getElementsByName('toggleCheckbox-Happy')[0].checked
    var calmToggle = document.getElementsByName('toggleCheckbox-Calm')[0].checked
    var relaxedToggle = document.getElementsByName('toggleCheckbox-Relaxed')[0].checked
    var energeticToggle = document.getElementsByName('toggleCheckbox-Energetic')[0].checked
    var optimisticToggle = document.getElementsByName('toggleCheckbox-Optimistic')[0].checked

    var oldFeelingsArray = [{happy: happyToggle,calm: calmToggle,relaxed: relaxedToggle,energetic: energeticToggle,optimistic: optimisticToggle}]
    var newFeelingsArray = []

    for(const property in oldFeelingsArray[0]){
        if (`${oldFeelingsArray[0][property]}` === "true"){
            newFeelingsArray.unshift(`${property}`)
        }
    }
    beatsQuerier(newFeelingsArray)
}

function beatsQuerier(newFeelingsArray){
    var variablemood = newFeelingsArray[(Math.floor(Math.random() * newFeelingsArray.length))]
    getUnsplash(variablemood)
    quotesChanger();
}

// https://api.unsplash.com/photos/random/?query={QUERYSTRING}&per_page=1&client_id=5EBER4yF6LOq05pKyvvFhc3yQkLyidB-RSL4FRW0a3c
function quotesChanger(){
    fetch('https://stoic-quotes.com/api/quote')
    .then(function(r){
        return r.json();
    })
    .then(function(data){
        document.querySelector('#heroFirstLine').textContent = data.text
        document.querySelector('#heroSecondLine').textContent = "- " + data.author
        document.querySelector('#startButton').textContent = "Again?"
    })
}


















































































document.querySelector('#genreConfirmButton').addEventListener('click', feelingsToggleChecker)






//BRYAN'S SECTION
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
 

  
  
  



































































































// KENNETH START THE UNSPLASH API



















































































































