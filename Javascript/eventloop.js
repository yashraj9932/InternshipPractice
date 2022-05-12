const main = () => {
  console.log("A");
  setTimeout(
    (display = () => {
      console.log("B");
    }),
    10 //this is not a precise time delay
  );
  setTimeout(
    (display = () => {
      console.log("B2");
    }),
    0
  );
  console.log("C");
};
main();

// we have call stack,browser api and message queue , For the browser to push any message from the
//queue to the call stack, the call stack has to be empty first. That is why even though the delay
//provided in the setTimeout() was 0 seconds, the callback to exec() has to wait till the execution of
//all the frames in the call stack is complete.

// Website to understand event loop
//   http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
