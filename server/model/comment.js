const bookshelf = require("../bookshelf");

const Comment = bookshelf.model("Comment", {
  tableName: "comment",
  user: function() {
  	return this.belongsTo("User");
  },
  post: function() {
  	return this.belongsTo("Post")
  }
});

module.exports = Comment;
