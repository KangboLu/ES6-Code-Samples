// create post and comments array
var post  = { id: 4, title: 'New Post'};
var comments = [
  {postId: 4, content: 'First post'},
  {postId: 3, content: 'Second post'},
  {postId: 4, content: 'Third post'}
];

// create a function to return comments with given post
function commentsForPost (post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id; // return comment with same post's id
  });
}

// call the function
var commentResult = commentsForPost(post, comments);
console.log(commentResult);