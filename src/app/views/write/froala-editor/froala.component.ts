import { Component, OnInit  } from '@angular/core';
declare var $ :any;

@Component({
    selector:'froala-editor',
    templateUrl:'./frola.component.html' //template: portImgComponent
})

export default class FroalaEditor implements OnInit {
    ngOnInit(){
        $.FroalaEditor(function (e:any){
            e.preventDefault;
        })
    };
}