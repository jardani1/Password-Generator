let length_input = document.getElementById("len");
var btn  =  document.getElementById("button");
var copy = document.getElementById("cp")
btn.addEventListener("click", computep);
copy.addEventListener("click", copyPassword);

let length = 8;

length_input.addEventListener("mouseout", printval);
function printval() {
  length = length_input.value;
  console.log(length);
}


const passwordbox = document.getElementById("password");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "!@#$%^&*()_+";
const number = "0123456789";
const allchar = uppercase + lowercase + symbol + number;

function computep() {
    console.log("jii")
  let Password = "";

  Password += uppercase[Math.floor(Math.random() * uppercase.length)];
  Password += lowercase[Math.floor(Math.random() * lowercase.length)];
  Password += symbol[Math.floor(Math.random() * symbol.length)];
  Password += number[Math.floor(Math.random() * number.length)];

  while (Password.length < length) {
    Password += allchar[Math.floor(Math.random() * allchar.length)];
  }

  passwordbox.value = Password;
}

function showt() {
  if (passwordbox.value !== "") {
    alert("Sumukh, you copied the password.");
  }
}

function copyPassword() {
  passwordbox.select(); // This is just to make a visual effect
  navigator.clipboard.writeText(passwordbox.value); // This is the real deal
  showt(); // Call showt() to alert after copying
}


// Remove the showt() call from addEventListener
var cf = document.getElementById("cp");
cf.addEventListener("click", showt);
