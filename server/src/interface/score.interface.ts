import { Document } from "mongoose";

export interface IScore extends Document {
    readonly name: string;
    readonly score: number;
    readonly lines: number;
    readonly level: number;
    readonly date: Date;
}