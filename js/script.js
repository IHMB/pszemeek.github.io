let scrolling = false;


if ($(window).width() < 1024) {
   scrolling = true;
   document.querySelector('body').classList.toggle('stop-scrolling');
}
else {
  console.log('dsa');
}




let arrow = () => {
  if (selected == 0) item(1);
  else return;
}

const arrowHandler = document.querySelector('.arrow');
arrowHandler.addEventListener('click',arrow);

// loader

var overlay = document.querySelector(".overlay");

function loader() {
  overlay.classList.toggle('overlay-disabled');
  overlay.style.zIndex='0';

  var video = document.querySelector('#myVideo');
  video.play()
}

window.addEventListener('load', function(){
  setTimeout(loader,2000);
})

//hamburger and mobile menu
let mmenu = document.querySelector('.navigation--mobile');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation--mobile');


const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--mobile--active');
  document.body.classList.toggle('stop-scrolling');
}

hamburger.addEventListener('click', handleClick);

// desktop nav onclick

let selected = 0;
let isanimating = false;


const sections = Array('#header','#about','#cosmos','#air','#factory','#calculator','#forest','#ground','#what','#map','#water');

let item = (e) => { //toggling selected nav item
    if(isanimating)
		 return;

    isanimating = true;

    let wrapper = document.querySelectorAll('li[value="'+selected+'"]');
    console.log(wrapper)
    wrapper[0].classList.toggle('active--menu');
    wrapper[1].classList.toggle('active--menu');
    selected = e;
    wrapper = document.querySelectorAll('li[value="'+selected+'"]');
    console.log(wrapper)
    wrapper[0].classList.toggle('active--menu');
    wrapper[1].classList.toggle('active--menu');

    $('html,body').animate({
        scrollTop: $(sections[e]).offset().top},
        'slow');

    setTimeout(function() {
        isanimating = false;
    }, 500);


}

// scrolling up

window.addEventListener('wheel', function(event)
{
  if(scrolling == true) return;
 if (event.deltaY < 0)
 {
	 console.log(selected)
	 if(selected==0)
		 return;

	 if(isanimating)
		 return;

	 isanimating = true;

	 let wrapper = document.querySelectorAll('li[value="'+selected+'"]');
   console.log(wrapper)
   wrapper[0].classList.toggle('active--menu');
   wrapper[1].classList.toggle('active--menu');
	 selected--;
	 wrapper = document.querySelectorAll('li[value="'+selected+'"]');
   console.log(wrapper)
   wrapper[0].classList.toggle('active--menu');
   wrapper[1].classList.toggle('active--menu');
	 $('html,body').animate({
        scrollTop: $(sections[selected]).offset().top},
        'slow');
  console.log('up');

	 setTimeout(function() {
        isanimating = false;
    }, 500);

// scrolling down

 }
 else if (event.deltaY > 0)
 if(scrolling == true) return;
 {
	 console.log(selected)
	 if(selected==sections.length-1)
		 return;

	 if(isanimating)
		 return;

	 isanimating = true;

	 let wrapper = document.querySelectorAll('li[value="'+selected+'"]');
   wrapper[0].classList.toggle('active--menu');
   wrapper[1].classList.toggle('active--menu');
	 selected++;
	 wrapper = document.querySelectorAll('li[value="'+selected+'"]');
   console.log(wrapper)
   wrapper[0].classList.toggle('active--menu');
   wrapper[1].classList.toggle('active--menu');
	 $('html,body').animate({
        scrollTop: $(sections[selected]).offset().top},
        'slow');
  console.log('scrolling down');

	 setTimeout(function() {
        isanimating = false;
    }, 500);

 }
});

// f5 button starts on top of site

$("body").keydown(function(e){
    if(e.which==116){
        window.location.href = "index.html";
        e.preventDefault();
    }
});

let mlistItem = document.querySelectorAll('ul.navigation--mobile li');


console.log(mlistItem)
// function hideMobileMenu = () =>{
//
// }

for (var i = 0; i < mlistItem.length; i++){
  mlistItem[i].addEventListener('click', function(){
    mmenu.classList.toggle('navigation--mobile--active');
    hamburger.classList.toggle('hamburger--active');
    document.body.classList.toggle('stop-scrolling');
  });
}

// reloading page if widnow has been resized

window.onresize = function(){ location.reload(); }



// clouds

var planeta = document.querySelector('.planet');
var factory = document.querySelector('.fabryka');
var air = document.querySelector('.powietrze');
var forest = document.querySelector('.las');
var ground = document.querySelector('.ziemia');
var water = document.querySelector('.woda');

planeta.addEventListener('click',function(){

	$('#cloud_cosmos').toggleClass('chmurka_active');

});

factory.addEventListener('click',function(){

	$('#cloud__factory').toggleClass('chmurka_active');

});

air.addEventListener('click',function(){

	$('#cloud__air').toggleClass('chmurka_active');

});

forest.addEventListener('click',function(){

	$('#cloud__forest').toggleClass('chmurka_active');

});

ground.addEventListener('click',function(){

	$('#cloud__ground').toggleClass('chmurka_active');

});

water.addEventListener('click',function(){

	$('#cloud__water').toggleClass('chmurka_active');

});

// calculator

let kalkualtorHandle = document.querySelector('#oblicz');


let oblicz = () => {
  let continent = document.querySelector('#continent').value;
  let country = document.querySelector('#country').value;
  let ile = document.querySelector('#ile').value;
  var kalkulator__wynik = document.querySelector('#kalkulator__wynik');

  kalkulator__wynik.src = "../kalkulator.php?continent="+continent+"&country="+country+"&ile="+ile;
}

kalkualtorHandle.addEventListener('click',oblicz);
