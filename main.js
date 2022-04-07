import "./style.css";
import "./styles/main.scss";

$(function() {
  // ———————————————————————————————————— Img Sizing + Aspect Ratio —>
  // Programmatically setting widths + heights + aspect ratios of all
  // images on each individual page.
  // TODO: Setup video the same way
  var allImages = document.getElementsByTagName("img");
  for (const img of allImages) {
    img.width = img.naturalWidth
    img.height = img.naturalHeight
    img.style.aspectRatio = img.naturalWidth / img.naturalHeight
    img.parentElement.style.aspectRatio = img.naturalWidth / img.naturalHeight
    // console.log('aspect', img.style.aspectRatio)
  }
})

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
// ———————————————————————————————————— Video - Play/Pause + Button Toggle —>
window.onload = (event) => {
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
