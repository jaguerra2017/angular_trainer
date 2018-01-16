import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']/*,
    providers: [DataService]*/
})
export class FormularioComponent implements OnInit {

    states: any = [];
    countrys: any = [];
    meals: any = [];
    public model: any = {};

    constructor(private http: Http, public dataService: DataService, private router: Router) {

        // this.http.get('data/states.json').subscribe(res => this.states = res.json());
    }

    ngOnInit() {
        this.dataService.getInfo('states.json').then((response) => {
            this.states = response.states;
            // console.log(response);
        })
            .catch(reason =>
            {
                console.log(reason);
                alert('Ocurrio un error mientras se cargaba la pagina');
            });


        this.dataService.getInfo('countrys.json').then((response) => {
            this.countrys = response.data;
        })
            .catch(reason =>
            {
                console.log(reason);
                alert('Ocurrio un error mientras se cargaba la pagina');
            });

        this.dataService.getInfo('meals.json').then((response) => {
            this.meals = response.data;
        })
            .catch(reason =>
            {
                console.log(reason);
                alert('Ocurrio un error mientras se cargaba la pagina');
            });
    }

    sendData() {
        this.dataService.setFormData(this.model);
        this.router.navigate(['/confirm']);
    }
}
