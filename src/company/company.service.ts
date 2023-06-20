import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company } from './company.model';
import { CreateCompanyDto } from '../dto/create-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private readonly companyModel: Model<Company>,
  ) {}

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const createdCompany = new this.companyModel(createCompanyDto);
    return createdCompany.save();
  }

  async fetchCompany(companyId: string): Promise<Company | null> {
    return this.companyModel.findById(companyId).exec();
  }

  async fetchCompanyByName(name: string): Promise<Company[]> {
    return this.companyModel.find({ companyName: name }).exec();
  }

}
