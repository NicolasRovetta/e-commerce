# Descripción del proyecto

Este proyecto es una aplicación web diseñada para proporcionar una experiencia de usuario intuitiva y eficiente. Utiliza tecnologías modernas para garantizar un rendimiento óptimo y una fácil escalabilidad.

# Herramientas utilizadas

- **Lenguaje de programación:** JavaScript
- **Framework:** React
- **Estilos:** CSS
- **Control de versiones:** Git
- **Gestión de dependencias:** npm
- **Base de datos:** Firebase
- **Despliegue:** Vercel

# Características del proyecto

- **Base de datos en tiempo real:** Utilizando Firebase Firestore.
- **Hosting y despliegue continuo:** Configurado con Vercel para un despliegue rápido y eficiente.
- **Componentes reutilizables:** Desarrollados con React para facilitar la mantenibilidad y escalabilidad del código.
- **Diseño responsivo:** Adaptado para diferentes dispositivos y tamaños de pantalla.

# Comandos para poder ejecutar la aplicación

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/usuario/repositorio.git
    ```
2. Navegar al directorio del proyecto:
    ```bash
    cd repositorio
    ```
3. Instalar las dependencias:
    ```bash
    npm install
    ```
4. Configurar Firebase:
    - Crear un proyecto en Firebase.
    - Agregar la configuración de Firebase en un archivo `.env` en la raíz del proyecto:
        ```
        REACT_APP_FIREBASE_API_KEY=your_api_key
        REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
        REACT_APP_FIREBASE_PROJECT_ID=your_project_id
        REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
        REACT_APP_FIREBASE_APP_ID=your_app_id
        ```
5. Ejecutar la aplicación:
    ```bash
    npm start
    ```

# Despliegue

El proyecto está configurado para ser desplegado en Vercel. Para desplegar la aplicación:

1. Crear una cuenta en Vercel y conectar el repositorio de GitHub.
2. Configurar las variables de entorno en Vercel con la misma información del archivo `.env`.
3. Realizar un push a la rama principal y Vercel automáticamente desplegará la aplicación.


