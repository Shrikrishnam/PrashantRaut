import { Component, OnInit} from '@angular/core';
import { UserService } from '../_services';
import { Router, ActivatedRoute } from '@angular/router';


import { FormBuilder,Validators, AbstractControl, FormGroup } from '@angular/forms';


export class Fitness {
  
  constructor(
    public firstname:string,
    public lastname: string,
    public age:number,
    public phonenumber: number,
    public email: string,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string,
    public inr: number,
    public paisa: number,
    public id:number
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {
  
  constructor(
		private fb: FormBuilder,
		private userService: UserService,
		private router: Router,
		private aroute: ActivatedRoute
	) {}

  fitnessForm:FormGroup;
  client: Fitness;

 
  namePattern ="[A-Za-z ]{1,16}";
  pincodePattern="^[1-9]{1}[[0-9]{2}[0-9]{3}$";
  phonePattern="^[1-9]{1}[0-9]{9}$";
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  ngOnInit() { 
    this.fitnessForm= this.fb.group({
      firstname:['',[Validators.required,Validators.pattern(this.namePattern),Validators.maxLength(16)]],
        lastname:['',[Validators.required,Validators.pattern(this.namePattern),Validators.maxLength(16)]],
        age:[null,[Validators.required,this.ageValidator]],
        phonenumber:[null,[Validators.required,Validators.pattern(this.phonePattern)]],
        email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
        streetaddress:['',Validators.required],
        city:['',Validators.required],
        state:['',Validators.required],
        country:['',Validators.required],
        pincode:[null,[Validators.required]],
        trainerpreference:['',Validators.required],
        physiotherapist:['',Validators.required],
        packages:['',Validators.required],
        inr:[null,Validators.required],
        paisa:[null,Validators.required]
        
    });
  
    this.aroute.paramMap.subscribe((params) => {
      const clientId = +params.get("id");
      if (clientId) {
        this.getClient(clientId);
      }else{
        this.client = {
          firstname:'',
          lastname:'',
          age:null,
          phonenumber:null,
          email:'',
          streetaddress:'',
          city:'',
          state:'',
          country:'',
          pincode:null,
          trainerpreference:'',
          physiotherapist:'',
          packages:'',
          inr:null,
          paisa:null,
          id:null
        }
      }
    });
  }
  


getClient(id: number) {
  return this.userService.getClient(id).subscribe(
    (client: Fitness) => {
      this.editClient(client), (this.client = client);
    },
    (err: any) => console.log("error", err)
  );
}

editClient(client: Fitness) {
  this.fitnessForm.patchValue({
    firstname: client.firstname,
    lastname: client.lastname,
    age: client.age,
    phonenumber: client.phonenumber,
    email: client.email,
    streetaddress: client.streetaddress,
    city: client.city,
    state: client.state,
    country: client.country,
    pincode: client.pincode,
    trainerpreference: client.trainerpreference,
    physiotherapist: client.physiotherapist,
    packages: client.packages,
    inr: client.inr,
    paisa: client.paisa,
  });
}

 ageValidator (control: AbstractControl):{[key: string]: boolean} | null {

    if(control.value <18 || control.value> 60){
      return {'ageValidator': true}
    }
    return null;
  };
  onSubmit() {
    this.mapFormValuesToClientModel();
    if(this.client.id){
		return this.userService.updateClient(this.client).subscribe(
			() => this.router.navigateByUrl("view-appointment"),
			(err: any) => console.log(err)
		);
  }else{
    return (
			this.userService.postfitnessdata(this.fitnessForm.value).subscribe(
				(data) => console.log("success", data),
				(error) => console.log("error", error)
			),
			this.router.navigateByUrl("view-appointment")
		);
  }
  }
  mapFormValuesToClientModel() {
		this.client.firstname = this.fitnessForm.value.firstname;
		this.client.lastname = this.fitnessForm.value.lastname;
		this.client.age = this.fitnessForm.value.age;
		this.client.phonenumber = this.fitnessForm.value.phonenumber;
		this.client.email = this.fitnessForm.value.email;
		this.client.streetaddress = this.fitnessForm.value.streetaddress;
		this.client.city = this.fitnessForm.value.city;
		this.client.state = this.fitnessForm.value.state;
		this.client.country = this.fitnessForm.value.country;
		this.client.pincode = this.fitnessForm.value.pincode;
		this.client.trainerpreference = this.fitnessForm.value.trainerpreference;
		this.client.physiotherapist = this.fitnessForm.value.physiotherapist;
		this.client.packages = this.fitnessForm.value.packages;
		this.client.inr = this.fitnessForm.value.inr;
		this.client.paisa = this.fitnessForm.value.paisa;
	}
  reset(){
    this.fitnessForm.reset();
  }
}
