import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {
  user: any='';
  pasw: any='';

  @ViewChild('s',{static:true}) form!:NgForm;
submit(form:NgForm){
  console.log(form);
 this.form.reset();
}
}

