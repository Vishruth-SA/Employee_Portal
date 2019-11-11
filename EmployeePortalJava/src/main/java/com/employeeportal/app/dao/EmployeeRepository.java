package com.employeeportal.app.dao;

import org.springframework.data.repository.CrudRepository;

import com.employeeportal.app.entity.Employee;

public interface EmployeeRepository  extends CrudRepository<Employee, Integer> {

}
