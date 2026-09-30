import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../src/index.js';

describe('Part 1: API Integration Tests', () => {
  it('should pass placeholder test', () => {
    // TODO: Student implementation - Part 1: Integration Testing
    // Test user creation (POST /users)
    // Test ticket creation (POST /tickets)
    // Test auth middleware rejection (401 when X-User-Id is missing or invalid)
    // Test 404 responses for non-existent users and tickets
    // Test pagination and filtering on GET /tickets
    expect(true).toBe(true);
  });

  it('should create new user'), async () => {
    const res = await request(app).post('/users').send({
      name: 'John Doe',
      email: 'John@test.com'
    })

    expect(userRes.status).toBe(201);
  }

  it('should create a ticket'), async () => {
    const res = await request(app).post('/tickets').set(X-User-Id, "5").send({
      title: "Test Article",
      decription: "TODO"
    });

    expect(res.status).toBe(201)
  }


  it('should reject missing id'), async () => {
    const res = await request(app).post('/tickets').send({
      title: "Test Article",
      decription: "TODO"
    });

    expect(res.status).toBe(401)
  }


  it('should return 404 for missing users'), async () => {
    const resUser = await request(app).post('/users/6')
    const resTicket = await request(app).post('/tickets/30')

    expect(resUser.status).toBe(404)
    expect(resTicket.status).toBe(404)
  }
});
