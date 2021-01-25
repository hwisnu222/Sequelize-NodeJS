"use strict";

const ok = (message, values, res) => {
  res.status(200).send({ status: 200, message: message, values: values });
};

const error = (message, values, res) => {
  res.status(500).send({ status: 500, message: message, values: values });
};

module.exports = { ok, error };
