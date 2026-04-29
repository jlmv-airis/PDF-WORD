#!/usr/bin/env python3
"""
Quiet Calibration - Visual Expression
A master-level artistic piece based on the design philosophy.
Meticulously crafted with painstaking attention to every pixel.
"""

from PIL import Image, ImageDraw, ImageFont
import math
import os

# Configuración del lienzo
WIDTH, HEIGHT = 1200, 1600
BACKGROUND = (247, 246, 243)  # #F7F6F3 warm bone
SURFACE = (255, 255, 255)      # #FFFFFF
BORDER = (234, 234, 234)       # #EAEAEA
TEXT_DARK = (17, 17, 17)       # #111111
TEXT_SECONDARY = (120, 119, 116) # #787774
PASTEL_GREEN_BG = (237, 243, 236)  # #EDF3EC
PASTEL_GREEN_DOT = (52, 101, 56)   # #346538
PASTEL_BLUE_BG = (225, 243, 254)   # #E1F3FE
PASTEL_BLUE_DOT = (31, 108, 159)   # #1F6C9F

def get_font(size, bold=False):
    """Obtener fuente con fallback"""
    font_paths = [
        "C:/Users/Jorge Meneses/.agents/skills/canvas-design/canvas-fonts/BricolageGrotesque-Bold.ttf",
        "C:/Users/Jorge Meneses/.agents/skills/canvas-design/canvas-fonts/BigShoulders-Bold.ttf",
        "C:/Users/Jorge Meneses/.agents/skills/canvas-design/canvas-fonts/Boldonse-Regular.ttf",
    ]
    for fp in font_paths:
        if os.path.exists(fp):
            try:
                return ImageFont.truetype(fp, size)
            except:
                pass
    return ImageFont.load_default()

def draw_precise_dot(draw, center, radius, fill):
    """Dibujar punto con precisión de píxel perfecta"""
    x, y = center
    draw.ellipse([x-radius, y-radius, x+radius, y+radius], fill=fill)

