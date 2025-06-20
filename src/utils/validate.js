export const EMAIL_VALIDATION_REGEX =
  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
export const PASSWORD_VALIDATION_REGEX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const checkValidData = (email, password, name) => {
  const isEmailValid = EMAIL_VALIDATION_REGEX.test(email);
  const isPasswordValid = PASSWORD_VALIDATION_REGEX.test(password);

  if (name && !name?.trim()) {
    return "Name is required";
  }
  if (!email) {
    return "Email is required";
  }
  if (!isEmailValid) {
    return "Email Address is not valid";
  }
  if (!password) {
    return "Password is required";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }
  return null;
};
