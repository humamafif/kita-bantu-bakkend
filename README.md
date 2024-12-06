# donasiin-backend-expressjs

Donasi-API is a simple RESTful API built using **Node.js**, **Express.js**, and **Prisma** to manage a donation system. This API supports CRUD operations for donors, donations, programs, banks and transactions.

---

## 🚀 Technologies Used
- **Backend**: Node.js, Express.js
- **Database ORM**: Prisma
- **Database**: MySQL

---

## ⚙️ How to Use

### **1. Clone the repository**
```bash
git clone https://github.com/your-username/donasiin-backend-expressjs.git
cd donasiin-backend-expressjs
```

### **2. Install dependencies**
```bash
npm install
```

### **3. Set up environment variables**
Create a `.env` file in the root folder and add the following:
```env
DATABASE_URL="mysql://user:password@localhost:3306/your_database_name"
PORT = 4040
```

### **4. Run Prisma migrations**
Run the following command to apply the database schema:
```bash
npx prisma migrate dev
```

### **5. Start the server**
Run the server using:
```bash
npm run dev
```
The API will be available at `http://localhost:4040`.

---


---

## 📚 API Endpoints

### Donor Endpoints
- **GET** `/donors`
- **GET** `/donors/:id`
- **POST** `/donors`
- **PUT** `/donors/:id`
- **DELETE** `/donors/:id`

### Program Endpoints
- **GET** `/programs`
- **GET** `/programs/:id`
- **POST** `/programs`
- **PUT** `/programs/:id`
- **DELETE** `/programs/:id`

### Bank Endpoints
- **GET** `/banks`
- **GET** `/banks/:id`
- **POST** `/banks`
- **PUT** `/banks/:id`
- **DELETE** `/banks/:id`

### Donation Endpoints
- **GET** `/donations`
- **GET** `/donations/:id`
- **POST** `/donations`
- **DELETE** `/donations/:id`

### Transaction Endpoints
- **GET** `/transactions`
- **GET** `/transactions:id`
- **POST** `/transactions`
- **DELETE** `/transactions/:id`
