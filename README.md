# AIRIS v1.0 - PDF to Word Converter

AIRIS es una aplicación de escritorio y web para la conversión inteligente de archivos PDF a imágenes de alta calidad y su posterior compilación en documentos Word (.docx).

## ✨ Características

- ✅ Conversión masiva de PDF a imágenes (JPEG) con calidad configurable
- ✅ Generación automática de documentos Word con imágenes centradas
- ✅ Interfaz web minimalista y moderna (HTML + CSS puro)
- ✅ Procesamiento paralelo para máxima velocidad
- ✅ Auto-recorte inteligente de márgenes blancos
- ✅ Múltiples niveles de calidad: Estándar (150 DPI), HD (300 DPI), Ultra (600 DPI)
- ✅ Modo "Solo Word" para compilar imágenes existentes
- ✅ Eliminación automática de archivos temporales tras la descarga

## 🚀 Ejecución y Distribución

### Opción 1: Uso Local (Requiere Python)

1. **Instalar dependencias:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Ejecutar la aplicación:**
   ```bash
   python backend/app.py
   ```

3. **Abrir en el navegador:**
   - Ir a: http://localhost:5000/

### Opción 2: Ejecutable para Windows (Sin necesidad de Python)

1. **Instalar PyInstaller:**
   ```bash
   pip install pyinstaller
   ```

2. **Crear el ejecutable:**
   ```bash
   cd "C:\ruta\hacia\PDF-WORD"
   pyinstaller --onefile --add-data "backend;backend" --add-data "static;static" backend/app.py --name AIRIS_SUITE
   ```

3. **El ejecutable se creará en:** `dist/AIRIS_SUITE.exe`

4. **Distribuir:**
   - Comparte el archivo `AIRIS_SUITE.exe` con los usuarios
   - Los usuarios solo deben hacer doble clic en el archivo
   - Se abrirá una ventana de consola y el navegador automáticamente

### Opción 3: Script de Inicio Rápido (Windows)

Crear un archivo `INICIAR_AIRIS.bat`:
```batch
@echo off
cd "%~dp0"
python backend/app.py
```

Los usuarios solo deben hacer doble clic en `INICIAR_AIRIS.bat`

### Notas importantes:
- El puerto predeterminado es **5000**
- Los archivos convertidos se descargan automáticamente
- La aplicación se cierra al cerrar la ventana de consola
- Para usar en red local, cambiar `app.run(debug=True, port=5000)` por `app.run(host='0.0.0.0', port=5000)` en `backend/app.py`

> Para instrucciones detalladas, consulta el archivo [INSTRUCCIONES_USO.md](INSTRUCCIONES_USO.md)

## 📦 Instalación

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

## 🎯 Uso

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

## 📁 Estructura del Proyecto

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
├── requirements.txt       # Dependencias de Python
├── INSTRUCCIONES_USO.md # Guía detallada
└── README.md
```

## 📝 Notas

- Los archivos subidos y generados se eliminan automáticamente después de la descarga
- Para archivos PDF muy grandes (más de 50 páginas), el procesamiento puede tardar unos minutos
- La aplicación de escritorio (desktop-app) requiere dependencias adicionales: `customtkinter`, `tkinterdnd2`

## 👤 Desarrollado por

**Jorge Meneses** - AIRIS SUITE v1.0

Contacto: jorge.meneses@airis-ae.com.mx

## 📄 Licencia

Este proyecto es de uso libre para fines educativos y comerciales.
