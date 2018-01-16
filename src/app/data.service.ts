import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
    public formData: any;

    constructor(private http: Http) {
        this.formData = {};
    }

    getInfo(search): any {
        return this.http.get('/data/' + search, this.createRequestOptions())
            .toPromise()
            .then(response => response.json())
            .catch(function (error: any) {
                console.error('An error o()ccurred', error);
                return Promise.reject(error.message || error);
            });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private createRequestOptions() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const options = new RequestOptions({ headers: headers });
        return options;
    }

    public setFormData(data) {
        this.formData = data;
    }

    public getFormData() {
       return this.formData;
    }
}
