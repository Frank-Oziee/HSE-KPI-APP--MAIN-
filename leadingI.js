/*   SECTION TWO SCRIPT CODE WRITING:   */


//GETTING ELEMENTS FROM THE DOM(HTML):

//'moc' elements:
const mocInput = document.getElementById("mocInput")
const mocSbButtn = document.getElementById("mocSbButtn")
const mocCum = document.getElementById("mocCum")

//'jsa' elements:
const jsaInput = document.getElementById("jsaInput")
const jsaSbButtn = document.getElementById("jsaSbButtn")
const jsaCum = document.getElementById("jsaCum")

//'ptw' elements:
const ptwInput = document.getElementById("ptwInput")
const ptwSbButtn = document.getElementById("ptwSbButtn")
const ptwCum = document.getElementById("ptwCum")

//'ra' elements:
const raInput = document.getElementById("raInput")
const raSbButton = document.getElementById("raSbButton")
const raCum = document.getElementById("raCum")

//'uc' elements:
const ucInput = document.getElementById("ucInput")
const ucSbButtn = document.getElementById("ucSbButtn")
const ucCum = document.getElementById("ucCum")

//'psm' elements:
const psmInput = document.getElementById("psmInput")
const psmSbButtn = document.getElementById("psmSbButtn")
const psmCum = document.getElementById("psmCum")

//'hsem' elements:
const hsemInput = document.getElementById("hsemInput")
const hsemSbButtn = document.getElementById("hsemSbButtn")
const hsemCum = document.getElementById("hsemCum")

//'ind' elements:
const indInput = document.getElementById("indInput")
const indSbButtn = document.getElementById("indSbButtn")
const indCum = document.getElementById("indCum")

//'drills' elements:
const drillsInput = document.getElementById("drillsInput")
const drillsSbButtn = document.getElementById("drillsSbButtn")
const drillsCum = document.getElementById("drillsCum")

//'drills' elements:
const aniInput = document.getElementById("aniInput")
const aniSbButtn = document.getElementById("aniSbButtn")
const aniCum = document.getElementById("aniCum")


let mocValue = JSON.parse(localStorage.getItem("moc_Input")) || []
let jasValue = JSON.parse(localStorage.getItem("jsa_Input")) || []
let ptwValue = JSON.parse(localStorage.getItem("ptw_Input")) || []
let raValue = JSON.parse(localStorage.getItem("ra_Input")) || []
let ucValue = JSON.parse(localStorage.getItem("uc_Input")) || []
let psmValue = JSON.parse(localStorage.getItem("psm_Input")) || []
let hseValue = JSON.parse(localStorage.getItem("hse_Input")) || []
let indValue = JSON.parse(localStorage.getItem("ind_Input")) || []
let drillsValue = JSON.parse(localStorage.getItem("drills_Input")) || []
let aniValue = JSON.parse(localStorage.getItem("ani_Input")) || []

mocSbButtn.addEventListener("click", function(){
    let mocSum = parseFloat(mocInput.value)
    mocValue.push(mocSum)
    mocCumlat()
    localStorage.setItem("moc_Input", JSON.stringify(mocValue))   
})

jsaSbButtn.addEventListener("click", function(){
    let mocSumT = parseFloat(jsaInput.value)
    jasValue.push(mocSumT)
    calltwo()
    localStorage.setItem("jsa_Input", JSON.stringify(jasValue))   
})


ptwSbButtn.addEventListener("click", function(){
    let mocSumTh = parseFloat(ptwInput.value)
    ptwValue.push(mocSumTh)
    callthree()
    localStorage.setItem("ptw_Input", JSON.stringify(ptwValue))   
})


raSbButton.addEventListener("click", function(){
    let mocSumfo = parseFloat(raInput.value)
    raValue.push(mocSumfo)
    callfour()
    localStorage.setItem("ra_Input", JSON.stringify(raValue))   
})


ucSbButtn.addEventListener("click", function(){
    let mocSumfi = parseFloat(ucInput.value)
    ucValue.push(mocSumfi)
    callfive()
    localStorage.setItem("uc_Input", JSON.stringify(ucValue))   
})


