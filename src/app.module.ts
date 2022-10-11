import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
	  ConfigModule.forRoot({ envFilePath: '.env' }),
	  MongooseModule.forRoot(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;

  // configure(consumer) {
  //   mongoose.set('debug', this.isDev);
  // }
}
