// all the request from different url
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

// check if any request is pending
var inProgress = requests.some(function(request){
    return request.status === 'pending';
});

// output the result of request pending checking
console.log("Request is pending: " + inProgress);