import { Component } from '@angular/core';
import {Data} from "../../models/Data";

@Component({
    selector : 'app-admin',
    templateUrl: './admin-mod.component.html',
    styleUrls: [ './admin-mod.component.css' ]
})

export class AdminModComponent {
    private data : Data;
    private nomMod: string;
    private ind = -1;
    private j = 0;

    constructor(){
        this.data = JSON.parse(localStorage.getItem("data"));
    }
    
    affInfProd(){
         this.nomMod = (<HTMLInputElement>document.getElementById('nomMod')).value;
         for (let q of this.data.listeQuest){
                if (q.question == this.nomMod){
                 this.ind = this.j;
                 console.log(this.ind);
             }
             this.j++;
         }
         document.body.innerHTML += "<div id='infoQuest'><form>" +
             "<input type='text' id='quest' value='"+this.data.listeQuest[this.ind].question+"'>" +
             "<input type='text' id='rep1' value='"+this.data.listeQuest[this.ind].reponse1+"'>" +
             "<input type='text' id='rep2' value='"+this.data.listeQuest[this.ind].reponse2+"'>" +
             "<input type='text' id='rep3' value='"+this.data.listeQuest[this.ind].reponse3+"'>" +
             "<input type='text' id='rep4' value='"+this.data.listeQuest[this.ind].reponse4+"'>" +
             "<input type='text' id='noBonneRep' value='"+this.data.listeQuest[this.ind].noRep+"'></form>" +
             "<button onclick='alert(\"Modification effectuée avec succès\")'>Modifier le produit</button>" +
             "</div>";
    }

    modProd(){
        // this.produits[this.ind].nom = (<HTMLInputElement>document.getElementById('nomProd')).value;
        // this.produits[this.ind].descriptionCourte = (<HTMLInputElement>document.getElementById('descrCProd')).value;
        // this.produits[this.ind].descriptionLongue = (<HTMLInputElement>document.getElementById('descrLProd')).value;
        // this.produits[this.ind].prix = parseFloat((<HTMLInputElement>document.getElementById('prixProd')).value);
        //
        // alert("Modification effectuée avec succès");
    }
}