# StyleVerse — 3D AI Wardrobe & Personal Stylist

Final Year Design Project (FYDP). StyleVerse turns a user's own clothing photos into a browsable 3D wardrobe,
recommends complete outfits for an occasion, analyses skin undertone for colour advice, and offers an AR virtual try-on.

## Modules
| Module | Folder | Owner |
|---|---|---|
| 3D Virtual Wardrobe | `frontend/src/modules/wardrobe`, `backend/app/services/garment_to_3d.py` | TBD |
| AI Event-Based Styling | `frontend/src/modules/styling`, `backend/app/services/outfit_recommender.py`, `ml/outfit-recommendation` | TBD |
| Skin Tone & Color Analysis | `frontend/src/modules/color-analysis`, `backend/app/services/skin_tone_detector.py`, `ml/skin-tone` | TBD |
| AR Virtual Try-On | `frontend/src/modules/ar-tryon` | TBD |

## Tech stack
React + Three.js / React Three Fiber, FastAPI (Python), OpenCV, scikit-learn/TensorFlow, WebXR/AR.js/MediaPipe.

## Setup
### Frontend
```bash
cd frontend
npm install
npm run dev
```
### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
Copy `.env.example` to `.env` first.

## Folder structure
See `docs/architecture.md`. Team rules: see `CONTRIBUTING.md`.

## SDGs
SDG 9 (Industry, Innovation and Infrastructure), SDG 12 (Responsible Consumption and Production), SDG 5 (Gender Equality).
