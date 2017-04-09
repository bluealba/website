$(document).ready(function() {

	// Initializing smooth-sroll Component.
	$(".inner-link").smoothScroll({ speed: 780 });

	// Contact Form Override.
	$("#contact-form").submit(function(e) {
		e.preventDefault();
		let formData = {
			name: ($("input[name=name]").val() || "").trim(),
			company: ($("input[name=company]").val() || "").trim(),
			email: ($("input[name=email]").val() || "").trim(),
			message: ($("textarea[name=message]").val() || "").trim()
		};

		if (!formData.name) {
			$("input[name=name]").focus();
			return false;
		}
		if (!formData.email) {
			$("input[name=email]").focus();
			return false;
		}
		if (!formData.message) {
			$("textarea[name=message]").focus();
			return false;
		}

		let form = $(this);
		$.ajax({
			url: form.attr("action"),
			type: form.attr("method"),
			contentType: "application/json",
			data: JSON.stringify(formData),
			beforeSend: function(response){
				$("#contact-form").hide();
				$(".sending").show();
			},
			success: function(response){
				$(".sending").hide();
				$(".submitted").show();
			},
			error: function(response){
				$(".sending").hide();
				$(".error").show();
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
