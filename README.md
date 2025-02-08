# PrintSphere 3D - E-commerce Website

## Overview
PrintSphere 3D is a fully functional e-commerce platform for purchasing pre-designed 3D models and custom 3D printing services. The platform allows users to upload their specific 3D models, choose materials and colors, and receive high-quality prints delivered to their doorstep. Similar to WOL3D.com, PrintSphere 3D provides seamless user authentication, an interactive marketplace, and robust order management for admins.

## Features

### User Features
- **User Authentication:** Sign up and log in using email/password.
- **Marketplace:** Explore and purchase pre-designed 3D models categorized into different sections.
- **Custom Printing:** Upload 3D models (STL/OBJ formats) and customize print options.
- **Cart and Checkout:** Secure payment gateway integration for a smooth shopping experience.
- **User Dashboard:** Track order status, download purchased models, and view custom print requests.

### Admin Features
- **Admin Panel:** Manage products, orders, and uploaded custom models.
- **Analytics:** View sales performance and user activity.

## Tech Stack
- **Frontend:** Next.js with TypeScript
- **Backend:** Node.js API routes within Next.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **File Storage:** AWS S3 / Cloudinary
- **Payment Integration:** Stripe / Razorpay

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd printsphere-3d
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   MONGO_URL=<your_mongodb_url>
   JWT_SECRET=<your_jwt_secret>
   PORT=5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Access the website at `http://localhost:5000`

## Environment Variables
| Variable    | Description            |
|-------------|-------------------------|
| MONGO_URL   | MongoDB connection URL  |
| JWT_SECRET  | Secret key for JWT      |
| PORT        | Port for the server     |

## Directory Structure
```
printsphere-3d/
├── .next/            # Build output
├── app/              # Application pages and routes
│   ├── admin/        # Admin functionalities
│   ├── api/          # API routes
│   ├── login/        # Login page
│   ├── register/     # User registration page
│   └── shop/         # E-commerce store front
├── components/        # Reusable UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions or services
├── node_modules/      # Project dependencies
├── public/            # Static files (images, fonts, etc.)
├── styles/            # Global and module-specific CSS files
├── .gitignore         # Ignored files for Git
├── next.config.mjs    # Next.js configuration
├── package.json       # Project dependencies and scripts
├── postcss.config.mjs # PostCSS configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Security
- **JWT Authentication:** Secure user sessions using JSON Web Tokens.
- **Environment Variables:** Sensitive information is stored in the `.env` file.

## Usage
- **User Signup/Login:** Create an account or log in to access the marketplace.
- **Purchase 3D Models:** Browse available models and securely check out.
- **Custom Printing:** Upload models, choose print options, and place orders.

## Contributing
1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

