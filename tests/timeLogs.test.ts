import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../src/index.js';

describe('Part 2: Time Logs Tests', () => {
  it('should pass placeholder test', () => {
    // TODO: Student implementation - Part 2: Time Logging Tests
    // Log hours for a ticket (POST /tickets/:id/time)
    // Fetch total hours for a ticket (GET /tickets/:id/time)
    // Verify aggregation math
    expect(true).toBe(true);
  });

  it('should log hours for ticket, fetch total hours, and verify aggregation math'), async () => {
    const log1 = await request(app).post('/tickets/1/time').set('x-user-id', "5").send({hours : 1});
    const log2 = await request(app).post('/tickets/1/time').set('x-user-id', "5").send({hours : 2}); 
    expect(log1.status).toBe(201);
    expect(log2.status).toBe(201);

    const res = await request(app).get('tickets/1/time').set('x-user-id', "5");

    expect(res.status).toBe(200);
    expect(res.body).toBe({
      ticket_id: 1,
      total_hours: 3,
    })

  }
});
