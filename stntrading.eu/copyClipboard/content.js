/**
 * Function tto get the name, add a button and copy to the clipboard
 *
 * @parameter url -> get the url of the current tab
 */
function copyNameClipboard() {
  let placeAddButton = document.getElementsByClassName("card-body")[1]; //place for were i want to add the button in the actual page

  let button = document.createElement("button"); //create the button

  button.textContent = "Copy to Clipboard"; //Add the text

  //Add style with bootstrap classes
  button.classList.add("btn-primary");
  button.classList.add("btn");
  button.classList.add("rounded-2");
  button.classList.add("pb-2");

  //Add a function for the click button
  button.onclick = () => {
    let text2Clipboard = document.querySelector("h3").innerHTML;//Get the name of the item
    text2Clipboard = removeNonImportantWords(text2Clipboard);

    console.log(text2Clipboard);
    
    navigator.clipboard.writeText(text2Clipboard);//copy the tag of the item to the clipboard
  };

  placeAddButton.appendChild(button); //append the button to the page
}

function removeNonImportantWords(itemName){
  if(itemName.startsWith("The")){//If the name starts with The
    itemName = itemName.replace(/The /g, "");//Remove the The
  }

  if(itemName.startsWith("Non-Craftable")){//If the name starts with Non-Craftable
    itemName = itemName.replace(/Non-Craftable /g, "");//Remove the Non-Craftable
  }
  
  return itemName;
}

// Calling the function
copyNameClipboard();