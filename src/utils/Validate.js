export const checkValidData = (email, password, phoneNumber, isSignUp) => {
  // if this regex condition gets passed it returns boolean value
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  let isPhoneValid = true;

  if (isSignUp) {
    isPhoneValid =
      /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/.test(
        phoneNumber
      );
    if (!isPhoneValid) return "Phone Number is not Valid";
  }

  if (!isEmailValid) return "Email is not Valid";
  if (!isPasswordValid) return "Password is not Valid";

  return null;
};
