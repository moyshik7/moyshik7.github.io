setCookie = (cname, cvalue, exdays) => {

	let d = new Date();	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

	let expires = "expires="+d.toUTCString();

	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}

getCookie = (cname) => {

	let name = cname + "=";

	let ca = document.cookie.split(';');

	for(let i = 0; i < ca.length; i++) {

		let c = ca[i];

		if(c.charAt(0) == ' ') {

			c = c.substring(1);

		}

		if (c.indexOf(name) == 0) {

			return c.substring(name.length, c.length);

		}

	}

	return "";

}

checkCookie = (cName) => {

	let user = getCookie(cName);

	if(user != "") {

		return(true);

	}else {

		return(false);

	}

}
