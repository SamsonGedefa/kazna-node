const specMethod = require("../lib/specMethod");

module.exports = {
  path: "checkout/sessions",

  create: specMethod({
    method: "POST",
    path: "",
  }),

  retrieve: specMethod({
    method: "GET",
    path: "/{session}",
  }),

  list: specMethod({
    method: "GET",
    path: "",
    methodType: "list",
  }),

  expire: specMethod({
    method: "POST",
    path: "/{session}/expire",
  }),

  listLineItems: specMethod({
    method: "GET",
    path: "/{session}/line_items",
    methodType: "list",
  }),
};
