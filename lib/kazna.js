"use strict";

const resources = require("./resource.js");
const hasOwn = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

function success() {
  console.log("CALLBACK INVOKED");
}
function Kazna(apiKey, config) {
  if (!(this instanceof Kazna)) {
    return new Kazna(apiKey, config);
  }
  this.apiKey = apiKey;
  this.config = config;
  this.join();
}

Kazna.prototype = {
  getPropsFromConfig(config) {
    if (!config) {
      return {};
    }

    // config can be an object or a string
    const isString = typeof config === "string";
    const isObject = config === Object(config) && !Array.isArray(config);

    if (!isObject && !isString) {
      throw new Error("Config must either be an object or a string");
    }
    return config;
  },

  extend: function (sub) {
    const Super = this;
    const Constructor = hasOwn(sub, "constructor")
      ? sub.constructor
      : function (...args) {
          Super.apply(this, args);
        };

    Object.assign(Constructor, Super);
    Constructor.prototype = Object.create(Super.prototype);
    Object.assign(Constructor.prototype, sub);

    return Constructor;
  },

  join: function () {
    let A = function () {};
    A.extend = this.extend;
    const B = A.extend(resources);

    Object.assign(this, B.prototype);
    // this.prototype = Object.create(B.prototype);
    // this.prototype.constructor = this;
  },
};

module.exports = Kazna;

const kazna = new Kazna("ssd", { Id: 23, amount: "rere" });
console.log(kazna.customer.create({ id: 12 }, success));
