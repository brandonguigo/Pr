import {NgModule} from "@angular/core";
import {RouterModule} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AdminAddComponent} from "./add/admin-add.component";
import {AdminDelComponent} from "./del/admin-del.component";
import {AdminModComponent} from "./mod/admin-mod.component";

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AdminComponent,
        AdminAddComponent,
        AdminDelComponent,
        AdminModComponent
    ],
    exports: [
        AdminComponent,
        AdminAddComponent,
        AdminDelComponent,
        AdminModComponent
    ]
})
export class AdminModules {
}