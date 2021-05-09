 var $heading = $("h1").first();
 $heading.text("اشتر ما يلي")
 $heading.css("color", "green");


 document.querySelectorAll('li').forEach(function(li) {
     li.addEventListener('click', function(e) {
         if (e.target.className === "completed") {
             e.target.className = "";
         } else {
             e.target.className = "completed";
         }
         li.className = 'completed';
     })
 });
 var form = document.querySelector("form");

 function addListItem(e) {
     e.preventDefault();
     var input = document.querySelector("newItem");
     var listItem = document.createElement("li");
     listItem.textContent = input.value;
     var list = document.querySelector("ul");
     list.appendChild(listItem);
 }
 form.addEventListener("submit", addListItem);