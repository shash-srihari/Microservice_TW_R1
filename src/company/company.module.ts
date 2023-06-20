import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { Company, CompanySchema } from './company.model';
import { DatabaseModule } from '../database/database.module';
//import { TeamModule } from './team.module';

@Module({
  imports: [ 
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
