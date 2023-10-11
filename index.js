/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// Define the createEmployeeRecord function
function createEmployeeRecord(employeeData) {
    return {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  // Define the createEmployeeRecords function
  function createEmployeeRecords(employeesData) {
    return employeesData.map(createEmployeeRecord);
  }
  
  // Define the createTimeInEvent function
  function createTimeInEvent(employee, timeStamp) {
    const [date, hour] = timeStamp.split(" ");
    employee.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour, 10),
    });
    return employee;
  }
  
  // Define the createTimeOutEvent function
  function createTimeOutEvent(employee, timeStamp) {
    const [date, hour] = timeStamp.split(" ");
    employee.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour, 10),
    });
    return employee;
  }
  
  // Define the hoursWorkedOnDate function
  function hoursWorkedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find((event) => event.date === date);
    const timeOut = employee.timeOutEvents.find((event) => event.date === date);
    if (timeIn && timeOut) {
      return (timeOut.hour - timeIn.hour) / 100;
    }
    return 0;
  }
  
  // Define the wagesEarnedOnDate function
  function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date);
    return hoursWorked * employee.payPerHour;
  }
  
  // Define the allWagesFor function
  function allWagesFor(employee) {
    const dates = employee.timeInEvents.map((event) => event.date);
    const totalWages = dates.reduce((total, date) => {
      return total + wagesEarnedOnDate(employee, date);
    }, 0);
    return totalWages;
  }
  
  // Define the findEmployeeByFirstName function
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find((employee) => employee.firstName === firstName);
  }
  
  // Define the calculatePayroll function
  function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => {
      return totalPayroll + allWagesFor(employee);
    }, 0);
  }
  
  // Export the functions
  module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    findEmployeeByFirstName,
    calculatePayroll,
  };
  

