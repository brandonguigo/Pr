import { Component } from '@angular/core';
import {Data} from "../../models/Data";

@Component({
    selector : 'app-admin',
    templateUrl: './admin-del.component.html',
    styleUrls: [ './admin-del.component.css' ]
})
export class AdminDelComponent {
   private data : Data;
    private nomDel: string;
    private ind: any;


    constructor(){
        this.data = JSON.parse(localStorage.getItem("data"));
    }

    delProd(){
         this.nomDel = (<HTMLInputElement>document.getElementById('nomDel')).value;
        for (let q of this.data.listeQuest){
             if (q.question == this.nomDel){
                 this.ind = this.j;
                }
                this.j++;
         }
         this.data.listeQuest.splice(this.ind, 1);
         localStorage.setItem("data", JSON.stringify(this.data));
         alert("Question supprimée avec succès");

    }
}