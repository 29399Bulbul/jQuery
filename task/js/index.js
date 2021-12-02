$(function () {
	$('.sign-up-form').submit(function (e) {
		e.preventDefault();

		let data = {
			email: email.value,
			username: username.value,
			password: password.value,
			rePassword: rePassword.value,
		};

		alert(`
            email: ${data.email.trim() || 'empty'}
            username: ${data.username.trim() || 'empty'},
            password: ${data.password.trim() || 'empty'},
            confrim password: ${data.rePassword.trim() || 'empty'},
        `);
	});
});
