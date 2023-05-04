import { Model } from 'mongoose';
import { CreateScoreDto } from 'src/dto/create-score-dto';
import { IScore } from 'src/interface/score.interface';
export declare class ScoreService {
    private scoreModel;
    constructor(scoreModel: Model<IScore>);
    getAllScores(): Promise<IScore[]>;
    createScore(createScoreDto: CreateScoreDto): Promise<IScore>;
}
