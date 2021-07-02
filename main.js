window.onload = (e) => {
  let magic = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0) {
      console.log("yjsdbosua");
      entries[0].target.style.animation = "PopLeft  ease 250ms 0s";
      entries[0].target.style.opacity = "1";
    } else {
      entries[0].target.style.animation = "none ";
      entries[0].target.style.opacity = "0";
    }
  });

  let animElements = document.querySelectorAll(".anim");
  console.log("Length " + animElements.length);
  animElements.forEach((e) => {
    magic.observe(e);
  });
};

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
