import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LabelModule } from './label/label.module';
import { CaseModule } from './case/case.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env['MONGO_URL']),
    UserModule,
    LabelModule,
    CaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
