import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from '../employee';
import { DataService } from 'src/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portal-register',
  templateUrl: './portal-register.component.html',
  styleUrls: ['./portal-register.component.css']
})
export class PortalRegisterComponent implements OnInit {
  employeeForm:FormGroup=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    gender:new FormControl(),
    dateOfBirth:new FormControl(),
    department:new FormControl()
  });
  genders:Array<String> = ['Male','Female'];
  selectedGender:String = new String();
  selectedDepartment:String = new String();
  departments:Array<String> = ['Electronics','Electrical','Mechanical','Computer Science','Information Science'];
  @ViewChild('content',{static: true}) private content;
  constructor(private dataService:DataService,private modalService: NgbModal) { }

  ngOnInit() {
  }
  ChangeGender(gender: String){
    this.selectedGender = gender;
  }
  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }
  ChangeDepatment(dept){
    this.selectedDepartment = dept;
  }
  onSave(){
   let employee:Employee = new Employee();
   employee.firstName = this.employeeForm.controls.firstName.value;
   employee.lastName = this.employeeForm.controls.lastName.value;
   employee.dateOfBirth = new Date(this.employeeForm.controls.dateOfBirth.value.year,this.employeeForm.controls.dateOfBirth.value.month,this.employeeForm.controls.dateOfBirth.value.day);
   employee.gender = this.selectedGender;
   employee.department = this.selectedDepartment;
   this.dataService.addEmployee(employee).subscribe(data => {
      if(data!=null){
        // alert('Saved')
        this.openSm(this.content);
        this.employeeForm.reset();
      }
   },err => {
     alert('Error in save');
   })
  }
}
