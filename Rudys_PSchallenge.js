


var userID;
var pass;

function checkId(userID) {
  return userID.length >= 6 && !userID.includes("!") && !userID.includes("#") && !userID.includes("$");
}

function checkPass(pass) {
  return pass.length >= 6 && pass.toUpperCase() != pass && pass.toLowerCase() != pass && ((pass.includes("!") || pass.includes("#") || pass.includes("$")) && (pass.includes("0") || pass.includes("1") || pass.includes("2") || pass.includes("3") || pass.includes("4") || pass.includes("5") || pass.includes("6") || pass.includes("7") || pass.includes("8") || pass.includes("9")));
}

function checkCreds(userID, pass) {
  return checkId(userID) && checkPass(pass) && pass!== userID;
}

function getCreds() {
  userID = prompt("Enter userID. Can't be same as password. Must be atleast 6 characters. Cannot have !, #, or $");
  pass = prompt("Enter password. Must be atleast 6 characters. Must include one of the following: !, #, or $. Cannot be 'password'");
  alert("Your creds are acceptable " + checkCreds(userID, pass));
}
