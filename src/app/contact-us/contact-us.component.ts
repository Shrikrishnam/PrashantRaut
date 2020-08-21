import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from '../_services';
import { Contact } from '../modals/Contact';
import { ActivatedRoute, Router } from '@angular/router';

export * from "../modals/Contact";

/*
export class Contact {
  constructor(
    public firstname: string,
    public lastname: string,
    public phonenumber: number,
    public email: string,
    public message: string
  ) { }
}
*/
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent implements OnInit {
  @Output() contactdata = new EventEmitter<Contact>();
  contactForm: FormGroup;
  public obj: any = {};
  loadingComplete = false;
  editflag:boolean;
  constructor(private fb: FormBuilder,
    private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router) { }
 

  ngOnInit() {
    this.editflag= false;
    this.loadingComplete=true;
    this.contactForm = this.fb.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      phonenumber: ["", [Validators.required]],
      email: ["", [Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
      message:["",[Validators.required]]
    });
  }

  onSubmit() {
    this.obj = { ...this.contactForm.value, ...this.obj };
    this.contactForm.value;
    console.log(
      "LOG: LoginComponent -> onSubmit -> this.contactForm.value",
      this.contactForm.value
    );

    if (this.contactForm.valid) {
      console.log("success");
      this.contactdata.emit(
        new Contact(
          this.contactForm.value.firstname,
          this.contactForm.value.lastname,
          this.contactForm.value.phonenumber,
          this.contactForm.value.email,
          this.contactForm.value.message,
          ""
        )
      );
      const data = new Contact(
        this.contactForm.value.firstname,
        this.contactForm.value.lastname,
        this.contactForm.value.phonenumber,
        this.contactForm.value.email,
        this.contactForm.value.message,
        ""
      );
      this.userservice.contactusdata(data.toObject())
      .subscribe( (data) => {
        console.log(data);
        this.contactForm.reset();
      }
      );
  }
}
}
