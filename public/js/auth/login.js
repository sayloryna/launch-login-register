export const checkCredentials = (username, password) => {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  const areValidCredentials =
    username === storedUsername && storedPassword === password;
  return areValidCredentials;
};
