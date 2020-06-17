const bookshelf = require("../bookshelf");

const Subscription = bookshelf.model("Subscription", {
  tableName: "subscription"
});

module.exports = Subscription;
