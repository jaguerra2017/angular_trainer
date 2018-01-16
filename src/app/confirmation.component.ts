import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {DataService} from './data.service';
import {Router} from '@angular/router';
import {fadeInAnimation} from './animations';

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css'],
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' },
    /*providers: [DataService]*/
})
export class ConfirmationComponent implements OnInit {

    datos: any = {};

    constructor(private router: Router, private location: Location, public dataService: DataService) {
    }

    ngOnInit() {
        this.datos = this.dataService.getFormData();
    }

    goBack(): void {
        this.location.back();
    }

    update() {
        this.router.navigate(['/response']);
    }

}
