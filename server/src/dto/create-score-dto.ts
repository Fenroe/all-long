import { IsNotEmpty, IsNumber, IsString, IsDate, MaxLength, MinLength } from 'class-validator'

const minimumNameLength = 0
const maximumNameLength = 10

export class CreateScoreDto {
    @IsString()
    @MinLength(minimumNameLength)
    @MaxLength(maximumNameLength)
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly score: number;

    @IsNumber()
    @IsNotEmpty()
    readonly lines: number;

    @IsNumber()
    @IsNotEmpty()
    readonly level: number;
}
