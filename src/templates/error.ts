import { Response } from "express";
import { ZodError } from 'zod';

export function ErrorHandler(err:unknown, res:Response){
    if (err instanceof ZodError) {
        const errorFields = err.errors.map((error) => error.path.join("."));
        res.status(400).json({ status: 400, message: "Validation error", data: errorFields });
    } else {
        console.error("An unexpected error occurred:", err);
        res.status(500).json({ status: 500, message: "Internal server error", data: {} });
    }
}