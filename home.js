function enviarPedido(nombreProducto) {
    const telefono = "541112345678"; // <--- REEMPLAZA CON TU NÚMERO (Sin el +)
    
    // El mensaje que te llegará a ti
    const mensaje = `Hola CellMates! 👋 Estoy interesado en el ${nombreProducto}. ¿Tienen stock disponible?`;
    
    // Codificar el mensaje para que funcione en el link
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Crear el enlace de WhatsApp
    const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
    
    // Abrir en una nueva pestaña
    window.open(urlWhatsApp, '_blank');
}

// Mantener la funcionalidad del menú móvil que hicimos antes
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('bx-menu');
        icon.classList.toggle('bx-x');
    });
}
