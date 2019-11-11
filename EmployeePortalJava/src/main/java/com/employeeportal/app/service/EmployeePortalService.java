package com.employeeportal.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employeeportal.app.dao.EmployeeRepository;
import com.employeeportal.app.entity.Employee;

@Service
public class EmployeePortalService {

	@Autowired
	EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        List<Employee> employees = new ArrayList<Employee>();
        employeeRepository.findAll().forEach(person -> employees.add(person));
        return employees;
    }
    
    public void saveOrUpdate(Employee employee) {
    	employeeRepository.save(employee);
    }
}
