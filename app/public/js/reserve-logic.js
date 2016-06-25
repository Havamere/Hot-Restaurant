$(document).ready(function(){

	$('#submit').on('click', function(){
		var reservation = {
			name: $('#exampleInputName').val().trim(),
			phone:  $('#exampleInputPhone').val().trim(),
			email:  $('#exampleInputEmail').val().trim(),
			unique:  $('#exampleInputID').val().trim()
		};
		$.ajax({
			method: "POST",
			url: "/api/tableData",
			data: reservation,
		}).done(function(msg){
			//modal command
		})
	})



});