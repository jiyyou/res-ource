const foodData = require('../seed_data/food_posts');
const paperData = require('../seed_data/paper_posts');
const programmingData = require('../seed_data/programming_posts');
const techData = require('../seed_data/tech_posts');

exports.seed = function(knex) {
  return knex('post')
    .del()
    .then(() => {
      return knex('sub')
        .then(sub => {
          const foodSubs = sub.filter(sub => {
            if (sub.name === 'Food') {
              return sub;
            }
            return '';
          })
          return foodSubs;
        })
    })
    .then(foodSubs => {
      const foodSubId = foodSubs[0].id;      
      foodData.map(post => {
        post.sub_id = foodSubId
        return post
      })
      return knex('post').insert(foodData);
    })
    .then(() => {
      return knex('sub')
        .then(sub => {
          const techSubs = sub.filter(sub => {
            if (sub.name === 'Tech') {
              return sub;
            }
            return '';
          })
          return techSubs;
        })
    })
    .then(techSubs => {
      const techSubId = techSubs[0].id;
      techData.map(post => {
        post.sub_id = techSubId
        return post
      })
      return knex('post').insert(techData);
    })
    .then(() => {
      return knex('sub')
        .then(sub => {
          const paperSubs = sub.filter(sub => {
            if (sub.name === 'Paper') {
              return sub;
            }
            return '';
          })
          return paperSubs;
        })
    })
    .then(paperSubs => {
      const paperSubId = paperSubs[0].id;
      paperData.map(post => {
        post.sub_id = paperSubId
        return post
      })
      return knex('post').insert(paperData);
    })
    .then(() => {
      return knex('sub')
        .then(sub => {
          const programmingSubs = sub.filter(sub => {
            if (sub.name === 'Programming') {
              return sub;
            }
            return '';
          })
          return programmingSubs;
        })
    })
    .then(programmingSubs => {
      const programmingSubId = programmingSubs[0].id;
      programmingData.map(post => {
        post.sub_id = programmingSubId
        return post
      })
      return knex('post').insert(programmingData);
    })
    .then(() => {
      return knex('user')
        .pluck('id')
        .then(userId => {
          return userId;
        })
    })
    .then(userId => {
      return knex('post')
        .then(posts => {
          const newPosts = posts.map(post => {
            post.user_id = userId[Math.floor(Math.random() * userId.length)];
            post.id = null;
            return post;
          })
          return newPosts
        })
    })
    .then(newPosts => {
      return knex('post')
        .del()
        .then(() => {
          return knex('post').insert(newPosts);
        })
    })

};
