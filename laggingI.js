//Calling the 'sectionThree' DOM element
const sectionThree = document.querySelector(".sectionThree");

let myDataValues = JSON.parse(localStorage.getItem("cumu")) || [];

fetch("datalaggingI.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(datalaggingI) {

    cols = ["LAGGING/TRAILING INDICATORS", "PERFORMANCE (NO.)", "CUMMULATIVE PERFORMANCE (No.)"]

    const table = document.createElement('table');
    table.classList.add('sectionThreeTable');

    table.appendChild(document.createElement('thead'));
    table.querySelector('thead').appendChild(document.createElement('tr'));
    
    for (let i = 0; i < cols.length; i++) {
      const heading = document.createElement('th');
      heading.textContent = cols[i];
      table.querySelector('thead tr').appendChild(heading);
    }

    sectionThree.appendChild(table);
    
    datalaggingI.forEach(d => {
      let s = d.name;
      let id = d.id;
      let pf = d.performance
      console.log(id)

      table.appendChild(document.createElement('tbody'))

      const tr = document.createElement('tr');
      tr.setAttribute("data-name", id);
      tr.classList.add("tRow");
      
      const nameCell = document.createElement('td');
      nameCell.textContent = s;
      nameCell.classList.add("tdclass");

      const performanCEs = document.createElement('td');
      performanCEs.classList.add('perfclass');
      performanCEs.setAttribute('id', id);

      const decrementin = document.createElement('i');
      decrementin.classList.add('bi-dash-lg');
      decrementin.textContent = "-"
      decrementin.setAttribute('id', id);
      decrementin.addEventListener("click", () => {
        let addt =   parseFloat(performancE.textContent)
        let addtS = addt - 1
        performancE.textContent = addtS
      });

      const performancE = document.createElement('span');
      performancE.classList.add("performanCE");
      performancE.textContent = pf
      performancE.setAttribute('id', id);

      const incrementin = document.createElement('i');
      incrementin.classList.add('bi-plus-lg');
      incrementin.textContent = "+"
      incrementin.setAttribute('id', id);
      incrementin.addEventListener("click", () => {
        let addt =   parseFloat(performancE.textContent)
        let addP = addt + 1
        performancE.textContent = addP 
      });

      //WORK ON THIS SO THAT EACH PRODUCT CAN REDUCE THEIR CUM QUANTITY BASED ON THEIR 'ID' OR 'ROW'
      const submitteD = document.createElement('button');
      submitteD.textContent = "Submit";
      submitteD.setAttribute('id', id);
      submitteD.classList.add("submitCum");
      submitteD.addEventListener("click", () => {
        let addt = parseFloat(performancE.textContent);

        let currentCummulateValue = parseFloat(cummmulate.textContent) || 0;
        let updatedCummulateValue = currentCummulateValue + addt;
        cummmulate.textContent = updatedCummulateValue;

        // Find the index of the current indicator in the myDataValues array
        let index = myDataValues.findIndex(item => item.ids === id);
        console.log(index)
        if (index !== -1) {
          // If the indicator is already present in the array, update its cumulative value
          myDataValues[index].cumValue = updatedCummulateValue;
        } else {
          // If the indicator is not present, add it to the array
          myDataValues.push({ ids: id, cumValue: updatedCummulateValue });
        }
        // Update the localStorage with the updated myDataValues array
        localStorage.setItem("cumu", JSON.stringify(myDataValues));
      });

      const cummmulate = document.createElement('span');
      cummmulate.classList.add("cummmulate");
      cummmulate.setAttribute('id', id);

      // Delete button to remove the indicator's cumulative value
      const deleteButton = document.createElement('button');
      deleteButton.textContent =  " x ";
      deleteButton.classList.add("deleteCum");
      deleteButton.addEventListener("click", () => {
        // Remove the indicator's cumulative value from myDataValues array
        myDataValues = myDataValues.filter(item => item.ids !== id);
        localStorage.setItem("cumu", JSON.stringify(myDataValues));

        // Reset the displayed cumulative value to 0
        cummmulate.textContent = 0;
      });

      //update the cummmulate table cell to display the stored cummmulative value if available:
      const cummmulat = document.createElement('td');
      cummmulat.classList.add("cummmulat")
      cummmulat.setAttribute('id', id);

      // Retrieve the stored cumulative value for the indicator
      const storedCumulativeValue = myDataValues.find(item => item.ids === id);
      if (storedCumulativeValue) {
        cummmulate.textContent = storedCumulativeValue.cumValue;
      }

      tr.appendChild(nameCell);
      performanCEs.appendChild(decrementin);
      performanCEs.appendChild(performancE);
      performanCEs.appendChild(incrementin);
      performanCEs.appendChild(submitteD);
      tr.appendChild(performanCEs);
      cummmulat.appendChild(cummmulate)
      cummmulat.appendChild(deleteButton)
      tr.appendChild(cummmulat);
      table.querySelector('tbody').appendChild(tr);

    });  
});






























































    
/*
      let submt = document.querySelector(`.submitCum[id="${id}"]`)

      incrementin.addEventListener("click", function() {
        let selectedData = id;
        let search = myDataValues.find(x => x.id === selectedData);
        if (search === undefined) {
          myDataValues.push({
            id: selectedData,
            item: 1,
          });
        } else {
          search.item += 1;
        }
        handleClick(selectedData);
        localStorage.setItem("cumu", JSON.stringify(myDataValues));
      });

      decrementin.addEventListener("click", function() {
        let selectedData = id;
        let search = myDataValues.find(x => x.id === selectedData);
        if (search === undefined) {
          myDataValues.push({
            id: selectedData,
            item: 1,
          });
        } else {
          search.item -= 1;
        }
        handleClick(selectedData);
        localStorage.setItem("cumu", JSON.stringify(myDataValues));
      });

      submt.addEventListener("click", function() {
          myDataValues.map(obj => {  
          let {id, item} = obj
          if (id) {
          mydffg.push({ id: id, item: item })
          } else {
          mydffg.item = item;
          } 
        updta()
        localStorage.setItem("cumul", JSON.stringify(mydffg));
        console.log(mydffg)
        })
      });    

      //CONTINUE WORKING ON THIS UPDTA() FUNCTION, SO THAT ALL ELEMENT CUMMULATIVE FIGURE CAN ADD UP , 25/06/2023:
      function updta() {
        let cumL = document.querySelector(`.cummmulatE[id="${id}"]`);
        mydffg.forEach(ob =>{
          if (ob.id){
            // let rte = []
            // rte.push(ob.item)
            // console.log(rte)
            return cumL.textContent = ob.item //rte.reduce((a,b)=> a+b,0)
          }else{     
          }   
        })      
      }
      

      function handleClick(id) {
        const clickedIndex = myDataValues.find(item => item.id === id);
          // update the "performanCE" element with the clicked object's item value
        document.querySelector(`.performanCE[id="${id}"]`).textContent = clickedIndex.item;

        // get the clicked item from the myDataValues array
        const clickedItem = myDataValues.find(item => item.id === id);
      }
 */








