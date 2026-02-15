# 🌊 Flood Risk Score Routing Map

A smart web-based flood-aware route planning system that calculates **real-world road routes** and integrates **flood risk scoring** to help users choose the safest path during heavy rainfall or waterlogging conditions.

Built using **Next.js, Leaflet (OpenStreetMap), Mapbox APIs, and MongoDB**.

## 🚀 Live Features

### 🗺 Smart Route Planning
- Driving 🚗
- Walking 🚶
- Cycling 🚴
- Real ETA & Distance calculation
- Multiple route alternatives

### 🌧 Flood Risk Intelligence
- Static waterlogging dataset (GeoJSON)
- Live user reported flood points
- Automatic risk scoring for each route
- Safest route highlighted in the sidebar

### 📍 Interactive Map
- Leaflet + OpenStreetMap tiles
- Dark mode toggle
- Flood severity color indicators
- Dynamic markers & polylines

### User Flood Reports
- Users can report:
  - Location
  - Flood severity
- Stored in MongoDB database
- Instantly reflected in routing risk score calculation

---

## 🧠 How Risk Scoring Works

Each route is evaluated based on:

1. Distance from known waterlogging points  
2. Severity weighting (Low / Moderate / High)  
3. Distance-based risk multiplier  
4. Proximity to live user-reported flood points

Final Risk Score:
Individual routes are assigned route risk scores.The route with lowest score is considered the safest

Routes are sorted from **lowest risk → highest risk**.

---

## 🛠 Tech Stack

### Frontend
- Next.js 16
- React
- Leaflet.js
- OpenStreetMap Tiles
- TypeScript

### Backend
- Next.js API Routes
- MongoDB

### External APIs
- Mapbox Directions API
- Mapbox Geocoding API

---

## 📂 Project Structure


```bash
flood-risk-map/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── api/routes.ts
│
├── components/
│   ├── Map.tsx
│   ├── RouteInput.tsx
│   └── FloodReportPanel.tsx
│
├── lib/
│   ├── mongodb.ts
│   ├── geocode.ts
│   ├── getMapboxRoute.ts
│   └── searchMapbox.ts
│
├── models/
│   └── FloodReport.ts
│
├── public/
│
├── data/
│   ├── flood_zones_mumbai.geojson
│   └── waterlogging_points.geojson
│
├── package.json
├── tsconfig.json
└── README.md
```
