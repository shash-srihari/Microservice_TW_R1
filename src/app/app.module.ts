import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { CompanyController } from '../company/company.controller';
import { TeamController } from '../team/team.controller';
import { CompanyService } from '../company/company.service';
import { TeamService } from '../team/team.service';
//import { TeamModule } from '../team/team.module';
//import { CompanyModule } from '../company/company.module';
import { CompanySchema } from '../company/company.model';
import { TeamSchema } from '../team/team.model';
import { DatabaseModule } from 'src/database/database.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/microservice-db'),
    MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }]),
    MongooseModule.forFeature([{ name: 'Team', schema: TeamSchema }]),
    AuthModule,
    JwtModule.register({
      // Configure JWT options, such as secret key and token expiration
      secret: 'ShashankSrihariTechwondoe',
      signOptions: { expiresIn: '1h' }, // Example token expiration time (1 hour)
    }),
  ],
  controllers: [AppController, TeamController, CompanyController],
  providers: [AppService,
    TeamService,
    CompanyService],
})
export class AppModule {}
