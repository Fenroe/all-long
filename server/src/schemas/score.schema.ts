import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ScoreDocument = HydratedDocument<Score>

@Schema()
export class Score {
    @Prop()
    name: string;

    @Prop()
    score: number;

    @Prop()
    lines: number;

    @Prop()
    level: number;
    
    @Prop()
    date: Date;
}

export const ScoreSchema = SchemaFactory.createForClass(Score)
