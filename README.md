# AIRIS SUITE v1.1

> **Estado:** ✅ Producción estable | **Rama principal:** `main` | **Última actualización:** Mayo 2026

Aplicación profesional para conversión de PDF a imágenes de alta calidad y compilación automática en documentos Word (.docx).

## ✨ Características Principales

- **Conversión masiva** de PDF a imágenes JPEG con calidad configurable
- **Generación automática** de documentos Word con imágenes centradas y márgenes optimizados
- **Interfaz web moderna** con diseño responsive y modo oscuro/claro
- **Procesamiento paralelo** multi-hilo para máxima velocidad (utiliza todos los núcleos CPU)
- **Auto-recorte inteligente** de márgenes blancos con detección de bordes
- **Tres niveles de calidad:**
  - 📄 Estándar (150 DPI) - Rápido
  - 📄 HD (300 DPI) - Equilibrado
  - 📄 Ultra (600 DPI) - Máxima calidad
- **Modo "Solo Word"** para compilar imágenes existentes (JPG/PNG) en un solo documento
- **Limpieza automática** de archivos temporales después de la descarga
- **Soporte PyInstaller** para crear ejecutables independientes (.exe)

## 🛠️ Tecnologías

| Capa | Tecnologías |
|------|-------------|
| **Backend** | Python 3.7+ + Flask |
| **Procesamiento** | PyMuPDF (fitz), Pillow, python-docx |
| **Interfaz** | HTML5 + CSS3 + JavaScript (Vanilla) |
| **Tipografía** | Manrope (Google Fonts) |
| **Escritorio** | CustomTkinter + tkinterdnd2 (opcional) |

---

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Python 3.7 o superior
- pip (gestor de paquetes)

### Windows

```cmd
:: Clonar repositorio
git clone https://github.com/jlmv-airis/PDF-WORD.git
cd PDF-WORD

:: (Opcional) Crear entorno virtual
python -m venv venv
venv\Scripts\activate

:: Instalar dependencias
pip install -r requirements.txt

:: Ejecutar aplicación
python backend\app.py
```

Luego abrir: **http://localhost:5000/**

### macOS / Linux

```bash
# Clonar repositorio
git clone https://github.com/jlmv-airis/PDF-WORD.git
cd PDF-WORD

# (Opcional) Crear entorno virtual
python3 -m venv venv
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar aplicación
python3 backend/app.py
```

Luego abrir: **http://localhost:5000/**

---

## 📦 Crear Ejecutable (.exe) con PyInstaller

### Windows

```cmd
:: Instalar PyInstaller
pip install pyinstaller

:: Crear ejecutable único
pyinstaller --onefile --add-data "backend;backend" --add-data "static;static" backend/app.py --name AIRIS_SUITE

:: El ejecutable estará en:
dist/AIRIS_SUITE.exe
```

El ejecutable detecta automáticamente el modo PyInstaller y configura las rutas correctas.

---

## 🖥️ Aplicación de Escritorio (Opcional)

```bash
pip install customtkinter tkinterdnd2
python desktop-app/AIRIS_Converter.py
```

---

## 📁 Estructura del Proyecto

```
PDF-WORD/
├── backend/
│   └── app.py              # Servidor Flask + lógica de conversión
├── static/
│   └── index.html          # Interfaz web (1446+ líneas, modo oscuro)
├── desktop-app/
│   ├── AIRIS_Converter.py  # App de escritorio
│   └── worker.py           # Worker de procesamiento
├── docs/                   # Documentación adicional
├── requirements.txt        # Dependencias (flask, PyMuPDF, Pillow, python-docx)
└── README.md
```

---

## 🌙 Modo Oscuro

La interfaz incluye modo oscuro nativo. Haz clic en el toggle en la esquina superior derecha.

---

## 📝 Guía de Uso

### Modo PDF → Imagen + Word
1. Arrastra archivos PDF o haz clic para seleccionar
2. Selecciona calidad (Estándar/HD/Ultra)
3. Configura opciones: auto-recorte y generación de Word
4. Presiona "INICIAR CONVERSIÓN"
5. Descarga el archivo Word con las imágenes integradas

### Modo Solo Word
1. Selecciona "Solo Word" en la barra superior
2. Arrastra imágenes (JPG/PNG)
3. Presiona "INICIAR CONVERSIÓN"
4. Descarga el documento Word compilado

---

## 🔧 Solución de Problemas

| Error | Solución |
|-------|----------|
| `Python no se reconoce como comando` | Agregar Python al PATH o usar ruta completa |
| `Port 5000 en uso` | Cambiar puerto en `backend/app.py`: `app.run(port=5001)` |
| `ModuleNotFoundError` | Ejecutar: `pip install -r requirements.txt` |
| Error de permisos en Windows | Ejecutar terminal como administrador |

---

## 📄 Licencia

Uso libre para fines educativos y comerciales.

---

**Desarrollado por Jorge Meneses**  
Contacto: jorge.meneses@airis-ae.com.mx  
© 2026 AIRIS SUITE v1.1 | [GitHub](https://github.com/jlmv-airis/PDF-WORD)
