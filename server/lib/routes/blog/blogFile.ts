import { Router, Request, Response } from 'express';

console.log(process.env.cloud_name);


export class FileUpload {

    constructor(private router: Router) {

    }

    /**
     * fileUploader
     */
    public fileUploader() {
        this.router.post('/file', (req, res) => {
            console.log('isnide ddsdsd')
            const fileUrl = req.body.fileUrl;

            // function(result) {
            //     console.log(result)
            // };

        });
    }
}

