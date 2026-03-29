import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { SavingsController } from './savings.controller';
import { SavingsService } from './savings.service';
import { PredictiveEvaluatorService } from './services/predictive-evaluator.service';
import { InterestCalculationService } from './services/interest-calculation.service';
import { SavingsProduct } from './entities/savings-product.entity';
import { UserSubscription } from './entities/user-subscription.entity';
import { SavingsGoal } from './entities/savings-goal.entity';
import { InterestHistory } from './entities/interest-history.entity';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([
      SavingsProduct,
      UserSubscription,
      SavingsGoal,
      InterestHistory,
      User,
    ]),
  ],
  controllers: [SavingsController],
  providers: [SavingsService, PredictiveEvaluatorService, InterestCalculationService],
  exports: [SavingsService],
})
export class SavingsModule {}
