import { Router } from 'express';
import { getAllUsers, getUserById, createUser } from '../dal/users.ts'

const router = Router();

// TODO: Student implementation - Part 1: User Routes
// GET /users
// GET /users/:id
// POST /users

router.get('/', async function(_, res) {
  const users = await getAllUsers();
  res.status(200).json(users);
});

router.get('/:id', async function(req, res) {
  let id = req.params.id;
  console.log(id);
  if(isNaN(id)){
    return res.status(400)
  }

  id = Number(id);
  const user = await getUserById(id);

  if(!user){
    return res.status(404);
  }

  res.status(200).json(user);
})

router.post('/', async function(req, res) {
  const newUser = req.body;
  const ret = await createUser(newUser);
  return res.status(201).json(newUser);
})

export default router;