/*
//let submt = document.querySelector(`.submitCum[id="${id}"]`)

//Getting the 'tr(row)' elements in the 'inputTableBody(tbody element)' by their 'Tag Name('tr')'
const buttonPlus = sectionThree.querySelector("i .bi-plus-lg");
console.log(buttonPlus)

incrementin.addEventListener("click", function() {
  let selectedData = id;
  let search = myDataValues.find(x => x.id === selectedData);
  if (search === undefined) {
    myDataValues.push({
      id: selectedData,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  handleClick(selectedData);
});

decrementin.addEventListener("click", function() {
  let selectedData = id;
  let search = myDataValues.find(x => x.id === selectedData);
  if (search === undefined) {
    myDataValues.push({
      id: selectedData,
      item: 1,
    });
  } else {
    search.item -= 1;
  }
  handleClick(selectedData);
});


submt.addEventListener("click", function() {
    selectedData = id
    myDataValues.forEach(obj => {
    const index = mydffg.findIndex(item => item.id === obj.id);
    //selectedData = obj.id
    if (index == -1) {
     mydffg.push({ id: obj.id, item: obj.item })
    } else {
     mydffg[index].item += obj.item;
    } 
    })
   updta(selectedData)
   localStorage.setItem("cumul", JSON.stringify(mydffg));
   console.log(mydffg)
});    

function updta(id) {
  let cumL = document.querySelector(`.cummmulatE[id="${id}"]`);
  mydffg.forEach(ob =>{
    if (ob.id === id){
      return cumL.textContent = ob.item
    }else{     
    }   
  })   
}


function handleClick(id) {
  const clickedIndex = myDataValues.find(item => item.id === id);
    // update the "performanCE" element with the clicked object's item value
  document.querySelector(`.performanCE[id="${id}"]`).textContent = clickedIndex.item;

  // get the clicked item from the myDataValues array
  const clickedItem = myDataValues.find(item => item.id === id);
}
*/

// function update(id){
//   let cliObj = document.querySelector(`.performanCE[id="${id}"]`)
//   cliObj.textContent = "";
//   //let selectedItem = id // Visit the 'index.js' page for details on this line.
//   //myDataValues = myDataValues.filter((x) => x.id == selectedItem.id) //(No. 9.1)

//   //handleClick(id)
//   //clearAll()

//   //localStorage.setItem('cum', JSON.stringify(myDataValues));
// }







































  
/**HSE KPI APP, MODIFICATION 1:
 * 
 * fetch("datalaggingI.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(datalaggingI) {

    cols = ["LAGGING/TRAILING INDICATORS", "PERFORMANCE (NO.)", "CUMMULATIVE PERFORMANCE (No.)"]

    const table = document.createElement('table');
    table.classList.add('sectionThreeTable');

    table.appendChild(document.createElement('thead'));
    table.querySelector('thead').appendChild(document.createElement('tr'));
    for (let i = 0; i < cols.length; i++) {
      const heading = document.createElement('td');
      heading.textContent = cols[i];
      table.querySelector('thead tr').appendChild(heading);
    }

    document.querySelector(".sectionThree").appendChild(table);
    
    //remove these 'arrays' from the function and check the outcome "24/06/2023"
    let myDataValues = [];
    let mydffg = JSON.parse(localStorage.getItem("cumul")) || [];

    datalaggingI.forEach(d => {
      let s = d.name;
      let id = d.id;

      const tr = document.createElement('tr');
      tr.id = s;

      const nameCell = document.createElement('td');
      nameCell.textContent = s;
      nameCell.classList.add("tdclass");

      const performanCEs = document.createElement('td');
      performanCEs.classList.add('perfclass');
      performanCEs.setAttribute('id', id);

      const decrementin = document.createElement('i');
      decrementin.classList.add('bi-dash-lg');
      decrementin.setAttribute('id', id);

      const performancE = document.createElement('span');
      performancE.classList.add("performanCE");
      performancE.setAttribute('id', id);

      const incrementin = document.createElement('i');
      incrementin.classList.add('bi-plus-lg');
      incrementin.setAttribute('id', id);

      const submitteD = document.createElement('button');
      submitteD.textContent = "Submit";
      submitteD.setAttribute('id', id);
      submitteD.classList.add("submitCum");

    //update the cummmulate table cell to display the stored cummmulative value if available:
      const cummmulate = document.createElement('td');
      cummmulate.classList.add("cummmulatE")
      cummmulate.setAttribute('id', id);

      tr.appendChild(nameCell);
      tr.appendChild(performanCEs);
      tr.appendChild(cummmulate);
      performanCEs.appendChild(decrementin);
      performanCEs.appendChild(performancE);
      performanCEs.appendChild(incrementin);
      performanCEs.appendChild(submitteD);

      table.appendChild(tr);

      //let myDataValues = [];
      let submt = document.querySelector(`.submitCum[id="${id}"]`)


      incrementin.addEventListener("click", function() {
        let selectedData = id;
        let search = myDataValues.find(x => x.id === selectedData);
        if (search === undefined) {
          myDataValues.push({
            id: selectedData,
            item: 1,
          });
        } else {
          search.item += 1;
        }
        handleClick(selectedData);
      });

      decrementin.addEventListener("click", function() {
        let selectedData = id;
        let search = myDataValues.find(x => x.id === selectedData);
        if (search === undefined) {
          myDataValues.push({
            id: selectedData,
            item: 1,
          });
        } else {
          search.item -= 1;
        }
        handleClick(selectedData);
      });
      
      //let mydffg = JSON.parse(localStorage.getItem("cumul")) || [];
      
      submt.addEventListener("click", function() {
          selectedData = id
          myDataValues.forEach(obj => {
          const index = mydffg.findIndex(item => item.id === obj.id);
          //selectedData = obj.id
          if (index == -1) {
           mydffg.push({ id: obj.id, item: obj.item })
          } else {
           mydffg[index].item += obj.item;
          } 
          })
         updta(selectedData)
         localStorage.setItem("cumul", JSON.stringify(mydffg));
         console.log(mydffg)
      });    
   
      function updta(id) {
        let cumL = document.querySelector(`.cummmulatE[id="${id}"]`);
        mydffg.forEach(ob =>{
          if (ob.id === id){
            return cumL.textContent = ob.item
          }else{     
          }   
        })   
      }

      
      function handleClick(id) {
        const clickedIndex = myDataValues.find(item => item.id === id);
          // update the "performanCE" element with the clicked object's item value
        document.querySelector(`.performanCE[id="${id}"]`).textContent = clickedIndex.item;

        // get the clicked item from the myDataValues array
        const clickedItem = myDataValues.find(item => item.id === id);
      }
     

      // function update(id){
      //   let cliObj = document.querySelector(`.performanCE[id="${id}"]`)
      //   cliObj.textContent = "";
      //   //let selectedItem = id // Visit the 'index.js' page for details on this line.
      //   //myDataValues = myDataValues.filter((x) => x.id == selectedItem.id) //(No. 9.1)
      
      //   //handleClick(id)
      //   //clearAll()
      
      //   //localStorage.setItem('cum', JSON.stringify(myDataValues));
      // }
    });  
  });

 * 
 * 
 */



































































