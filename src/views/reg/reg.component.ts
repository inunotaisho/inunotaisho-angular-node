import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { NgForm, FormsModule } from '@angular/forms'

@Component({
    templateUrl:'./reg.component.html'
})

export class RegComponent implements OnInit{

    constructor(private http:Http){
    }

    registeration: {
        
    }
    user:{
        username: '',
        email: '',
        password: '',
        password_confirm: '',
        firstName: '',
        lastName: '',
    }

    onSubmit(user: NgForm){
        this.http.post('/users/register', user).then((res: Response) => {
            if(res.status === 200) {
                console.log(res);
            } else {
                console.log(res);
            }
        })
    }

    resetForm(registeration: NgForm) {
		
	}
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}