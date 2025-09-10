# AppExamenHO - Sistema de Gestión Académica

Sistema de gestión académica desarrollado en Angular con PrimeNG para la administración de estudiantes, asignaturas y grados.

## 🚀 Características

- **Gestión de Estudiantes**: CRUD completo para estudiantes con validaciones
- **Gestión de Asignaturas**: Administración de materias por grado
- **Gestión de Grados**: Control de niveles académicos
- **Interfaz Moderna**: Diseño responsive con PrimeNG
- **Persistencia Local**: Almacenamiento en localStorage
- **Navegación Intuitiva**: Sidebar con contadores dinámicos

## 🛠️ Tecnologías Utilizadas

- **Angular 17+** - Framework principal
- **PrimeNG** - Componentes UI
- **TypeScript** - Lenguaje de programación
- **CSS3** - Estilos personalizados
- **RxJS** - Programación reactiva

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn
- Angular CLI

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/duvans0404/AppExamenHO.git
cd AppExamenHO
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Ejecutar el Proyecto

```bash
ng serve
```

El proyecto estará disponible en `http://localhost:4200`

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── student/
│   │   │   ├── create/     # Crear estudiante
│   │   │   ├── read/       # Listar estudiantes
│   │   │   ├── update/     # Editar estudiante
│   │   │   └── delete/     # Eliminar estudiante
│   │   ├── subject/
│   │   │   ├── create/     # Crear asignatura
│   │   │   ├── read/       # Listar asignaturas
│   │   │   ├── update/     # Editar asignatura
│   │   │   └── delete/     # Eliminar asignatura
│   │   ├── grade/
│   │   │   ├── create/     # Crear grado
│   │   │   ├── read/       # Listar grados
│   │   │   ├── update/     # Editar grado
│   │   │   └── delete/     # Eliminar grado
│   │   └── layout/
│   │       ├── ho-header/  # Cabecera
│   │       ├── ho-sidebar/ # Barra lateral
│   │       └── ho-footer/  # Pie de página
│   ├── models/             # Modelos de datos
│   ├── services/           # Servicios de datos
│   └── app.routes.ts       # Configuración de rutas
```

## 🎯 Funcionalidades

### Gestión de Estudiantes
- ✅ Crear nuevo estudiante
- ✅ Listar todos los estudiantes
- ✅ Editar información del estudiante
- ✅ Eliminar estudiante
- ✅ Validaciones de formulario
- ✅ Búsqueda y filtrado

### Gestión de Asignaturas
- ✅ Crear nueva asignatura
- ✅ Listar todas las asignaturas
- ✅ Editar asignatura
- ✅ Eliminar asignatura
- ✅ Asociación por grado

### Gestión de Grados
- ✅ Crear nuevo grado
- ✅ Listar todos los grados
- ✅ Editar grado
- ✅ Eliminar grado
- ✅ Numeración de grados (1-12)

## 🎨 Interfaz de Usuario

- **Sidebar Oscuro**: Navegación principal con contadores dinámicos
- **Formularios Responsivos**: Diseño adaptativo para móviles y desktop
- **Tablas Interactivas**: Con filtros y acciones rápidas
- **Notificaciones**: Toast messages para feedback del usuario
- **Confirmaciones**: Diálogos de confirmación para acciones críticas

## 🔧 Scripts Disponibles

```bash
# Desarrollo
ng serve

# Construcción para producción
ng build

# Ejecutar pruebas
ng test

# Linting
ng lint
```

## 📱 Responsive Design

El sistema está optimizado para:
- 📱 Dispositivos móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🚀 Despliegue

Para desplegar en producción:

```bash
ng build --prod
```

Los archivos generados estarán en la carpeta `dist/`.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Duvan Sarmiento**
- GitHub: [@duvans0404](https://github.com/duvans0404)

## 📞 Soporte

Si tienes alguna pregunta o problema, por favor abre un issue en el repositorio.

---

⭐ ¡No olvides darle una estrella al proyecto si te gusta!