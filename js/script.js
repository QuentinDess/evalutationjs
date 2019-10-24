/*
je crée un événement qui fait que l'utilisateur doit cliquer sur 
un bouton pour afficher un formulaire
*/
let magic_button=document.querySelector(".join_us")

magic_button.addEventListener("click", () => {
    document.querySelector("form").classList.toggle("display_none");
    document.querySelector(".submit").classList.toggle("display_none");
});
    
        
/*
je crée une alerte quand l'utilisateur clique sur le boutton Envooyer vos informations 
*/

let submit_button=document.querySelector(".submit")

submit_button.addEventListener("click", function () {
    alert("merci d'avoir renseignez vos informations")
    
})


/*
je crée un mouse over sur les li du footer et du nav
*/

document.querySelectorAll("li").forEach(element =>{ 
    element.addEventListener("mouseover", function() {
        element.classList.toggle("mark");});
    element.addEventListener("mouseout", function() {
        element.classList.toggle("mark");});
    });