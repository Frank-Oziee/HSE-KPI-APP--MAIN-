/*   SECTION THREE SCRIPT CODE WRITING:   */


//GETTING ELEMENTS FROM THE DOM(HTML):

//'mtc' elements:
const mtcInput = document.getElementById("mtcInput")
const mtcSbButtn = document.getElementById("mtcSbButtn")
const mtcCum = document.getElementById("mtcCum")
const mtcDelButtn = document.getElementById("mtcDelButtn")

//'awa' elements:
const awaInput = document.getElementById("awaInput")
const awaSbButtn = document.getElementById("awaSbButtn")
const awaCum = document.getElementById("awaCum")
const awaDelButtn = document.getElementById("awaDelButtn")

//'fa' elements:
const faInput = document.getElementById("faInput")
const faSbButtn = document.getElementById("faSbButtn")
const faCum = document.getElementById("faCum")
const faDelButtn= document.getElementById("faDelButtn")

//'aria' elements:
const ariaInput = document.getElementById("ariaInput")
const ariaSbButtn = document.getElementById("ariaSbButtn")
const ariaCum = document.getElementById("ariaCum")
const ariaDelButtn= document.getElementById("ariaDelButtn")

//'rta' elements:
const rtaInput = document.getElementById("rtaInput")
const rtaSbButtn = document.getElementById("rtaSbButtn")
const rtaCum = document.getElementById("rtaCum")
const rtaDelButtn= document.getElementById("rtaDelButtn")

//'di' elements:
const diInput = document.getElementById("diInput")
const diSbButtn = document.getElementById("diSbButtn")
const diCum = document.getElementById("diCum")
const diDelButtn = document.getElementById("diDelButtn")

//'td' elements:
const tdInput = document.getElementById("tdInput")
const tdSbButtn = document.getElementById("tdSbButtn")
const tdCum = document.getElementById("tdCum")
const tdDelButtn = document.getElementById("tdDelButtn")

let sectionThreeTable = document.querySelector(".sectionThreeTable")
let mydata = JSON.parse(localStorage.getItem("storedata")) ||[]

function developData() {
    
        return (sectionThreeTable.innerHTML = laggingData.map((b) =>{ //b = laggingData   
            let {id, name, perfomance, cummulative} = b
            // let searched = laggingData.find((b) => b.id === id) || []
            return (`
                <tr>
                    <td >${name}</td>
                    <td><input type="${perfomance}" id="mtcInput"><button id="mtcSbButtn" onclick="additioN(${id})">Submit</button></td>
                    <td><span id="mtcCum">${cummulative}</span><button id="mtcDelButtn">x</button></td>
                </tr>
            `)
        }).join(""))
     
        
} 
developData()



function additioN(id) {
    let increasingItems = performance.value
    mydata.push(increasingItems)
    console.log(mydata)
    let finding = laggingData.find((c)=> increasingItems.id === c.id )
    mtcCum.innerHTML = mydata
    localStorage.setItem("storedata", JSON.stringify(mydata))
}



// aniSbButtn.addEventListener("click", function(){
//     let mocSumte = parseFloat(aniInput.value)
//     aniValue.push(mocSumte)
//     callten()
//     localStorage.setItem("ani_Input", JSON.stringify(aniValue))   
// })



// // THIS FUNCTION(2) BELOW IS WHEN YOU ARE NOT USING AN 'INPUT' FIELD ELEMENT, BUT A 'SPAN', 'P', ETC ELEMENTS, TO RENDER THE CALCULATED RESULTS ON THE APP SCREEN:


// function mocCumlat() {
//     var zedOneValue = mocValue.reduce((a,b)=> a+b,0)
//     //This 'if' statement and the Below 'if' statement gives same result:   
// if (zedOneValue || NaN) {
//         mocCum.innerHTML = zedOneValue 
//     }
// //  if (!isNaN(zedValue)) {
// //      return (mocCum.innerHTML = zedValue)
// //     }
// }
// mocCumlat()















// function additioN(id) {
//     let increasingItems = id

//     let finding = laggingData.find((c)=> increasingItems.id === c.id )
//     if (finding === undefined) {
//         mydata.push ({
//             id: increasingItems.id,
//             performance: 1,
//         })
//     } else {
//         finding.item += perfomance
//     }
//     mtcCum.innerHTML = mydata
//     localStorage.setItem("storedata", JSON.stringify(mydata))
// }
