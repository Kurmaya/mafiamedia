const close = document.querySelectorAll('span.close');
const work = document.querySelector('.work');
const proj = document.querySelector('.with');
const mob = document.querySelector('.mob');
var loader = document.getElementById('preloader');
const vidHold = document.querySelector('.vid-holder iframe');
var leenks = document.querySelectorAll('.list');
var player = new Vimeo.Player(vidHold);

function blur(){
document.querySelector('canvas').classList.toggle('active');
document.querySelector('.mark').classList.toggle('active');
}
leenks.forEach((a)=>{
  a.addEventListener('click',function(){
    vidHold.src=this.querySelector('p').textContent;
  })
});

window.addEventListener('load',function(){
  loader.style.display="none";
});


proj.addEventListener('click', function() {
  blur();
  document.querySelector('.with-container').classList.add('active');
  document.querySelector('.with-container').classList.remove('hide');

})
mob.addEventListener('click', function() {
  blur();
  document.querySelector('.mob-container').classList.add('active');
  document.querySelector('.mob-container').classList.remove('hide');

})
close.forEach((c) => {

  c.addEventListener('click', function() {
    blur();

    c.parentElement.classList.add('hide');
    document.querySelector('.hold').classList.remove('active');
    document.querySelector('.social-media').classList.remove('active');
  document.querySelector('.vid-wrapper').classList.remove('active');
  player.pause();
    // c.parentElement.classList.remove('active');
  })
})
work.addEventListener('click', function() {
  blur();
  document.querySelector('.work-container').classList.add('active');
  document.querySelector('.work-container').classList.remove('hide');

})
const lightbox =document.getElementById('lightbox');
// const lightHolder=document.getElementById('light-holder');
// const close2=lightbox.querySelector('span');
const swipe= document.querySelector('.swi-container');
const swipes= document.querySelectorAll('.swiper-slide img');
const workVid = document.querySelector('.workVideos');
const workSocMed = document.querySelector('.workSocial');
//
workVid.addEventListener('click',function(){
  document.querySelector('.hold').classList.add('active');
  setTimeout(function(){
    document.querySelector('.social-media').classList.remove('active');
  document.querySelector('.vid-wrapper').classList.add('active');
},100);
});
workSocMed.addEventListener('click',function(){
  document.querySelector('.hold').classList.add('active');
  player.pause();
  document.querySelector('.vid-wrapper').classList.remove('active');
  setTimeout(function(){
  document.querySelector('.social-media').classList.add('active');
},100)
});

// swipes.forEach( swip=> {
//   swip.addEventListener('click',function(){
//     // console.log(swip.parentElement.querySelector('p').textContent);
//     let text=swip.parentElement.querySelector('p').textContent;
//     lightbox.classList.add('active');
//     close2.classList.add('active');
//
// lightHolder.querySelector('iframe').src=text;
//     ;
//
//   })
// })
//     close2.addEventListener('click',function(){
//   lightbox.classList.remove('active');
//   // document.body.style.overflow="auto";
//   close2.classList.remove('active');
//   lightHolder.querySelector('iframe').src= "";
// })
// lightbox.addEventListener('click', e => {
//   if(e.target!== e.currentTarget) return
//   // document.body.style.overflow="auto";
//   lightbox.classList.remove('active');
//   close2.classList.remove('active');
//   lightHolder.querySelector('iframe').src= "";
//
// })
// close.addEventListener('click',function(){
//   document.querySelector('.work-container').classList.remove('active');
//   document.querySelector('.work-container').classList.add('hide');
// })
