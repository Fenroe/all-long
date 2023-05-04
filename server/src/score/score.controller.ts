import { Body, Controller, Get, Post } from '@nestjs/common';
import { ScoreService } from './score.service';
import { CreateScoreDto } from 'src/dto/create-score-dto';

@Controller('scores')
export class ScoreController {
    constructor(private readonly scoreService: ScoreService) {}

    @Get()
    async getScores() {
        return this.scoreService.getAllScores()
    }

    @Post()
    async createScore(@Body() createScoreDto: CreateScoreDto) {
        return this.scoreService.createScore(createScoreDto)
    }
}
