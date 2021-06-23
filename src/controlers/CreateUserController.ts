import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, admin } = req.body;

    const createUserService = new CreateUserService();

    try {
      const user = await createUserService.execute({ name, email, admin });
      return res.json(user.id);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}
export { CreateUserController };