var burger = document.getElementById("burger");
var burger_line = document.getElementsByClassName("burger-line");
var mobileMenu = document.getElementById("mobileMenu");

burger.onclick = burgerChangeState;

function burgerChangeState(){
	if (burger_line[0].classList.contains("burger--opened") != true){
		if (burger_line[0].classList.contains("burger--closed")){
			burger_line[0].classList.remove("burger--closed");
			burger_line[2].classList.remove("burger--closed");
		}
		burger_line[0].classList.add("burger--opened");
		burger_line[2].classList.add("burger--opened");
		burger_line[1].style.opacity = "0.0";
		mobileMenu.style.height = "260px";
	}
	else{
		burger_line[0].classList.remove("burger--opened");
		burger_line[2].classList.remove("burger--opened");
		burger_line[0].classList.add("burger--closed");
		burger_line[2].classList.add("burger--closed");
		burger_line[1].style.opacity = "1.0";
		mobileMenu.style.height = "0px";
	}
}