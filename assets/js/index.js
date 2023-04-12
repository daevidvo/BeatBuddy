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

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("genreConfirmButton").addEventListener('click',function(){
        moodStorage();
    })
})

    var mood0 = document.getElementById("happy");
    var mood1 = document.getElementById("calm");
    var mood2 = document.getElementById("relaxed");
    var mood3 = document.getElementById("energetic");
    var mood4 = document.getElementById("optimistic");

    console.log(document.getElementById("happy").checked);
    console.log(mood0.checked);

function moodStorage() {
    localStorage.setItem("happy", mood0.checked);
    localStorage.setItem("calm", mood1.checked);
    localStorage.setItem("relaxed", mood2.checked);
    localStorage.setItem("energetic", mood3.checked);
    localStorage.setItem("optimistic", mood4.checked);
}
mood0.checked = true;
console.log(mood0.checked);

$(window).ready(function(){
    if(localStorage){
        /*
        localStorage.getItem("happy");
        localStorage.getItem("calm");
        localStorage.getItem("relaxed");
        localStorage.getItem("energetic");
        localStorage.getItem("optimistic");
        */

        for (i=0;i<localStorage.length;i++){
            if(localStorage.getItem(localStorage.key(i))){
                console.log(`${mood}${i}`.checked);
            }
        }
    }
})
 

  
  
  



































































































// KENNETH START THE UNSPLASH API



















































































































