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
D:\FLOOD RISK MAP\FLOOD-RISK-MAP\APP
|   favicon.ico
|   globals.css
|   Image.jpg
|   layout.tsx
|   page.tsx
|
\---api
    \---reports
            route.ts


D:\FLOOD RISK MAP\FLOOD-RISK-MAP\COMPONENTS
    FloodLegend.tsx
    FloodReportPanel.tsx
    Map.tsx
    MapClient.tsx
    RouteInput.tsx
    RouteLayer.tsx
    WaterloggingLayer.tsx



D:\FLOOD RISK MAP\FLOOD-RISK-MAP\LIB
    geocode.ts
    getMapboxRoute.ts
    getUserLocation.ts
    mongodb.ts
    searchMapbox.ts



D:\FLOOD RISK MAP\FLOOD-RISK-MAP\MODELS
    FloodReport.ts



D:\FLOOD RISK MAP\FLOOD-RISK-MAP\PUBLIC
|   file.svg
|   globe.svg
|   next.svg
|   vercel.svg
|   window.svg
|
\---data
        flood_zones_mumbai.geojson
        waterlogging_points.csv
        waterlogging_points.geojson


D:\FLOOD RISK MAP\FLOOD-RISK-MAP\DATA
    flood_zones.json
    flood_zones_mumbai.geojson
    flood_zones_mumbai.qmd
    Videos - Shortcut.lnk
    waterlogging_points.csv
    waterlogging_points.geojson
    waterlogging_points.qmd



