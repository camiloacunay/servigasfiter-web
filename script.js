document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const year = document.getElementById("year");
  const whatsappForm = document.getElementById("whatsappForm");

  // Menú móvil
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // Año automático en footer
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Función segura para enviar eventos a Google Analytics
  function enviarEventoGA(nombreEvento, parametros = {}) {
    if (typeof gtag === "function") {
      gtag("event", nombreEvento, {
        event_category: "contacto",
        ...parametros,
        transport_type: "beacon"
      });
    }
  }

  // Medir clics en botones/enlaces de WhatsApp
  const whatsappLinks = document.querySelectorAll(
    'a[href*="wa.me"], a[href*="api.whatsapp.com"]'
  );

  whatsappLinks.forEach((link) => {
    link.addEventListener("click", () => {
      enviarEventoGA("click_whatsapp", {
        event_label: link.href,
        contact_method: "whatsapp",
        click_text: link.textContent.trim()
      });
    });
  });

  // Medir clics en botones/enlaces de llamada
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

  phoneLinks.forEach((link) => {
    link.addEventListener("click", () => {
      enviarEventoGA("click_llamada", {
        event_label: link.href,
        contact_method: "telefono",
        click_text: link.textContent.trim()
      });
    });
  });

  // Formulario que abre WhatsApp
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

      // Medir envío del formulario a WhatsApp
      enviarEventoGA("formulario_whatsapp", {
        event_label: "agenda_una_visita",
        contact_method: "formulario_whatsapp",
        servicio_requerido: servicio
      });

      window.open(url, "_blank");
    });
  }
});
