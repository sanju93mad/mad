
let form = document.getElementById('form')
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let address = document.getElementById('address');

// var Udetails = document.registration.dot-1;
// var Udetails = document.registration.dot-2;
// var Udetails = document.registration.dot-3; 

// var Cdetails = document.getElementById('Cdetails');
// var details = document.registration.details;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs(){

    let fnamevalue = fname.value.trim();
    let lnamevalue = lname.value.trim();
    let phonevalue = phone.value.trim();
    let addressvalue = address.value.trim();
    let emailvalue = email.value.trim();
    let phonenoFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let textOnly = /^[A-Za-z]+$/;

    if (fnamevalue === '') {
        setErrorMessage(fname, "Please enter your First Name")
    }else {
        if (!fnamevalue.match(textOnly)){
            setErrorMessage(fname, "Please enter correct Name")
        }else {
            removeErrorMessage(fname);
            if (lnamevalue === '') {
                setErrorMessage(lname, "Please enter your Last Name")
            }else {
                if (!lnamevalue.match(textOnly)){
                    setErrorMessage(lname, "Please enter correct Name")
                }else {
                    removeErrorMessage(lname);
                    if (phonevalue === '') {
                        setErrorMessage(phone, "Please enter your Phone Number")
                    } else{
                        if((!phonevalue.match(phonenoFormat))){
                            setErrorMessage(phone, "Please enter valid Phone Number")
                        }else {
                            removeErrorMessage(phone);
                            if (addressvalue === '') {
                                setErrorMessage(address, "Please enter valid Address")
                            }else {
                                removeErrorMessage(address);
                                if (emailvalue === ''){
                                  setErrorMessage(email, "Please enter your email address")
                                }else {
                                  if((!emailvalue.match(emailFormat))){
                                      setErrorMessage(email, "Please enter valid email address")
                                  }else {
                                      removeErrorMessage(email);
                                      successMessage("User added successfully");
                                  }
                                }
                            }
                        }
                    }
                }
              
            }

        }
        
    }
}

const setErrorMessage = (input, message)=>{
  const formInput = input.parentElement;
    if (input.type === "textarea"){
        const inputF = formInput.querySelector('textarea');
        inputF.className = 'error';
    }else {
      const inputF = formInput.querySelector('input');
      inputF.className = 'input-box error';
    }
    const small = formInput.querySelector('small');
    small.innerText = message;
    small.className = 'errorMessageShow'
    input.select();
}

const removeErrorMessage = (input) => {
  const formInput = input.parentElement;
  
  if (input.type === "textarea"){
    const inputF = formInput.querySelector('textarea');
    inputF.className = 'textarea';
  }else {
    const inputF = formInput.querySelector('input');
    inputF.className = 'input-box';
  }
 
  const small = formInput.querySelector('small');
  small.className = 'errorMessageHide'
}

const successMessage = (message) => {
    alert(message)
}

// function userid_validation(uid,mx,my){
//     var uid_len = uid.value.length;
//     if (uid_len == 0 || uid_len >= my || uid_len < mx)
//     {
//         alert("User Id should not be empty / length be between "+mx+" to "+my);
//         uid.focus();
//         return false;
//     }
//     return true;
// }



// function allLetter(fname){ 
//     var letters = /^[A-Za-z]+$/;
//     if(fname.value.match(letters)){
//         return true;
//     } else
    
//     {
//     alert('Username must have alphabet characters only');
//     fname.focus();
//     return false;
// }
// }


// function ValidateEmail(email)
// {
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(email.value.match(mailformat))
// {
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// email.focus();
// return false;
// }
// }

// function allLetter(lname)
// { 
// var letters = /^[A-Za-z]+$/;
// if(lname.value.match(letters))
// {
// return true;
// }
// else
// {
// alert('Username must have alphabet characters only');
// lname.focus();
// return false;
// }
// }



// function phonenumber(phone)
// {
//   var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//   if((phone.value.match(phoneno))
//         {
//       return true;
//         }
//       else
//         {
//         alert("Telephone number must have numeric characters only");
// 		phone.focus();
//         return false;
//         }
// }


// function do_something(){
  
//    if (error_fname === false && error_lname === false && error_email === false && ) {
//        alert("Registration Successfull");
//        return true;
//     } else {
//        alert("Please Fill the form Correctly");
//        return false;
//     }
// }
