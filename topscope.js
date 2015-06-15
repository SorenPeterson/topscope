// Write your package code here!
if(Meteor.isClient) {
	window.topScope = window;
} else if (Meteor.isServert) {
	global.topScope = global;
}
