import { Controller, Post, Body, Param, Get, UseGuards } from "@nestjs/common";
import { TeamService } from "./team.service";
import { CreateTeamDto } from "../dto/create-team.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller("teams")
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post("createTeam/:companyId")
  @UseGuards(JwtAuthGuard)
  createTeam(
    @Param("companyId") companyId: string,
    @Body() createTeamDto: CreateTeamDto
  ) {
    // console.log(companyId);
    return this.teamService.createTeam(companyId, createTeamDto);
  }

  @Get("getAllTeams")
  @UseGuards(JwtAuthGuard)
  getTeamById(@Param("teamId") teamId: string) {
    return this.teamService.getAllTeams();
  }
}
