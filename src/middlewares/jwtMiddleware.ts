import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  
  try {
    const decoded = verify(token, process.env.API_SECRET_KEY!);
    (req as any).user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

export default jwtMiddleware;