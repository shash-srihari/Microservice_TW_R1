import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { CreateTeamDto } from '../dto/create-team.dto';
import { CompanyService } from '../company/company.service';
import { TeamService } from '../team/team.service';
import { CompanyController } from '../company/company.controller';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly companyService: CompanyService,
    private readonly teamService: TeamService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('createCompany')
  @UseGuards(JwtAuthGuard)
  createCompany(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.createCompany(createCompanyDto);
  }

  @Get('fetchCompany/:companyId')
  @UseGuards(JwtAuthGuard)
  fetchCompany(@Param('companyId') companyId: string) {
    return this.companyService.fetchCompany(companyId);
  }

  @Get('getAllTeams')
  @UseGuards(JwtAuthGuard)
  getAllTeams() {
    return this.teamService.getAllTeams();
  }

  @Post('createTeam/:companyId')
  @UseGuards(JwtAuthGuard)
  createTeam(
    @Param('companyId') companyId: string,
    @Body() createTeamDto: CreateTeamDto,
  ) {
    return this.teamService.createTeam(companyId, createTeamDto);
  }

  @Get('fetchCompany')
  @UseGuards(JwtAuthGuard)
  fetchCompanyByName(@Query('name') name: string) {
    return this.companyService.fetchCompanyByName(name);
  }
}