/**USE LATER(02/05/2023)
 * 
 * It's not entirely clear what issue you are experiencing, but based on your code, it seems that you are trying to add new items to an array called mydffg which stores cumulative data. However, it appears that the new items you are adding are not being pushed to the array collectively with their previous data.

One possible reason for this is that you are initializing a new, empty array myDataValues each time you iterate through the datalaggingI array, and then pushing the new data to mydffg using a forEach loop. Since myDataValues is reset each time, you are not preserving the previous data that you may have already pushed to mydffg.

To resolve this issue, you could initialize myDataValues outside of the forEach loop, so that it is not reset each time. Then, when you click on the "submit" button, you can check whether the item already exists in mydffg, and either push a new item or update the existing one.

Here is an updated version of your code with these changes:

javascript
Copy code
let myDataValues = [];
let mydffg = JSON.parse(localStorage.getItem("cumul")) || [];

datalaggingI.forEach(d => {
  // ...
  
  incrementin.addEventListener("click", function() {
    let selectedData = id;
    let search = myDataValues.find(x => x.id === selectedData);
    if (search === undefined) {
      myDataValues.push({
        id: selectedData,
        item: 1,
      });
    } else {
      search.item += 1;
    }
    handleClick(selectedData);
  });

  decrementin.addEventListener("click", function() {
    let selectedData = id;
    let search = myDataValues.find(x => x.id === selectedData);
    if (search === undefined) {
      myDataValues.push({
        id: selectedData,
        item: 1,
      });
    } else {
      search.item -= 1;
    }
    handleClick(selectedData);
  });
  
  submt.addEventListener("click", function() {
    selectedData = id;
    myDataValues.forEach(obj => {
      const index = mydffg.findIndex(item => item.id === obj.id);
      if (index == -1) {
        mydffg.push({ id: obj.id, item: obj.item });
      } else {
        mydffg[index].item += obj.item;
      } 
    });
    updta(selectedData);
    localStorage.setItem("cumul", JSON.stringify(mydffg));
  });    
});

function updta(id) {
  let cumL = document.querySelector(`.cummmulatE[id="${id}"]`);
  mydffg.forEach(ob => {
    if (ob.id === id){
      cumL.textContent = ob.item;
    }
  });
}

function handleClick(id) {
  const clickedIndex = myDataValues.find(item => item.id === id);
  // update the "performanCE" element with the clicked object's item value
  document.querySelector(`.performanCE[id="${id}"]`).textContent = clickedIndex.item;

  // get the clicked item from the myDataValues array
  const clickedItem = myDataValues.find(item => item.id === id);
}
This code initializes myDataValues and mydffg outside of the forEach loop. When you click on the increment or decrement button, the updated data is pushed to myDataValues and handleClick is called to update the UI. When you click on the "submit" button, the data is merged with mydffg and updta is called to update





 *

//USE LATER (02/05/2023)
 * Based on the provided code, it seems that the issue is related to how the mydffg array in the local storage is being updated. The mydffg array is initialized by retrieving its previous values from the local storage with JSON.parse(localStorage.getItem("cumul")) || []. Then, when the user clicks the "Submit" button, the myDataValues array is looped through to find the matching id in the mydffg array. If the id is not found, a new object is pushed to the mydffg array with the id and item properties. If the id is found, the item property of the matching object in the mydffg array is updated with the item property of the corresponding object in the myDataValues array.

However, there is a problem in the updta() function where mydffg is passed as an argument to the function instead of being retrieved from the local storage. This causes mydffg to be an empty array when the function is called. As a result, all the previously stored values in the mydffg array are lost, and only the latest values submitted by the user are stored.

To fix this issue, you should retrieve the mydffg array from the local storage inside the updta() function before using it to update the cumulative values. You can do this by adding the line let mydffg = JSON.parse(localStorage.getItem("cumul")) || []; at the beginning of the updta() function, similar to how it is done in the other parts of the code.

javascript
Copy code
function updta(id) {
  let cumL = document.querySelector(`.cummmulatE[id="${id}"]`);
  let mydffg = JSON.parse(localStorage.getItem("cumul")) || [];
  mydffg.forEach(ob =>{
    if (ob.id === id){
      return cumL.textContent = ob.item
    } else {
      // do nothing
    }
  });
}
By doing this, you should be able to preserve the previously stored values in the mydffg array and update the cumulative values correctly.
 




//USE LATER (02/05/2023):

The issue with overwriting the data in the "mydffg" array in the local storage is because the code is not correctly updating the array with the new data values.

In the code, the "mydffg" array is being set to the parsed value of the "cumul" key in the local storage. However, this code is only run once when the page loads, and the "mydffg" array is not being updated with the new values when the "submitteD" button is clicked.

When the "submitteD" button is clicked, the code loops through the "myDataValues" array and updates the values in the "mydffg" array accordingly. However, it is not correctly updating the "mydffg" array. The issue is with the following code block:

kotlin
Copy code
if (index == -1) {
  return mydffg.push({ id: obj.id, item: obj.item })
} else {
  return mydffg[index].item += obj.item;
}
Here, the "return" statement is preventing the code from correctly updating the "mydffg" array. The "return" statement will exit the function and prevent the "mydffg" array from being updated with the new values.

To fix the issue, you can remove the "return" statements and update the "mydffg" array directly, like this:

perl
Copy code
if (index == -1) {
  mydffg.push({ id: obj.id, item: obj.item });
} else {
  mydffg[index].item += obj.item;
}
With this change, the "mydffg" array will correctly update with the new values when the "submitteD" button is clicked.





//USE LATER 02/05/2023:

The data in the mydffg array in the local storage keeps overwriting because the array is being re-initialized to an empty array every time the function runs.

In the code provided, the mydffg array is being re-initialized to an empty array on every iteration of the datalaggingI.forEach() loop, where the table rows are being created. This means that every time the loop runs, the previous data in the mydffg array is erased, and the array is starting over from scratch.

To fix this issue, you should move the initialization of the mydffg array outside of the datalaggingI.forEach() loop, so that it is only initialized once when the script is first run. Then, within the loop, you can update the existing values in the mydffg array rather than overwriting it each time.

Here's an example of how you could modify the code to achieve this:

javascript
Copy code
// Initialize the mydffg array outside of the loop
let mydffg = JSON.parse(localStorage.getItem("cumul")) || [];

// Loop through the datalaggingI array to create the table rows
datalaggingI.forEach(d => {
  // ...table row creation code here...

  let submt = document.querySelector(`.submitCum[id="${id}"]`);

  submt.addEventListener("click", function() {
    selectedData = id
    myDataValues.forEach(obj => {
      const index = mydffg.findIndex(item => item.id === obj.id);
      if (index == -1) {
        mydffg.push({ id: obj.id, item: obj.item })
      } else {
        mydffg[index].item += obj.item;
      } 
    })
    updta(selectedData)
    localStorage.setItem("cumul", JSON.stringify(mydffg));
    console.log(mydffg)
  });    
});

function updta(id) {
  let cumL = document.querySelector(`.cummmulatE[id="${id}"]`);
  mydffg.forEach(ob =>{
    if (ob.id === id){
      cumL.textContent = ob.item
    }
  })
}

updta(mydffg);
In the updated code, the mydffg array is initialized outside of the loop, and then updated within the submt event listener by iterating over the myDataValues array and updating the corresponding values in the mydffg array. The updta function is also updated to iterate over the mydffg array and update the corresponding row in the table. Finally, the updta function is called with the mydffg array to populate the table with any previously stored cumulative values.








*/












































 /**LOOK IN TO THIS LATER, FOR THE ABOVE CODE(17/04/2023):
     * what can be causing pushed objects to an array overwrite one another

When pushing objects to an array in a programming language, it's important to understand how the push operation works and how it affects the existing elements in the array.

If you're experiencing an issue where pushed objects are overwriting one another in the array, there are a few potential causes:

Mutability: If the objects being pushed to the array are mutable (i.e., their values can be changed), then any changes made to one object will affect all instances of that object in the array. This can lead to unexpected behavior, especially if you're not aware of this mutability. To avoid this, you can make sure that each object being pushed is a unique instance.

Object reference: When you push an object to an array, you're actually adding a reference to that object, not a copy of the object itself. If you later modify the original object, those changes will be reflected in the array. This can also lead to unexpected behavior if you're not aware of this reference behavior. To avoid this, you can create a copy of the object before pushing it to the array.

Indexing: It's possible that the objects are being pushed to the array with the same index, causing them to overwrite each other. Make sure that the index you're pushing the object to is unique and not already occupied by another object.

Data structure: The data structure you're using to store the objects may not be appropriate for your use case. For example, if you're using an array but you need to ensure that each object is unique, you may want to consider using a Set or Map instead.

Overall, understanding the mutability of objects, object references, indexing, and appropriate data structures can help you avoid overwriting pushed objects in an array.
     */


