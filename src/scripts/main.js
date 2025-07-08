// Importar los estilos CSS
import '../styles/main.css';

// Configuración del timeline
const timelineSections = [
    { state: 'intro', name: 'Intro', icon: '👋' },
    { state: 'solucion', name: 'Solución', icon: '🎯' },
    { state: 'inteligencia', name: 'Inteligencia', icon: '🧠' },
    { state: 'negocio', name: 'Negocio', icon: '💼' },
    { state: 'construccion', name: 'Construcción', icon: '🛠️' },
    { state: 'futuro', name: 'Futuro', icon: '🚀'},
    { state: 'cierre', name: 'Cierre', icon: '✅' }
];

let deck;
let roadmapTimeout;

// Función para crear el HTML del timeline
function createTimelineHTML() {
    const timelineContainer = document.getElementById('persistent-roadmap');
    
    timelineSections.forEach((section) => {
        const item = document.createElement('div');
        item.className = 'roadmap-item';
        item.dataset.state = section.state;
        
        const icon = document.createElement('div');
        icon.className = 'roadmap-icon';
        icon.textContent = section.icon;
        
        const label = document.createElement('div');
        label.className = 'roadmap-label';
        label.textContent = section.name;

        item.appendChild(icon);
        item.appendChild(label);

        item.onclick = () => {
            const firstSlideWithState = document.querySelector(`.slides section[data-state="${section.state}"]`);
            if(firstSlideWithState) {
                deck.slide(Array.from(document.querySelectorAll('.slides section')).indexOf(firstSlideWithState));
            }
        };
        
        timelineContainer.appendChild(item);
    });
}

// Función para actualizar el timeline
function updateTimeline() {
    const timelineContainer = document.getElementById('persistent-roadmap');
    const currentSlide = deck.getCurrentSlide();
    
    if (!currentSlide) return;
    
    const currentState = currentSlide.dataset.state;
    
    // Limpiar cualquier timeout existente
    if (roadmapTimeout) {
        clearTimeout(roadmapTimeout);
    }
    
    // Mostrar roadmap inmediatamente después de la transición
    timelineContainer.classList.remove('hidden', 'slide-down');
    timelineContainer.classList.add('visible');
    
    // Configurar timeout para deslizar hacia abajo
    roadmapTimeout = setTimeout(() => {
        timelineContainer.classList.remove('visible');
        timelineContainer.classList.add('slide-down');
    }, 3000);
    
    const activeStateIndex = timelineSections.findIndex(s => s.state === currentState);
    
    // Actualizar todos los elementos
    document.querySelectorAll('.roadmap-item').forEach((item, index) => {
        item.classList.remove('active', 'completed');
        if (index < activeStateIndex) {
            item.classList.add('completed');
        } else if (index === activeStateIndex) {
            item.classList.add('active');
        }
    });
}

// Función para inicializar Reveal.js
function initializeReveal() {
    deck = new Reveal({
        controls: false,
        progress: false,
        history: true,
        center: true,
        slideNumber: false,
        transition: 'zoom',
        backgroundTransition: 'fade',
        width: 1920,
        height: 1080,
        margin: 0.04,
        minScale: 0.2,
        maxScale: 1.0,
        plugins: [ RevealNotes ]
    });
    
    return deck.initialize();
}

// Función principal de inicialización
function init() {
    // Crear el timeline HTML
    createTimelineHTML();
    
    // Inicializar Reveal.js
    initializeReveal().then(() => {
        // Configurar event listeners
        deck.on('slidechanged', updateTimeline);
        deck.on('ready', updateTimeline);
        
        // Actualizar timeline inicial
        updateTimeline();
    });
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Exportar funciones para uso global si es necesario
window.PresentationApp = {
    updateTimeline,
    timelineSections
};
