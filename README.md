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
---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/ap6458/flood-risk-score-routing-map.git
cd flood-risk-score-routing-map
---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a file named:

```
.env.local
```

Add the following:

```env
NEXT_PUBLIC_MAPBOX_TOKEN=YOUR_MAPBOX_TOKEN
MONGODB_URI=mongodb+srv://flooduser:flood12345@cluster0.5i4banq.mongodb.net/?appName=Cluster0

```

#### Where to get:
*Mapbox Token*
1. Go to https://account.mapbox.com
2. Create a Public Token
3. Ensure Directions API & Geocoding API are enabled


- Example Local format for mongodb uri:

```
mongodb://127.0.0.1:27017/floodDB
```

---
-Install node.js

```bash
npm install
```
### 4️⃣ Run Development Server

```bash

npm run dev
```

Open in browser:

```
http://localhost:3000
```

---



## 🗄 Database Details

Database Name:
```
floodDB
```

Collection:
```
reports
```

Stored Fields:
- lat
- lon
- severity
- timestamp (optional future improvement)

---

## 📈 Future Enhancements


- User authentication system
- Save favorite routes
- Mobile optimized UI
- Can be upgraded for the whole country if dataset of flood points is obtained

---



## 📜 License

MIT License

---

## 👨‍💻 Author

1.*Aryan Parab*
2.*Arya Shirke*

