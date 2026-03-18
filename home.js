function enviarPedido(nombreProducto) {
    // 1. Cambia este número por el tuyo (SOLO NÚMEROS)
    const telefono = "5493447509775"; 
    
    // 2. Creamos el texto
    const texto = "Hola CellMates! 👋 Estoy interesado en el " + nombreProducto + ". ¿Tienen stock?";
    
    // 3. Convertimos el texto a formato de URL
    const mensajeURL = encodeURIComponent(texto);
    
    // 4. Creamos el enlace completo
    const enlace = "https://wa.me/" + telefono + "?text=" + mensajeURL;
    
    // 5. Abrimos WhatsApp
    window.open(enlace, '_blank');
}
