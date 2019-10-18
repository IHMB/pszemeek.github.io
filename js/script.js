let selected = 0;
let isanimating = false;

const sections = Array('#header','#hehe','#tam','#co','#elo','#fds','#fsd','#ddd');

console.log(sections)


let item = (e) => { //toggling selected nav item
    if(isanimating)
		 return;

    isanimating = true;

    let wrapper = document.querySelector('li[value="'+selected+'"]');
    wrapper.classList.toggle('active--menu');
    selected = e;
    wrapper = document.querySelector('li[value="'+selected+'"]');
    wrapper.classList.toggle('active--menu');

    $('html,body').animate({
        scrollTop: $(sections[e]).offset().top},
        'slow');

    setTimeout(function() {
        isanimating = false;
    }, 500);


}

window.addEventListener('wheel', function(event)
{
 if (event.deltaY < 0)
 {
	 console.log(selected)
	 if(selected==0)
		 return;

	 if(isanimating)
		 return;

	 isanimating = true;

	 let wrapper = document.querySelector('li[value="'+selected+'"]');
	 wrapper.classList.toggle('active--menu');
	 selected--;
	 wrapper = document.querySelector('li[value="'+selected+'"]');
	 wrapper.classList.toggle('active--menu');
	 $('html,body').animate({
        scrollTop: $(sections[selected]).offset().top},
        'slow');
  console.log('up');

	 setTimeout(function() {
        isanimating = false;
    }, 500);

 }
 else if (event.deltaY > 0)
 {
	 console.log(selected)
	 if(selected==sections.length-1)
		 return;

	 if(isanimating)
		 return;

	 isanimating = true;

	 let wrapper = document.querySelector('li[value="'+selected+'"]');
	 wrapper.classList.toggle('active--menu');
	 selected++;
	 wrapper = document.querySelector('li[value="'+selected+'"]');
	 wrapper.classList.toggle('active--menu');
	 $('html,body').animate({
        scrollTop: $(sections[selected]).offset().top},
        'slow');
  console.log('scrolling down');

	 setTimeout(function() {
        isanimating = false;
    }, 500);

 }
});


$("body").keydown(function(e){
    if(e.which==116){
        window.location.href = "index.html";
        e.preventDefault();
    }
});





//document.querySelector('body').addEventListener('wheel',moveSectionByScroll);

var planeta = document.querySelector('.planet');
var chmurka = document.querySelector('.chmurka');

planeta.addEventListener('click',function(){
	
	$('.chmurka').toggleClass('chmurka_active');

});
