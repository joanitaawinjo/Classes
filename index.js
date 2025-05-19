//You are building a feature rollout system for a startup where a FeatureToggle constructor function 
 //has properties: featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), 
//and you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to enable or disable the feature, 
//and simulate access attempts using if-else and switch statements for different roles.
function FeatureToggle(featureName, isEnabled,userGroupAccess){
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
}
FeatureToggle.prototype.canAccess = function(userRole){
    return this.isEnabled && this.userGroupAccess.includes(userRole);
    
}
FeatureToggle.prototype.toggleFeature = function(flag){
    this.isEnabled = flag;
}
const feature = new FeatureToggle("exampleFeature", true, ["betaTesters", "admins"]);
const userRole = "betaTesters";

if (feature.canAccess(userRole)) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

switch (userRole) {
  case "betaTesters":
  if (feature.canAccess("betaTesters")) {
  console.log("Access granted for betaTesters");
  } else {
  console.log("Access denied for betaTesters");
  }
  break;
  case "admins":
  if (feature.canAccess("admins")) {
  console.log("Access granted for admins");
  } else {
  console.log("Access denied for admins");
  }
  break;
  default:
  console.log("Unknown user role");
}
user1 = new FeatureToggle("new dash board", "admin",["betatester","guest","admins"])
console.log(user1.canAccess());
// console.log(user1.toggleFeature());


//In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName (string), projectDetails (object with name and hourlyRate), 
//and logs (array of objects with date, hoursWorked), then add prototype methods to calculate total earnings, 
//filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.
function TimeLog(freelancerName, projectDetails, logs) {
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;
  }
  
  TimeLog.prototype.calculateTotalEarnings = function() {
    let totalEarnings = 0;
    this.logs.forEach(log => {
    totalEarnings += log.hoursWorked * this.projectDetails.hourlyRate;
    });
    return totalEarnings;
  };
  
  TimeLog.prototype.filterLogsByDateRange = function(startDate, endDate) {
    let arr = [];
    this.logs.filter(log => log.date >= startDate && log.date <= endDate);
    arr.push(logs);
    return arr;
  };
  
  TimeLog.prototype.checkWeeklyHoursExceed40 = function() {
    let totalHours = 0;
    this.logs.forEach(log => {
    totalHours += log.hoursWorked;
    });
    if (totalHours > 40) {
    return true;
    } else {
    return false;
    }
  };

  const logs = [
    { date: "2025-05-01", hoursWorked: 10 },
    { date: "2025-05-02", hoursWorked: 15 },
    { date: "2025-05-03", hoursWorked: 20 }
];

const tracker = new TimeLog("Tyler", { name: "Website Redesign", hourlyRate: 50 }, logs);

console.log("Total Earnings:", tracker.calculateTotalEarnings());
console.log(tracker.filterLogsByDateRange(logs));
console.log(tracker.checkWeeklyHoursExceed40());

 
  

//You are developing a startup’s order management system where an Order constructor function 
//should contain customer (object with name and email), items (array of objects with productName, quantity, and unitPrice), and status (string), 
//then implement prototype methods to compute total cost, update order status based on payment, and categorize order urgency using switch and conditional statements.
function Order(customer, items, status) {
  this.customer = customer;
  this.items = items;
  this.status = status;
}
Order.prototype.calculateTotalCost = function() {
  let totalCost = 0;
  this.items.forEach(item => {
  totalCost += item.quantity * item.unitPrice;
  });
  return totalCost;
};

Order.prototype.updateStatus = function(paymentStatus) {
  if (paymentStatus === 'paid') {
  this.status = 'paid';
  } else {
  this.status = 'unpaid';
  }
};

Order.prototype.categorizeUrgency = function() {
  switch (this.status) {
  case 'paid':
  return 'Low urgency';
  case 'unpaid':
  if (this.items.length > 0) {
  return 'High urgency';
  } else {
  return 'Medium urgency';
  }
  default:
  return 'Medium urgency';
  }
};

const order = new Order("Mary", [{name: "cutlery", quantity: 1, unitPrice: 10}], "paid");

console.log(order.calculateTotalCost());
order.updateStatus('paid');
console.log(order.status);
console.log(order.categorizeUrgency());
  
  
    

//In a startup’s employee review tool, design an Employee class with properties: 
//id (number), name (string), performanceMetrics (object with keys like communication, efficiency, and reliability), 
//and feedback (array of strings), then use prototypes to calculate an average score, classify performance level using control flow, 
//and add new feedback based on conditions.

function Employee(id, name, performanceMetrics, feedback) {
  this.id = id;
  this.name = name;
  this.performanceMetrics = performanceMetrics; 
  this.feedback = feedback || [];
}

Employee.prototype.averageScore = function() {
  const scores = Object.values(this.performanceMetrics);
  return scores.reduce((a, b) => a + b) / scores.length;
};

Employee.prototype.classifyPerformance = function() {
  const avg = this.averageScore();
  if (avg >= 4.5) return "Excellent";
  else if (avg >= 3) return "Good";
  else return "Needs Improvement";
};

Employee.prototype.addFeedback = function(newFeedback){
  newFeedback = [];
  if (newFeedback && newFeedback.length > 0) {
  this.feedback.push(newFeedback);
  } else {
  console.log("Invalid feedback.");
  }
};

const employee = new Employee("O02", "John", {metric1: 20, metric2: 40, metric3: 50, metric4: 60, metric5: 70}, ["Needs improvement"]);

console.log(employee.averageScore());
console.log(employee.classifyPerformance());
employee.addFeedback("Great improvement shown in the last quarter.");
