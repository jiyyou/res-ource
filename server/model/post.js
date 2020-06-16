const bookshelf = require("../bookshelf");

const Post = bookshelf.model("Post", {
  tableName: "post",
  comment: function() {
  	return this.hasMany("Comment", 'post_id');
  }
});

module.exports = Post;
