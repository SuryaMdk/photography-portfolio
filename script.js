var n=1;
var slide=1;
show(slide);
setInterval(function() {
	var slider_img=document.getElementsByClassName("slider");
		for (var i = 0; i < slider_img.length; i++) {
			slider_img[i].style.display="none";
		}
		slider_img[slide-1].style.display="block";
		if (slide<slider_img.length){
			slide++;
		}
		else{
			slide=1;
		}
		show(slide);
}, 5000);
	function show(n) {
		var slider_img=document.getElementsByClassName("slider");
		for (var i = 0; i < slider_img.length; i++) {
			slider_img[i].style.display="none";
		}
		if (n>slider_img.length) {
			slide=1;
		}
		if(n<1){
			slide=slider_img.length;
		}
		slider_img[slide-1].style.display="block";
	}
	function nextslide(n) {
		show(slide +=n);
	}
	function prevslide(n){
		show(slide -=n);
	}

