
 // Actualiza automáticamente el año del pie de página.
const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}