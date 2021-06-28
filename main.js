function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.onscroll = (e) => {
  let scrollToTop = document.getElementById("scrollToTop");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTop.style.opacity = 1;
    scrollToTop.style.transform = "scale(1)";
  } else {
    scrollToTop.style.opacity = 0;
    scrollToTop.style.transform = "scale(0)";
  }
};

function toggleScreen(type) {
  let toggleScreen = document.getElementById("toggleScreen");
  if (type === 0) {
    document.documentElement
      .requestFullscreen()
      .then(() => {
        toggleScreen.href = "javascript:toggleScreen(1)";
        toggleScreen.innerHTML =
          "<img src='./assest/normalScreen.svg' alt='NormalScreen' />";
      })
      .catch((e) => {
        alert(e);
      });
  } else {
    document
      .exitFullscreen()
      .then(() => {
        toggleScreen.href = "javascript:toggleScreen(0)";
        toggleScreen.innerHTML =
          "<img src='./assest/fullScreen.svg' alt='FullScreen' />";
      })
      .catch((e) => {
        alert(e);
      });
  }
}

function toggleMenu(show) {
  let menu = document.getElementById("overlay_menu");
  if (show) {
    menu.style.opacity = "1";
    menu.style.width = "100%";
    document.body.style.overflow = "hidden";
  } else {
    menu.style.opacity = "0";
    menu.style.width = "0%";
    document.body.style.overflow = "scroll";
  }
}
