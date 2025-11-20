console.log("------------------------------");

let userRole = 'admin';
let accessLevel;

if (userRole === 'admin') {
    accessLevel = 'full';
} else if (userRole === 'manager') {
    accessLevel = 'partial';
} else {
    accessLevel = 'restricted';
}

console.log("Access Level:", accessLevel);
console.log("------------------------------");

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome Admin! You have full access.";
    } else {
        userMessage = "Welcome User! You have limited access.";
    }
} else {
    userMessage = "Please log in to continue.";
}

console.log("User Message:", userMessage);
console.log("------------------------------");

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);
console.log("------------------------------");

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);
console.log("------------------------------");