// Etape1  selectionner nos éléments!

let input       = document.querySelector('#prix');
let error       = document.querySelector('small');
let formulaire  = document.querySelector('#formulaire')

//Etape 2 cacher l'erreur

error.style.display ="none";

//Etape 3 générer un nombre aléatoire

let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups           =0;
let nombreChoisi;

//Etapes 6 Creer la fonction verifier
function verifier(nombre) {
    
    let instruction = document.createElement('div');

    if (nombre < nombreAleatoire) {
        // c'est plus
        instruction.textContent = "#" + coups + "(" + nombre + ") c'est plus !"
        // Ajouter un contenu "#1 (4) c'est plus!";
        instruction.className = "instruction plus"
        //Ajouter les classes instructions et plus "instruction plus"
    }
    else if (nombre > nombreAleatoire) {
        // c'est moins
        instruction.textContent = "#" + coups + "(" + nombre + ") c'est moins!"

        // Ajouter un contenu #1 (4) c'est moins
        instruction.className = "instruction moins"

        //Ajouter les classes instructions et moins

    }
    else {
        // Félicitations vous trouvé le juste prix !
        instruction.textContent = "#" + coups + "(" + nombre + ") Félicitations vous avez trouvé le juste prix !"

        // Ajouter un contenu #1 (4)
        instruction.className = "instruction fini"
        input.disabled = true;

    }
    //Ajouter l'élement devant les autres

    document.querySelector("#instructions").prepend(instruction);

}

//Etape 4 Verifier qe l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        //Afficher le message d'erreur
        error.style.display ="inline";
        
    }
    else {
        // Cacher le message d'erreur
        error.style.display = 'none';
    }
})

// Etape 5 Agir à l'envou du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isNaN(input.value) || input.value == "") {
        //Mettre notre bordure de formulaire en rouge
        input.style.borderColor ="red";       
    }
    else {
        //Mettre notre bordure de formulaire en gris
        coups++;
        input.style.borderColor ="silver";
        nombreChoisi = input.value;
        input.value = "";
        verifier(nombreChoisi);

    }

});

