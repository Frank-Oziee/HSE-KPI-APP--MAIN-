/*   SECTION ONE SCRIPT CODE WRITING:   */

/*

(10)    (1). This renders the input value from 'Daily ManPower' Input field in the 'Daily ManPower' line on the 'Daily ManPower' Input field on the 'ManHour'line on the app screen. The 'mpSubmitInput' variable here can be used in place of the 'mpInput.value' variable inside this statement(No. 11); 'let result = parseFloat(mpInput.value) * parseFloat(mhInput.value)', so as to arrive at a result for the 'daily totals of manhour' too.
        (2). This renders the input value from 'Daily ManPower' Input field in the 'Daily ManPower' line on the 'Daily ManPower' Input element(E.g; 'span') on the 'ManHour'line on the app screen. 
*/


//GETTING ELEMENTS FROM THE DOM(HTML):
const sectionOneDiv1P = document.querySelector(".sectionOneDiv1P")
const mpInput = document.getElementById("mpInput")
const mpButton = document.getElementById("mpButton")
const mpSubmitInput = document.getElementById("mpSubmitInput")
const mpSubmit = document.getElementById("mpSubmit")
const mhInput = document.getElementById("mhInput")
const mhmpbutton = document.getElementById("mhmpbutton")
const dailyTotalOfMHs = document.getElementById("dToMHs")
// const dToMHsBotton = document.getElementById("dToMHsBotton")
const cummulative = document.getElementById("cummulative")
const cumDelButtn =document.getElementById("cumDelButtn")


//ARRAYS FOR ELEMENTS STORAGE; inputValue = 'Daily ManPowers',  mpmhInputValues = 'Daily Totals of ManHours':
let inputValue = []
let mpmhInputValues = JSON.parse(localStorage.getItem("mySecondInput")) || []


//GETTING OF ARRAY ELEMENTS OF DAILY MANPOWER, SAVED TO THE LOCAL STORAGE, SO THAT THE SAVED CONTENT DON'T DISAPPEAR AFTER EACH PAGE REFRESH AND STORE THEM IN A VARIABLE, SO AS TO USE THEM FUTHER/LATER: 
const leadsFromLocalStoreOne = JSON.parse(localStorage.getItem("myFirstInput"))



//CODING FOR THE DATE COLUMN:  

//The lines of code below are for date and time:

// const formatDate = (dateObject) => {
//     let sectionOneDiv1Pday = document.querySelector(".sectionOneDiv1Pday")
//      const parts = {
//          date: dateObject.getDate().toString().padStart(2,"0"),
//          month: (dateObject.getMonth()+ 1).toString().padStart(2,"0"), //This '1' here will make the 'getMonth()' method calculate the month from 1-12(this is why we have the exact month figure on the App screen now), instead of the default settings that is from 0-11(leaving it this way will make us one month behind). 
//          year: dateObject.getFullYear(), 
//          hour: (dateObject.getHours() % 12) || 12, // This '%' here will help us divide 24hours into 12hours am, 12hours pm, per day, and the '||(or)' sign will help us arrive at '12' for 12pm and 12am, when javaScript will divide the code '12 % 12' instead of arriving at '0' twice, which is for/suppose to be for 12am . 
//          minute: dateObject.getMinutes().toString().padStart(2,"0"), //'toString()' is used to convert to 'string'. 'padStart()' method is used for padding values.
//          amOrPm: dateObject.getHours() < 12 ? "am" : "pm" //This statment; ' < 12 ? "am" : "pm" ' is used to set the hours to either '12am' or '12pm', since we have divided(%) the 24hours above, on the 'hours' property line. 
//     }
//     let dateMe = `${parts.date}/${parts.month}/${parts.year},  ` //  ${parts.hour}:${parts.minute} ${parts.amOrPm}
//     return sectionOneDiv1Pday.innerHTML = dateMe
// }
// const mydate = new Date()
// formatDate(mydate)

//The lines of code below are for date:
function dateFormat() {
    let sectionOneDiv1Pday = document.querySelector(".sectionOneDiv1Pday")
    let d = new Date()
    sectionOneDiv1Pday.innerHTML = ` ${d.toDateString()},  ` 
}
dateFormat() 


