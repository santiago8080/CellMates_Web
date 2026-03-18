/**
 * ARCHIVO: script.js
 * CLIENTE: CellMates
 * FUNCIONALIDAD: Carrito interactivo y Menú Responsive
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LÓGICA DEL MENÚ MÓVIL ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = menuToggle.querySelector('i');

    // Abrir/Cerrar menú al tocar el icono
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Cambiar el icono de 'barras' a 'X'
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.replace('bx-menu', 'bx-x');
        } else {
            menuIcon.classList.replace('bx-x', 'bx-menu');
        }
    });

    // Cerrar el menú automáticamente al hacer clic en cualquier opción (Inicio, Productos, etc.)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.classList.replace('bx-x', 'bx-menu');
        });
    });


    // --- 2. LÓGICA DEL CARRITO DE COMPRAS ---
    let cartCount = 0;
    const cartBadge = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Incrementar contador
            cartCount++;
            cartBadge.textContent = cartCount;

            // Animación de "pop" en el número del carrito
            cartBadge.style.transform = 'scale(1.5)';
            setTimeout(() => {
                cartBadge.style.transform = 'scale(1)';
            }, 200);

            // Feedback visual en el botón presionado
            const originalText = this.textContent;
            this.textContent = '¡Añadido! ✓';
            this.style.background = 'var(--primary-color)';
            this.style.color = '#000';
            this.style.fontWeight = 'bold';

            // Revertir el botón a su estado original tras 1.5 segundos
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = 'transparent';
                this.style.color = '#fff';
                this.style.fontWeight = '600';
            }, 1500);
        });
    });

    // --- 3. EFECTO DE SCROLL EN EL HEADER ---
    // Hace que el fondo del header sea más sólido cuando el usuario baja la página
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(13, 17, 23, 0.95)';
            header.style.padding = '15px 8%';
        } else {
            header.style.background = 'rgba(13, 17, 23, 0.7)';
            header.style.padding = '20px 8%';
        }
    });

});