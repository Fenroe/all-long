import { IsNotEmpty, IsNumber, IsString, IsDate, MaxLength, MinLength } from 'class-validator'

const minimumNameLength = 0
const maximumNameLength = 10
export class CreateScoreDto {
    @IsString()
    @MinLength(0)
    @MaxLength(10)
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

    @IsDate()
    readonly date: Date;
}