/** USE THIS LATER (I8/04/2023):
 * const myDataValues = [{ id: 1, item: "foo" }, { id: 2, item: "bar" }, { id: 1, item: "baz" }];
const mySet = new Set();

myDataValues.forEach(obj => {
  if (!mySet.has(obj.id)) {
    mySet.add(obj.id);
    return mydffg.push({ id: obj.id, item: obj.item });
  } else {
    const index = mydffg.findIndex(item => item.id === obj.id);
    mydffg[index].item += obj.item;
  }
});

// Output the resulting array
console.log(mydffg);
In this example, we create a new Set mySet to keep track of unique id values. We then loop through each object in myDataValues, and if the id is not already in mySet, we add it to mySet and push the object to the mydffg array. Otherwise, we find the index of the object in the array using findIndex(), and update the item property as needed.

Using a Set ensures that each id is unique and avoids the need to search the entire array each time you check for uniqueness.
 */






/**USE THIS LATER (I8/04/2023):
 * Yes, that is a possibility. It's important to make sure that you're not overwriting existing objects in the array when adding new objects.

In the code you provided, you're using findIndex() to check if an object with the same id already exists in the array. If findIndex() returns -1, indicating that the object does not exist in the array, you add it to the array using push(). However, if findIndex() returns a non-negative index, you're adding to the item property of the existing object at that index.

It's possible that two objects with the same id could end up with the same index in the array, causing them to overwrite each other.

To avoid this, you can consider using a Map instead of an array to store the objects. In a Map, each key must be unique, so you can use the id property as the key and store the entire object as the value.

Here's an example using a Map:

javascript
Copy code
const myDataValues = [{ id: 1, item: "foo" }, { id: 2, item: "bar" }, { id: 1, item: "baz" }];
const myMap = new Map();

myDataValues.forEach(obj => {
  if (!myMap.has(obj.id)) {
    myMap.set(obj.id, obj);
  } else {
    const existingObj = myMap.get(obj.id);
    existingObj.item += obj.item;
  }
});

// Convert the Map to an array of values
const mydffg = Array.from(myMap.values());

// Output the resulting array
console.log(mydffg);
In this example, we create a new Map myMap to store the objects. We loop through each object in myDataValues, and if the id is not already in myMap, we add it to the Map using set(). Otherwise, we get the existing object from the Map using get(), update the item property as needed, and then set the updated object back into the Map.

After looping through all the objects, we convert the Map to an array of values using Array.from(). This gives us an array of the unique objects with their item properties summed up as needed.

Using a Map ensures that each id is unique and avoids the need to search the entire array each time you check for uniqueness.
 */






/**USE THIS LATER (I8/04/2023):
 * To create a copy of an object before pushing it to the array, you can use the Object.assign() or spread syntax ... to create a shallow copy of the object. Here's an example:

javascript
Copy code
let mydffg = JSON.parse(localStorage.getItem("cumul")) || [];

submt.addEventListener("click", function() {
  selectedData = id;
  myDataValues.forEach(obj => {
    const index = mydffg.findIndex(item => item.id === obj.id);
    //selectedData = obj.id
    if (index == -1) {
      return mydffg.push(Object.assign({}, obj)); // shallow copy using Object.assign()
      // return mydffg.push({...obj}); // shallow copy using spread syntax
    } else {
      return mydffg[index].item += obj.item;
    } 
  })
  updta(selectedData);
  localStorage.setItem("cumul", JSON.stringify(mydffg));
  console.log(mydffg);
});
This creates a new object with the same properties as obj, and pushes the new object to the array instead of the original object. This ensures that any modifications to the original object do not affect the object in the array.
 */








