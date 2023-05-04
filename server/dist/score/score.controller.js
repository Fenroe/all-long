"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreController = void 0;
const common_1 = require("@nestjs/common");
const score_service_1 = require("./score.service");
const create_score_dto_1 = require("../dto/create-score-dto");
let ScoreController = class ScoreController {
    constructor(scoreService) {
        this.scoreService = scoreService;
    }
    async getScores() {
        return this.scoreService.getAllScores();
    }
    async createScore(createScoreDto) {
        return this.createScore(createScoreDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "getScores", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_score_dto_1.CreateScoreDto]),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "createScore", null);
ScoreController = __decorate([
    (0, common_1.Controller)('scores'),
    __metadata("design:paramtypes", [score_service_1.ScoreService])
], ScoreController);
exports.ScoreController = ScoreController;
//# sourceMappingURL=score.controller.js.map