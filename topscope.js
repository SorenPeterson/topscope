// Write your package code here!
if(Meteor.isClient) {
	window.topScope = window;
} else if (Meteor.isServer) {
	global.topScope = global;
}
