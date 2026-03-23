# Siffrum — Innovate. Build. Launch.

Full-stack website for Siffrum, a software development agency targeting US-based clients and businesses.

## Tech Stack

- **Frontend:** React 19 + TypeScript + Vite + TailwindCSS v4 + Framer Motion
- **Backend:** Node.js + Express + TypeScript + SQLite (better-sqlite3)
- **Auth:** JWT-based admin authentication
- **File Uploads:** Multer for project image uploads

## Quick Start

### 1. Backend

```bash
cd backend
npm install
npm run seed    # Creates admin account + sample projects
npm run dev     # Starts on http://localhost:8080
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev     # Starts on http://localhost:5173 (proxies API to :8080)
```

## Admin Panel

- **URL:** `/admin/login`
- **Email:** `admin@siffrum.com`
- **Password:** `siffrum2024`

From the admin dashboard you can:
- Add / edit / delete portfolio projects (with image uploads)
- View and manage contact form messages
- Mark messages as read

## API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/projects` | No | List all projects |
| GET | `/api/projects?featured=true` | No | List featured projects |
| GET | `/api/projects/:id` | No | Get single project |
| POST | `/api/contact` | No | Submit contact form |
| POST | `/api/auth/login` | No | Admin login |
| POST | `/api/admin/projects` | Yes | Create project |
| PUT | `/api/admin/projects/:id` | Yes | Update project |
| DELETE | `/api/admin/projects/:id` | Yes | Delete project |
| GET | `/api/admin/messages` | Yes | List messages |
| PATCH | `/api/admin/messages/:id/read` | Yes | Mark message read |
| DELETE | `/api/admin/messages/:id` | Yes | Delete message |

## Project Structure

```
siffrum_website/
├── frontend/               # React + Vite + TypeScript
│   ├── src/
│   │   ├── components/     # Navbar, Hero, Services, Footer, etc.
│   │   ├── pages/          # Home, Services, Portfolio, About, Contact, Admin
│   │   ├── context/        # Auth context
│   │   ├── lib/            # API client (Axios)
│   │   └── types/          # TypeScript interfaces
│   └── public/             # Static assets (logo)
├── backend/                # Express + TypeScript
│   ├── src/
│   │   ├── routes/         # auth, projects, contact
│   │   ├── database.ts     # SQLite setup
│   │   ├── middleware.ts   # JWT auth middleware
│   │   ├── seed.ts         # Database seeder
│   │   └── index.ts        # Express server
│   ├── data/               # SQLite database (auto-created)
│   └── uploads/            # Project images (auto-created)
└── README.md
```

## Production Notes

- Change `JWT_SECRET` environment variable before deploying
- Change the default admin password after first login
- Set `CORS` origin to your production domain
- Build frontend with `npm run build` and serve the `dist/` folder
