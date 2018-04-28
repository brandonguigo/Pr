import { Component } from '@angular/core';
import {Produit} from "../../models/Models";

@Component({
    selector : 'app-admin',
    templateUrl: './admin-del.component.html',
    styleUrls: [ './admin-del.component.css' ]
})
export class AdminDelComponent {
    produits : Produit[];
    private nomDel: string;
    j = 0;
    ind = -1;

    constructor(){
        this.produits = JSON.parse(localStorage.getItem("listeProd"));
    }

    delProd(){
        this.nomDel = (<HTMLInputElement>document.getElementById('nomDel')).value;
        for (let p of this.produits){
            if (p.nom == this.nomDel){
                this.ind = this.j;
            }
            this.j++;
        }
        this.produits.splice(this.ind, 1);
        localStorage.setItem("listeProd", JSON.stringify(this.produits));
        alert("Produit supprimé avec succès");

    }
}