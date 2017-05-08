// create posts
var posts = [
  {id: 1, title: 'New Post'},
  {id: 2, title: 'Second Post'},
  {id: 3, title: 'Third Post'},
  {id: 4, title: 'Fourth Post'},
];

// create comment with same id
var comment = {postId: 1, content: 'Great Post'};

// function to find the posts
function postForComment(posts, comment) {
  return posts.find(function(post) {
    // find post with same id
    return post.id === comment.postId;
  });
}

// call function to test it
var foundPost = postForComment(posts, comment);
console.log(foundPost);