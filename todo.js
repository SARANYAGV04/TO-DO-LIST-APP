const inputBox = document.getElementById("inputBox");
const ListBox = document.getElementById("List-box");


function addButton(){
    if(inputBox.value == ''){
        alert("Fill the field first");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        ListBox.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
   inputBox.value="";
}

 ListBox.addEventListener("click", function(add){
    if(add.target.tagName === "LI"){
        add.target.classList.toggle("checked");

    }
    else if(add.target.tagName === "SPAN"){
        const listItem = add.target.parentElement;
              if(listItem.classList.contains("checked")){
                listItem.remove();
              }
             else {
                alert("You must check the item before deleting it.");
              }
    }
});

// function saveData(){
//     localStorage.setItem("data", ListBox.innerHTML);
//     localStorage.getItem("data");
// }

// function showTask(){
//     ListBox.innerHTML = localStorage.getItem("data");
// }
// showTask();




// const addButton = document.getElementById("addBtn").
// addEventListener("click", function(){
//     const input = inputBox.value;

//     if(inputBox.value === ''){
//                 alert("Fill the field first");
//             }
//             let li = document.createElement("li");
//                     li.innerHTML=inputBox.value;
//                     ListBox.appendChild(li);
//                     let span = document.createElement("span");
//                     span.innerHTML= "\u00d7";
//                     li.appendChild(span);

//                 li.addEventListener("click", function(){
//                     li.classList.toggle("checked")
//                 })
 
// })