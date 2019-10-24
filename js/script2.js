/*
je crée un mouse over sur les li du footer et du nav
*/
document.querySelectorAll("li").forEach(element =>{ 
    element.addEventListener("mouseover", function() {
        element.classList.toggle("mark");});
    element.addEventListener("mouseout", function() {
        element.classList.toggle("mark");});
    });