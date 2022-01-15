
var name_menu,toggler_active;
var line_navbar=document.querySelectorAll(".nav-text .line-navbar-menu");
var line_toggler=document.querySelectorAll(".button-toggler .line-toggler");

function MOUSEOVER_NAVBAR (e) {

	name_menu=e.target.innerHTML.split("<div")[0].trim();
	
	if(name_menu=="Home") {

		line_navbar[0].setAttribute("style","width: 100%");

	} else if (name_menu=="About") {

		line_navbar[1].setAttribute("style","width: 100%");		

	} else if (name_menu=="Blog") {

		line_navbar[2].setAttribute("style","width: 100%");		

	} else {

		if (name_menu=="Contact") {

			line_navbar[3].setAttribute("style","width: 100%");		
		}
	}
}

function MOUSEOUT_NAVBAR (e) {
	
	if(name_menu=="Home") {

		line_navbar[0].removeAttribute("style");

	} else if (name_menu=="About") {

		line_navbar[1].removeAttribute("style");

	} else if (name_menu=="Blog") {

		line_navbar[2].removeAttribute("style");

	} else {

		if (name_menu=="Contact") {

			line_navbar[3].removeAttribute("style");
		}		
	}
}

function BUTTON_TOGGLER (e) {

	toggler_active=e.target.classList.contains("active");

	if(toggler_active==false) {

		e.target.classList.add("active");

		// line_toggler[0].setAttribute("style","transform: rotate(-49deg)")
		line_toggler[1].setAttribute("style","opacity: 0")
		line_toggler[2].setAttribute("style","transform: rotate(50deg)")

	} else {

		e.target.classList.remove("active");
		line_toggler[0].removeAttribute("style");
		line_toggler[1].removeAttribute("style");
		line_toggler[2].removeAttribute("style");
	}
}

var nav_text=document.querySelectorAll(".navbar-nav .nav-text");

	for(var i=0; i<nav_text.length; i++) {

		nav_text[i].addEventListener("mouseover",MOUSEOVER_NAVBAR);
	}

	for(var i=0; i<nav_text.length; i++) {

		nav_text[i].addEventListener("mouseout",MOUSEOUT_NAVBAR);
	}

var button_toggler=document.querySelector(".navbar-expand-lg .button-toggler");
button_toggler.addEventListener("click",BUTTON_TOGGLER);