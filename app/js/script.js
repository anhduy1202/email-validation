

const form = document.querySelector("#form");
const err = document.querySelector(".invalid");
const err_img = document.querySelector(".error-img");
var input = form.querySelector('input[name="email_input"]');
var check = false;


form.addEventListener("submit",(e)=>{
    e.preventDefault(); //Stop form from re-direct

ValidateEmail(input.value); 
if (check == false) {

err.classList.remove("hide");
input.classList.add("border-color");
err_img.classList.remove("hide");
}
else {

    err.classList.add("hide");
    input.classList.remove("border-color");
    err_img.classList.add("hide");

}

})


function ValidateEmail(input) 
{
    var format= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //email format
 if (input.match(format))
  {
   check = true;
  }
 else {  
    check = false;
 }
}