import { AppSettings } from './../../../common/config';
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import * as Cloudinary from '@cloudinary/angular-5.x';

declare var $ :any;

@Component({
    selector:'editor',
    templateUrl:'./editor.component.html' //template: portImgComponent
})

export default class EditorComponent implements OnInit {
    public editorOptions: any;

    
     @Input()
    public  post: string;

     @Output()
    public onChange: EventEmitter<any> = new EventEmitter();

     ngOnInit() {
        this.editorOptions = {
            placeholderText: 'Enter post here',
            charCounterCount: true,

            // Set the file upload types.
            fileAllowedTypes: AppSettings.ALLOWED_DOCUMENT_TYPES,

            // Set the file upload parameter.
            fileUploadParam: AppSettings.GET_FILE_REQUEST,

            // Allow to upload PNG and JPG.
            imageAllowedTypes: AppSettings.EDITOR_ALLOWED_IMAGE_TYPES,

            // Set the image upload parameter.
            imageUploadParam: AppSettings.GET_FILE_REQUEST,
    
            // Set max image size to 5MB.
            imageMaxSize: AppSettings.MAXIMUM_IMAGE_UPLOAD_SIZE,
    
            //params for handling image upload
             events: {
                'froalaEditor.image.error': (e, editor, error, response) => {
                    console.log(error);
                }
            }
        }
    };

     modelChange(e) {
        this.onChange.emit(e);
    }
}