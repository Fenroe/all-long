import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateScoreDto } from 'src/dto/create-score-dto';
import { IScore } from 'src/interface/score.interface';

@Injectable()
export class ScoreService {
    constructor(
        @InjectModel('Score') private scoreModel:Model<IScore>
        ) {}

    async getAllScores(): Promise<IScore[]> {
        const scoreData = await this.scoreModel.find()
        if (!scoreData || scoreData.length === 0) {
            throw new NotFoundException('Scores data not found!')
        }
        return scoreData
    }
    async createScore(createScoreDto: CreateScoreDto): Promise<IScore> {
        const newScore = await new this.scoreModel(createScoreDto)
        return newScore.save()
    }
}
