// Your code here
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    employeeRecord.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(hour),
      date
    });
    return employeeRecord;
  }
  
  function createTimeOutEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    employeeRecord.timeOutEvents.push({
      type: 'TimeOut',
      hour: parseInt(hour),
      date
    });
    return employeeRecord;
  }
  
  function hoursWorkedOnDate(employeeRecord, date) {
    const timeIn = employeeRecord.timeInEvents.find(e => e.date === date);
    const timeOut = employeeRecord.timeOutEvents.find(e => e.date === date);
    console.log('TimeIn:', timeIn, 'TimeOut:', timeOut);  // Log to check values
    return (timeOut.hour - timeIn.hour) / 100;  // Adjust division if needed
  }
  
  
  function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    return hoursWorked * employeeRecord.payPerHour;
  }
  
  
  function allWagesFor(employeeRecord) {
    return employeeRecord.timeInEvents.reduce((total, timeInEvent) => {
      const date = timeInEvent.date;
      return total + wagesEarnedOnDate(employeeRecord, date);
    }, 0);
  }
  
  
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, employeeRecord) => {
      return total + allWagesFor(employeeRecord);  // Ensure correct summation
    }, 0);
  }
  
  
  module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    calculatePayroll
  };
  
