// script.js
window.onload = function() {
    const skillLogos = document.querySelectorAll('.skill-logo');
    
    skillLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
};
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtenir les valeurs des champs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Valider les champs (simple exemple)
    if (name && email && message) {
        document.getElementById("confirmationMessage").textContent = "Merci, votre message a bien été envoyé !";
        
        // Effacer les champs après soumission
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("confirmationMessage").textContent = "Veuillez remplir tous les champs.";
    }
});

