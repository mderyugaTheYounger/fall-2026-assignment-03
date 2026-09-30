import { Request, Response, NextFunction } from 'express';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  // TODO: Student implementation - Part 1: Authentication Middleware
  // Store the authenticated userId on res.locals.userId

  app.listen()
  if(req.method === 'POST' || req.method === 'PATCH'){
    if(req.header === null || isNan(req.header)){
      res.status(401).json({"Error: Unauthorized"})
      return;
    }
    res.locals.userId = req.UserId;
  }
  next();
}

export default authMiddleware;
