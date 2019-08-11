import { auth } from './../../middleware/loggedInUser';
import { Router, Request, Response, NextFunction } from 'express';
import { db } from '../../../models';

const router: Router = Router();


/**
 * DELETE individual article.
 */

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    db.Blog.remove({ _id: req.params.id }, (err) => {
        console.log('deleeeeeee', err);
        if (err) {
            // res.send('Error deleting file');
        } else {
            // res.send('Successfully deleted the Shit');
        }
    });

});


/**
 * Delete article form.
 */

router.get('/:id/delete', (req: Request, res: Response, next: NextFunction) => {
    db.Blog.findById(req.params.id).then((err: any) => {  
      if (err) {
        // res.send('Error deleting file');
      } else {
        // res.send('Successfully deleted the Shit');
      }
    }).catch((error: any) => {
        res.status(500).send(error);
     });
  });

export { router as BlogDelete };