/**USE THIS LATER (I8/04/2023):
 * You're correct that mutability can cause issues when working with objects in an array. To avoid this, you can create new instances of each object before pushing them to the array. One way to do this is by using the spread operator (...) to create a new object with the same properties as the original:

javascript
Copy code
let mydffg = JSON.parse(localStorage.getItem("cumul")) || [];

submt.addEventListener("click", function() {
  selectedData = id;
  myDataValues.forEach(obj => {
    const index = mydffg.findIndex(item => item.id === obj.id);
    if (index === -1) {
      // create a new object before pushing it to the array
      const newObj = { ...obj };
      mydffg.push(newObj);
    } else {
      mydffg[index].item += obj.item;
    }
  });
  updta(selectedData);
  localStorage.setItem("cumul", JSON.stringify(mydffg));
  console.log(mydffg);
});
This creates a new object with the same properties as the original (...obj), and then pushes the new object to the array. This way, any changes made to the original object won't affect the object in the array.
 */


























       // localStorage.setItem("cum", JSON.stringify(myDataValues));
       /* const clickedIndex = myDataValues.findIndex(item => item.id === id);
        console.log(clickedIndex)
        if (clickedIndex !== -1) {
          const clickedObject = myDataValues[clickedIndex];

          // update the "performanCE" element with the clicked object's item value
        let cliObj = document.querySelector(`.performanCE[id="${id}"]`)
        cliObj.textContent = clickedObject.item;
        }*/













































































   /*function sumcumM(id) {
      let selectedItem = id 
      
      const index = mydffg.find((item, index) => item[index] === selectedItem);
      console.log(index)
      if (mydffg.includes(index)){
        mydffg.reduce((x,y)=> x + y,0)
      }*/
     /*
      if (index.hasOwnProperty(selectedItem)){
      let des = index.find((x) => x.item).reduce((acc, obj) => acc + obj, 0);
      console.log(des)
      }*/
      //cumL.textContent = des;
     
      // for ( let id in mydffg){
      // if (mydffg.hasOwnProperty(id)){
      //   }
      // }
    //}


  












/*
      function sumcumM() {
        let cumL = document.querySelector(`.cummmulatE[id="${id}"]`);
        myDataValues.reduce((acc, obj) => {
            const index = acc.findIndex(item => item.id === obj.id);
            if (index !== -1) { //This line of code/statement 'if (index !== -1)' means that, 'if index is in/equal to full length of the array', then add 'item' to its already existing index, else push a new 'id and index'.
              acc[index].item += obj.item;
            } else {
              acc.push({ id: obj.id, item: obj.item });
            }
            let sum = 0
            for ( let id in acc){
                if (acc.hasOwnProperty(id)){
                    mydffg.push({
                    id: obj.id,
                    item : sum += acc[id].item
                  })
                    let des = mydffg.map((x) => x.item).reduce((a,b)=>a+b,0)
                    cumL.textContent = des
                    console.log(mydffg);
                    localStorage.setItem("cumul", JSON.stringify(mydffg));
                }
                //
            }
          }, []);

      }
      sumcumM()*/
















 /* function clearAll() {
        let classone = document.querySelector(`.bi-plus-lg[id="${id}"]`)
        let classtwo = document.querySelector(`.bi-dash-lg[id="${id}"]`)
        classone.textContent = ""
        classtwo.textContent = ""
    }
     clearAll()
    */










/*
      let mydffg = JSON.parse(localStorage.getItem("cumul")) || [];

        //submitteD.addEventListener("click", function(){

       // })
      //add an event listener to each submit button that calls a function to update the corresponding cummmulative value and persist it to local storage:
       submitteD.addEventListener("click", function() {
        myDataValues.reduce((acc, obj) => {
          const index = acc.findIndex(item => item.id === obj.id);
          console.log(index)
          if (!index) {
            acc.item += obj.item;
          } else {
            acc.push({ id: obj.id, item: obj.item });
          }
          for (let id in acc) {
            if (acc) {
              let found = false;
              for (let i = 0; i < mydffg.length; i++) {
                if (mydffg[i].id === acc[id].id) {
                  mydffg[i].item += acc[id].item;
                  found = true;
                  break;
                }
              }
              if (!found) {
                mydffg.push({ id: acc[id].id, item: acc[id].item });
              }
            }
          }
        }, []);
        console.log(mydffg)
        sumcumM(id)
        myDataValues = [];
      });


      function sumcumM(id) {
        let cumL = document.querySelector(`.cummmulatE[id="${id}"]`);
        let des = mydffg.map((x) => x.item).reduce((a,b)=>a+b,0);
        cumL.textContent = des;
        localStorage.setItem('cumul', JSON.stringify(mydffg))
        //medes(id, des);
      }*/

      /*
      function medes(id, item) {
        // Find the index of the element with the given ID
        const index = mydffg.findIndex((itm) => itm.id === id);

        // If the element exists, update its data
        if (index !== -1) {
          mydffg[index].item = item; // update the existing value
        } else {
          // Otherwise, add a new element to the array
          mydffg.push({ id: id, item: item }); // or any other initial value you want to set
        }

        // Store the updated array back into local storage
        localStorage.setItem('cumul', JSON.stringify(mydffg));
      }
      */




     /*

      let mydffg = JSON.parse(localStorage.getItem("cumul")) || [];

      function sumcumM(id) {
        let cumL = document.querySelector(`.cummmulatE[id="${id}"]`);
        let des = mydffg.map((x) => x.item).reduce((a,b)=>a+b,0);
          cumL.textContent = des;
          //console.log(des);
          // localStorage.setItem("cumul", JSON.stringify(mydffg));
          medes()
      }


// Retrieve existing data from local storage
//let existingData = JSON.parse(localStorage.getItem('myData')) || [];

function medes() {
  // Find the index of the element with the given ID
  const inde = mydffg.find(itm => itm.id === id) ;
  console.log(inde)

  // If the element exists, update its data
  if (inde === undefined) {
    mydffg.item += inde; // add the current value to the existing value
  } else {
    // Otherwise, add a new element to the array
    mydffg.push({ id: id, item: inde.item }); // or any other initial value you want to set
    localStorage.setItem('cumul', JSON.stringify(mydffg));
  }

  // Store the updated array back into local storage

}

medes();
*/


/**
 * function medes() {
  // Find the index of the element with the given ID
  const inde = mydffg.findIndex(itm => itm.id === id);
  console.log(inde);

  // Get the previously stored item value from local storage
  const storedDffg = JSON.parse(localStorage.getItem('cumul'));

  // If the element exists, update its data based on the difference between the current and stored values
  if (inde !== -1) {
    const storedInde = storedDffg ? storedDffg[inde].item : 0;
    mydffg[inde].item += inde - storedInde; // update item based on the difference
  } else {
    // Otherwise, add a new element to the array
    mydffg.push({ id: id, item: inde }); // or any other initial value you want to set
  }

  // Store the updated array back into local storage
  localStorage.setItem('cumul', JSON.stringify(mydffg));
}

medes();

 */




/*
function medes() {
  // Find the index of the element with the given ID
  const inde = mydffg.findIndex(itm => itm.id === id) ;
console.log(inde)
  // If the element exists, update its data
  if (inde !== -1) {
    mydffg[inde].item = mydffg[inde].item; // or any other update you need to make
  } else {
    // Otherwise, add a new element to the array
    mydffg.push({ id: id, item: inde}); // or any other initial value you want to set
  }

  // Store the updated array back into local storage
  localStorage.setItem('cumul', JSON.stringify(mydffg));
}

medes()
*/

















