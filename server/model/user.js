const bookshelf = require("../bookshelf");

const User = bookshelf.model("User", {
  tableName: "user",
  posts: function() {
  	return this.hasMany("Post", 'user_id');
  },
  comments: function() {
  	return this.hasMany("Comment", 'user_id');
  }
});

module.exports = User;
