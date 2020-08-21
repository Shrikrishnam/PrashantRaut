import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {

  constructor(private clientservice:UserService,private router:Router) { }

  public dataList=[];

  

  ngOnInit() {
this.getfitness();

  }
  
  getfitness() {
    return this.clientservice.getfitnessdata().subscribe(data=>this.dataList=data);

  }
  editAppointment(clientId:number){
    this.router.navigate(['place-fitness-trainer-appointment',clientId])  
  } 
  
  deleteData(id:number){
    if(confirm("Are you sure to delete  SL NO "+id+" Appointment")){
    this.clientservice.deleteData(id).subscribe(
      data=>this.getfitness());
    }

    
  }
  


  }
