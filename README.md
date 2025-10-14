1. 📜 Project Overview
For Users

Browse 4 categories: Internet, Home, TV, Electric

View major billers by ZIP code and their plan details

See 25% OFF eligibility

Call toll-free number to enroll or request callback

After phone verification, admin assigns them a unique Customer Number

View bills, discount summary, and uploaded receipts (PDF/JPG)

For Admins

Manage billers and plans

View all registered customers

Add/update monthly bills

Upload receipts to Firebase Storage (linked by Customer Number)

Update status or notes per bill

2. 🧩 Tech Stack
Layer	Technology	Description
Frontend	Vite + React + Tailwind	Responsive UI, React Router, Axios
Backend	Node.js + Express	REST API hosted on VPS
Database	Firebase Firestore	Persistent data for customers, billers, bills
File Storage	Firebase Storage	Stores receipts and logos
Auth	JWT-based	Handled via Express middleware
Deployment	GoDaddy VPS (Ubuntu)	Nginx reverse proxy + PM2 process manager
3. 🌍 System Architecture
React (Vite)
   ↓  Axios
Express API (VPS)
   ↓
Firebase Firestore (database)
   ↓
Firebase Storage (receipts)

4. 🗂️ Firestore Schema
/billers/{billerId}
{
  "name": "FiberFast Internet",
  "category": "internet",
  "logoUrl": "https://cdn.usbillshub.com/fiberfast.png",
  "plans": [
    { "id": "plan100", "name": "100 Mbps", "monthlyPrice": 59.99, "eligibleForDiscount": true }
  ],
  "coverageZips": ["10001","10002"],
  "createdAt": "timestamp"
}

/customers/{customerId}
{
  "customerNumber": "CUS-2025-0042",
  "name": "John Smith",
  "email": "john@example.com",
  "zipCode": "10001",
  "enrolledBillers": [
    { "billerId": "fiberfast", "planId": "plan100", "startDate": "2025-10-01" }
  ],
  "createdAt": "timestamp"
}

/customers/{customerId}/bills/{billId}
{
  "billerId": "fiberfast",
  "period": "2025-11",
  "amountBeforeDiscount": 59.99,
  "discountPercent": 25,
  "amountAfterDiscount": 44.99,
  "note": "Paid on call",
  "createdBy": "adminId",
  "createdAt": "timestamp"
}

/customers/{customerId}/bills/{billId}/receipts/{receiptId}
{
  "fileName": "receipt_november.pdf",
  "storagePath": "receipts/CUS-2025-0042/november.pdf",
  "uploadedBy": "adminId",
  "uploadedAt": "timestamp"
}

5. 🧾 REST API Design (Express)
Base URL
https://<your-vps-domain>/api

Auth Routes
Method	Endpoint	Description
POST	/auth/register	Create new customer account
POST	/auth/login	Login and get JWT
GET	/auth/me	Get user info from JWT
Biller Routes
Method	Endpoint	Description
GET	/billers	List all billers or filter by category
POST	/billers	Create new biller (admin only)
PUT	/billers/:id	Update biller info (admin only)
DELETE	/billers/:id	Remove biller (admin only)
Customer Routes
Method	Endpoint	Description
GET	/customers/:id	Get customer info
PUT	/customers/:id	Update profile (admin only)
GET	/customers/:id/bills	Fetch bill history
POST	/customers/:id/bills	Add a new bill (admin only)
POST	/customers/:id/bills/:billId/receipt	Upload receipt (admin only)
6. 🔐 Authentication (JWT)

Login Flow

User registers → backend hashes password and stores in Firestore /customers

Login → backend verifies credentials and issues JWT

Client stores JWT in localStorage

Protected routes (admin dashboard, account) require JWT in header:

Authorization: Bearer <token>

7. 💾 Firebase Storage

Paths:

receipts/{customerNumber}/{billId}/{filename}
logos/{billerId}/{filename}


Uploads:
Handled by Express backend using Firebase Admin SDK:

const storage = getStorage();
await uploadBytes(storageRef, fileBuffer, { contentType });

8. 🖥️ Admin Dashboard Features

Add/Edit billers

Assign customer plans

Add monthly bills

Upload receipts (PDF/JPG)

View/download receipts from Firebase Storage

Search customers by name, email, or Customer Number

9. ⚙️ Environment Setup
Backend .env
PORT=8080
JWT_SECRET=your_jwt_secret
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----..."

Frontend .env
VITE_API_BASE=https://your-vps-domain/api
VITE_APP_NAME="US Bills Hub"
VITE_TOLL_FREE="+1-800-555-9999"

10. 🛠️ Setup Commands
Frontend
npm create vite@latest us-bills-hub -- --template react-ts
cd us-bills-hub
npm install tailwindcss axios react-router-dom
npm run dev

Backend
mkdir backend && cd backend
npm init -y
npm install express cors firebase-admin jsonwebtoken multer
node server.js

VPS Deployment
sudo apt update
sudo apt install nginx
sudo npm install -g pm2
pm2 start server.js


Configure Nginx reverse proxy for port 80 → 8080.

11. 📞 Toll-Free Enrollment Page (/enroll)

Prominently show:

Toll-free number (from .env)

Click-to-call button for mobile

Callback form (name, phone, zip, category)

Submits to Express backend → saves to Firestore /leads

12. ✅ Acceptance Criteria

 Homepage lists all categories

 User can browse billers by ZIP

 “Call Toll-Free to Enroll” visible on each biller

 Customer registration assigns unique Customer Number

 Admin can upload receipts linked to bills

 Receipts visible in customer portal

 All data stored in Firestore; files in Firebase Storage

 Hosted securely on GoDaddy VPS

13. 🔒 Security Notes

No sensitive data in client-side logs

Use HTTPS with valid SSL on VPS

Validate file uploads (PDF/JPG/PNG only)

Limit admin routes with JWT + role check

Sanitize inputs before sending to Firestore

14. 📋 Next Steps for Codex

Generate in order:

/frontend/ → React + Tailwind structure + routes + Axios setup

/backend/ → Express routes + Firebase Admin SDK setup

Firestore integration for customers, billers, bills, receipts

JWT auth system

Admin dashboard + receipt upload flow
