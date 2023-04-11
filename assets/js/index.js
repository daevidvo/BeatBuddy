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
function quotesChanger(){
    fetch('https://stoic-quotes.com/api/quote')
    .then(function(r){
        return r.json();
    })
    .then(function(data){
        console.log(data)
        document.querySelector('#heroFirstLine').textContent = data.text
        document.querySelector('#heroSecondLine').textContent = data.author
    })
}


















































































document.querySelector('#genreConfirmButton').addEventListener('click', feelingsToggleChecker)






//BRYAN'S SECTION



































































































// KENNETH START THE UNSPLASH API



















































































































