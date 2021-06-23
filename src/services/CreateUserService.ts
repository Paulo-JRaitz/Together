import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IUserRequest {
  name: string;
  email: string;
  admin: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    async function isValidMail(mail: string) {
      const mailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return mailRegex.test(mail);
    }

    if (!email) {
      throw new Error('Email address is required!');
    }

    if ((await isValidMail(email)).valueOf() == false) {
      throw new Error('Invalid email address!');
    }

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    var user = usersRepository.create({
      name,
      email,
      admin,
    });

    usersRepository.save(user);
    return user;
  }
}
export { CreateUserService };
