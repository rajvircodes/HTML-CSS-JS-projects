function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

  if(name ===""){
    alert("Name is required");
    return false;
  }
  if(email ===""){
    alert("email is required");
    return false;
  }
  if(password.length < 6 ===""){
    alert("password is required");
    return false;
  }

  alert("Form submit successfully!");
  return true;

}

