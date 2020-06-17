const bookshelf = require("../bookshelf");

const User = bookshelf.model("User", {
  tableName: "user",
  posts: function() {
  	return this.hasMany("Post");
  },
  comments: function() {
  	return this.hasMany("Comment");
  },
  subscriptions: function() {
  	return this.belongsToMany('Sub').through('Subscription');
  }
});

module.exports = User;
