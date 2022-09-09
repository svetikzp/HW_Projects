// Tasks:
// 1. Add new array with drinks
// 2. Make drinks show up in the list
// 3.Replace repeating loops with a function. Function should: 
//   1. Accept any array
//   2. Iterate through array
//   3. On each iteration create a <li> and put element of array      inside as text
//   4. Attach <li> to the list

// Declaring arrays
const fruits = ['Apples', 'Tangerines', 'Grapes', 'Pears'];
const dairy = ['Cheese', 'Milk', 'Yoghurt'];
const vegetables = ['Tomatoes', 'Cucumbers', 'Carrots'];
const drinks = ['Lemonade', 'Coke', 'Fruit juice', 'Champagne', 'Kvass'];

//Combining items into one array
const products = fruits.concat(dairy, vegetables, drinks);


// Declaring function which accepts text and outputs <li> html element
function createListItem(text) {
    // Creating <li> element
    const listItem = document.createElement('li');
    // Creating text node
    const textNode = document.createTextNode(text);
    // Putting text node inside of <li> HTML element
    listItem.appendChild(textNode);
    // Returning listItem
    return listItem;
}

// Getting <ul> element from HTML to which we will attach list elements later
const list = document.getElementById('shopping-list');

//Function creates a list <li> from array elements as text
function createShoppingReminder(arr) {
    for (itemList of arr) {
        let item = createListItem(itemList);
        list.appendChild(item);
    }
}
createShoppingReminder(products);