//CODING FOR THE TIME COLUMN:  
function clock() {
    var hour = document.getElementById("hour")
    var minutes = document.getElementById("minutes")
    var seconds = document.getElementById("seconds")
    var amNpm = document.getElementById("amNpm")

    var h = ((new Date().getHours() % 12) || 12).toString().padStart(2,"0")
    var m = new Date().getMinutes().toString().padStart(2,"0")
    var s = new Date().getSeconds().toString().padStart(2,"0")
    var hampm = new Date().getHours() < 12 ? "am" : "pm"

    hour.innerHTML =   ` ${h}: ` 
    minutes.innerHTML = `${m}: `
    seconds.innerHTML = `${s} `
    amNpm.innerHTML = hampm
}
//var interval = setInterval(clock, 1000)




//CODING(SCRIPTING) FOR THE DAILY MANPOWER COLUMNS (for both its column on its line and the one on the ManHour line):
mpButton.addEventListener("click", function() {
    inputValue.push(mpInput.value)
    // mpInput.value=""
    renderValues(inputValue)
    localStorage.setItem("myFirstInput", JSON.stringify(inputValue))  
})

if (leadsFromLocalStoreOne) {
    inputValue = leadsFromLocalStoreOne
    renderValues(inputValue)
}

function renderValues(myvalues) {
    let inputItems = ""
    for (i=0; i<myvalues.length; i++) {
        inputItems = myvalues[i]
    }
    mpSubmitInput.value = inputItems // (No. 10.1 (for now, subject to change later, when I properly number my coding sequence)
    mpSubmit.innerHTML = inputItems // (No. 10.2 (for now, subject to change later, when I properly number my coding sequence)
}


//CODING(SCRIPTING) FOR THE 'DAILY MANHOUR' COLUMN AND THE 'DAILY TOTALS OF MANHOUR' COLUMN:
mhmpbutton.addEventListener("click", function() {
    let result = parseFloat(mpSubmitInput.value) * parseFloat(mhInput.value) //(No. 11 (for now, subject to change later, when I properly number my coding sequence))
    mpmhInputValues.push(result)
    dtmhTotalList() 
    // if(!isNaN(result)) {
    //     dailyTotalOfMHs.innerHTML += `+ ${result} ` 
    // }
    localStorage.setItem("mySecondInput", JSON.stringify(mpmhInputValues))
})

const dtmhTotalList =() => { //Still need to work on this function so that 'NaN' will stop displaying whenever an empty input field is clicked(26/02/2023)
    var joininG = mpmhInputValues.join(' + ')
    dailyTotalOfMHs.innerHTML = joininG 
}
dtmhTotalList() 



//CODING (SCRIPTING) FOR THE CUMMULATIVE MANHOUR COLUMN:
//This function and the below function produce thesame result; this is an 'Arrow function' while the below is a 'regular function':
function dToMHsBotton() {
  return  cummulative.innerHTML =  mpmhInputValues.reduce((a,b)=> a+b,0)
}
dToMHsBotton()

// function dToMHsBotton() {
//     cummulative.innerHTML = mpmhInputValues.reduce(summedTotal)
// }

// const summedTotal = (a, b) => {
//     return a + b
// }
//dToMHsBotton()



//This 'addEventListener' Function() codes below are for the 'delete button' of the 'cummulative' value and the 'daily manhours total' value:
cumDelButtn.addEventListener("click",function(){
    cummulative.innerHTML = "" 
    mpmhInputValues = []
    dtmhTotalList() 
    localStorage.setItem("mySecondInput", JSON.stringify(mpmhInputValues)) 
})
























// mhmpbutton.addEventListener("click", function() {
//     // console.log("i clicked")
//     mhInputvalue.push(mhInput.value)
//     mhInput.value=""
//     localStorage.setItem("mySecondInput", JSON.stringify(mhInputvalue))
//     // console.log(mhInputvalue)
// })


// if (leadsFromLocalStoreTwo) {
//     mhInputvalue = leadsFromLocalStoreTwo
//     renderMpMhTotals(mhInputvalue)
// }


// const renderMpMhTotals = () => {
//     dailyTotalOfMHs.innerHTML += sum
// }

// function summingMpMh() {
//     for (let i=0; i<inputValue.length; i++) {
//         inputItems = inputValue[i]
//     for (let i=0; i<mhInputvalue.length; i++) {
//         inputItemsTwo = mhInputvalue[i]
//     if (inputItems ===  inputItemsTwo){
//         return inputItems * inputItemsTwo
//     }
// }
//     }
// } 