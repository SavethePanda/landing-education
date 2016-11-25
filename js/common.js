$(document).ready(function() {

	$('.popup-link').magnificPopup();

	function wResize() {
		if($(window).height()>100)
		$("header").css("min-height",$(window).height())
	}

	wResize();
	$(window).resize(function(){
		wResize();
	});

	$(".tab-item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper 	.tab").removeClass("active").eq($(this).index()).addClass("active")	;
		$(".tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

//Main Tab

$(".main-tab-item").not(":first").hide();

$(".wrapper .main-tab").click(function() {
	$(".wrapper 	.main-tab").removeClass("active").eq($(this).index()).addClass("active")	;
	$(".main-tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

//Footer Phone
$(".tab-item-footer").not(":first").hide();
$(".wrapper .tab-footer").click(function() {
	$(".wrapper 	.tab-footer").removeClass("active").eq($(this).index()).addClass("active")	;
	$(".tab-item-footer").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");




//Tab Map
$(".tab-item-map").not(":first").hide();
$(".s-map .tab-map").click(function() {
	$(".s-map 	.tab-map").removeClass("active").eq($(this).index()).addClass("active")	;
	$(".tab-item-map").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");



//Parallax
$('.parallax-window').parallax({imageSrc: '../img/middle_bg.jpg'});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Carousel
	$(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
		items:1,
		mouseDrag:false,
		navText: "",
});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#main-connect").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
		});
		return false;
	});

});
