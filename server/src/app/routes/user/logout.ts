import { Router, Request, Response } from 'express';
import { User } from '../../../models/user';

const router: Router = Router();

router.get('/logout', (req: Request, res: Response) => {
  req.session.destroy(() => {
    res.status(200).json({ message: 'logout successful' });
  });
});


export { router as Logout };