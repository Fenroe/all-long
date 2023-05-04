import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { NodeWorker } from 'inspector';
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
    
    @Prop({ default: new Date() })
    date: Date;
}

export const ScoreSchema = SchemaFactory.createForClass(Score)
