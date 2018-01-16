import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-response-server',
  templateUrl: './response-server.component.html',
  styleUrls: ['./response-server.component.css']
})
export class ResponseServerComponent implements OnInit {

  message = '';
  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit() {
      if (this.dataService.getFormData().first_name !== undefined) {
          this.dataService.getInfo('form.json').then((response) => {
              this.message = response.message;
          })
              .catch(reason =>
              {
                  console.log(reason);
                  alert('Ocurrio un error mientras se cargaba la pagina');
              });
      }
  }

  goHome() {
      this.router.navigate(['/']);
  }
}
