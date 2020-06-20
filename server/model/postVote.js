const bookshelf = require("../bookshelf");

const PostVote = bookshelf.model("PostVote", {
  tableName: "postVote",
  user: function() {
  	return this.belongsTo("User");
  },
  post: function() {
  	return this.belongsTo("Post")
  },
  sub: function() {
  	return this.belongsTo("Sub")
  }
});

module.exports = PostVote;
