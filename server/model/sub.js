const bookshelf = require("../bookshelf");

const Sub = bookshelf.model("Sub", {
  tableName: "sub",
  posts: function() {
  	return this.hasMany("Post", 'sub_id');
  },
  postUsers: function() {
  	return this.belongsToMany("User").through('Post');
  },
  subscribers: function() {
  	return this.hasMany('Subscription');
  }
});

module.exports = Sub;
