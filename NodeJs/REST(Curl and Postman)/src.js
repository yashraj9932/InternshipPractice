// https://jsonplaceholder.typicode.com/posts
//using the above as a sample rest api for testing purposes/learning puropses

// To GET
// curl https://jsonplaceholder.typicode.com/posts
// curl https://jsonplaceholder.typicode.com/posts/3

//this includes the header like data type encoding etc
// curl -i https://jsonplaceholder.typicode.com/posts/3

// to put it into a file
// curl -o filename.txt https://jsonplaceholder.typicode.com/posts

// To basically download anything
// curl -O https://jsonplaceholder.typicode.com/posts

// to post data
// curl -d "title=Yash Raj&body=he is the best" https://jsonplaceholder.typicode.com/posts

//to put
// curl -X PUT -d "title=Yash Raj&body=he is the best" https://jsonplaceholder.typicode.com/posts/3

//to delete
// curl -X DELETE https://jsonplaceholder.typicode.com/posts/3
