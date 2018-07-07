$(".menu__phone-trigger").click(function(){
	$(".nav").addClass("nav--opened");
	$(".modal").css("display", "block");
});

$(document).click(function(e){
	if(e.target === document.querySelector(".modal")){
		if($(".nav").hasClass("nav--opened")){
			$(".nav").removeClass("nav--opened");
			$(".modal").css("display", "none");
		}
	}
});
