# 🌸 Mamá Segura - Portal Web Educativo de Autocuidado Materno e Infantil

Portal web estático, ligero y accesible, desarrollado para acompañar a gestantes y familias durante el embarazo y las primeras semanas de vida del bebé. Basado en el documento oficial **MAMÁ SEGURA** y diseñado con la estética cálida, acogedora y serena de la plantilla *Consultoría de Bebés (Suave)* de Wix Wellness.

---

## 🚀 Despliegue Inmediato en GitHub Pages

Este proyecto está construido con HTML5 semántico, CSS3 modular y JavaScript ES6 nativo, **sin dependencias ni compiladores**, lo que permite desplegarlo en 1 minuto:

1. **Sube tus archivos a un repositorio de GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: lanzamiento de portal Mamá Segura"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   git push -u origin main
   ```
2. **Activa GitHub Pages:**
   - Ve a tu repositorio en GitHub: **Settings** > **Pages**.
   - En **Source**, selecciona `Deploy from a branch`.
   - Selecciona la rama `main` y la carpeta `/ (root)`.
   - Haz clic en **Save**.
   - ¡Listo! En segundos tu sitio estará en vivo en: `https://TU-USUARIO.github.io/TU-REPOSITORIO/`.

> El archivo `.nojekyll` ya está incluido en la raíz para garantizar que GitHub Pages procese todos los directorios y módulos JavaScript sin restricciones.

---

## 🖼️ Gestión de Imágenes (`img1.png` e `img2.jpeg`)

Para que cambiar las imágenes sea sumamente fácil, se creó la carpeta `/img` con nombres estándar:

| Archivo | Ubicación en la Web | Descripción | Formato Actual |
| :--- | :--- | :--- | :--- |
| `img/img1.jpg` | **Sección Hero (Banner Principal)** | Imagen principal de bienvenida de la gestante | JPEG de alta resolución (1080x1350) adaptada |
| `img/img2.jpg` | **Sección Cuidados del Recién Nacido** | Imagen destacada de cuidado y salud materna | JPEG de alta resolución (1024x1024) adaptada |
| `img/favicon.svg` | **Pestaña del Navegador** | Ícono de marca / isotipo cálido | SVG vectorial ligero |

### ¿Cómo cambiarlas por otras fotos en el futuro?
Simplemente copia cualquier nueva foto a la carpeta `C:\Maestria\PaginaMarlin\img` con los nombres:
- `img1.jpg`
- `img2.jpg`

La página web las cargará automáticamente sin necesidad de editar una sola línea de código HTML ni CSS.

---

## 🏛️ Principios de Arquitectura: SOLID & Clean Architecture

A pesar de ser una página estática para máxima velocidad, el proyecto se organizó bajo estándares de ingeniería de software profesional:

```
C:\Maestria\PaginaMarlin\
├── index.html                  # Presentación semántica accesible (HTML5)
├── README.md                   # Documentación y guía de despliegue
├── .nojekyll                   # Compatibilidad con GitHub Pages
├── css/
│   ├── variables.css           # Design Tokens: paleta suave Wix, tipografía, radios
│   ├── base.css                # Resets, tipografía base y utilidades
│   ├── layout.css              # Header, hero, rejillas estructurales y pie de página
│   ├── components.css          # Tarjetas blog, botones, badges, pestañas y checklist
│   └── responsive.css          # Adaptación móvil y tablet (Breakpoints fluidos)
├── js/
│   ├── data.js                 # Capa de Entidades / Datos desacoplados de la UI
│   ├── services/
│   │   ├── storageService.js   # SRP: Abstracción de persistencia (LocalStorage)
│   │   └── checklistService.js # SRP: Reglas de negocio para listas y progreso
│   ├── ui/
│   │   ├── navComponent.js     # Menú móvil accesible y scroll interactivo
│   │   ├── tabsComponent.js    # Gestión de pestañas por trimestres (ARIA)
│   │   ├── searchComponent.js  # Buscador de temas en tiempo real
│   │   └── checklistComponent.js # Render y sincronización interactiva de checklist
│   └── main.js                 # Inyección de dependencias e inicio de la aplicación
└── img/
    ├── img1.png                # Imagen 1 (Hero)
    ├── img2.jpeg               # Imagen 2 (Recién Nacido)
    └── favicon.svg             # Favicon
```

### Aplicación de Principios SOLID:
- **S - Single Responsibility Principle (SRP):** Cada archivo JS y CSS tiene una única función. `storageService` solo guarda datos, `checklistService` solo calcula progreso, y `checklistComponent` solo renderiza el DOM.
- **O - Open/Closed Principle (OCP):** Nuevas guías médicas, trimestres o ítems de maletín se agregan directamente al arreglo `APP_DATA` en `data.js` sin alterar el código de renderizado.
- **L - Liskov Substitution Principle (LSP):** Servicios y componentes implementan interfaces consistentes que pueden intercambiarse o extenderse.
- **I - Interface Segregation Principle (ISP):** Componentes visuales desacoplados que solo reciben los datos y callbacks estrictamente necesarios.
- **D - Dependency Inversion Principle (DIP):** Los componentes de UI dependen de abstracciones de servicios en vez de interactuar directamente con objetos globales no controlados.

---

## 🌟 Funcionalidades Interactivas

1. **Buscador en Tiempo Real:** Permite escribir cualquier síntoma o inquietud (ej: *náuseas*, *sueño*, *cordón*, *maletín*) o usar las etiquetas rápidas.
2. **Pestañas de Trimestres:** Consulta ordenada de los cambios del primer, segundo y tercer trimestre con pautas y advertencias.
3. **Listas de Verificación Interactivas:** Checklists dinámicas para el maletín de la madre, maletín del recién nacido y logística familiar con barra de progreso porcentual y guardado automático en el navegador.
4. **Módulo de Señales de Alarma Críticas:** Identificación rápida y visual de emergencias tanto para la madre como para el bebé con guía de qué llevar al hospital.
5. **Directorio y Red de Apoyo:** Mensaje enfático sobre acompañamiento respetuoso y tarjetas de contactos de emergencia.
