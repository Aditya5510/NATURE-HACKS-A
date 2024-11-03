# 🌱 Nature-hacks

A sustainable gardening platform connecting plant enthusiasts, sellers, and garden service providers.

## 🎯 Features & Implementation

### 1. Plant Guide System

- **Database Schema**:
  ```prisma
  model Plant {
    id          Int      @id @default(autoincrement())
    name        String
    description String
    careGuide   String
    difficulty  String   /
    spaceNeeded String
    climate     String
    season      String[]
    createdAt   DateTime @default(now())
    updatedAt   DateTime @updatedAt
  }
  ```
- **Implementation**:
  - React frontend with plant cards and detailed views
  - Express endpoints for plant CRUD operations
  - Integration with free plant identification API (Plant.id)
  - Local LLM integration for generating care tips (using Ollama)

### 2. Marketplace

- **Database Schema**:

  ```prisma
  model Listing {
    id          Int      @id @default(autoincrement())
    title       String
    description String
    price       Decimal
    sellerId    Int
    seller      User     @relation(fields: [sellerId], references: [id])
    images      String[]
    status      String   // AVAILABLE, SOLD, ARCHIVED
    createdAt   DateTime @default(now())
    updatedAt   DateTime @updatedAt
  }

  model Order {
    id        Int      @id @default(autoincrement())
    buyerId   Int
    listingId Int
    status    String   // PENDING, CONFIRMED, SHIPPED, DELIVERED
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
  }
  ```

- **Implementation**:
  - React marketplace component with filters and search
  - Express routes for listing management
  - PostgreSQL for storing listing data
  - Image upload using Cloudinary free tier

### 3. Garden Services

- **Database Schema**:

  ```prisma
  model ServiceProvider {
    id          Int      @id @default(autoincrement())
    userId      Int      @unique
    user        User     @relation(fields: [userId], references: [id])
    services    String[]
    rate        Decimal
    available   Boolean  @default(true)
    ratings     Rating[]
  }

  model ServiceBooking {
    id         Int      @id @default(autoincrement())
    providerId Int
    clientId   Int
    date       DateTime
    status     String   // PENDING, CONFIRMED, COMPLETED
    createdAt  DateTime @default(now())
  }
  ```

- **Implementation**:
  - Worker profile components
  - Booking calendar using react-big-calendar
  - Express endpoints for service booking
  - Email notifications using NodeMailer

### 4. User System

- **Database Schema**:
  ```prisma
  model User {
    id          Int       @id @default(autoincrement())
    email       String    @unique
    password    String
    name        String
    role        String    // USER, SELLER, SERVICE_PROVIDER
    listings    Listing[]
    createdAt   DateTime  @default(now())
    updatedAt   DateTime  @updatedAt
  }
  ```
- **Implementation**:
  - JWT authentication
  - User dashboard with React
  - Profile management endpoints
  - Password hashing with bcrypt

## 🛠️ Tech Stack

### Frontend

- React.js with Vite
- TailwindCSS for styling
- ShadcnUI components
- React Query for data fetching
- React Router for navigation

### Backend

- Express.js
- PostgreSQL with Prisma ORM
- JWT for authentication
- Ollama for local LLM features

### External Services

- Cloudinary (free tier) for image storage
- Plant.id API for plant identification
- NodeMailer for email notifications

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/Aditya5510/NATURE-HACKS-A.git
```

2. Install dependencies

```bash
# Backend
npm install

# Frontend
cd client
npm install

```

3. Set up environment variables

```env
# Backend .env
DATABASE_URL=""
DIRECT_URL=""

# Frontend .env

```

4. Set up the database

```bash
npx prisma migrate dev
```

5. Run the development servers

```bash
# Backend
npm run dev

# Frontend
cd ../client
npm run dev
```

## 📱 Core MVP Features

Phase 1 Implementation:

1. Basic plant database and care guides
2. Simple marketplace for buying/selling
3. User authentication and profiles
4. Service provider listings
5. Search and filter functionality
