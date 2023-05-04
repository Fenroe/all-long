import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScoreSchema } from './schemas/score.schema';
import { ScoreService } from './score/score.service';
import { ScoreController } from './score/score.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature(
      [
        { name: 'Score', schema: ScoreSchema },
      ]
    )
  ],
  controllers: [AppController, ScoreController],
  providers: [AppService, ScoreService],
})
export class AppModule {}
