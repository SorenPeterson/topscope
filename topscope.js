// Write your package code here!
console.log('hi');
console.log(Meteor.isClient);
console.log(Meteor.isServer);
if(Meteor.isClient) {
	window.topScope = window;
} else if (Meteor.isServer) {
	global.topScope = global;
}
