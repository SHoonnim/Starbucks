const badgeEL = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
function windowScrollHandler()
{
  if(window.scrollY > 500)
  {
    //배지 숨기기
    //gsap.to(요소, 시간, 옵션);
    gsap.to(badgeEL, 0.6, {opacity: 0, display: "none"});

    //버튼 보이기
    //gsap.to("#to-top", 0.2, {x: 0});
    gsap.to(toTopEl, 0.2, {x: 0});
  }
  else
  {
    //배지 보이기
    gsap.to(badgeEL, 0.6, {opacity: 1, display: "block"});

    //버튼 숨기기
    //gsap.to("#to-top", 0.2, {x: 100});
    gsap.to(toTopEl, 0.2, {x: 100});
  }
}
window.addEventListener("scroll", _.throttle(windowScrollHandler, 300));


function toTopClickHandler()
{
  gsap.to(window, 0.7, {scrollTo: 0});
}
toTopEl.addEventListener("click", toTopClickHandler);

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {opacity: 1, delay: (index + 1) * 0.7})
});

const noticeSwiperOption = {
  direction: "vertical",
  speed: 400,//움직이는 속도
  spaceBetween: 100,//아이템 사이 간격
  autoplay:{
    delay: 3000,//다음 스와이프 까지 걸리는 대기 시간
    disableOnInteraction: false,//마우스 인터렉션 시 멈춤 여부 true면 드래그 슬라이드하면 멈춤
  },
  loop: true//반복재생
};
new Swiper(".notice-line .swiper", noticeSwiperOption);

const promotionSwiperOption = {
  direction: "horizontal",
  slidesPerView: 3,//한번에 보여지는 아이템 개수
  spaceBetween: 10,//아이템 사이 간격
  centeredSlides: true,//중앙부터 시작
  speed: 400,//움직이는 속도
  autoplay:{
    delay: 5000,//다음 스와이프 까지 걸리는 대기 시간
    disableOnInteraction: false,//마우스 인터렉션 시 멈춤 여부 true면 드래그 슬라이드하면 멈춤
  },
  loop: true,//반복재생
  pagination: {
    el: ".promotion .swiper-pagination",//페이지 번호 요소 엘리먼트
    clickable: true//페이지 버튼 클릭 가능여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next"
  }
};
new Swiper(".promotion .swiper", promotionSwiperOption);

const awardsSwiperOption = {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next"
  }
};
new Swiper(".awards .swiper", awardsSwiperOption);

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
function promotionToggleBtnClickHandler()
{
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion)
  {
    promotionEl.classList.add("hide");
  }
  else
  {
    promotionEl.classList.remove("hide");
  }
}
promotionToggleBtn.addEventListener("click", promotionToggleBtnClickHandler)

function getRandomNumber(min, max)
{
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size)
{
  const gsapOption = {
    y: size,
    repeat: -1,//-1이면 무한반복
    yoyo: true,//자연스럽게 원위치로 돌아온다!!
    ease: Power1.easeInOut,
    delay: getRandomNumber(0, delay)
  };
  gsap.to(selector, getRandomNumber(1.5,2.5), gsapOption);
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: 0.8
    })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
