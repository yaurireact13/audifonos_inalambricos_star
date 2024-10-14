// Función para abrir el modal
function openModal(productId) {
    var modal = document.getElementById("productModal");
    var modalBody = document.getElementById("modal_body");
  
    // para agregar contenido del moddall 
    var productDetails = "";
    if (productId === 1) {
      productDetails = `
        <h2>Detalles del Audífono</h2>
        <p>Este audífono ofrece una experiencia de sonido envolvente con cancelación de ruido activa.</p>
        <img src="images/producto-client-1.png" alt="Audífono Bluetooth" style="max-width:100%;">
      `;
    } else if (productId === 2) {
      productDetails = `
        <h2>Detalles del Audífono</h2>
        <p>Los bajos potentes y la claridad de sonido hacen de este audífono ideal para los amantes de la música.</p>
        <img src="images/producto-client-2.png" alt="Audífono Cable" style="max-width:100%;">
      `;
    } else if (productId === 3) {
      productDetails = `
        <h2>Detalles del Audífono</h2>
        <p>Comodidad extrema para largas sesiones de escucha con gran calidad de audio.</p>
        <img src="images/producto-client-3.png" alt="Audífono Bluetooth" style="max-width:100%;">
      `;
    }
  
    modalBody.innerHTML = productDetails;
    modal.style.display = "block"; 
  }
  
  // Función para cerrar el modal
  function closeModal() {
    var modal = document.getElementById("productModal");
    modal.style.display = "none";
  }
  

