import $ from "jquery/dist/jquery";
import "slick-carousel";

import "./style.css";
import "./styles/main.scss";

window.jQuery = window.$ = $;

// ————————————————————————————————————o————————————————————————————————————o Images+Video -->
// ———————————————————————————————————— Img Sizing + Aspect Ratio —>
// Programmatically setting widths + heights + aspect ratios of all
// images on each individual page.
const imagesLoad = () => {
  var allImages = document.getElementsByTagName("img");
  setTimeout(() => {
    for (const img of allImages) {
      img.width = img.naturalWidth;
      img.height = img.naturalHeight;
      img.style.aspectRatio = img.naturalWidth / img.naturalHeight;
      img.parentElement.style.aspectRatio =
        img.naturalWidth / img.naturalHeight;
      // console.log('aspect', img.style.aspectRatio)
      // console.log("allImages", allImages);
    }
  }, 100);
};

// ———————————————————————————————————— Video Sizing + Aspect Ratio —>
// delay for loop until all videos are loaded
//
const videosLoad = () => {
  const allVideos = document.getElementsByTagName("video");
  setTimeout(() => {
    for (let oneVid of allVideos) {
      oneVid.width = oneVid.videoWidth;
      oneVid.height = oneVid.videoHeight;
      oneVid.style.aspectRatio = oneVid.videoWidth / oneVid.videoHeight;
      oneVid.parentElement.style.aspectRatio =
        oneVid.videoWidth / oneVid.videoHeight;
      // console.log("aspect", oneVid.style.aspectRatio);
      // console.log("oneVid", oneVid.width);
    }
  }, 100);
};

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

// ————————————————————————————————————o————————————————————————————————————o Video -->
// ———————————————————————————————————— Video - Play/Pause + Button Toggle —>
window.onload = (event) => {
  imagesLoad();
  videosLoad();

  $(".gig-slick").slick(slickSettings);

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
