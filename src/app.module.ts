import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
	
require('dotenv').config()

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:`./env/${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