/*
function medes(id) {
  // Find the index of the element with the given ID
  const index = mydffg.findIndex(itm => itm.id === id);
  console.log(index)
  // If the element exists, update its data
  if (index !== -1) {
    mydffg[index].id = index;
  } else {
    // Otherwise, add a new element to the array
    mydffg.push({ id: id, item: index});
  }

  // Store the updated array back into local storage
  localStorage.setItem('cumul', JSON.stringify( mydffg));
   }
   */









//     function testshod() {
//     if (!localStorage.getItem("hash")) {
//         localStorage.setItem("hash", JSON.stringify(testblockchain));
//     }
//     document.getElementById("result").innerHTML = localStorage.getItem("hash");
// }


  //   let leadsFromLocalStoreOne = JSON.parse(localStorage.getItem("cumul"))

    //   if (leadsFromLocalStoreOne) {
    //     let inde = mydffg.findIndex(item => item.id === leadsFromLocalStoreOne.id)
    //     if (inde !== -1) {
    //       mydffg[inde] = leadsFromLocalStoreOne;
    //       } else {
    //        mydffg.push(leadsFromLocalStoreOne)
    //       }

    //     localStorage.setItem("cumul", JSON.stringify(mydffg));
    //     sumcumM(mydffg)
    //     console.log(inde)
    // }






      /**
       * USE THIS CODE FROM CHATGTP LATER, USE IT TOGETHER WITH THE LOCAL STORAGE STORING SEQUENCE FROM THE HSE KPI APP(03/04/2023):
       * // retrieve existing data from local storage
let existingData = JSON.parse(localStorage.getItem('myData')) || [];

// create a new object to store
let newData = {
  id: 1,
  name: 'John',
  age: 30
};

// check if the new object already exists in the existing data
let index = existingData.findIndex(item => item.id === newData.id);

if (index !== -1) {
  // if the new object already exists, update it in the existing data
  existingData[index] = newData;
} else {
  // if the new object does not exist, add it to the existing data
  existingData.push(newData);
}

// store the updated data back into local storage
localStorage.setItem('myData', JSON.stringify(existingData));

//////////////////////////////////////////////////

//To store array object values in local storage without overwriting each other, you can follow these steps:

//Retrieve the existing array from local storage using the getItem method of the localStorage object. If the array doesn't exist yet, create an empty array.
//javascript
''Copy code

const existingArray = JSON.parse(localStorage.getItem('myArray')) || [];

//Push the new object value into the existing array.
//javascript
//Copy code

const newObj = { id: 1, name: 'John' };
existingArray.push(newObj);

//Store the updated array in local storage using the setItem method of the localStorage object.
//javascript
//Copy code

localStorage.setItem('myArray', JSON.stringify(existingArray));

//By using the above approach, you can add new object values to your array stored in local storage without overwriting the existing ones.








       */












      /*
      submitteD.addEventListener("click", function() {
        sumcumM()
        myDataValues = []
      });




      let mydffg =  JSON.parse(localStorage.getItem("cumul")) || [];

      function sumcumM() {
        let cumL = document.querySelector(`.cummmulatE[id="${id}"]`);
        myDataValues.reduce((acc, obj) => {
            const index = acc.findIndex(item => item.id === obj.id);
            if (index !== -1) { //This line of code/statement 'if (index !== -1)' means that, 'if index is in/equal to full length of the array', then add 'item' to its already existing index, else push a new 'id and index'.
              acc[index].item += obj.item;
            } else {
              acc.push({ id: obj.id, item: obj.item });
            }
            let sum = 0
            for ( let id in acc){
                if (acc.hasOwnProperty(id)){
                    mydffg.push({
                    id: obj.id,
                    item : sum += acc[id].item
                  })
                    let des = mydffg.map((x) => x.item).reduce((a,b)=>a+b,0)
                    cumL.textContent = des
                    console.log(mydffg);
                    localStorage.setItem("cumul", JSON.stringify(mydffg));
                }
                //
            }
          }, []);

      }
      sumcumM()
    */





  //   console.log(acc);


        // .reduce((a,b)=>a+b,0)


/* USE THIS CODE FROM CHAT GTP LATER (31/03/2023):

Frank Oziee
which method can i use to sum u values in an object

To sum the values of a property named "u" in an object, you can use a loop to iterate over the object and add up the values of "u". Here's an example code snippet in JavaScript:

css
Copy code
let obj = {a: {u: 1}, b: {u: 2}, c: {u: 3}};
let sum = 0;
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    sum += obj[key].u;
  }
}
console.log(sum); // Output: 6
In this example, we first define an object obj with three properties, each containing a nested property "u" with a numerical value. We then define a variable sum to hold the sum of the "u" values. We use a for...in loop to iterate over the keys in the object, and use the hasOwnProperty() method to check if the property is actually defined on the object itself (as opposed to being inherited from its prototype). We then add the value of "u" for each property to the sum variable. Finally, we log the sum variable to the console, which outputs the sum of the "u" values (6 in this case).

*/







        // for (let i = 0; i < myDataValues.length; i++) {
        //   const obj = myDataValues[i];

        //   if (!result[i]) {
        //     result[i] = {};
        //   }

        //   if (!result[i][obj.id]) {
        //     result[i][obj.id] = obj.item;
        //   } else {
        //     result[i][obj.id] += obj.item;
        //   }

        //   mydffg.push(obj);
        // }

        // // reduce the items based on each index and unique id
        // mydffg = mydffg.map(obj => ({
        //   ...obj,
        //   item: result[mydffg.indexOf(obj)][obj.id]
        // }));

        // let rd = mydffg.reduce((x, y) => (x + y.item), 0);
        // console.log(rd);




/* USE THIS CODE FROM CHAT GTP LATER TO MODIFY THE FUNCTION CODE ABOVE:

const myDataValues = [
  { id: 1, item: 10 },
  { id: 2, item: 20 },
  { id: 3, item: 30 },
  { id: 1, item: 40 },
  { id: 2, item: 50 }
];

const result = myDataValues.reduce((acc, obj) => {
  const index = acc.findIndex(item => item.id === obj.id);
  if (index !== -1) {
    acc[index].item += obj.item;
  } else {
    acc.push({ id: obj.id, item: obj.item });
  }
  return acc;
}, []);

console.log(result);





*/









//       function sumcumM() {
//   let cumL = document.querySelector(`.cummmulatE[id="${id}"]`);
//   const result = {};

//   for (let i = 0; i < myDataValues.length; i++) {
//     const obj = myDataValues[i];

//     if (!result[obj.id]) {
//       result[obj.id] = [];
//     }

