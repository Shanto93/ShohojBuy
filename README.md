# ShohojBuy - Mini E-Commerce SPA (Single Page Application)

## Project Overview

ShohojBuy is a simple and responsive e-commerce web application that allows users to browse a list of products, view product details, add items to a cart, and proceed to checkout—all without requiring authentication. Built as a Single Page Application (SPA) using React.js, the project features a modern UI, a dynamic cart sidebar with quantity controls, and a checkout modal with form inputs. 


## Live Demo

You can access the live project here:  
- [ShohojBuy- Frontend](https://shohoj-buy.vercel.app/)
- [ShohojBuy - Backend](https://shohojbuy-serverr.vercel.app)

## Features

- Browse and view all available products  
- View detailed information for each product  
- Add products to the shopping cart  
- Support for adding the same product multiple times and removing items from the cart  
- Seamless product checkout process  
- Robust server-side validation for secure operations  
- Fully responsive and user-friendly frontend UI

---

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Redux Toolkit & RTK Query
- React Router DOM
- React Hook Form
- Vite

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB (Mongoose)

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB installed and running locally or on the cloud (MongoDB Atlas)

---

## Installation

Follow the steps below to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Shanto93/ShohojBuy.git
cd ShohojBuy
```

### 2. Install Dependencies
Install all required packages listed in the package.json file:

```
npm install
```
### 3. Start the Development Server
Run the project in development mode:

```npm run dev```

## Deployment

### Backend Deployment (Vercel)

To deploy your backend to [Vercel](https://vercel.com/), follow these steps:

---

#### 1. Push Your Server Code to GitHub

Make sure your backend project is pushed to a GitHub repository.

---

#### 2. Setup Vercel Project

1. Go to [vercel.com](https://vercel.com) and log in or sign up.
2. Click on **"Add New" → "Project"**.
3. Import your GitHub repository.
4. When prompted, configure the following:

   - **Root Directory**: Select the folder where your backend code lives (e.g., `backend/`).
   - **Framework Preset**: Choose **"Other"**.
   - **Build Command**:  
     ```bash
     npm install && npm run build
     ```
   - **Output Directory**:  
     Leave it blank or set to `.` if you're serving with Node.js.
   - **Install Command** (if not auto-filled):  
     ```bash
     npm install
     ```

#### 3. Set Environment Variables

Go to the **"Environment Variables"** section and add the following:

```
PORT=5000
DB_URL=mongodb+srv://exampleDBUserName:examDBPassword@cluster0.tuf9wrv.mongodb.net/shohojDB?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=development
```

#### 4. Specify the Start Command

Since Vercel doesn’t natively support long-running Node.js backend servers, you'll need to:

- Use **Vercel Serverless Functions** (`/api` folder setup), **OR**
- Use **vercel.json** to define a custom start point.

For standard Express backend (non-serverless), use:

#### 5. Add `vercel.json` (if needed)

In your backend folder root, add a `vercel.json` file like this:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "dist/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/index.js"
    }
  ]
}

```


#### 6. Deploy
Click "Deploy" and wait for the deployment process to finish.

#### 7. Copy the Live API URL
After deployment, Vercel will provide you with a live URL (e.g., https://shohojbuy-serverr.vercel.app). Use this in your frontend as the backend base URL.

---

### Frontend Deployment (Vercel)

1. **Push your frontend code to GitHub** (inside `client/` folder).
2. Go to [Vercel](https://vercel.com/), sign in with GitHub and import your repo.
3. In **project settings**, set:

   - **Root Directory**: `client/`
   - No need to define build command — Vercel auto detects Vite.
   - Add environment variables if needed (usually none unless using `.env`)

4. Update your frontend `baseQuery` URLs in:

   - `productApi.ts`:
     ```ts
     baseQuery: fetchBaseQuery({ baseUrl: "https://shohojbuy-serverr.vercel.app/api/v1/products" })
     ```

   - `cartApi.ts`:
     ```ts
     baseQuery: fetchBaseQuery({ baseUrl: "https://shohojbuy-serverr.vercel.app/api/v1/carts" })
     ```

5. Push the changes. Vercel will auto-deploy.
6. Your site is now live at: `https://shohoj-buy.vercel.app/`

---

> Now your frontend is served from Vercel and your backend from Render — both fully working together in production!

---

## Usage

Once both the frontend and backend are running (locally or in production), you can:

- Explore and browse all available products  
- View detailed information about individual products  
- Add products to your shopping cart  
- Add the same product multiple times and remove items from the cart  
- Proceed through a smooth and secure checkout process

---

## API Endpoints

### Products (`/api/v1/products`)
- `GET /` – Get all products
- `GET /:id` – Get a single product
- `POST /create-product` – Add a new product
- `PUT /:id` – Update a product
- `DELETE /:id` – Remove a product

### Cart (`/api/v1/carts`)
- `POST /` – POST add item to cart
- `GET /` – GET all cart items
- `DELETE /:id` - DELETE cart item by ID
- `PATCH /:id` - update quantity
---

## Environment Variables

### Backend `.env`
```env
PORT=5000
DB_URL=mongodb+srv://exampleDBUserName:examDBPassword@cluster0.tuf9wrv.mongodb.net/shohojDB?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=development
```
## Author

**Shanto Islam**  
GitHub: [https://github.com/your-username](https://github.com/Shanto93)  
Email: shantoislam7363@gmail.com  
LinkedIn: [https://linkedin.com/in/your-profile](https://www.linkedin.com/in/shanta93/)  
Portfolio: [https://yourportfolio.com](https://updated-portfolio-neon.vercel.app/)
