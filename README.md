# Peor es Nada - App Comunitaria

Aplicación móvil híbrida desarrollada para la comunidad de "Peor es Nada", diseñada para compartir avisos de utilidad pública como mascotas perdidas, documentos encontrados y alertas de seguridad.

## Características

* **Listado de Avisos:** Visualización de publicaciones con imagen miniatura, título y fecha.
* **Detalle de Publicación:** Modal de pantalla completa para ver la imagen y descripción detallada.
* **Crear Publicación:** Formulario con validaciones para ingresar nuevos avisos.
* **Cámara Nativa:** Integración con la cámara del dispositivo para adjuntar fotografías.
* **Persistencia de Datos:** Almacenamiento local utilizando `Capacitor Preferences`.
* **Gestión:** Eliminación de avisos con confirmación mediante ventana modal.

## Tecnologías Utilizadas

* **Framework:** [Ionic Framework](https://ionicframework.com/) (v7+)
* **Lógica:** [Angular](https://angular.io/) (Standalone Components)
* **Nativo:** [Capacitor](https://capacitorjs.com/)
* **Lenguaje:** TypeScript

### Plugins Principales
* `@capacitor/camera`: Para captura de imágenes.
* `@capacitor/preferences`: Para almacenamiento local persistente.

## Instalación y Ejecución

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/diegodonoso4-design/peoresnada.git](https://github.com/diegodonoso4-design/peoresnada.git)
    cd peoresnada
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar en el navegador (Desarrollo):**
    ```bash
    ionic serve
    ```

4.  **Sincronizar con Capacitor (Para compilar a nativo):**
    ```bash
    ionic build
    npx cap sync
    ```
