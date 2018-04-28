import { Component } from '@angular/core';
import {Data} from "../../models/Data";
import {Questions} from "../../models/Questions";

@Component({
    selector : 'app-admin',
    templateUrl: './admin-add.component.html',
    styleUrls: [ './admin-add.component.css' ]
})
export class AdminAddComponent {
    private data: Data;
    private quest: string;
    private rep1: string;
    private rep2: string;
    private rep3: string;
    private rep4: string;
    private noBonneRep: string;


    constructor(){
        this.data = JSON.parse(localStorage.getItem("data"));
    }

    addProd(){
        //this.nomProd = (<HTMLInputElement>document.getElementById('nomProd')).value;
        this.quest = (<HTMLInputElement>document.getElementById('quest')).value;
        this.rep1 = (<HTMLInputElement>document.getElementById('rep1')).value;
        this.rep2 = (<HTMLInputElement>document.getElementById('rep2')).value;
        this.rep3 = (<HTMLInputElement>document.getElementById('rep3')).value;
        this.rep4 = (<HTMLInputElement>document.getElementById('rep4')).value;
        this.noBonneRep = (<HTMLInputElement>document.getElementById('noBonneRep')).value;

        this.data.listeQuest[this.data.listeQuest.length] = new Questions(this.quest, this.rep1, this.rep2, this.rep3, this.rep4, parseInt(this.noBonneRep));
        localStorage.setItem("data", JSON.stringify(this.data));
        alert("Question enregistrée");
    }
}