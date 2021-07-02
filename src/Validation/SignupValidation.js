export default function validateSignup(values) {
  let errors = {};

  //Name Errors
  if (!values.firstname) {
    errors.firstname = "A firstname is required.";
  }
  if (!values.lastname) {
    errors.lastname = "A Last Name is required.";
  }
  // Email Errors
  if (!values.email) {
    errors.email = "Your email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Your email is invalid.";
  }

  // Password Errors
  if (!values.password) {
    errors.password = "A password is required.";
  } else if (values.password.length < 6) {
    errors.password = "Your password must be at least 6 characters.";
  }

  if(!values.confirmPassword){
    errors.confirmPassword = "A password is required.";
  }else if(values.password!==values.confirmPassword){
    errors.confirmPassword="Password Mismatches"
  }

  if(values.privacyChecked===false){
    errors.privacyChecked="Please Accept Terms of use and Privacy Policy"
  }
  return errors;
}
