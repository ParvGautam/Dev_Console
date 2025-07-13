# Twitter Clone - Vercel Deployment Guide

This guide will help you deploy both the backend and frontend of your Twitter clone to Vercel.

## Prerequisites

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Make sure you have a MongoDB database (MongoDB Atlas recommended for production)

## Environment Variables Setup

### For Local Development
Create a `.env` file in the root directory with the following variables:

### For Vercel Deployment
You'll need to set these environment variables in your Vercel dashboard (not in a .env file):

```env
PORT=7000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=production
```

## Deployment Steps

### Step 1: Deploy Backend

1. Navigate to the backend directory:
```bash
cd backend
```

2. Deploy to Vercel:
```bash
vercel
```

3. Follow the prompts:
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: twitter-backend (or your preferred name)
   - Directory: ./ (current directory)

4. After deployment, note down the backend URL (e.g., `https://your-backend.vercel.app`)

### Step 2: Deploy Frontend

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Update the API base URL in your frontend code to point to your deployed backend URL.

3. Deploy to Vercel:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: twitter-frontend (or your preferred name)
   - Directory: ./ (current directory)

### Step 3: Configure Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your backend project
3. Go to Settings > Environment Variables
4. Add the following environment variables:

```env
PORT=7000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

**Important**: Don't create a .env file in the backend directory for Vercel deployment. Set these variables directly in the Vercel dashboard.

### Step 4: Update CORS Configuration

1. In your backend project on Vercel, go to Settings > Environment Variables
2. Add a new environment variable:
   - Name: `FRONTEND_URL`
   - Value: Your frontend Vercel URL (e.g., `https://your-frontend.vercel.app`)

3. Update the CORS configuration in `backend/server.js` to use this environment variable.

## Important Notes

1. **MongoDB**: Make sure your MongoDB connection string is accessible from Vercel's servers
2. **CORS**: Update the CORS origins in the backend to include your frontend domain
3. **Environment Variables**: All sensitive data should be stored as environment variables in Vercel
4. **File Uploads**: If using Cloudinary, make sure your Cloudinary credentials are properly set

## Troubleshooting

1. **CORS Errors**: Make sure your frontend URL is included in the CORS origins
2. **Database Connection**: Ensure your MongoDB connection string is correct and accessible
3. **Environment Variables**: Double-check that all environment variables are set in Vercel

## Custom Domains

You can add custom domains in your Vercel project settings after deployment.

## Monitoring

Use Vercel's built-in analytics and monitoring tools to track your application's performance. 