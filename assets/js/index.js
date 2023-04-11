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
}

// https://api.unsplash.com/photos/random/?query={QUERYSTRING}&per_page=1&client_id=5EBER4yF6LOq05pKyvvFhc3yQkLyidB-RSL4FRW0a3c

// fetch('https://api.themotivate365.com/stoic-quote', {
//     mode:"no-cors"
// })
// .then(function(response){
//     console.log(response)
// })

















































































document.querySelector('#genreConfirmButton').addEventListener('click', feelingsToggleChecker)






//BRYAN'S SECTION
function getUnsplash(){
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

 

  
  
  



































































































// KENNETH START THE UNSPLASH API



















































































































