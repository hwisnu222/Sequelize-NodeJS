"use strict";

//import modul
const models = require("../models");
const response = require("../res");

// get all users
const getUsers = async (req, res) => {
  const User = await models.User.findAll({});
  // call function from res.js with three steatment. (message,value,res)
  response.ok("Success", User, res);
};

// create User
const createUsers = async (req, res) => {
  try {
    const { firstName, lastName, email, phone_number } = req.body;

    const User = await models.User.create({
      firstName,
      lastName,
      email,
      phone_number,
    });

    response.ok("Success for create account", User, res);
  } catch (error) {
    response.error("failed to create account", error, res);
  }
};

// update user
const updateUsers = async (req, res) => {
  const idUser = req.params.id;
  const { firstName, lastName, email, phone_number } = req.body;
  try {
    const User = await models.User.update(
      {
        firstName,
        lastName,
        email,
        phone_number,
      },
      {
        where: {
          id: idUser,
        },
      }
    );
    response.ok("success for update data", User, res);
  } catch (error) {
    response.error("failed to update data", error, res);
  }
};

// delete users
const deleteUsers = async (req, res) => {
  const idUser = req.params.id;

  try {
    const User = await models.User.destroy({
      where: { id: idUser },
    });
    response.ok("success for delete account", User, res);
  } catch (error) {
    response.error("failed to delete account", error, res);
  }
};

module.exports = { getUsers, createUsers, updateUsers, deleteUsers };
