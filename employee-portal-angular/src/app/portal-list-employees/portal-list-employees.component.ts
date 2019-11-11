import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-portal-list-employees',
  templateUrl: './portal-list-employees.component.html',
  styleUrls: ['./portal-list-employees.component.css']
})
export class PortalListEmployeesComponent implements OnInit {
  employees:Array<Employee> = new Array<Employee>();
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAllEmployees().subscribe(data => {
      for (const eq of (data as any)){
        let e1:Employee = new Employee;
        e1.firstName=eq.firstName;
        e1.lastName=eq.lastName;
        e1.gender=eq.gender;
        e1.dateOfBirth=eq.dateOfBirth;
        e1.department=eq.department;
        this.employees.push(e1);
      }
    },err =>{
      alert('Error in fetch');
    });
  }

}
