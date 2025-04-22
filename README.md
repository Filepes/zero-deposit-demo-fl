## Project Structure

- `zdp_fe/` - Frontend
- `dummy_backend/` - Backend

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Python 3.8+
- Docker and Docker Compose (optional, for containerized setup)

## Running the Project

### Option 1: Manual Setup

#### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd zdp_fe
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the backend URL:
   ```
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```

4. Start the development server:
   ```
   npm start
   ```

The frontend application will be available at http://localhost:3000

#### Backend Setup

1. Navigate to the backend directory:
   ```
   cd dummy_backend
   ```

2. Create and activate a virtual environment (recommended):
   ```
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Start the backend server:
   ```
   python app.py
   ```

The backend server will be available at http://localhost:5000

### Option 2: Using Docker

1. Make sure Docker and Docker Compose are installed on your system

2. From the project root directory, build and start the containers:
   ```
   docker-compose up
   ```

This will start both the frontend and backend services:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### VS-Code extensions setup

1. When opening the project click on the bottom right pop-up to install the recommended extensions provided from .vscode
2. Alternatively Press Ctrl+Shift+P (or Cmd+Shift+P on Mac) -> Extensions: Install Extensions from Workspace.

## API's

### Auth
- Login: `POST /api/login`

### Users
- List users: `GET /api/users` (admin)
- Get user: `GET /api/user/{id}` (admin)
- Create user: `POST /api/user` (admin)

### Properties
- List properties: `GET /api/houses`
- Get property: `GET /api/house/{id}`
- Create property: `POST /api/house`
- Delete property: `DELETE /api/house/{id}`