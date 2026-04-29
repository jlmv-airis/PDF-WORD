# AIRIS SUITE v1.0 - Instrucciones de Uso

## Opción 1: Uso Local (Requiere Python)

### Requisitos:
- Python 3.7 o superior instalado
- Conexión a internet para descargar dependencias (solo la primera vez)

### Pasos:
1. **Descargar el proyecto:**
   ```bash
   git clone https://github.com/jlmv-airis/PDF-WORD.git
   cd PDF-WORD
   ```

2. **Instalar dependencias:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Ejecutar la aplicación:**
   ```bash
   cd "C:\ruta\hacia\PDF-WORD"
   python backend/app.py
   ```

4. **Abrir en el navegador:**
   - Ir a: http://localhost:5000/

---

## Opción 2: Ejecutable para Windows (Sin necesidad de Python)

### Crear el ejecutable:

1. **Instalar PyInstaller:**
   ```bash
   pip install pyinstaller
   ```

2. **Crear el ejecutable:**
   ```bash
   cd "C:\ruta\hacia\PDF-WORD"
   pyinstaller --onefile --add-data "backend;backend" --add-data "static;static" --add-data "templates;templates" backend/app.py --name AIRIS_SUITE
   ```

3. **El ejecutable se creará en:** `dist/AIRIS_SUITE.exe`

4. **Distribuir:**
   - Comparte el archivo `AIRIS_SUITE.exe` con los usuarios
   - Los usuarios solo deben hacer doble clic en el archivo
   - Se abrirá una ventana de consola y el navegador automáticamente

---

## Opción 3: Script de Inicio Rápido (Windows)

Crear un archivo `INICIAR_AIRIS.bat`:
```batch
@echo off
cd "%~dp0"
python backend/app.py
```

Los usuarios solo deben hacer doble clic en `INICIAR_AIRIS.bat`

---

## Notas importantes:
- El puerto predeterminado es **5000**
- Los archivos convertidos se descargan automáticamente
- La aplicación se cierra al cerrar la ventana de consola
- Para usar en red local, cambiar `app.run(debug=True, port=5000)` por `app.run(host='0.0.0.0', port=5000)` en `backend/app.py`
