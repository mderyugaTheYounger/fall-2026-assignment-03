import { Router } from 'express';
import {getAllTickets, getTicketById, createTicket, updateTicketStatus} from '../dal/tickets.ts'
import auth from '../middleware/auth.ts'

const router = Router();

// TODO: Student implementation - Part 1: Ticket Routes
// GET /tickets
// GET /tickets/:id
// POST /tickets
// PATCH /tickets/:id/status
router.get('/', async function (req, res) {
  const { limit, offset, status} = req.query;
  const tickets = await getAllTickets({
    limit: limit !== undefined ? Number(limit) : undefined,
    offset: offset !== undefined ? Number(limit) : undefined,
    status: offset !== undefined ? Number(limit) : undefined,
  });

  res.status(200).json(tickets);
  
})

router.get('/:id', async function (req, res) {
  const id = Number(req.params.id);

  if(isNaN(id) || id<0){
    return res.status(400);
  }

  const ticket = await getTicketById(id);

  if(!ticket){
    return res.status(404);
  }

  res.status(200).json(ticket);

})

router.post('/', auth, async function (req, res) {
  const {title, description} = req.body;
  const creator_id = res.locals.userId;


  if(!title || !description){
    return res.status(400);
  }

  const createdTicket = createTicket({
    title: title.trim(),
    description: description,
    creator_id: creator_id,
    status: 'TODO',
  })

  res.status(201).json(createdTicket)
})

router.patch('/:id/status', auth, async function (req, res) {
  const id = Number(req.params.id);
  const status = req.body[0];

  if(!id || isNaN(id) || !status){
    return res.status(400);
  }

  const updatedTicket = await updateTicketStatus(id, status.trim());
  if(!updated){
    return res.status(404);
  }

  res.status(200).json(updatedTicket);
})
// TODO: Student implementation - Part 2: Time Log Routes
// POST /tickets/:id/time
// GET /tickets/:id/time

export default router;
