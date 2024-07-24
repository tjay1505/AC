document
  .querySelector(".dropdown-toggle")
  .addEventListener("click", function () {
    document.querySelector(".dropdown-menu").classList.toggle("show");
  });

const menubox = document.getElementById("menubox");

function disableScrolling() {
  document.body.style.overflow = "hidden";
}

function enableScrolling() {
  document.body.style.overflow = "";
}

function openMenu() {
  menubox.classList.toggle("menu-toggle");
  const menuOpened = menubox.classList.contains("menu-toggle");
  console.log(menuOpened ? "Menu opened" : "Menu closed");
  document.getElementById("imgmenu").src = menuOpened
    ? "./icons/close.png"
    : "./icons/menu (1).png";
  if (menuOpened) {
    disableScrolling();
  } else {
    enableScrolling();
  }
}
//for--------------- Ratings

const ary = [
  {
    img: "./img/8033182-min.png",
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore accusantium deleniti aspernatur praesentium sit, molestias",
  },
  {
    img: "./img/10352168-min.png",
    txt: "Lorem ipsum dolor sit amet conser adipisicing elit. Labore accusantium deleniti aspernatur praesentium sit, molestias",
  },
  {
    img: "./img/10511516-min.png",
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore accusantium deleniti aspernatur praesentium sit, molestias",
  },
  {
    img: "./img/handshake-3d-icon-with-check-mark.png",
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore accusantium deleniti aspernatur praesentium sit, molestias",
  },
];
ary.map((ele) => {
  const rating = document.getElementById("Ratings");
  let newel = document.createElement("div");
  newel.className = 'col-md-3 '
  newel.innerHTML = `<div class="col-12 mt-3 border border-2 rounded-2">
          <img class="col-12" src=${ele.img} alt="">
          <p class="col-12 text-center" >${ele.txt}</p>
        </div>`;
  rating.append(newel);
});

//==========================
