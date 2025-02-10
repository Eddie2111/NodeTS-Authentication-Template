import dotenv from "dotenv";
import { Connect_cache } from "@/lib/ioredis";
import { Mongo_Connect } from "@/lib/mongo";

dotenv.config();

class InitiateEnvironment {
    private static _instance: InitiateEnvironment;
    private fields: { [key: string]: string } = {};

    private constructor() {
        this.loadEnvironmentVariables();
    }

    private loadEnvironmentVariables() {
        this.fields = process.env as { [key: string]: string };
    }

    public static getInstance(): InitiateEnvironment {
        if (!InitiateEnvironment._instance) {
            InitiateEnvironment._instance = new InitiateEnvironment();
        }
        return InitiateEnvironment._instance;
    }

    public getEnvironmentVariable(variable: string): string {
        if (this.fields[variable]) {
            return this.fields[variable];
        }
        throw new Error(`Environment variable ${variable} not found`);
    }

    public async init() {
        if (this.fields.REDIS_URL) {
            await Connect_cache(this.fields.REDIS_URL);
            console.log("Redis connected successfully");
        }
        
        if (this.fields.MONGO_URL) {
            await Mongo_Connect();
            console.log("MongoDB connected successfully");
        }

        if (!this.fields.PORT) {
            console.log("Please setup .env file copying the .env.example to start the project properly");
            process.exit(1);
        }
    }

    public getValues(): { [key: string]: string } {
        return this.fields;
    }
}

export const envInstance = InitiateEnvironment.getInstance();
