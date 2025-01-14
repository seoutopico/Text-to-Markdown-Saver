# Text to txt Saver - Chrome Extension

Una extensión para Google Chrome que permite guardar texto seleccionado como archivo txt con un solo clic.

## 🌟 Características

- Guarda texto seleccionado como archivo de texto (.txt)
- Incluye metadata automáticamente (URL de origen y fecha)
- Formato Markdown listo para usar
- Interfaz simple a través del menú contextual
- Ligero y rápido

## 📋 Requisitos Previos

- Google Chrome (versión 88 o superior)
- Modo desarrollador activado en Chrome

## 🚀 Instalación

1. Clona este repositorio o descarga los archivos
```bash
git clone https://github.com/seoutopico/Text-to-Markdown-Saver
```

2. Abre Chrome y navega a:
```
chrome://extensions/
```

3. Activa el "Modo desarrollador" (esquina superior derecha)

4. Haz clic en "Cargar descomprimida" y selecciona la carpeta del proyecto

## 📁 Estructura del Proyecto

```
text-to-markdown-saver/
├── manifest.json        # Configuración de la extensión
├── background.js       # Script de fondo
├── content.js         # Script de contenido
└── README.md         # Este archivo
```

## 🛠️ Uso

1. Selecciona cualquier texto en una página web
2. Haz clic derecho sobre el texto seleccionado
3. Selecciona "Guardar como txt" del menú contextual
4. Elige la ubicación para guardar el archivo

## 📄 Formato del Archivo Generado

Los archivos guardados tendrán la siguiente estructura:

```markdown
# Texto guardado de [URL de la página]

_Guardado el: [Fecha y hora]_

---

[Texto seleccionado]
```

## ⚙️ Personalización

Puedes modificar el formato del archivo generado editando la función `downloadMarkdown` en `background.js`:

```javascript
const markdownContent = `# Texto guardado de ${tab.url}\n\n_Guardado el: ${date}_\n\n---\n\n${selectedText}`;
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 📞 Contacto

Aina-Lluna Taylot Barceló - [@aina_lluna](https://x.com/aina_lluna)

Link del Proyecto: [https://github.com/seoutopico/Text-to-Markdown-Saver](https://github.com/seoutopico/Text-to-Markdown-Saverr)

## 🙏 Agradecimientos

- [Google Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Txt iconos creados por srip - Flaticon](https://www.flaticon.es/iconos-gratis/txt) 
