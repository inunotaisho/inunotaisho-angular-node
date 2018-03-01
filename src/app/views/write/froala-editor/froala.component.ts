import { Component, OnInit  } from '@angular/core';
declare var $ :any;

@Component({
    selector:'froala-editor',
    templateUrl:'./frola.component.html' //template: portImgComponent
})

export default class froalaEditor implements OnInit {
    ngOnInit(){
        $.FroalaEditor({
            // Set the image upload parameter.
            imageUploadUrl: '',

            // Set request type.
            imageUploadMethod: 'POST',

            // Allow to upload PNG and JPG.
            imageAllowedTypes: ['jpeg', 'jpg', 'png']
        })
    };
}