import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FormularioComponent} from './formulario.component';
import {DataService} from './data.service';
import {AppRoutingModule} from './app-routing.module';
import { HttpModule } from '@angular/http';
import {ConfirmationComponent} from './confirmation.component';
import { ResponseServerComponent } from './response-server/response-server.component';

@NgModule({
    declarations: [
        AppComponent,
        FormularioComponent,
        ConfirmationComponent,
        ResponseServerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})


export class AppModule {
}
