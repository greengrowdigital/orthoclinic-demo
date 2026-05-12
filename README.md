# OrthoClinic — Demo (GreenGrow)

Sitio premium de OrthoClinic Panamá. Diseñado para convertir visitantes en pacientes.

## Páginas
- `/` — Landing con hero editorial, antes/después interactivo, servicios, especialistas, sucursales, testimonios, FAQ y CTA final.
- `/servicios` — Detalle de los 6 grupos de servicios (brackets, invisible, blanqueamiento, láser, estética, endodoncia/cirugía).
- `/especialistas` — Perfil de los Dres. Tomás Tejada y Carlos Núñez.
- `/sucursales` — 3 sucursales con mapas embebidos: Los Andes Mall, Coronado, Costa Verde.
- `/agenda` — Formulario lead que abre WhatsApp prellenado a la sucursal elegida.

## Stack
- HTML + CSS puro + JavaScript vanilla (sin build).
- Tipografía: Fraunces (display) + Inter (body) + JetBrains Mono.
- Animaciones: IntersectionObserver, slider antes/después drag, marquee, contadores y cursor custom.

## Sucursales
| Sucursal | Teléfono | WhatsApp |
|---|---|---|
| Los Andes Mall | 6673-4766 · 392-6698 · 392-6699 | wa.me/50766734766 |
| Coronado | 6340-0028 · 345-3315 · 345-3317 | wa.me/50763400028 |
| Costa Verde | 6729-6810 | wa.me/50767296810 |

## Deploy
Configurado para Vercel (sin build step). `vercel.json` aplica `cleanUrls: true` y cache headers.

```bash
vercel --prod
```

## Identidad
- Primario: `#0E7F8C` (teal)
- Acento: `#15A0AE` (teal bright) y `#A4D8AE` (mint del logo)
- Acento cálido: `#E07B5F` (coral)
- Fondo: `#FBFAF7`
- Tinta: `#0A1A1F`

Demo construida por **GreenGrow Digital**.
