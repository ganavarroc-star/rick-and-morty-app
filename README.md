# 🚀 Rick and Morty Character Explorer

## 📝 Descripción del Proyecto

Aplicación Angular que consume la API pública de Rick and Morty para mostrar una lista interactiva de personajes con funcionalidades avanzadas de búsqueda y filtrado.

**Repositorio GitHub:** https://github.com/ganavarroc-star/rick-and-morty-app

**🌐 Aplicación Desplegada:** https://ganavarroc-star.github.io/rick-and-morty-app/

---

## ✅ Requisitos Cumplidos

### 🎯 Requisitos Técnicos Mínimos

- ✅ **Consumo de API correctamente** - Usa HttpClient para consumir https://rickandmortyapi.com/api/character
- ✅ **Servicio dedicado** - Archivo `CharacterServices.ts` en `src/app/core/service/`
- ✅ **Componente bien estructurado** - `CharacterList` en `src/app/pages/components/character-list/`
- ✅ **Interpolación y control de flujo** - Usa `{{ }}` y `@for`, `@if`, `@switch`
- ✅ **Manejo de carga** - Spinner de carga mientras se obtienen datos
- ✅ **Visualización de datos requeridos:**
  - 📸 Imagen del personaje
  - 📛 Nombre
  - 💚 Estado (Alive/Dead/Unknown) con badges color-coded
  - 🧬 Especie
- ✅ **Diseño en tarjetas (Cards)** - Grid responsivo con efecto hover
- ✅ **Repositorio en GitHub** - Proyecto subido y actualizado

---

## 🔥 Funcionalidades Extra Implementadas

### 🔍 **Búsqueda por Nombre**
- Campo de entrada para buscar personajes por nombre
- Endpoint utilizado: `https://rickandmortyapi.com/api/character/?name=rick`
- Búsqueda en tiempo real

### 🏷️ **Filtrado por Estado**
- Selector para filtrar por:
  - Alive (Vivos) - Verde 💚
  - Dead (Muertos) - Rojo ❌
  - Unknown (Desconocido) - Gris
- Endpoint utilizado: `https://rickandmortyapi.com/api/character/?status=Alive`

### 🎨 **Diseño Profesional**
- Gradiente púrpura/azul atractivo
- Responsive design (adaptable a móviles)
- Animaciones suaves en cards
- Interfaz moderna y user-friendly
- Indicadores visuales de estado (badges color-coded)

### 🔄 **Botón Reset**
- Limpia búsquedas y filtros
- Vuelve a mostrar todos los personajes

---

## 🛠️ Arquitectura Técnica

### Estructura de Carpetas
```
src/app/
├── core/
│   ├── models/
│   │   ├── Characters.ts      (Interfaz contenedor)
│   │   ├── Results.ts          (Interfaz de personaje)
│   │   ├── Info.ts             (Información de paginación)
│   │   ├── Origin.ts           (Origen del personaje)
│   │   └── Location.ts         (Ubicación del personaje)
│   └── service/
│       └── CharacterServices.ts (Servicio HTTP)
├── pages/
│   └── components/
│       └── character-list/
│           ├── character-list.ts      (Componente)
│           ├── character-list.html    (Template)
│           └── character-list.css     (Estilos)
└── app.routes.ts            (Rutas con lazy loading)
```

### Modelos TypeScript

```typescript
// Characters.ts
export interface Characters {
  info: Info;
  results: Results[];
}

// Results.ts
export interface Results {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  // ... otros campos
}
```

### Servicio CharacterServices

```typescript
export class CharacterServices {
  // Obtener personajes con paginación
  getCharacters(page: number = 1): Observable<Characters>
  
  // Buscar por nombre
  searchCharacters(name: string): Observable<Characters>
  
  // Filtrar por estado
  filterByStatus(status: string, page: number = 1): Observable<Characters>
}
```

### Componente CharacterList

**Inyección de dependencias:**
- `CharacterServices` - Para consumir la API
- `FormsModule` - Para `[(ngModel)]` en búsqueda y filtros

**Métodos principales:**
- `getCharacters()` - Carga personajes al iniciar
- `onSearch()` - Busca por nombre
- `filterByStatus()` - Filtra por estado
- `reset()` - Limpia búsquedas

---

## 🚀 Instalación y Uso

### Prerequisitos
- Node.js 18+
- npm 9+
- Angular CLI 21+

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/ganavarroc-star/rick-and-morty-app.git
cd rick-and-morty-app

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm start

