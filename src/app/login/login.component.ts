import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Data} from "../models/Data";

@Component({
    selector : 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})

export class LoginComponent{
    private id: string;
    private mdp: string;
    private data: Data;

    constructor(public router: Router) {
        if (!(localStorage.getItem("idj") === null)){
            this.router.navigate(['/quizz', 0]);
        }
    }

    submitData(){
        this.id = (<HTMLInputElement>document.getElementById('id')).value;
        this.mdp = (<HTMLInputElement>document.getElementById('passwd')).value;

        this.data = JSON.parse(localStorage.getItem("data"));
        for (let j of this.data.listeJoueur){
            if (this.id == j.id){
                if (this.mdp == j.password){

                    if (j.id == "admin"){
                        //TODO NAVIGUER VERS PAGE DES ADMIN
                    }else{
                        localStorage.setItem("idj", this.id);
                        this.router.navigate(['/quizz', 0]);
                    }
                }
            }
        }

    }

}