import { UserScore } from "./UserScores";

export interface GlobalState {
    activePieceTiles: number[];
    gamePaused: boolean;
    occupiedTiles: number[];
    nextPieceTiles: number[];
    pieceOrientation: 'spawn' | 'upright' | 'reverse spawn' | 'reverse upright';
    pieceType: string;
    intro: boolean;
    outro: boolean;
    score: number;
    nextPieceType: string;
    lines: number;
    dropPoints: number;
    showModal: boolean;
    previewPieceTiles: number[];
    modalContents: string;
    localScores: Array<UserScore>;
    gameId: number;
    level: number;
}