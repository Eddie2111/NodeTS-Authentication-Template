# Node.js TypeScript Authentication Template

## Requirements
- **Node.js** `>=20.x.x`
- **TypeScript** `>=5.1.x`

## Setup Project
Follow these steps to set up the project:

1. **Clone the Repository**
   ```sh
   git clone https://github.com/Eddie2111/NodeTS-Authentication-Template
   cd NodeTS-Authentication-Template 
   ```

2. **Install Dependencies**
   ```sh
   pnpm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the necessary environment variables, such as:
   ```env
   DATABASE_URL="your-database-url"
   REDIS_URL="your-redis-url"
   JWT_SECRET="your-jwt-secret"
   ```
   Please refer to `.env.example` for more details. Better if you copy paste and modify the `.env.example` file.

## Install TypeScript
Before proceeding, install TypeScript globally:
```sh
pnpm install -g typescript
```

## Compile TypeScript to JavaScript
Run the following command from the project root to transpile all TypeScript files to JavaScript:
```sh
tsc --outDir ./dist --rootDir ./src
```

## Start the Project
To start the development server:
```sh
pnpm run dev
```

To start both the TypeScript compiler in watch mode and the server concurrently:
```sh
pnpm run start:dev
```

## Available Scripts
The following scripts are included in the `package.json`:

- **`pnpm run dev`** – Runs the development server with `nodemon` and `ts-node`.
- **`pnpm run start:dev`** – Runs `tsc` in watch mode and the dev server concurrently.
- **`pnpm run start`** – Runs the compiled JavaScript code from the `dist` directory.
- **`pnpm run format`** – Formats the code using Prettier.
- **`pnpm run prisma:migrate`** – Runs Prisma migrations.
- **`pnpm run prisma:generate`** – Generates Prisma client code.
- **`pnpm test`** – Placeholder for test scripts.

## Integrated Technologies
This template includes support for the following:
- **Mongoose** (MongoDB ORM)
- **Prisma** (Database ORM)
- **ioredis** (Redis client)
- **TypeScript Interfaces** (for type safety)

## Dependencies
The project includes essential packages for authentication and API development:

### Runtime Dependencies:
```json
{
  "@prisma/client": "6.3.1",
  "@types/jsonwebtoken": "^9.0.8",
  "@types/uuid": "^10.0.0",
  "argon2": "^0.41.1",
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^4.21.2",
  "ioredis": "^5.5.0",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.10.0",
  "morgan": "^1.10.0",
  "nodemon": "^3.1.9",
  "prettier": "^3.5.0",
  "uuid": "^11.0.5",
  "zod": "^3.24.1"
}
```

### Development Dependencies:
```json
{
  "@types/cors": "^2.8.17",
  "@types/express": "^5.0.0",
  "@types/morgan": "^1.9.9",
  "@types/node": "^22.13.1",
  "concurrently": "^9.1.2",
  "prisma": "^6.3.1",
  "ts-node": "^10.9.2",
  "tsconfig-paths": "^4.2.0",
  "tslib": "^2.8.1",
  "typescript": "^5.7.3"
}
```

This template provides a well-structured foundation for building authentication systems in **Node.js with TypeScript**. 🚀

