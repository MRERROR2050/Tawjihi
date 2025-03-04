const routerUser = require("express").Router();
const {
  SignUpUser,
  ShowUsers,
  deleteUser,
  Login,
  SignOut,
  ResetPassword,
  setPassword,
  getUsers,
} = require("../controllers/authControllers");

routerUser.post("/SignUp", SignUpUser);
routerUser.get("/ShowRequests", ShowUsers);
routerUser.delete("/DeleteRequests/:id", deleteUser);
routerUser.post("/Login", Login);
routerUser.post("/SignOut/:id", SignOut);
routerUser.post("/ResetPassword", ResetPassword);
routerUser.post("/set-user-password", setPassword);
routerUser.get("/getUsers", getUsers);

module.exports = routerUser;
