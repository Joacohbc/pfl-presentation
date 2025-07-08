# Presentación PFL - Sistema de Gestión de Reservas Proactivas

## Descripción
Esta es una presentación interactiva desarrollada con Reveal.js y Vite, que muestra el proyecto de Sistema de Gestión de Reservas Proactivas.

## Estructura del Proyecto
```
├── public/
│   └── icons/          # Iconos de tecnologías descargados localmente
├── src/
│   ├── scripts/
│   │   └── main.js     # JavaScript principal de la aplicación
│   └── styles/
│       └── main.css    # Estilos CSS de la presentación
├── index.html          # Archivo HTML principal
├── vite.config.js      # Configuración de Vite
└── package.json        # Dependencias y scripts del proyecto
```

## Características

### Tecnologías Utilizadas
- **Vite** - Herramienta de construcción moderna
- **Reveal.js** - Framework para presentaciones HTML
- **CSS3** - Estilos avanzados con variables CSS y animaciones
- **JavaScript ES6+** - Módulos y características modernas

### Funcionalidades
- Timeline interactivo persistente
- Animaciones suaves y efectos visuales
- Diseño responsive
- Navegación por teclado y mouse
- Iconos de tecnologías almacenados localmente

## Instalación y Uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación
```bash
# Instalar dependencias
npm install
```

### Desarrollo
```bash
# Iniciar servidor de desarrollo
npm run dev
```

El servidor se iniciará en `http://localhost:3000` y se abrirá automáticamente en el navegador.

### Construcción para Producción
```bash
# Construir para producción
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Vista Previa de Producción
```bash
# Vista previa del build de producción
npm run preview
```

## Navegación de la Presentación

### Controles de Teclado
- **Flecha derecha/Espacio**: Siguiente slide
- **Flecha izquierda**: Slide anterior
- **ESC**: Vista general de slides

### Timeline Interactivo
- Aparece automáticamente en cada cambio de slide
- Se oculta después de 3 segundos
- Clickeable para navegación directa
- Indica progreso visual de la presentación

## Personalización

### Modificar Contenido
Edita el archivo `index.html` para cambiar el contenido de las slides.

### Personalizar Estilos
Los estilos están en `src/styles/main.css`. Utiliza las variables CSS definidas en `:root` para cambios de tema consistentes.

### Agregar Funcionalidad JavaScript
Edita `src/scripts/main.js` para agregar nueva funcionalidad interactiva.

## Estructura de Slides

Las slides están organizadas por estados (`data-state`):
- `intro` - Introducción
- `solucion` - Problemática y solución
- `inteligencia` - Funcionalidades del sistema
- `negocio` - Modelo de negocio
- `construccion` - Metodología y tecnología
- `futuro` - Planes futuros
- `cierre` - Conclusión

## Iconos y Assets

Los iconos de tecnologías se almacenan en `public/icons/` y se referencian con rutas relativas. Para agregar nuevos iconos:

1. Coloca el archivo SVG en `public/icons/`
2. Referéncialo en el HTML como `/icons/nombre-del-icono.svg`

## Contribución

Para contribuir al proyecto:
1. Fork el repositorio
2. Crea una rama para tu feature
3. Realiza tus cambios
4. Envía un pull request

## Licencia

Este proyecto está bajo la licencia MIT.
