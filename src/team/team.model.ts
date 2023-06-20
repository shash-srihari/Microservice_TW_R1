import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Company } from '../company/company.model';

@Schema()
export class Team extends Document {
  @Prop({ required: true })
  teamLeadName!: string;

  @Prop({ type: Types.ObjectId, ref: 'Company', required: true })
  companyId!: Company;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
