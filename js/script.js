

let selected = 0;
let isanimating = false;


const sections = Array('#header','#about','#cosmos','#air','#factory','#calculator','#forest','#ground','#what','#map','#water');

console.log(sections)

let arrow = () => {
  if (selected == 0) item(1);
  else return;
}

const arrowHandler = document.querySelector('.arrow');
arrowHandler.addEventListener('click',arrow);

var overlay = document.querySelector(".overlay");

function loader() {
  overlay.classList.toggle('overlay-disabled');
  overlay.style.zIndex='0';
  console.log('elo');

  var video = document.querySelector('#myVideo');
  video.play()
}

window.addEventListener('load', function(){
  setTimeout(loader,2000);
})




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

let kalkualtorHandle = document.querySelector('#oblicz');


let oblicz = () => {
  let continent = document.querySelector('#continent').value;
  let country = document.querySelector('#country').value;
  let ile = document.querySelector('#ile').value;
  var kalkulator__wynik = document.querySelector('#kalkulator__wynik');

  kalkulator__wynik.src = "../kalkulator.php?continent="+continent+"&country="+country+"&ile="+ile;
}

kalkualtorHandle.addEventListener('click',oblicz);
