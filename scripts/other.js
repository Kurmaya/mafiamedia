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
const websites = document.querySelector('.websites');
const campaigns = document.querySelector('.campaign');
//
workVid.addEventListener('click',function(){
  document.querySelector('.hold').classList.add('active');
  setTimeout(function(){
    document.querySelector('.social-media').classList.remove('active');
  document.querySelector('.vid-wrapper').classList.add('active');
},100);
});
workVid.addEventListener('mouseover',function(){
  document.querySelector('.video-hover video').src='videos/four.mp4';
  document.querySelector('.video-hover video').play();
  document.querySelector('.video-hover video').classList.add('active');

})
workVid.addEventListener('mouseleave',function(){
document.querySelector('.video-hover video').classList.remove('active');
  document.querySelector('.video-hover video').pause();


})

workSocMed.addEventListener('mouseover',function(){
  document.querySelector('.video-hover video').classList.add('active');
  document.querySelector('.video-hover video').src='videos/ocean-65560.mp4';

  document.querySelector('.video-hover video').play();
})
workSocMed.addEventListener('mouseleave',function(){
  document.querySelector('.video-hover video').classList.remove('active');
  document.querySelector('.video-hover video').pause();
})
workSocMed.addEventListener('click',function(){
  document.querySelector('.hold').classList.add('active');
  player.pause();
  document.querySelector('.vid-wrapper').classList.remove('active');
  setTimeout(function(){
  document.querySelector('.social-media').classList.add('active');
},100)
});
websites.addEventListener('mouseover',function(){
  document.querySelector('.video-hover video').src='videos/elephants-126215.mp4';
  document.querySelector('.video-hover video').classList.add('active');
  document.querySelector('.video-hover video').play();
})
websites.addEventListener('mouseleave',function(){
  document.querySelector('.video-hover video').classList.remove('active');
  document.querySelector('.video-hover video').pause();
})

campaigns.addEventListener('mouseover',function(){
  document.querySelector('.video-hover video').src='videos/five.mp4';
  document.querySelector('.video-hover video').classList.add('active');
  document.querySelector('.video-hover video').play();
})
campaigns.addEventListener('mouseleave',function(){
  document.querySelector('.video-hover video').classList.remove('active');
  document.querySelector('.video-hover video').pause();
})
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
