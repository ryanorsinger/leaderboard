console.log('This code runs on both server and client');

if(Meteor.isServer) {
  console.log('Hello Server');
}

if(Meteor.isClient) {
  console.log('Hello Client');
}
