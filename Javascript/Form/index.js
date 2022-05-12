const validateEmail = (email) => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.match(validRegex);
  //   return String(email).toLowerCase().match(validRegex);
};

const checkAll = (e) => {
  e.preventDefault();
  const name = document.querySelector("input[type=text]").value;
  const email = document.querySelector("input[type=email]").value;
  const password = document.querySelector("input[type=password]").value;
  const gender = document.querySelector("select").value;
  const role = document.querySelector('input[name="role"]:checked').value;
  const perms = document.querySelectorAll("input[type=checkbox]");
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  var msgval = "";

  if (name == "") {
    msgval += "\nInvalid Name ";
  }
  if (email == "" || validateEmail(email) == null) {
    msgval += "\nInvalid Email";
  }
  if (!password.match(passw)) {
    msgval += "\nInvalid Password";
  }
  if (gender == "") {
    msgval += "\nInvalid Gender Details";
  }
  var count = 0;
  for (var i = 0; i < perms.length; i++) {
    if (perms[i].checked == true) {
      count++;
    }
  }
  if (count < 2) {
    msgval += "\nLess than two permissions checked.";
  }
  if (msgval != "") {
    const msg = document.querySelector("#msg");
    console.log(msg);
    console.log(msgval);
    const node = document.createTextNode(msgval);
    msg.style.border = "1px solid red";
    msg.style.display = "block";
    msg.appendChild(node);
    setTimeout(() => {
      msg.style.display = "none";
      msg.value = "";
    }, 3000);
    return;
  }
  const confirm = document.querySelector("#final");
  var par = document.createElement("p");

  par.textContent = `Name: ${name} 
    Email: ${email} 
    Gender: ${gender} 
    Role: ${role}`;
  var submit = document.createElement("BUTTON");
  confirm.style.textAlign = "center";
  var t = document.createTextNode("Confirm");
  submit.appendChild(t);
  par.style.color = "green";

  confirm.appendChild(par);
  confirm.appendChild(submit);
  //   console.log(confirm);
  //   console.log(name, email, password, gender, role);
};

const submit = document.querySelector("#submit");

submit.addEventListener("click", checkAll);
