const bookshelf = require("../bookshelf");

const User = bookshelf.model("User", {
  tableName: "user",
  posts: function() {
  	return this.hasMany("Post");
  },
  postSubs: function() {
  	return this.belongsToMany('Sub').through('Post');
  },
  postComments: function() {
    return this.hasMany('Comment').through('Post');
  },
  comments: function() {
  	return this.hasMany("Comment");
  },
  commentPosts: function() {
  	return this.belongsToMany('Post').through('Comment');
  },
  commentSubs: function() {
  	return this.belongsToMany('Sub').through('Comment');
  },
  subscriptions: function() {
  	return this.belongsToMany('Sub').through('Subscription');
  }

});

module.exports = User;
