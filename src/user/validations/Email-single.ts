import {
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator';

import { UserRepository } from 'src/database/repository';

export class EmailSingleValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
