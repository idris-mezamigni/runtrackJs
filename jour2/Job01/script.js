// Fonction nommée "citation" comme demandé dans le sujet
function citation() {
    // On sélectionne l'élément article par son id "citation"
    const element = document.getElementById("citation");
    
    // On récupère le texte à l'intérieur
    const texte = element.textContent;
    
    // On l'affiche dans la console de développement
    console.log(texte);
}

// On récupère le bouton par son id "button"
const btn = document.getElementById("button");

// On ajoute l'écouteur de clic pour appeler la fonction
btn.addEventListener("click", citation);