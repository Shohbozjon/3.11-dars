var elForm = document.querySelector(".form")
var elInput = document.querySelector(".form__input")
var elList = document.querySelector(".list")

var todos = [];

elForm.addEventListener("submit" , function(evt){
   evt.preventDefault();

   var inputValue = elInput.value.trim();

   var todo = {
       id: todos.length,
       title: inputValue,
   };

   todos.push(todo);

   elList.innerHTML = "";

   for (var item of todos) {

       var newLi = document.createElement("li");

       newLi.textContent = item.title;
       elList.appendChild(newLi);
       
       elInput.value = "";
   }
})

