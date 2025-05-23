# 📌 Day 7 – Connecting MongoDB to Next.js using Mongoose

## 🔹 Task Overview:

Today, I successfully connected my Next.js project to MongoDB using Mongoose. This setup marks the beginning of backend integration in my project.

---

## ✅ What I Did:

- Configured the `.env.local` file with the MongoDB URI.
- Created a reusable MongoDB connection file using Mongoose.
- Built a test API route inside the `app/api` directory using the new App Router.
- Hit the API route using a browser or API client to confirm the database connection is working properly.

---

## 🧠 What I Learned:

- How to manage environment variables securely in Next.js using `.env.local`.
- How to use `NextResponse` to send JSON responses in API routes.
- How to structure API routes inside `src/app/api/` in a clean and modular way.
- The basic flow of backend setup in a full-stack Next.js project.

# 📌 Day 8 – Backend Setup with Mongoose in Next.js

## 🔹 Task Overview:

Today, I worked on improving the MongoDB connection logic using `mongoose.connection.readyState` and added Mongoose models for the application.

---

## ✅ What I Did:

### 1. Database Connection Optimization

- Checked if the MongoDB connection is already active using `mongoose.connection.readyState === 1`.
- If connected, return immediately and avoid reconnecting.
- If not connected, then proceed to connect.
- This makes the backend more efficient and prevents multiple reconnections during development.

---

### 2. Created Mongoose Models

- Added a `User` model to define user structure (like username, email, googleId, etc.).
- Added a `Course` model to store course details (title, description, and createdAt).
- Used proper export logic to handle Next.js hot reloading and avoid duplicate model definitions.

---

## 🧠 What I Learned:

- Importance of checking connection state before reconnecting to MongoDB.
- How to organize and structure Mongoose models in a Next.js project.
- Preventing Mongoose overwrite errors using conditional exports.

---

## 🔜 What’s Next (Day 9 Plan):
CSR and ssr concept


# 📚 Revision Notes: Google Authentication + Mongoose Models Setup in Next.js

## ✅ Authentication Setup Using NextAuth (Google OAuth)

- **Library Used**: `NextAuth.js`
- **Purpose**: Authenticate users via Google login.
- **Route File**: `app/api/auth/[...nextauth]/route.ts`
- **Configured Providers**: Google
  - Requires `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`
- **Session Handling**: JWT-based session strategy

### 🔸 Important NextAuth Settings

```ts
session: {
  strategy: "jwt"
},
secret: process.env.NEXTAUTH_SECRET,
# 📘 Middleware in Next.js – Complete Guide




## 🔍 What is Middleware?

**Middleware** is a function that runs **between a user’s request and your server’s response**. It allows you to:

- Inspect and modify requests
- Block or redirect users
- Add headers or cookies
- Perform background checks (e.g., authentication, logging, rate limiting)

---

## ⚙️ Middleware in Next.js

In **Next.js (13+ App Router)**, middleware lets you run logic before serving a route or API. Common use cases include:

- 🔐 **Authentication & Authorization**
- 🚦 **Redirections**
- 📊 **Logging**
- ⚡ **Rate Limiting**
- 🌐 **Localization**
- 🧠 **Modifying Request/Response Headers**

---

## 📁 Folder & File Structure

Place your global middleware in:

```
src/middleware.ts
```

To create reusable logic, structure your project like this:

```
src/
├── middleware.ts         # Global entry point
├── middlewares/          # Custom reusable middlewares
│   ├── auth.ts
│   ├── logger.ts
│   ├── rateLimit.ts
│   └── withMiddleware.ts # Utility to compose multiple middlewares
```

---

## 🧠 Example: Redirect Unauthenticated Users

```ts
// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next(); // Proceed to route
}

export const config = {
  matcher: ['/dashboard/:path*'], // Only run on /dashboard routes
};
```

---

### 🔄 Analogy: Middleware as a Security Guard

Think of middleware as a security guard at a building entrance:

- ✅ Checks your ID (auth middleware)
- 🚫 Stops you if you're not allowed (authorization)
- 🔁 Redirects guests to the reception (redirect)
- 📝 Logs your entry (logger)










note: for doing backend we have to do db connection in first tespaxi db tables ani tabes ma crud garne
