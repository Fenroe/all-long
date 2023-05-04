import { ScoreService } from './score.service';
import { CreateScoreDto } from 'src/dto/create-score-dto';
export declare class ScoreController {
    private readonly scoreService;
    constructor(scoreService: ScoreService);
    getScores(): Promise<import("../interface/score.interface").IScore[]>;
    createScore(createScoreDto: CreateScoreDto): any;
}
