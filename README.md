# Web SQL Injection Test Project

## Descripción
Este proyecto ha sido creado con el propósito de probar vulnerabilidades de **SQL Injection (SQLi)** en una aplicación web. El entorno incluye un **frontend en React + Vite** y un **backend en Node.js con Express y MySQL**.

## Tecnologías utilizadas
- **Frontend:** React, Vite, TypeScript
- **Backend:** Node.js, Express
- **Base de Datos:** MariaDB / MySQL

## Instalación
### 1. Clonar el repositorio
```bash
 git clone https://github.com/puchiniefe/web-sqli.git
 cd web-sqli
```

### 2. Configurar el backend
```bash
cd backend
npm install
```
Configurar las credenciales de la base de datos en `server.js` y ejecutar:
```bash
node server.js
```

### 3. Configurar el frontend
```bash
cd ../frontend
npm install
npm run dev
```

## Uso
1. Iniciar el backend (`node server.js`).
2. Iniciar el frontend (`npm run dev`).
3. Acceder a `http://localhost:5173` para probar la aplicación.

## Notas de Seguridad ⚠️
Este proyecto **es únicamente para fines educativos**. No debe utilizarse en entornos de producción ni para actividades ilegales. **SQL Injection es una vulnerabilidad grave** y su explotación puede comprometer datos sensibles.

## Licencia
MIT License - Puedes usarlo con fines educativos pero bajo tu propia responsabilidad.

## Autor
Creado por **David Fajardo LEVEL4**.

