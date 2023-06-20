import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Company extends Document {
  @Prop({ required: true })
  companyName!: string;

  @Prop({ required: true })
  companyCEO!: string;

  @Prop({ required: true })
  companyAddress!: string;

  @Prop({ required: true })
  inceptionDate!: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
