const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

year.textContent = new Date().getFullYear();

const whatsappForm = document.getElementById("whatsappForm");

if (whatsappForm) {
  whatsappForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value.trim();

    const numeroWhatsApp = "56972857716";

    const texto = `Hola, necesito cotizar un servicio de gasfitería.

Nombre: ${nombre}
Teléfono: ${telefono}
Servicio requerido: ${servicio}
Mensaje: ${mensaje}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  });
}
