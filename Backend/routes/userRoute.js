const routerUser =require("express").Router()
const {SignUpUser ,ShowUsers ,deleteUser,Login,SignOut,ResetPassword} = require("../controllers/authControllers")


routerUser.post("/SignUp",SignUpUser)
routerUser.get("/ShowRequests",ShowUsers)
routerUser.delete("/DeleteRequests/:id",deleteUser)
routerUser.post("/Login",Login)
routerUser.post("/SignOut/:id",SignOut)
routerUser.post("/ResetPassword",ResetPassword)

module.exports= routerUser

