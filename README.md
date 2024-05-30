# Running the Project Locally

Follow these steps to set up and run the project on your local machine:

## Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Step 1: Clone the Repository

Clone the project repository to your local machine using:

```
git clone https://github.com/al-shaimon/university-server.git`
```

## Step 2: Install Dependencies

Navigate to the project directory and install the required dependencies:

```
cd path-to-project
npm install
```

## Step 3: Set Up Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```
PORT=5000
DATABASE_URL=YOUR_MONGODB_DATABASE_URL
```

## Step 4: Build the Project

Compile the TypeScript files to JavaScript:

```
npm run build
```

## Step 5: Start the Server

Run the server using:

```
npm run start:prod
```

## Step 6: Access the Application

The server should now be running on `http://localhost:5000`. You can access the application through this URL in your web browser.

## Additional Commands

- To run the server in development mode with hot reloading:

```
npm run start:dev
```

- To lint the code:

```
npm run lint
```

- To format the code using Prettier:

```
npm run prettier
```

This should set up the project on your local machine for development and testing purposes.
