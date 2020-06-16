const bookshelf = require("../bookshelf");

const Comment = bookshelf.model("Comment", {
  tableName: "comment",
});

module.exports = Comment;
