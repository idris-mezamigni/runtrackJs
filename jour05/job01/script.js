// Sélections des éléments
const emailInput = document.getElementById('email');
const cpInput = document.getElementById('code_postal');

// Validation de l'Email
emailInput.addEventListener('input', async () => {
    const errorEmail = document.getElementById('err-email');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(emailInput.value)) {
        errorEmail.textContent = "Format d'email invalide.";
    } else {
        errorEmail.textContent = ""; // Efface l'erreur
    }
});

// Validation du Code Postal
cpInput.addEventListener('input', () => {
    const errorCp = document.getElementById('err-cp');
    const regexCp = /^[0-9]{5}$/;

    if (!regexCp.test(cpInput.value)) {
        errorCp.textContent = "Le code postal doit contenir 5 chiffres.";
    } else {
        errorCp.textContent = "";
    }
});