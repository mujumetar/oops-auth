class Auth {
  constructor() {
    this.username = "mujju";
    this.adminUser = "muzammil";
    this.email = "mujju@gmail.com";
    this.phone = 7874536227;
    this.password = "mujju_123";
    this.marks = 90;
    this.grid = 8820;
    this.address = "bhavnagar, gujrat, india";
  }

  login(username, password) {
    if (this.username == username && this.password == password) {
        alert("check the console you got the data");
      return this;
    } else {
      return "invalid username";
    }
  }
}

const new_auth = new Auth();
let form = document.getElementById("forms");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("user").value;
  let password = document.getElementById("pass").value;

  console.log(new_auth.login(username, password));
});

