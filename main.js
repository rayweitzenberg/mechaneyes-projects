import $ from "jquery";
import "slick-carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";
import "./styles/main.scss";

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

// ————————————————————————————————————o————————————————————————————————————o Slick Projects -->
// ———————————————————————————————————— Slick Projects —>
let slickSettings = {
  fade: true,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1200,
  pauseOnHover: false,
};

$(function () {
  $(".gig-slick").slick(slickSettings);
});

// ————————————————————————————————————o————————————————————————————————————o Video -->
// ———————————————————————————————————— Video - Play Button Toggle —>
// $(".project-video").click(function () {
//   $(".project-video__button").toggle();
// });

window.onload = (event) => {
  // let pjVid = document.querySelector(".project-video__video");
  // let pjVidButton = document.querySelector(".project-video__button");

  // pjVid.onclick = () => {
  //   pjVid.paused ? pjVid.play() : pjVid.pause();
  //   pjVidButton.classList.toggle("project-video__button--hidden");
  // };

  const vidsCollection = document.getElementsByClassName(
    "project-video__video"
  );
  const vidBtnsCollection = document.getElementsByClassName(
    "project-video__button"
  );
  for (let i = 0; i < vidsCollection.length; i++) {
    vidsCollection[i].onclick = () => {
      vidsCollection[i].paused
        ? vidsCollection[i].play()
        : vidsCollection[i].pause();
      vidBtnsCollection[i].classList.toggle("project-video__button--hidden");
    };
  }
};
