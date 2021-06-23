import { Router } from 'express';
import { CreateUserController } from './controlers/CreateUserController';
import { CreateTagController } from './controlers/CreateTagController';
const router = Router();

const createUserController = new CreateUserController();
router.post('/users', createUserController.handle);

const createTagController = new CreateTagController();
router.post('/tags', createTagController.handle);

export { router };
