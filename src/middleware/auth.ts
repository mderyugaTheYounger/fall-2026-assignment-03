import { Request, Response, NextFunction } from 'express';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  // TODO: Student implementation - Part 1: Authentication Middleware
  // Store the authenticated userId on res.locals.userId

  const id = req.headers['x-user-id'];
  if(req.method === 'POST' || req.method === 'PATCH'){
    if(id === null || isNaN(id)){
      return res.status(401).json({Error: "Unauthorized"});
    }
    res.locals.userId = Number(id);
  }
  next();
}

export default authMiddleware;
