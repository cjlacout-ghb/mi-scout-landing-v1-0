document.addEventListener("DOMContentLoaded", () => {
  const markdownContainer = document.getElementById("markdown-content");
  if (!markdownContainer) return;

  fetch("GUIA_DE_USUARIO.md")
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo cargar la guía de usuario.");
      }
      return response.text();
    })
    .then((text) => {
      // Configuramos marked para soportar saltos de línea automáticos, etc (opcional)
      marked.setOptions({
        breaks: true,
        gfm: true
      });
      // Parseamos el markdown a HTML
      markdownContainer.innerHTML = marked.parse(text);
    })
    .catch((error) => {
      console.error(error);
      markdownContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--error);">
          <p>Ocurrió un error al cargar la guía. Por favor, intenta nuevamente más tarde.</p>
        </div>
      `;
    });
});
