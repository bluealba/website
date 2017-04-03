$(document).ready(function() {

	// Contact Form Override
	$("#contact-form").submit(function(e) {
		e.preventDefault();
		let form = $(this);
		console.log(form);
		$.ajax({
			url: form.attr("action"),
			type: form.attr("method"),
			// headers: {
			// 	"Access-Control-Allow-Origin": "*"
			// },
			data: JSON.stringify({
				name: "Joe Doe",
				company: "Blue Alba",
				email: "joe.doe@bluealba.com",
				message: "Hello!!!"
			}),
			success: function(response){
				alert(response);
			}
		});
	});

	// Textbox placeholder animation.
	document.addEventListener("change", function(e) {
		if (e.target.classList.contains("vi-text")) {
			if (e.target.value != "" && !e.target.classList.contains("vi-not-empty")) {
				e.target.classList.add("vi-not-empty");
			} else if (e.target.value == "" && e.target.classList.contains("vi-not-empty")) {
				e.target.classList.remove("vi-not-empty");
			}
		}
	});
});
