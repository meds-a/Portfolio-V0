let input = "";


//fonction qui affiche la valeur

 function showValue(btn) {
    input += btn.value;
    console.log(input);
    document.querySelector(".textview").value = input;
   
 }

//fonction qui évalue le chiffre et renvoie la sortie

function calculer() {

    document.querySelector(".textview").value = eval(input);
    console.log(eval(input));
}

//fonction qui supprimer l'écran 

 function supprimer() {
   document.querySelector(".textview").value = "";
   input = "";
 }

//fonction qui efface un nombre

function effacer() {
  input = input.replace(input.slice(-1), "");
  document.querySelector(".textview").value = input;  
  console.log(input);
   

}
