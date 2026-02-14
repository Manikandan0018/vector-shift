# VectorShift Technical Assessment

## Overview

This project was developed as part of the VectorShift technical assessment.

The application provides a pipeline parsing API that evaluates a graph structure composed of nodes and edges.  
Given a pipeline definition, the backend analyzes the graph and returns key structural information.

Specifically, the API:

- Counts the number of nodes
- Counts the number of edges
- Determines whether the pipeline forms a Directed Acyclic Graph (DAG)

---

## Tech Stack

Backend:
- Python
- FastAPI
- NetworkX
- Pydantic

Frontend:
- React (Vite)
- JavaScript / JSX
- CSS

---

## Project Structure

backend/
    main.py

frontend/
    public/
    src/
    package.json
    vite.config.js

---

## Setup & Run Instructions

### Backend

1. Navigate to the backend directory:

   cd backend

2. Install dependencies:

   pip install fastapi uvicorn networkx

3. Start the server:

   uvicorn main:app --reload

The API will run at:

http://127.0.0.1:8000

---

### Frontend

1. Navigate to the frontend directory:

   cd frontend

2. Install dependencies:

   npm install

3. Start development server:

   npm run dev

---

## API Endpoints

### Health Check

GET /

Response:

{
  "Ping": "Pong"
}

---

### Parse Pipeline

POST /pipelines/parse

Request Body Example:

{
  "nodes": [
    {"id": "A"},
    {"id": "B"}
  ],
  "edges": [
    {"source": "A", "target": "B"}
  ]
}

Response Example:

{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true
}

---

## Features Implemented

- Pipeline graph construction
- Node and edge validation using Pydantic models
- Directed graph analysis using NetworkX
- DAG detection logic
- CORS support for frontend integration

---

## Notes / Assumptions

- Graph data is processed in-memory
- No persistent storage is used
- The API assumes valid node references in edges

---

## Author

Manikandan
