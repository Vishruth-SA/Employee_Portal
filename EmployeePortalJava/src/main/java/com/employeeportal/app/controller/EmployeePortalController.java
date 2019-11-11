package com.employeeportal.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employeeportal.app.entity.Employee;
import com.employeeportal.app.service.EmployeePortalService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmployeePortalController {
	
	@Autowired
	EmployeePortalService employeePortalService;

	  @GetMapping("/employees")
	    private List<Employee> getAllEmployees() {
	        return employeePortalService.getAllEmployees();
	    }
	  
	   @PostMapping("/addEmployee")
	    private int saveEmployee(@RequestBody Employee employee) {
		   employeePortalService.saveOrUpdate(employee);
	        return employee.getId();
	    }
}
