import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { LabelModule } from './label/label.module';
import { CaseModule } from './case/case.module';
import { AuthMiddleware } from './middleware/authorization';

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
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        {path: 'case', method: RequestMethod.GET},
        {path: 'case/*', method: RequestMethod.PATCH},
        {path: 'label', method: RequestMethod.GET}
      )
  }
}
