import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { InterviewsModule } from './interviews/interviews.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MailsModule } from './mails/mails.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: false,
      migrationsRun: true,
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      ssl: {
        rejectUnauthorized: false,
      },
      logging: true,
    }),

    UsersModule,
    JobsModule,
    InterviewsModule,
    MailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
