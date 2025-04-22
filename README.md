### Running the Project Manually

1. Install dependencies:

## npm install

2. Create a .env file with backend URL (env example provided ):

## REACT_APP_BACKEND_URL=http://localhost:5000

3. Start the development server:

## npm start

The application will run at http://localhost:3000.

### Using Docker

Build and run with docker compose:

## docker-compose up

### VS-Code extensions setup

## When opening the project click on the bottom right pop-up to install the recommended extensions provided from .vscode
## Alternatively Press Ctrl+Shift+P (or Cmd+Shift+P on Mac) -> Extensions: Install Extensions from Workspace.

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