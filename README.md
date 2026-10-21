# TROS Virtual Try-On — Browser Reconstruction

A **new browser-based prototype** inspired by the earlier Trailing Realtime Online System (TROS) academic project. This is **not** the original React Native application and does not perform camera-based augmented reality.

## Features
Choose a garment colour and see it overlaid on a stylized mannequin. No photos, video or personal data are collected.

## Run
Open `index.html` in a modern browser, or serve the folder locally:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Structure
- `index.html` — accessible controls and mannequin
- `styles.css` — layout and responsive styling
- `app.js` — colour selection

## Limitations
This is a visual demonstration, not real garment fitting, body measurement, or React Native implementation.
