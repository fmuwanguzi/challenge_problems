/* **************************************************************
Make a function createNewElement(tagName, text) that takes in 2 
parameters and returns a new element with the correct text
************************************************************** */
function createNewElement(tagName, text) {
   //create a new element with tag 
   const newElement = document.createElement(tagName);
   //set the textcontent to the new element
   newElement.textContent = text;
   //return 
   return newElement;

    
}

console.log(createNewElement('p', 'I am a software engineer'));
console.log(createNewElement('h1', 'General Assembly'));
console.log(createNewElement('p', 'SEI 1019'));

/* ************************************************************ */


/* **************************************************************
Make a function giveMeKeys(array) that takes in an array of objects
and returns a new array with all of the keys from each object
************************************************************** */
const instuctors = [
    { rome: 'Rome', pete: 'Pete'},
    { mike: 'Mike', dex: 'Dexter'},
    { ga: 'General Assembly', cohort: 'SEI1019' }
]
//long way 
// const giveMeKeys = (array) => {
//     const result =[];
//     //iterate through the array
//     for(let i=0; i<array.lengt; i++){
//         //set up a intermediate variable(temporary variable)
//         let obj = array[i]; //each element { rome: 'Rome', pete: 'Pete'}
//         //iterate through each object
//         for(let key in object){// { rome: 'Rome', pete: 'Pete'},
//             //push the key into the result array
//             result.push(key);// amswer should be [rome ,pete, mike,ga,cohort]
//         }
        
//     }
//     return result;

// }

function giveMeKeys(array){
    let result = [];
    array.forEach(obj=> {
        result = result.concat(object.keys(obj));
    })
    return result;
}

console.log(giveMeKeys(instuctors));

/* ************************************************************ */