import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreatedUserCommand } from '../../../domain/model/command/created-user.command';
import { User } from '../../../domain/model/aggregates/user.entity';
@CommandHandler(CreatedUserCommand)
export class CreatedUserHandler implements ICommandHandler<CreatedUserCommand> {
  constructor(private publisher: EventPublisher) {}

  async execute(command: CreatedUserCommand) {
    const { username, email, password } = command;
    const user: User = new User();
    user.username = username;
    user.email = email;
    user.password = password;

    //TODO: save new user
    user.onCreation();
    user.commit();
  }
}
