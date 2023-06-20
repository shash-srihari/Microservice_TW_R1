import { Controller, Get, Post, Body, Param, Query, UseGuards, Req } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

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

  @Get('fetchCompany')
  @UseGuards(JwtAuthGuard)
  fetchCompanyByName(@Query('name') name: string) {
    return this.companyService.fetchCompanyByName(name);
  }
}
