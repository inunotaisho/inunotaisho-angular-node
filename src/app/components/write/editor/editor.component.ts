import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
declare var $ :any;
import * as Cloudinary from '@cloudinary/angular-5.x';

@Component({
    selector:'editor',
    templateUrl:'./editor.component.html' //template: portImgComponent
})

export default class EditorComponent implements OnInit {
    public editorOptions: any;

    ckeditorContent: string = '<p>Some html</p>';

    @Input()
    public  post: string;

    @Output()
    public onChange: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
        this.editorOptions = {
            placeholderText: 'Enter post here'
        }
    };

    modelChange(e) {
        this.onChange.emit(e);
    }
}