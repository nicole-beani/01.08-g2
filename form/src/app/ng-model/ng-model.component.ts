import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent {
nome:string=''
cognome:string=''
email: any='';
password: any='';
username: any='';
immagineProfilo: any=''


@ViewChild('f',{static:true}) form!:NgForm;
submit(form:NgForm){
  console.log(form);
 this.form.reset();
}

}

