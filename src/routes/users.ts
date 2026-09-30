import { Router } from 'express';

const router = Router();

// TODO: Student implementation - Part 1: User Routes
// GET /users
// GET /users/:id
// POST /users

interface User {
  name: string;
  email: string;
}

let users: User[] = [
  {name: "John Doe", email: "John@test.com"},
  {name: "Jane Doe", email: "Jane@test.com"},
]

router.get('/users', function(_, res) {
  return res.json(users);
});

router.get('/users/id', function(req, res) {
  return res.json(users[id]);
})

router.post('/users', function(req, res) {
  const newUser = req.body;
  users.push(newUser)
  return res.satus(201).json({"New User Created"});
})

export default router;