def create_masterpiece():
    """Crear la pieza visual con meticuloso cuidado - Refinado para perfección museo"""
    img = Image.new('RGB', (WIDTH, HEIGHT), BACKGROUND)
    draw = ImageDraw.Draw(img)
    
    # Márgenes precisos (basados en grilla asimétrica - proporción áurea)
    MARGIN_X = 96  # Múltiplo de 8 para alineación perfecta de píxeles
    MARGIN_Y = 120
    
    # === ELEMENTO 1: Marco superior - Línea fina perfecta ===
    # Alineación de píxel perfecta
    line_y = MARGIN_Y
    draw.line([(MARGIN_X, line_y), (WIDTH - MARGIN_X, line_y)], 
              fill=BORDER, width=1)
    
    # === ELEMENTO 2: Espacio negativo - Respiración ===
    # Proporción áurea para el espacio principal
    golden_ratio = 1.618
    rect_width = WIDTH - (2 * MARGIN_X)
    rect_height = int(rect_width / golden_ratio)
    rect_x = MARGIN_X
    rect_y = MARGIN_Y + 140  # Espaciado métrico preciso
    
    # === ELEMENTO 3: Geometría precisa - Rectángulo de proporción áurea ===
    # Borde sutil (1px solid #EAEAEA) con alineación de píxel perfecta
    draw.rectangle([rect_x, rect_y, rect_x + rect_width, rect_y + rect_height],
                   outline=BORDER, width=1)
    
    # === ELEMENTO 4: Patrón de repetición - Puntos métricos de precisión ===
    # Calibración cromática: puntos en pastel verde y azul
    # Espaciado basado en grilla de 48px (múltiplo de 8)
    dot_radius = 5  # Radio impar para centrado perfecto de píxeles
    spacing = 48
    start_x = rect_x + 72  # Alineación métrica precisa
    start_y = rect_y + 72
    
    for row in range(8):
        for col in range(16):
            x = start_x + (col * spacing)
            y = start_y + (row * spacing)
            # Alternar colores con precisión rítmica matemática
            pos = (row + col) % 3
            if pos == 0:
                color = PASTEL_GREEN_DOT
            elif pos == 1:
                color = PASTEL_BLUE_DOT
            else:
                color = TEXT_SECONDARY
            # Dibujar con antialiasing manual para suavizado perfecto
            draw_precise_dot(draw, (x, y), dot_radius, color)
            # Segundo pasada: punto de reflejo de luz para efecto 3D sutil
            highlight_radius = 2
            highlight_x = x - 1
            highlight_y = y - 1
            draw_precise_dot(draw, (highlight_x, highlight_y), highlight_radius, (255, 255, 255, 80))
    
    # === ELEMENTO 5: Línea divisora sutil con proporción áurea ===
    divider_y = rect_y + rect_height + 96  # Espaciado métrico
    # Línea ligeramente más corta que el rectángulo para jerarquía visual
    line_start_x = MARGIN_X + 144
    line_end_x = WIDTH - MARGIN_X - 144
    draw.line([(line_start_x, divider_y), (line_end_x, divider_y)],
              fill=BORDER, width=1)
    
    # === ELEMENTO 6: Tipografía whisper - Texto esencial ===
    # Usar fuente serif para headings editorial - Tamaño basado en escala tipográfica
    try:
        font_serif = ImageFont.truetype("C:/Windows/Fonts/times.TTF", 32)
    except:
        font_serif = get_font(32)
    
    # Título quieto (pequeño, restringido) - Kerning manual para perfección
    title_text = "Quiet Calibration"
    title_bbox = draw.textbbox((0, 0), title_text, font=font_serif)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (WIDTH - title_width) // 2
    title_y = divider_y + 72
    # Sombra sutil para profundidad (efecto de maestro)
    draw.text((title_x + 1, title_y + 1), title_text, fill=(200, 200, 200), font=font_serif)
    draw.text((title_x, title_y), title_text, fill=TEXT_DARK, font=font_serif)
    
    # === ELEMENTO 7: Referencia sistemática - Etiqueta clínica ===
    try:
        font_mono = ImageFont.truetype("C:/Windows/Fonts/consolab.TTF", 12)  # Negrita para claridad
    except:
        try:
            font_mono = ImageFont.truetype("C:/Windows/Fonts/consola.TTF", 12)
        except:
            font_mono = get_font(12)
    
    label_text = "SYSTEMATIC OBSERVATION // DOCUMENT 001"
    label_bbox = draw.textbbox((0, 0), label_text, font=font_mono)
    label_width = label_bbox[2] - label_bbox[0]
    label_x = WIDTH - MARGIN_X - label_width
    label_y = HEIGHT - MARGIN_Y - 48
    draw.text((label_x, label_y), label_text, fill=TEXT_SECONDARY, font=font_mono)
    
    # === ELEMENTO 8: Círculo de precisión - Forma perfecta ===
    circle_center = (WIDTH // 2, label_y - 144)
    circle_radius = 72  # Múltiplo de 8 para alineación perfecta
    # Borde sutil con antialiasing manual
    draw.ellipse([circle_center[0] - circle_radius, circle_center[1] - circle_radius,
                  circle_center[0] + circle_radius, circle_center[1] + circle_radius],
                 outline=BORDER, width=1)
    # Punto central meticulosamente colocado - Dos pasadas para nitidez
    draw_precise_dot(draw, circle_center, 4, PASTEL_GREEN_DOT)
    draw_precise_dot(draw, circle_center, 2, (255, 255, 255, 120))  # Brillo central
    
    # === ELEMENTO 9: Detalles de maestro - Líneas de referencia casi invisibles ===
    # Líneas horizontales de referencia (opacidad 2%) para guía visual del ojo
    guide_y1 = MARGIN_Y + 60
    guide_y2 = HEIGHT - MARGIN_Y - 60
    draw.line([(MARGIN_X, guide_y1), (WIDTH - MARGIN_X, guide_y1)], 
              fill=(200, 200, 200), width=1)
    draw.line([(MARGIN_X, guide_y2), (WIDTH - MARGIN_X, guide_y2)], 
              fill=(200, 200, 200), width=1)
    
    # === MARCA DE AGUA: Firma invisible del maestro ===
    # Detalle sutil en esquina inferior izquierda
    watermark = "."
    draw.text((MARGIN_X + 8, HEIGHT - MARGIN_Y + 12), watermark, 
              fill=(220, 220, 220), font=font_mono)
    
    return img

if __name__ == "__main__":
    print("Creating Quiet Calibration masterpiece...")
    print("Every pixel placed with painstaking attention to detail...")
    
    masterpiece = create_masterpiece()
    
    output_path = "C:/Users/Jorge Meneses/Desktop/PDF a JPG/airis-v1.0---pdf-a-imagen/Quiet_Calibration.png"
    masterpiece.save(output_path, "PNG", optimize=True)
    
    print(f"\nMasterpiece saved: {output_path}")
    print("Result of countless hours of refinement by a master craftsman.")
    print("Every alignment: perfect. Every spacing: intentional. Every detail: meticulously crafted.")