# 4. Abrir en el navegador
# http://localhost:4200/
```

### Compilación para Producción

```bash
npm run build
# Output: dist/Rick-and-Morty/
```

### 🚀 Despliegue en GitHub Pages

La aplicación está desplegada automáticamente en GitHub Pages. Para desplegar cambios:

```bash
# 1. Generar el build de producción
npm run build

# 2. Publicar en GitHub Pages
npx angular-cli-ghpages --dir=dist/Rick-and-Morty
```

**Acceso:** https://ganavarroc-star.github.io/rick-and-morty-app/

---

## 📱 Guía de Uso

### 1️⃣ Vista Inicial
- Al cargar la aplicación verás un spinner de carga
- Se cargan automáticamente los primeros 20 personajes

### 2️⃣ Búsqueda
- Escribe el nombre del personaje en el campo "Busca por nombre..."
- Presiona Enter o haz clic en "🔍 Buscar"
- Los resultados se filtran en tiempo real

### 3️⃣ Filtrado
- Selecciona un estado en el dropdown
- Los personajes se filtran automáticamente
- Estados disponibles: Alive, Dead, Unknown

### 4️⃣ Reset
- Haz clic en "🔄 Resetear" para limpiar búsquedas y filtros
- Vuelve a mostrar todos los personajes

---

## 📊 Criterios de Evaluación - Estado

| Criterio | Porcentaje | Estado | Detalles |
|----------|-----------|--------|---------|
| **Consume API correctamente** | 40% | ✅ CUMPLIDO | Usa HttpClient, endpoints válidos |
| **Muestra información completa** | 30% | ✅ CUMPLIDO | Imagen, nombre, estado, especie |
| **Uso correcto de Angular** | 20% | ✅ CUMPLIDO | Servicio + Componente bien estructurados |
| **Repositorio en GitHub** | 10% | ✅ CUMPLIDO | https://github.com/ganavarroc-star/rick-and-morty-app |
| **TOTAL** | **100%** | ✅ **COMPLETADO** | Proyecto funcional y entregable |

---

## 🎯 Funcionalidades Implementadas

### Core
- ✅ Consumo de API Rick and Morty
- ✅ Visualización en tarjetas responsivas
- ✅ Indicador de carga con spinner
- ✅ Manejo de errores

### Extra (Bonus)
- ✅ Búsqueda por nombre
- ✅ Filtrado por estado
- ✅ Diseño moderno y atractivo
- ✅ Badges color-coded para estados
- ✅ Layout responsivo (mobile-friendly)
- ✅ Animaciones suaves

---

## 🔗 Enlaces Importantes

- **Repositorio:** https://github.com/ganavarroc-star/rick-and-morty-app
- **🌐 Aplicación Desplegada (GitHub Pages):** https://ganavarroc-star.github.io/rick-and-morty-app/
- **API Documentación:** https://rickandmortyapi.com/documentation
- **Angular Docs:** https://angular.dev
- **Servidor Local:** http://localhost:4200/

---

## 📸 Características Visuales

### Tarjetas de Personajes
- Gradiente atractivo (púrpura a azul)
- Imagen de alta resolución
- Nombre en blanco sobre fondo oscuro
- Badge de estado con color distintivo
- Efecto hover con elevación
- Sombras suaves

### Barra de Búsqueda y Filtros
- Input field para búsqueda
- Selector de estado
- Botones de acción (Buscar, Resetear)
- Diseño integrado y profesional

---

## 🛡️ Tecnologías Utilizadas

- **Angular 21.1.0** - Framework frontend
- **TypeScript** - Lenguaje de programación
- **RxJS** - Manejo de observables
- **HttpClient** - Consumo de API
- **CSS3** - Estilos y animaciones
- **Responsive Design** - Adaptabilidad mobile

---

## 📝 Notas de Desarrollo

1. **Lazy Loading:** El componente se carga bajo demanda con `loadComponent()`
2. **Type Safety:** Uso de interfaces TypeScript para validación de tipos
3. **Operadores RxJS:** `finalize()` para limpiar estados de carga
4. **Control Flow:** Uso de `@if`, `@for`, `@switch` (sintaxis moderna Angular)
5. **Two-Way Binding:** `[(ngModel)]` para búsqueda y filtros

---

## ✨ Extras

- Spinner animado durante la carga
- Mensajes informativos cuando no hay resultados
- Validación de entrada de búsqueda
- Manejo robusto de errores

---

## 👨‍💻 Autor

**Estudiante:** Ganavarro C.  
**Usuario GitHub:** ganavarroc-star  
**Proyecto:** rick-and-morty-app

---

## 📄 Licencia

Este proyecto es de propósito educativo basado en la API pública de Rick and Morty.

---

**¡Aplicación completada y lista para evaluar! 🎉**
