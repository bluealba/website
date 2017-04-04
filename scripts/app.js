$(document).ready(function() {

	// Initializing smooth-sroll Component.
	$(".inner-link").smoothScroll({ speed: 780 });

	// Contact Form Override.
	$("#contact-form").submit(function(e) {
		e.preventDefault();
		let form = $(this);
		$.ajax({
			url: form.attr("action"),
			type: form.attr("method"),
			contentType: "application/json",
			data: JSON.stringify({
				name: $("input[name='name'").val(),
				company: $("input[name='company'").val(),
				email: $("input[name='email'").val(),
				message: $("textarea[name='message'").val()
			}),
			success: function(response){
				form.addClass("submitted");
			},
			failed: function(response){
				form.addClass("error");
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
