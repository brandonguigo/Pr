import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {AdminAddComponent} from "./add/admin-add.component";
import {AdminDelComponent} from "./del/admin-del.component";
import {AdminModComponent} from "./mod/admin-mod.component";

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'add',
                component: AdminAddComponent
            },
            {
                path: 'del',
                component: AdminDelComponent
            },
            {
                path: 'mod',
                component: AdminModComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes,{
            enableTracing: true
        })],
    exports: [RouterModule],
    providers: []
})
export class AdminRoutingModule {
}