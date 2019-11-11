import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from './environments/environment.prod';
import { Employee } from './app/employee';

@Injectable()
export class DataService{
    constructor(private http:HttpClient){}
    serverUrl = environment.serverUrl;
    httpHeader = new HttpHeaders({'Content-Type':'application/json','Accept':'*/*','Authorization':'Basic ' + btoa('admin:password')});
    getAllEmployees(){
       return this.http.get(this.serverUrl+'employees',{headers: this.httpHeader});

    }
    addEmployee(employee:Employee){
        return this.http.post(this.serverUrl+'addEmployee',JSON.stringify(employee),{headers: this.httpHeader});
    }
}