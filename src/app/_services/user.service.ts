import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Fitness} from '../place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';


const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    public static BaseUrl = "http://localhost:6565/";

    // currentItemData:Fitness={
    //   firstname:'',
    //   lastname:'',
    //   age:null,
    //   email:'',
    //   streetaddress:'',
    //   city:'',
    //   state:'',
    //   country:'',
    //   pincode:null,
    //   inr:null,
    //   paisa:null,
    //   trainerpreference:'',
    //   physiotherapist:'',
    //   packages:null}
    constructor(private http: HttpClient) { }
    postfitnessdata(data){
      return this.http.post(UserService.BaseUrl+'allfriends',data,httpOptions);
    }
    getfitnessdata() :Observable<Fitness[]>{
      return this.http.get<Fitness[]>(UserService.BaseUrl+'allfriends');
    }
    getClient(id:number):Observable<Fitness>{
      return this.http.get<Fitness>(`${UserService.BaseUrl+'allfriends'}/${id}`);
    }
    

    updateClient(client:Fitness){
      return this.http.put<void>(`${UserService.BaseUrl+'allfriends'}/${client.id}`,client,httpOptions);
    }
    deleteData(id: number):Observable<Fitness>{
      return this.http.delete<Fitness>(UserService.BaseUrl+'allfriends'+'/'+ id,httpOptions);

    }
    contactusdata(data){
      return this.http.post(UserService.BaseUrl+'contactus',data,httpOptions);
    }
   
}