$(function(){
	var root = firebase.database().ref();
	
	root.remove();
	root.on("child_added", snap => {
		var addMe = snap.val();
		$("#Module").append("<b>"+ addMe.User +": &nbsp &nbsp </b>" + addMe.Message + "<br />");
	});
	
	setInterval(function(){
		$("#Module").scrollTop($("#Module")[0].scrollHeight);
	}, 1000);
});

function send(){
	var root = firebase.database().ref();
	
	var object = {"User": userGlobal, "Message": buildCode};
	root.push().set(object);
	
	$("#sendButton").blur();
	$("#IO").val(' ');
	$("#IO").focus();
	buildCode="";
	code = [];
}