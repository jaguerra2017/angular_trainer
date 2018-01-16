import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponseServerComponent } from './response-server/response-server.component';


import {FormularioComponent} from './formulario.component';
import {ConfirmationComponent} from './confirmation.component';

const routes: Routes = [
    { path: '', redirectTo: '/form', pathMatch: 'full' },
    { path: 'form',  component: FormularioComponent },
    { path: 'confirm',  component: ConfirmationComponent},
    { path: 'response',  component: ResponseServerComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
