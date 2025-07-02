# 🛍️ Simple E-commerce Store

This is a basic e-commerce web application built using **HTML, CSS, JavaScript**, and **Node.js with Express.js** (with EJS for templating). The project covers core e-commerce functionality like product listing, cart, order processing, and user authentication.

---

## 📌 Features

- 🛒 **Shopping Cart**  
- 📝 **Product Details Page**  
- 🔄 **Order Processing**  
- 🔐 **User Registration/Login**  
- 🗃️ **Database Storage for Products, Users, and Orders**

---

## 🧰 Tech Stack

### Frontend:
- HTML5  
- CSS3  
- JavaScript (Vanilla)

### Backend:
- Node.js  
- Express.js  
- EJS (Embedded JavaScript Templates)

### Database:
- MongoDB 

---

## 📂 Project Structure

```
simple-ecommerce-ejs/
│
├── public/               # Static assets (CSS, JavaScript, images)
│   ├── css/
│   ├── js/
│   └── images/
│
├── routes/               # Express route handlers (e.g., auth.js, product.js)
│
├── views/                # EJS templates for frontend pages
│   ├── partials/
│   ├── products/
│   └── users/
│
├── models/               # Mongoose schemas (User, Product, Order)
│
├── controllers/          # Business logic for routes
│
├── middleware/           # Custom middleware (e.g., auth check)
│
├── .env                  # Environment variables
├── app.js                # Main Express app entry point
├── package.json          # Node.js metadata and dependencies
└── README.md             # Project documentation
```


## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/simple-ecommerce-ejs.git
cd simple-ecommerce-ejs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add the following:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

> Replace `your_mongodb_connection_string` and `your_secret_key` with your actual values.

### 4. Start the development server

```bash
npm start
```

### 5. Open in browser

Visit: [http://localhost:3000](http://localhost:3000)