psmSbButtn.addEventListener("click", function(){
    let mocSumsi = parseFloat(psmInput.value)
    psmValue.push(mocSumsi)
    callsix()
    localStorage.setItem("psm_Input", JSON.stringify(psmValue))   
})


hsemSbButtn.addEventListener("click", function(){
    let mocSumse = parseFloat(hsemInput.value)
    hseValue.push(mocSumse)
    callseven()
    localStorage.setItem("hse_Input", JSON.stringify(hseValue))   
})


indSbButtn.addEventListener("click", function(){
    let mocSumei = parseFloat(indInput.value)
    indValue.push(mocSumei)
    calleight()
    localStorage.setItem("ind_Input", JSON.stringify(indValue))   
})


drillsSbButtn.addEventListener("click", function(){
    let mocSumni = parseFloat(drillsInput.value)
    drillsValue.push(mocSumni)
    callnine()
    localStorage.setItem("drills_Input", JSON.stringify(drillsValue))   
})


aniSbButtn.addEventListener("click", function(){
    let mocSumte = parseFloat(aniInput.value)
    aniValue.push(mocSumte)
    callten()
    localStorage.setItem("ani_Input", JSON.stringify(aniValue))   
})



// THIS FUNCTION(2) BELOW IS WHEN YOU ARE NOT USING AN 'INPUT' FIELD ELEMENT, BUT A 'SPAN', 'P', ETC ELEMENTS, TO RENDER THE CALCULATED RESULTS ON THE APP SCREEN:


function mocCumlat() {
    var zedOneValue = mocValue.reduce((a,b)=> a+b,0)
    //This 'if' statement and the Below 'if' statement gives same result:   
if (zedOneValue || NaN) {
        mocCum.innerHTML = zedOneValue 
    }
//  if (!isNaN(zedValue)) {
//      return (mocCum.innerHTML = zedValue)
//     }
}
mocCumlat()


function calltwo() {
    var zedOneValue = (jasValue).reduce((a,b)=> a+b,0) 
if (zedOneValue || NaN) {
        jsaCum.innerHTML = zedOneValue
}
}
calltwo()


function callthree() {
    var zedOneValue = ptwValue.reduce((a,b)=> a+b,0) 
if (zedOneValue || NaN) {
        ptwCum.innerHTML = zedOneValue
}
}
callthree()


function callfour() {
    var zedOneValue = raValue.reduce((a,b)=> a+b,0) 
if (zedOneValue || NaN) {
        raCum.innerHTML = zedOneValue
}
}
callfour()


function callfive() {
    var zedOneValue = ucValue.reduce((a,b)=> a+b,0) 
if (zedOneValue || NaN) {
        ucCum.innerHTML = zedOneValue
}
}
callfive()


function callsix() {
    var zedOneValue = psmValue.reduce((a,b)=> a+b,0) 
if (zedOneValue || NaN) {
    psmCum.innerHTML = zedOneValue
}
}
callsix()


function callseven() {
    var zedOneValue = hseValue.reduce((a,b)=> a+b,0) 
if (zedOneValue || NaN) {
    hsemCum.innerHTML = zedOneValue
}
}
callseven()


function calleight() {
    var zedOneValue = indValue.reduce((a,b)=> a+b,0) 
if (zedOneValue || NaN) {
    indCum.innerHTML = zedOneValue
}
}
calleight()


function callnine() {
    var zedOneValue = drillsValue.reduce((a,b)=> a+b,0) 
if (zedOneValue || NaN) {
    drillsCum.innerHTML = zedOneValue
}
}
callnine()


function callten() {
    var zedOneValue = aniValue.reduce((a,b)=> a+b,0) 
if (zedOneValue || NaN) {
    aniCum.innerHTML = zedOneValue
}
}
callten()



//These lines of codes here are for 'FUNCTION(2)' above and it applies when coding for the 'delete button' of an element(eg. to delete the values inputed inside an element like, 'span', 'p', etc)
 function mcDelButtn(){
    mocCum.innerHTML = ""
    mocValue  = []
    localStorage.setItem("moc_Input", JSON.stringify(mocValue)) 
}


function jsDelButtn(){
    jsaCum.innerHTML = ""
    jasValue  = []
    localStorage.setItem("jsa_Input", JSON.stringify(jasValue)) 
}


