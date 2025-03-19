# Descripción del proyecto

Este proyecto es una aplicación web de comercio electrónico diseñada para proporcionar una experiencia de usuario intuitiva y eficiente. Utiliza tecnologías modernas para garantizar un rendimiento óptimo, una fácil escalabilidad y un diseño atractivo.

# Tecnologías utilizadas

El proyecto emplea una combinación de herramientas y tecnologías para ofrecer una solución robusta y escalable:

- **Lenguaje de programación:** JavaScript
- **Framework de frontend:** React
- **Estilos:** CSS 
- **Control de versiones:** Git
- **Gestión de dependencias:** npm
- **Base de datos:** Firebase Firestore
- **Autenticación:** Firebase Authentication
- **Hosting y despliegue continuo:** Vercel
- **Gestión de estado:** Redux Toolkit
- **Ruteo:** React Router
- **Validación de formularios:** Formik y Yup
- **Pruebas:** Jest y React Testing Library
- **API de pagos:** Stripe

# Características del proyecto

- **Base de datos en tiempo real:** Utilizando Firebase Firestore para almacenar y sincronizar datos.
- **Autenticación segura:** Implementada con Firebase Authentication para registro e inicio de sesión.
- **Hosting y despliegue continuo:** Configurado con Vercel para un despliegue rápido y eficiente.
- **Componentes reutilizables:** Desarrollados con React para facilitar la mantenibilidad y escalabilidad del código.
- **Gestión de estado centralizada:** Utilizando Redux Toolkit para manejar el estado global de la aplicación.
- **Diseño responsivo:** Adaptado para diferentes dispositivos y tamaños de pantalla, utilizando CSS y TailwindCSS.
- **Validación de formularios:** Implementada con Formik y Yup para garantizar la integridad de los datos ingresados por los usuarios.
- **Pasarela de pagos:** Integración con Stripe para procesar pagos de manera segura.
- **Pruebas automatizadas:** Configuradas con Jest y React Testing Library para garantizar la calidad del código.

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
5. Configurar Stripe:
    - Crear una cuenta en Stripe y obtener las claves de API.
    - Agregar las claves en el archivo `.env`:
        ```
        REACT_APP_STRIPE_PUBLIC_KEY=your_public_key
        REACT_APP_STRIPE_SECRET_KEY=your_secret_key
        ```
6. Ejecutar la aplicación:
    ```bash
    npm start
    ```

# Despliegue

El proyecto está configurado para ser desplegado en Vercel. Para desplegar la aplicación:

1. Crear una cuenta en Vercel y conectar el repositorio de GitHub.
2. Configurar las variables de entorno en Vercel con la misma información del archivo `.env`.
3. Realizar un push a la rama principal y Vercel automáticamente desplegará la aplicación.

# Próximas mejoras

- Implementar notificaciones en tiempo real con Firebase Cloud Messaging.
- Agregar soporte para múltiples idiomas.
- Mejorar la accesibilidad siguiendo las pautas de WCAG.
- Optimizar el rendimiento utilizando técnicas de carga diferida (lazy loading) y división de código (code splitting).


