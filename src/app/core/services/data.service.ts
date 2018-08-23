import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder, IState, IPagedResults, IApiResponse } from '../../shared/interfaces';
const API_URL = environment.apiUrl;
@Injectable()
export class DataService {

    customersBaseUrl = '/api/Employee/';
    ordersBaseUrl = '/api/orders';
    orders: IOrder[];
    states: IState[];

    constructor(private http: HttpClient) { }



    getCustomersPage_py(page: number, pageSize: number): Observable<IPagedResults<ICustomer[]>> {
        return this.http.get<ICustomer[]>(API_URL + this.customersBaseUrl,
            { observe: 'response' })
            .pipe(
            map((res: any) => {

                const totalRecords = 2;
                const customers = res.body as ICustomer[];
                this.calculateCustomersOrderTotal(customers);
                return {
                    results: customers,
                    totalRecords: totalRecords
                };
            }),
        );


    }




    getCustomer(id: number): Observable<ICustomer> {

        return this.http.get<ICustomer>(API_URL + this.customersBaseUrl + id)
            .pipe(
            map(customer => {
                this.calculateCustomersOrderTotal([customer]);
                return customer;
            }),
            catchError(this.handleError)
            );
    }

    insertCustomer(customer: ICustomer): Observable<ICustomer> {

        const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

        return this.http.post<ICustomer>(API_URL + this.customersBaseUrl, JSON.stringify(customer), httpOptions)
            .pipe(catchError(this.handleError));
    }

    updateCustomer(customer: ICustomer): Observable<boolean> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.put<IApiResponse>(API_URL + this.customersBaseUrl + customer.id + '/', JSON.stringify(customer),httpOptions)
            .pipe(
            map(res => res.status),
            catchError(this.handleError)
            );
    }

    deleteCustomer(id: number): Observable<boolean> {
            const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.delete<IApiResponse>(API_URL + this.customersBaseUrl + '/' + id,httpOptions)
            .pipe(
            map(res => res.status),
            catchError(this.handleError)
            );
    }

    getStates(): Observable<IState[]> {
        return this.http.get<IState[]>(API_URL + '/api/states')
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }

    calculateCustomersOrderTotal(customers: ICustomer[]) {
        for (const customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (const order of customer.orders) {
                    total += order.itemCost;
                }
                customer.orderTotal = total;
            }
        }
    }

    // Not using now but leaving since they show how to create
    // and work with custom observables

    // Would need following import added:
    // import { Observer } from 'rxjs';

    // createObservable(data: any): Observable<any> {
    //     return Observable.create((observer: Observer<any>) => {
    //         observer.next(data);
    //         observer.complete();
    //     });
    // }

}
