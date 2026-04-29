# AIRIS v1.1 - PDF to Word Converter

AIRIS es una aplicación de escritorio y web para la conversión inteligente de archivos PDF a imágenes de alta calidad y su posterior compilación en documentos Word (.docx).

## Características

- ✅ Conversión masiva de PDF a imágenes (JPEG) con calidad configurable
- ✅ Generación automática de documentos Word con imágenes centradas
- ✅ Interfaz web minimalista y moderna (HTML + CSS puro)
- ✅ Procesamiento paralelo para máxima velocidad
- ✅ Auto-recorte inteligente de márgenes blancos
- ✅ Múltiples niveles de calidad: Estándar (150 DPI), HD (300 DPI), Ultra (600 DPI)
- ✅ Modo "Solo Word" para compilar imágenes existentes
- ✅ Eliminación automática de archivos temporales tras la descarga

## Requisitos

- Python 3.8 o superior
- pip (gestor de paquetes de Python)

### Dependencias de Python

```
flask
PyMuPDF  # Para procesamiento de PDF
Pillow   # Para manipulación de imágenes
python-docx  # Para generación de Word
```

## Instalación

### Windows

1. **Descargar el proyecto:**
   ```bash
   git clone https://github.com/jlmv-airis/PDF-WORD.git
   cd PDF-WORD
   ```

2. **Crear un entorno virtual (recomendado):**
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```

3. **Instalar dependencias:**
   ```bash
   pip install flask PyMuPDF Pillow python-docx
   ```

4. **Ejecutar la aplicación:**
   ```bash
   cd backend
   python app.py
   ```

5. **Acceder a la interfaz:**
   Abrir el navegador y entrar a: `http://localhost:5000/`

### macOS

1. **Descargar el proyecto:**
   ```bash
   git clone https://github.com/jlmv-airis/PDF-WORD.git
   cd PDF-WORD
   ```

2. **Crear un entorno virtual (recomendado):**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Instalar dependencias:**
   ```bash
   pip install flask PyMuPDF Pillow python-docx
   ```

4. **Ejecutar la aplicación:**
   ```bash
   cd backend
   python3 app.py
   ```

5. **Acceder a la interfaz:**
   Abrir el navegador y entrar a: `http://localhost:5000/`

## Uso

### Modo PDF a Imagen + Word

1. Selecciona "PDF a Imagen" en la barra superior
2. Arrastra tus archivos PDF o haz clic para seleccionarlos
3. Configura la calidad (HD recomendado para impresión)
4. Activa/desactiva el auto-recorte y generación de Word
5. Presiona "INICIAR CONVERSIÓN"
6. Descarga el archivo Word cuando termine

### Modo Solo Word

1. Selecciona "Solo Word" en la barra superior
2. Arrastra tus imágenes (JPG/PNG) o haz clic para seleccionarlas
3. Presiona "INICIAR CONVERSIÓN"
4. Descarga el archivo Word compilado

## Estructura del Proyecto

```
PDF-WORD/
├── backend/
│   └── app.py              # Servidor Flask principal
├── static/
│   └── index.html         # Interfaz web (HTML + CSS puro)
├── desktop-app/
│   └── AIRIS_Converter.py # Aplicación de escritorio (CustomTkinter)
├── docs/                   # Documentación adicional
├── uploads/                # Archivos subidos temporalmente
├── outputs/                # Archivos generados temporalmente
├── .gitignore
├── .env.example
└── README.md
```

## Notas

- Los archivos subidos y generados se eliminan automáticamente después de la descarga
- Para archivos PDF muy grandes (más de 50 páginas), el procesamiento puede tardar unos minutos
- La aplicación de escritorio (desktop-app) requiere dependencias adicionales: `customtkinter`, `tkinterdnd2`

## Desarrollado por

**Jorge Meneses** - AIRIS SUITE v1.1

Contacto: jorge.meneses@airis-ae.com.mx

## Licencia

Este proyecto es de uso libre para fines educativos y comerciales.
