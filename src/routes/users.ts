import { Router } from 'express';
import { getAllUsers, getUserById, createUser } from '../dal/users.ts'

const router = Router();

// TODO: Student implementation - Part 1: User Routes
// GET /users
// GET /users/:id
// POST /users

router.get('/', async function(_, res) {
  const users = await getAllUsers();
  res.json(users);
});

router.get('/:id', async function(req, res) {
  const id = Number(req.params.id);
  const user = await getUserById(id);

  if(!user){
    return res.status(404);
  }

  res.json(user);
})

router.post('/users', async function(req, res) {
  const newUser = req.body;
  const ret = await createUser(newUser);
  return res.status(201).json(newUser);
})

export default router;
