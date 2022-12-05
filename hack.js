let search = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  search.classList.toggle("active");
};
let carts = document.querySelector("#cart");
document.querySelector("#cart-btn").onclick = () => {
  carts.classList.toggle("active");
};

let form = document.querySelector("#login");
document.querySelector("#user-btn").onclick = () => {
  form.classList.toggle("active");
};

// sliding swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//   sliding swiper end here

// temple square

var swiper = new Swiper(".ourSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let s = 0;
let tabu = document.getElementById("tab");
let butns = document.querySelectorAll("#btn");

let he1 = document.querySelectorAll("h3");
let pric = document.querySelectorAll("#price");
let n = document.querySelectorAll("#num");
let is = document.querySelectorAll("#r");
let sum = 0;
for (let i = 0; i < butns.length; i++) {
  butns[i].addEventListener("click", function f() {
    let h = he1[i].innerHTML;
    let p = pric[i].innerHTML;
    let itms = n[i].value;
    

   
    

    let pr = parseInt(is[i].innerHTML);
    tabu.innerHTML += `<tr>
                             <td>${h}</td>
                             <td>${p}</td>  
                             <td>${itms}</td> 
                             </tr>`;
    let mad = document.getElementById("maduri");
    let final = parseInt(is[i].innerHTML) * parseInt(itms)
   sum += final
    console.log(sum);
    mad.innerHTML = "Total =" + sum
  });
}

function validate() {
  let unm = document.getElementById("uname");
  let pnm = document.getElementById("pname");

  if (unm.value == " " || pnm.value == " ") {
    
    if (unm.value == "") {
      anm.style.border = "2px solid red";
    }
    if (pnm.value == "") {
      aps.style.border = "2px solid red";
    }
  }
  else{
    alert('Logged in successfully')
  } 
}

function validate2() {
  let anm = document.getElementById("aname");
  let aps = document.getElementById("apas");
  if (anm.value == " " || aps.value == " ") {
    
    if (anm.value == "") {
      anm.style.border = "2px solid red";
    }
    if (aps.value == "") {
      aps.style.border = "2px solid red";
    }
  } 
  else{
    alert('Logged in successfully')
  }
 
}
