# API Contract (draft — agree as a team before coding)

Modules exchange data in these formats. Use mock data until the real module is ready.

## Wardrobe item (Wardrobe -> Styling / Try-On)
```json
{ "id": "item_001", "type": "top|bottom|dress|shoes|bag", "color": "#RRGGBB",
  "season": "summer|winter|all", "formality": "casual|formal|party", "model_url": "/models/item_001.glb" }
```

## Colour analysis result (Color Analysis -> Styling / UI)
```json
{ "undertone": "warm|cool|neutral", "palette": ["#RRGGBB", "#RRGGBB"], "tips": ["..."] }
```

## Outfit recommendation (Styling -> Frontend / Try-On)
Request: `{ "occasion": "wedding", "user_id": "u1" }`
```json
{ "occasion": "wedding", "outfit": ["item_001", "item_014", "item_020"], "reason": "..." }
```

## Endpoints (proposed)
| Method | Path | Owner |
|---|---|---|
| POST | `/wardrobe/upload` | Wardrobe |
| GET | `/wardrobe/items` | Wardrobe |
| POST | `/styling/recommend` | Styling |
| POST | `/color/analyze` | Color Analysis |
