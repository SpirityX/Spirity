function generateRandom() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);
    const resultElement = document.getElementById("result");
    const errorElement = document.getElementById("error");
    const imageElement = document.getElementById("randomImage");

    if (isNaN(min) || isNaN(max)) {
        errorElement.textContent = "Veuillez entrer des nombres valides.";
        resultElement.textContent = "";
        imageElement.style.display = "none";
        return;
    }

    if (min >= max) {
        errorElement.textContent = "Le minimum doit être inférieur au maximum.";
        resultElement.textContent = "";
        imageElement.style.display = "none";
        return;
    }

    errorElement.textContent = "";
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    resultElement.textContent = "Nombre aléatoire: " + randomNumber;

    // Générer une image aléatoire
    const randomImageId = Math.floor(Math.random() * 1000);
    imageElement.src = `https://picsum.photos/500/300?random=${randomImageId}`;
    imageElement.style.display = "block";
}
