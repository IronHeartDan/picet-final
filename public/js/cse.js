function toggleMenu(show) {
  let nav = document.getElementById("nav_menu");
  let con = document.getElementById("nav_header");
  let items = document.getElementsByClassName("menu_item");
  let itemsCon = document.getElementById("nav_itemCon");

  if (show) {
    document.body.style.overflow = "hidden";
    con.style.backgroundColor = "#3aafa9";
    con.style.height = "100vh";
    con.style.alignItems = "center";
    itemsCon.style.display = "flex";
    nav.href = "javascript:toggleMenu(false)";
    nav.innerHTML = "<img src='./asset/close.svg' alt='menu' />";
    Array.from(items).forEach((item) => {
      item.style.display = "block";
    });
  } else {
    document.body.style.overflow = "auto";
    con.style.alignItems = "unset";
    itemsCon.style.display = "none";
    con.style.backgroundColor = "#7d848b";
    con.style.height = "60px";
    nav.href = "javascript:toggleMenu(true)";
    nav.innerHTML = "<img src='./asset/menu.svg' alt='menu' />";
    Array.from(items).forEach((item) => {
      item.style.display = "none";
    });
  }
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

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
