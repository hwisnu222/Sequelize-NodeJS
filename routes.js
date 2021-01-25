// create module with parameter/argument 'app' from express
module.exports = (app) => {
  // import controller from controller directory
  const controller = require("./controller/index");

  // create routes
  app.route("/").get(controller.getUsers);
  app.route("/create").post(controller.createUsers);
  app.route("/update/:id").put(controller.updateUsers);
  app.route("/delete/:id").delete(controller.deleteUsers);
};
