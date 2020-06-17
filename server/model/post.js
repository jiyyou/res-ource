const bookshelf = require("../bookshelf");

const Post = bookshelf.model("Post", {
  tableName: "post",
  comment: function() {
  	return this.hasMany("Comment");
  },
  user: function() {
  	return this.belongsTo("User");
  },
  commentUser: function() {
  	return this.belongsToMany("User").through('Comment');
  }
});

module.exports = Post;