//     if (!result[obj.id][i]) {
//       result[obj.id][i] = obj.item;
//     } else {
//       result[obj.id][i] += obj.item;
//     }

//     mydffg.push(obj);
//   }

//   // reduce the item property values based on each unique id and index
//   mydffg = Object.keys(result).map(id => ({
//     id: id,
//     item: result[id].reduce((x, y) => x + y, 0)
//   }));

//   let rd = mydffg.reduce((x, y) => (x + y.item), 0);
//   console.log(rd);









    //   let mydffg = []
    //   function sumcumM() {
    //     let cumL = document.querySelector(`.cummmulatE[id="${id}"]`)
    //     const result = []

    //     for ( let i = 0; i < myDataValues.length; i++) {
    //         const  obj =  myDataValues[i];
    //         if (!result[obj.id]) {
    //            result[obj.id] = obj.item
    //         } else {
    //             (result[obj.id] += obj.item)
    //         }

    //         mydffg.push(obj)
    //         // let rd = mydffg.reduce((acc, curr) => acc + curr.id + ",", "")
    //         let rd = mydffg.reduce((acc, curr) => acc + curr.id + ",", "").slice(0, -1)

    //     //    let rd = mydffg.reduce((x,y)=> (x + y), 0 )
    //        console.log(rd)
    //     }


            //

/*USE THIS CODE FROM STACKOVERFLOW LATER
var a = [];
a.push({taxid : 1, tax_name: 'VAT', tax_value:'25.00'});
a.push({taxid : 2, tax_name: 'Service Tax', tax_value:'20.00'});
a.push({taxid : 1, tax_name: 'VAT', tax_value:'25.00'});
a.push({taxid : 2, tax_name: 'Service Tax', tax_value:'75.00'});

let res = a.reduce((a, b) =>
  a.set(b.taxid, (a.get(b.taxid) || 0) + Number(b.tax_value)), new Map);

console.log(res);

//If you want to get the resulting Map to an object, you can use

toObject(map) {
    let obj = Object.create(null);
    for (let [key, value] of map.entries()) {
        obj[key] = value;
    }
    return obj;
}

console.log(toObject(res));

///////////

//you can achive this in different ways.

//One Way is to use reduce:

a = a.reduce((c, i)=>{c[i.taxid]=(c[i.taxid]||0)+parseFloat(i.tax_value); return c}, {});
//is this is too complecated for you, you can use a loop:

var t = {};
a.forEach((v)=>t[v.taxid]=(t[v.taxid]||0)+parseFloat(v.tax_value));
a = t;

//of if the expression is too complecated, you can achive this with a simple if condition:

var t = {};
a.forEach((v)=>{
  if(t[v.taxid])
    t[v.taxid]+=parseFloat(v.tax_value);
  else
    t[v.taxid] = parseFloat(v.tax_value);
});
a = t;
//EDIT: In response to the edit of the question and the volitionaly output: [{taxid : NUM, tax_value : NUM}, ...]

a = a.reduce((c, i)=>{
  let cc = c.findIndex((e)=>e.taxid==i.taxid);
  if(cc==-1) c.push({taxid: i.taxid, tax_value: parseFloat(i.tax_value)});
  else c[cc].tax_value += parseFloat(i.tax_value)
  return c
}, []);



*/


/*USE THIS CODE FROM CHAT GTP LATER
function sumcumM(id, myDataValues) {
  let cumL = document.querySelector(`.cummmulatE[id="${id}"]`);
  const result = {};

  for (let i = 0; i < myDataValues.length; i++) {
    const obj = myDataValues[i];
    if (!result[obj.id]) {
      result[obj.id] = obj.item;
    } else {
      result[obj.id] += obj.item;
    }
  }

  // Compute the total for each ID
  const totals = {};
  for (let id in result) {
    if (!totals[id]) {
      totals[id] = result[id];
    } else {
      totals[id] += result[id];
    }
  }

  // Render the result to the cumL element
  cumL.innerHTML = JSON.stringify(totals);
}

*/

        // const clickedItems = myDataValues.filter(item => item.id === id);
        // const total = clickedItems.reduce((acc, item) => acc + item.item, "");
        // cumL.textContent += total;
        // localStorage.setItem("cumulaT", JSON.stringify(myDataValues));



































//////////////
// let myDataValues = []

// fetch("datalaggingI.json") //fetching the data from the server, using the file's name

// .then(function(response) { //catching the data in JS using the '.then()' method, so as to manipulate and assign some functions or functionalities to the fetched data. Note: the '.then()' method takes a function as an arguement.
//     return response.json() // we use the '.json()' method to convert the 'fetched' and 'catched' response('json' file / data) from the server, to a JavaScript readable 'object' that we can work with.
// })


// .then(function(datalaggingI){ //accessing of the 'data' in 'datalaggingI.json'

//         cols = ["LAGGING/TRAILING INDICATORS", "PERFORMANCE (NO.)", "CUMMULATIVE PERFORMANCE (No.)"]


//             var table = document.createElement('table')
//             table.classList.add('sectionThreeTable')

//             table.appendChild(document.createElement('thead'))
//             table.querySelector('thead').appendChild(document.createElement('tr'))
//             for (var i = 0; i < cols.length; i++) {
//                 var heading = document.createElement('td')
//                 heading.textContent = cols[i]
//                 table.querySelector('thead tr').appendChild(heading)
//             }

//             document.querySelector(".sectionThree").appendChild(table)

//             // for (var i=0; i<datalaggingI.length; i++)
//             datalaggingI.forEach(d =>{
//             let s = d.name
//             let id = d.id

//             var tr = document.createElement('tr')
//             tr.id = s


//             var nameCell = document.createElement('td')
//             nameCell.textContent = s
//             nameCell.classList.add("tdclass")


//             var performanCEs = document.createElement('td')
//             performanCEs.classList.add('perfclass')
//             performanCEs.setAttribute('id', id)

//             var decrementin = document.createElement('i')
//             decrementin.classList.add('bi-dash-lg')
//             decrementin.setAttribute('id', id)


//             var performancE = document.createElement('span')
//             // performancE.textContent =
//             performancE.classList.add("performanCE")
//             performancE.setAttribute('id', id)


//             var incrementin = document.createElement('i')
//             incrementin.classList.add('bi-plus-lg')
//             incrementin.setAttribute('id', id)


//             var submitteD = document.createElement('button')
//             submitteD.textContent = "Submit"
//             submitteD.setAttribute('id', id)
//             submitteD.classList.add("submitCum")


//             var cummmulate = document.createElement('td')
//             cummmulate.textContent = s.cummulative
//             cummmulate.setAttribute('id', id)

//             tr.appendChild(nameCell)
//             tr.appendChild(performanCEs)
//             tr.appendChild(cummmulate)
//             performanCEs.appendChild(decrementin)
//             performanCEs.appendChild(performancE)
//             performanCEs.appendChild(incrementin)
//             performanCEs.appendChild(submitteD)
//             console.log(tr)

