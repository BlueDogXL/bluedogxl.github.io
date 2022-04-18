function checkCreds(){
    console.log("checkCreds started!");
    // create variables for the inputs
    var firstName = document.getElementById("fName").value;
    console.log("first name: " + firstName);
    var lastName = document.getElementById("lName").value;
    console.log("last name: " + lastName);
    var badgeNumber = document.getElementById("badgeID").value;
    console.log("badge number: " + badgeNumber);
    // make a full name variable
    var fullName = firstName + " " + lastName;
    console.log("Full name: " + fullName);

    // check if it's twenty characters or less 
    var fullNameLength = fullName.length;
    console.log(fullNameLength)

    // check if badge numbre < 1000
    if(fullNameLength > 21 || fullNameLength < 3){
        document.getElementById("loginStatus").innerHTML = "Your full name must be more than 3 characters and less than 20 characters.";
    } else if(badgeNumber > 999){
        document.getElementById("loginStatus").innerHTML = "Invalid badge number.";
    } // if everything is okay, grant access
    else {
        alert("Access granted. Welcome, " + fullName + "!");
        location.replace("./UATSpacePage.html");
    }

    
}