# Desafío - Like Me (Parte I) 📸

Este repositorio contiene la primera parte del desarrollo de la red social "Like Me". El proyecto está dividido en dos partes principales: un servidor Backend (Node.js/Express) y una interfaz de usuario Frontend (React/Vite).

## 📋 Requisitos Previos

Para ejecutar este proyecto de forma local y evaluarlo correctamente, necesitas tener instalado:
* [Node.js](https://nodejs.org/)
* [PostgreSQL](https://www.postgresql.org/)

---

## 🗄️ Paso 1: Configuración de la Base de Datos

Antes de encender el servidor, es necesario crear la base de datos y la tabla correspondiente.

1. Abre tu consola de PostgreSQL (`psql`) o la interfaz que prefieras.
2. Crea la base de datos ejecutando el siguiente comando:
   ```sql
   CREATE DATABASE likeme;
    ```
3. Conéctate a la base de datos recién creada (\c likeme si estás usando la terminal psql).
4. Crea la tabla posts ejecutando la siguiente instrucción:
      ```sql
   CREATE TABLE posts (
    id SERIAL, 
    titulo VARCHAR(25), 
    img VARCHAR(1000), 
    descripcion VARCHAR(255), 
    likes INT
  );
    ```
## ⚙️ Paso 2: Configuración y Ejecución del Backend

1. Abre una terminal y navega hasta la carpeta del backend:
      ```bash
      cd backend
      ```
2. Instala las dependencias necesarias (Express, CORS, pg):
      ```bash
      npm install
      ```
¡IMPORTANTE! Abre el archivo index.js ubicado en la carpeta backend y modifica las credenciales en la configuración de Pool para que coincidan con tu usuario y contraseña de PostgreSQL local

3. Enciende el servidor
      ```bash
      node index.js
      ```
## 💻 Paso 3: Configuración y Ejecución del Frontend

1. Abre una nueva pestaña de terminal (manteniendo el servidor backend encendido) y navega hasta la carpeta del frontend:
     ```bash
      cd frontend
      ```
2. Instala las dependencias del proyecto React:
     ```bash
      npm install
      ```
3. Inicia la aplicación en modo desarrollo:
    ```bash
    npm run dev
    ```
Abre tu navegador web en la dirección que indique la terminal (por defecto suele ser http://localhost:5173).

### 🚀 PProyecto
Para probar la ruta POST y GET:
- Ingresa un título en la aplicación.
- Ingresa una URL de imagen válida.
- Ingresa una descripción.
- Haz clic en el botón "Agregar".
- Verifica que la tarjeta se renderice correctamente en la pantalla leyendo los datos desde PostgreSQL.
