exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("posts").insert([
        {
          user_id: 1,
          postTitle: "Title Example",
          postBody: "Body Example",
          postTime: 'example',
          postDate: 'example',
          username: 'example',
          engagementScore: 5,
          energyScore: 10
        },
        {
          user_id: 1,
          postTitle: "Title Example",
          postBody: "Body Example",
          postTime: 'example',
          postDate: 'example',
          username: 'example',
          engagementScore: 5,
          energyScore: 10
        },
        {
          user_id: 1,
          postTitle: "Title Example",
          postBody: "Body Example",
          postTime: 'example',
          postDate: 'example',
          username: 'example',
          engagementScore: 5,
          energyScore: 10
        }
      ]);
    });
};
