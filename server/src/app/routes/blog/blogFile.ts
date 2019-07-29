import { Router, Request, Response } from 'express';

console.log(process.env.cloud_name);

const router: Router = Router();

router.post('/file', (req: Request, res: Response) => {
    console.log('isnide ddsdsd')
    const fileUrl = req.body.fileUrl;

    // function(result) {
    //     console.log(result)
    // };

});

export { router as FileUpload }


