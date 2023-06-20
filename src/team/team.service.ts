import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from './team.model';
import { CreateTeamDto } from '../dto/create-team.dto';

@Injectable()
export class TeamService {
  constructor(@InjectModel(Team.name) private readonly teamModel: Model<Team>) {}

  async createTeam(companyId: string, createTeamDto: CreateTeamDto): Promise<Team> {
    const team = new this.teamModel({
      teamLeadName: createTeamDto.teamLeadName,
      companyId: companyId,
    });
    return team.save();
  }

  async getAllTeams(): Promise<Team[]> {
    return this.teamModel.find().exec();
  }
  
}