function ptDelButtn(){
    ptwCum.innerHTML = ""
    ptwValue  = []
    localStorage.setItem("ptw_Input", JSON.stringify(ptwValue)) 
}


function rDelButtn(){
    raCum.innerHTML = ""
    raValue  = []
    localStorage.setItem("ra_Input", JSON.stringify(raValue)) 
}


function uDelButton(){
    ucCum.innerHTML = ""
    ucValue  = []
    localStorage.setItem("uc_Input", JSON.stringify(ucValue)) 
}


function psDelButtn(){
    psmCum.innerHTML = ""
    psmValue  = []
    localStorage.setItem("psm_Input", JSON.stringify(psmValue)) 
}



function hseDelButtn(){
    hsemCum.innerHTML = ""
    hseValue  = []
    localStorage.setItem("hse_Input", JSON.stringify(hseValue)) 
}


function inDelButtn(){
    indCum.innerHTML = ""
    indValue  = []
    localStorage.setItem("ind_Input", JSON.stringify(indValue)) 
}


function drillDelButtn(){
    drillsCum.innerHTML = ""
    drillsValue  = []
    localStorage.setItem("drills_Input", JSON.stringify(drillsValue)) 
}


function anDelButtn(){
    aniCum.innerHTML = ""
    aniValue  = []
    localStorage.setItem("ani_Input", JSON.stringify(aniValue)) 
}










// THIS FUNCTION(1) BELOW IS WHEN YOU ARE USING AN 'INPUT' FIELD ELEMENT, TO RENDER THE CALCULATED RESULTS ON THE APP SCREEN. NOTE: U DON'T USE '.innerHTML' JS PROPERTY TO RENDER THINGS INSIDE AN INPUT FIELD, IT WON'T DISPLAY:
// function mocCumlat() {
//     var zedValue = mocValue.reduce((a,b)=> {return a+b})

//This 'if' statement and the Below 'if' statement gives same result:   
//     if (zedValue || NaN) {
//         return mocCum.value = zedValue
//     }
// //     if (!isNaN(zedValue)) {
// //         return (mocCum.value = zedValue)
// //     }
// }
// mocCumlat()



// THIS FUNCTION(2) BELOW IS WHEN YOU ARE NOT USING AN 'INPUT' FIELD ELEMENT, BUT A 'SPAN', 'P', ETC ELEMENTS, TO RENDER THE CALCULATED RESULTS ON THE APP SCREEN:
// function mocCumlat() {
//     var zedValue = mocValue.reduce((a,b)=> {return a+b})

// This 'if' statement and the Below 'if' statement gives same result:   
//     if (zedValue || NaN) {
//         return mocCum.innerHTML = zedValue
//    }

// if (!isNaN(zedValue)) {
// /     return (mocCum.innerHTML = zedValue)
//     }
// }
// mocCumlat()


// These lines of Codes here are for 'FUNCTION(1)' above, and it applies when coding for the 'delete' button of an 'input field'
// mocDelButtn.addEventListener("click", function(){
//     mocCum.value = ""
//     mocValue  = []
//     localStorage.setItem("moc_Input", JSON.stringify(mocValue))
// })

























// mocSbButtn.addEventListener("click", function(){
//     function mocSum() {
//         let  mocSum = parseFloat(mocInput.value)
//         mocValue.push(mocSum)
//         mocCum.innerHTML = mocValue.reduce((a,b)=> {return a+b})
//         localStorage.setItem("moc_Input", JSON.stringify(mocValue))
//     }
//     mocSum()
// })

// const mocValuefls = JSON.parse(localStorage.getItem("moc_Input"))

// if (mocValuefls) {
//     mocValue = leadsFromLocalStoreOne
//     renderMoc()
// }

// mocSbButtn.addEventListener("click", function(){
//     mocValue.push(mocInput.value)

//     localStorage.setItem("moc_Input", JSON.stringify(mocValue))
//     renderMoc()
// })

// function renderMoc() {
//     let inputItems
//     for (i=0; i<mocValue.length; i++) {
//         inputItems = mocValue[i]
//     }
//     mocCum.innerHTML =  inputItems
// }



