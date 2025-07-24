# 💸 Expense Tracker – Budget Management Web App

Expense Tracker is a clean and user-friendly web application that helps users monitor their income and expenses effectively. Built using **React, Node.js, Express, and MongoDB**, it offers real-time analytics, transaction history, and downloadable reports.

---

🚀 Features

🔐 User Authentication
Secure login and registration functionalities.

📊 Dashboard Overview
At-a-glance view of total balance, income, and expenses.

💵 Transaction Tracking
Easily add, edit, and manage both income and expense entries.

📁 Categorization

Expenses: Groceries, Gym, Food, Travel, etc.
Income: Salary, Trading, Gaming, etc.
📈 Visual Data Representation

Income Overview (Bar Chart)
Last 30 Days Expenses (Bar Chart)
Financial Overview (Donut Chart: Balance, Expenses, Income)
Last 60 Days Income (Donut Chart)
Expense Trend (Line Graph)
📜 Transaction History
View detailed lists of all recent income and expense transactions.

📤 Data Export
Download income and expense data as .xlsx Excel files.

🧼 Intuitive UI
Clean and responsive interface designed using Tailwind CSS.

🗑️ Delete Functionality
Delete specific income or expense entries with ease.

---

## 🛠 Tech Stack

| Frontend     | Backend           | Database & Auth    |
| ------------ | ----------------- | ------------------ |
| React + Vite | Node.js + Express | MongoDB + Mongoose |
| Tailwind CSS | REST API          | dotenv (.env)      |
| Recharts     | Axios             |                    |

---

## 📦 Folder Structure

```
expense-tracker/
├── client/      # React frontend
├── server/      # Express backend
├── .env         # Environment variables
├── README.md
└── ...
```

---

## 📸 Screenshots

<p align="center">
  <img width="400"  alt="image" src="https://github.com/user-attachments/assets/17a4dd08-c220-4314-904f-b4afad3ca25e" />

  <img width="400"  alt="image" src="https://github.com/user-attachments/assets/7a2eb24e-7dd5-4f7c-8426-de28ca710496" />

  <img width="400"  alt="image" src="https://github.com/user-attachments/assets/a52ac421-ffa0-417e-b182-6d0ebf99cf96" />

  <img width="400"  alt="image" src="https://github.com/user-attachments/assets/d6dd5f87-ab6f-4f23-b188-760d14a8bf49" />

  <img width="400"  alt="image" src="https://github.com/user-attachments/assets/23b2ec8b-f637-485f-943f-cf0605603cc1" />


</p>

---

## ⚙ Getting Started

### 🔑 Prerequisites

* Node.js ≥ 18
* MongoDB URI (cloud/local)
* npm or yarn

---

### 🖥 Frontend Setup

```bash
cd client
npm install
npm run dev
```

Update `.env` with:

```env
VITE_BACKEND_URL=http://localhost:8000
```

---

### 🧩 Backend Setup

```bash
cd server
npm install
npm start
```

`.env` example:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

---

## 🌐 Deployment

| Layer    | Platform         |
| -------- | ---------------- |
| Frontend | Vercel / Netlify |
| Backend  | Render / Railway |

*Need help? Ask for a deployment guide!*

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes
4. Push to your fork
5. Open a pull request

---

## 📜 License

MIT License

---

## 💡 Inspiration

Built to help individuals manage their finances with simplicity and insight through clean design and easy-to-use tools.

---

## 🔗 Links

* 🔗 Live Demo (Coming Soon)
* 📘 MongoDB Docs
* 🎨 Tailwind CSS
* 📊 Recharts
* 🔐 Express + dotenv

---

Created with 💙 by Sriram Meesala
