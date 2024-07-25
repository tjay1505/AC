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
    img: "./img/ru.png",
    txt: "Lowest price in Chennai ",
  },
  {
    img: "./img/10352168-min.png",
    txt: "24/7 support",
  },
  {
    img: "./img/10511516-min.png",
    txt: "3 months warranty  ",
  },
  {
    img: "./img/handshake-3d-icon-with-check-mark.png",
    txt: "Trusted and experienced Technicians",
  },
  {
    img: "./img/handshake-3d-icon-with-check-mark.png",
    txt: "Pay after service",
  },
  {
    img: "./img/handshake-3d-icon-with-check-mark.png",
    txt: "door step within 1 Hr",
  },
];
ary.map((ele) => {
  const rating = document.getElementById("Ratings");
  let newel = document.createElement("div");
  newel.className = 'col-md-3 '
  newel.innerHTML = `<div class="col-12 mt-3  d-flex flex-column align-items-center border-2 rounded-2">
          <img class="col-6" src=${ele.img} alt="">
          <p class="col-12 text-center" >${ele.txt}</p>
        </div>`;
  rating.append(newel);
});

//==========================
const otherService = document.getElementById('otherService')

const ary2 = [{
  img:"./icons/other/machine.png",
  txt:'Washing Machine services'
},
{
  img:"./icons/other/fridge.png",
  txt:'Fridge services'
},
{
  img:"./icons/other/water-heater.png",
  txt:'Water Heater services'
},
{
  img:"./icons/other/television.png",
  txt:'TV services'
},
{
  img:"./icons/other/deep.png",
  txt:'Deep Freezer services'
},]

ary2.map((ele) => {
  const y = document.createElement('div')
  y.className = 'co-12 col-md-3 shadow p-4 mb-4 bg-white border-2 d-flex flex-column align-items-center justify-content-center my-2 py-2'
   y.innerHTML = `<img class="col-7" src=${ele.img} alt="">
            <p>${ele.txt}</p>`
  otherService.append(y)
})