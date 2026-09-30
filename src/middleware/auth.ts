import { Request, Response, NextFunction } from 'express';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  // TODO: Student implementation - Part 1: Authentication Middleware
  // Store the authenticated userId on res.locals.userId

  app.listen()
  const id = req.headers['X-User-Id'];
  if(req.method === 'POST' || req.method === 'PATCH'){
    if(id === null || isNan(id)){
      return res.status(401).json({"Error: Unauthorized"});
    }
    res.locals.userId = req.UserId;
  }
  next();
}

export default authMiddleware;
