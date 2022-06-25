export const nameRegex = /^[aA-zZ -]+$/g;
export const passwordsRegex =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const getPage = () => {
  return window.location.pathname.split("/")[1];
};
