import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamSchema } from './team.model';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  ],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
