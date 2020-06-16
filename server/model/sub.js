const bookshelf = require("../bookshelf");

const Sub = bookshelf.model("Sub", {
  tableName: "sub",
  posts: function() {
  	return this.hasMany("Post", 'sub_id');
  }
});

module.exports = Sub;
