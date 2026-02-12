// This is my personal favorite way to comment btws.

// This established the constant variable aka "const" there are two that are mentioned in the html.
const inputBox = document.getElementById("input-box");
// Why does input-box have an id selector but not container?
const listContainer = document.getElementById("list-container");

// This functions operates on the input box, watching for interaction and once the else is engaged, the listContainer is also engaged.
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    // This means that info won't be erased when you refresh the site.
    saveData();
}

// This list container also holds an if-else statement. If checked is clicked, put on the checked class. Else the x is clicked remove the row.
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// This is the home of how the data for this app is saved. I don't remember how localStorage works, but cookies come to mind.
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// This works in tandem with the saveData... It gets the items in local storage and shows them to the user... So this is incredibly focused on the client and not actual data storage.
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

// I think this works because the function defines this. But I feel like there a way more elegant way to do this.
showTask();