# VOID - MERN Stack

## Features

This application is a small-sized e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app includes the following features:

- **User Authentication**:
  - Firebase authentication with email/password login and Google social login.
  - Password validation: minimum 8 characters, includes uppercase, lowercase, numbers, and special characters.
- **User Roles**:

  - **Buyer**: Can browse and purchase products, add items to wishlist and cart.
  - **Seller**: Can add, edit, and manage their products.
  - **Admin**: Can manage users, promote users to sellers, and delete users.

- **JWT-based Authorization**:
  - Protects private routes based on user roles.
- **Pages**:
  - **Home Page**: Hero section, featured products, testimonials, categories, FAQs, and contact info.
  - **Products Page**: Displays products with search, sort, and filter options.
  - **Product Details**: Detailed page for each product.
  - **About Page**: Description of the application or business.
  - **Contact Page**: Includes a contact form.
- **Buyer Features**:
  - Wishlist and Cart functionality.
- **Seller Features**:
  - Seller dashboard with options to add, edit, or delete products.
- **Admin Features**:

  - Admin dashboard to manage users and roles.

- **Responsive Design**: Fully responsive on both mobile and desktop.

## How to Run the Application Locally

### Prerequisites

- Node.js and npm installed.
- MongoDB set up locally or a cloud database (MongoDB Atlas).
- Firebase project setup for authentication.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   - For the front-end (React.js):

     ```bash
     cd client
     npm install
     ```

   - For the back-end (Node.js, Express.js):
     ```bash
     cd server
     npm install
     ```

3. Set up environment variables:

   - Create a `.env` file in the `server` directory and add the following:

     ```
     MONGO_URI=your-mongodb-uri
     JWT_SECRET=your-jwt-secret
     FIREBASE_API_KEY=your-firebase-api-key
     FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
     FIREBASE_PROJECT_ID=your-firebase-project-id
     FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
     FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
     FIREBASE_APP_ID=your-firebase-app-id
     ```

4. Start the back-end server:

   ```bash
   npm start
   ```

5. Start the front-end server:

   ```bash
   cd client
   npm start
   ```

6. The application will now be available at [http://localhost:3000](http://localhost:3000).

## Credentials for All Types of Users

### Buyer

- **Email**: muktadir@gmail.com
- **Password**: Muktadir@#$789

### Seller

- **Email**: jacksai@gmail.com
- **Password**: Jack@#$789

### Admin

- **Email**: kuddus@admin.void.com
- **Password**: Kudus@#$789

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
