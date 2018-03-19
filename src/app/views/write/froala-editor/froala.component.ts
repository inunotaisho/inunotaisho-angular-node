import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
declare var $ :any;
import * as Cloudinary from '@cloudinary/angular';

@Component({
    selector:'froala-editor',
    templateUrl:'./froala.component.html' //template: portImgComponent
})

export default class FroalaEditor implements OnInit {
    public editorOptions: any;

    @Input()
    public  post: string;

    @Output()
    public onChange: EventEmitter<any> = new EventEmitter();

    ngOnInit(){
        this.editorOptions = {
            placeholderText: 'Enter Blog Post Here',
            events: {
                'froalaEditor.initialized': function(editor) {
                    console.log('Here editor initialized', editor);
                }, 
                'froalaEditor.image.beforeUpload': (e, editor, images) => {
                    console.log(images);

                    //@TODO heee we save the images to cloudinary
                },
                'froalaEditor.file.beforeUpload': (e, editor, files) => {

                }
            },
            options: {
                fileUploadToS3: {
                    
                }
            }

        }
    };

    modelChange(e) {
        this.onChange.emit(e);
    }
}