//             table.appendChild(tr)



//             datalaggingI.forEach(data => {
//                 incrementin.addEventListener("click", function() {
//                   let selectedData = data.id;
//                   let search = myDataValues.find(x => x.id === selectedData);

//                   if (search === undefined) {
//                     myDataValues.push({
//                       id: selectedData,
//                       item: 1,
//                     });
//                   } else {
//                     search.item += 1;
//                   }

//                   handleClick(selectedData);
//                 });
//               });


//               function handleClick(id) {
//                 const clickedIndex = myDataValues.findIndex(item => item.id === id);

//                 if (clickedIndex !== -1) {
//                   const clickedObject = myDataValues[clickedIndex];
//                   console.log(clickedObject);
//                 }
//               }



//         })


//         })


// function handleClick(id) {
            //     const clickedIndex = myDataValues.findIndex(item => item.id === id); // find index of clicked object
            //     if (clickedIndex !== -1) { // check if clicked object is found
            //       const clickedObject = myDataValues[clickedIndex]; // retrieve clicked object from array
            //       console.log(clickedObject)// render clicked object as desired
            //     }
            //   }


            // function handleClick(id){
            // myDataValues = myDataValues.filter(item => item.id === id)
            // myDataValues.indexOf(id)
            // myDataValues.slice(id)
            // }



// for (var i=0; i<datalaggingI.length; i++){
                // var s = datalaggingI[i]
                // let selectedData = s.id
                // console.log(selectedData)
                // let perform = s.performance
                // console.log(perform)
                // myDataValues.push({
                //     id: selectedData,
                //     performance: perform
                //   })
                //   console.log(myDataValues)
                // myDataValues.map((x)=> { let {id} = x
                // s.find((z)=> z.id === id) || []
                // return cellS.innerHTML = performance + 1 })
                // console.log(search)

            //  }



          /*  return`<tr id = data-id-${id}>
            <td >${name}</td>
                <td><i onclick="decrement()" class="bi bi-dash-lg"></i><span id=${id} class="quantity">
                ${search.performance === undefined ? 0 : search.performance}</span> <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                <button  onclick="submited(${id})">Submit</button></td>
                <td class="cumone"><span id="cum-id" class="cum"></span><button id="mtcDelButtn">x</button></td>
            </tr>
    `*/
// }).join("")


        // }
        // dhdjd()
    // })}

        // createSubmited()




            // var cellS = document.querySelectorAll("span.performancE")
            // console.log(cellS)




        // submiteD.addEventListener("click", function(){
        //     const fff = localStorage.getItem("anto")
        //     const displayElement = document.createElement("td")
        //     displayElement.innerText = fff.performance
        //     document.td.appendChild(displayElement)
        // })


    // submiteD.addEventListener("click", function(){
    //     const myDataValues = localStorage.getItem("anto")
    //     const displayElement = document.createElement("cum")
    //     displayElement.innerText = myDataValues.performance
    //     document.span.appendChild(displayElement)
    // })

    // function increment(id) {
    //     console.log("i clicked")
    //     let selectedData = id
    //     let search = myDataValues.find((c) => c.id === selectedData.id)
    //     if(search === undefined) {
    //         myDataValues.push({
    //             id: selectedData.id,
    //             performance: 1,
    //         })
    //     }else {
    //         search.performance += 1
    //     }
    //     update(selectedData.id)
    //     localStorage.setItem("anto", JSON.stringify(myDataValues))

    // }

    // function update(id) {
    //     let search = myDataValues.find((x) => x.id === id)
    //     document.getElementById(id).innerHTML = search.performance
    // }

// function submited(id) {
//        console.log("i clicked it")
//          let selectedData = id
//          let search = myDataValues.find((x) => x.id === selectedData.id)
//          if (search === undefined) {
//              return search.performance
//          }

//          localStorage.setItem("anto", JSON.stringify(myDataValues))
//      }

// function increment(id) {
//     console.log("i clicked")
//     let selectedData = id
//     let search = myDataValues.find((c) => c.id === selectedData.id)
//     if(search === undefined) {
//         myDataValues.push({
//             id: selectedData.id,
//             performance: 1,
//         })
//     }else {
//         search.performance += 1
//     }
//     localStorage.setItem("anto", JSON.stringify(myDataValues))
// }


//     function submited(p) {
//         let b = datalaggingI.find((x) => x === performance)
//         let df = p.b
//         myDataValues.push(df)

//         console.log("i clicked")
// }
    // function submited(id) {
    //    let dataS = myDataValues.map((x) => x.)
    // }

    // for (let x of datalaggingI) { // Using a 'for of' loop, we loop throught the 'values' of the 'datalaggingI.json' array object, so as to get access to each data.
    //     out +=    /*Appending every 'fetched' data to the earlier created 'out' variable.*/



















// fetch("datalaggingI.json") //fetching the data from the server, using the file's name

// .then(function(response) { //catching the data in JS using the '.then()' method, so as to manipulate and assign some functions or functionalities to the fetched data. Note: the '.then()' method takes a function as an arguement.
//     return response.json() // we use the '.json()' method to convert the 'fetched' and 'catched' response('json' file / data) from the server, to a JavaScript readable 'object' that we can work with.
// })
// //NOTE THE ABOVE 'FETCHED' AND 'CATCHED' DATA AREN'T ACCESSIBLE AT THE STAGE. TO BE ABLE TO ACCESS THE DATA WE USE THE BELOW FUNCTION;


// .then(function(datalaggingI){ //accessing of the 'data' in 'datalaggingI.json'
//     let placeholder = document.querySelector("#sectThreeTableBody")
//     let out = "" // created a variable that will hold all the 'fetched' and 'catched' data from the 'server' or 'json' file.
//     for (let x of datalaggingI) { // Using a 'for of' loop, we loop throught the 'values' of the 'datalaggingI.json' array object, so as to get access to each data.
//         out +=    /*Appending every 'fetched' data to the earlier created 'out' variable.*/ `
//         <tr>
//             <td >${x.name}</td>
//             <td><input type=${x.performance} id="mtcInput"> <button id="mtcSbButtn">Submit</button></td>
//             <td><span id="mtcCum">${x.cummulative}</span><button id="mtcDelButtn">x</button></td>
//         </tr>
//         `
//     }

//     placeholder.innerHTML = out
// })















// const medata = (datalaggingI) => {datalaggingI.map((x) =>
//     x = {id, performance, cummulative})
// let peform = x.performance
// myDataValues.push(peform)

// }







// function incresinG(id) {
//     fo
//     let selectedData = id
//     let search = myDataValues.find((x) => x.id === selectedData.id)
//     if (search || NaN) {
//         myDataValues.push ({
//             id: selectedData.id,
//             search.performance += 1,
//         })
//     }
// }