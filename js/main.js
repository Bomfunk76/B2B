/*----------------------------
        Telegram call 
----------------------------*/
const callBtn = document.querySelector(".call-btn-telegram");
const callContent = document.querySelector(".telegram-call-content");
const callContentClose = document.querySelector(".call-content-close");

callBtn.addEventListener("click", () => {
  callContent.classList.toggle("open");
});
callContentClose.addEventListener("click", () => {
  callContent.classList.remove("open");
});
/*----------------------------
        Callbar call 
----------------------------*/
const callbackBtn = document.querySelector(".callback-btn");
const callbackTimer = document.querySelector(".callback-timer");

callbackBtn.addEventListener("click", () => {
  callbackTimer.classList.add("call-time");
  setTimeout(function() {
    callbackTimer.classList.remove("call-time");
  }, 5000);
});

// const slideVideoImg = document.querySelector(".video-img");
// const slideVideoClose = document.querySelector(".video-close");
// const slideVideoContent = document.querySelector(".video-content");
// const body = document.querySelector("body");

// slideVideoImg.addEventListener("click", () => {
//     slideVideoContent.classList.toggle("open");
//     body.style.overflow = "hidden";
// });
// slideVideoClose.addEventListener("click", () => {
//     slideVideoContent.classList.toggle("open");
//     body.style.overflow = "auto";
// });
var flky = new Flickity(".about-slider", {
  wrapAround: true,
  freeScroll: true,
  autoPlay: false,
  Parallax: true,
  accessibility: true,
  fullscreen: true,
  pageDots: false,
  resize: true,
  imagesLoaded: true,
  freeScrollFriction: 0.02,
  prevNextButtons: false
});

const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".header-items");
const mobOverlay = document.querySelector(".mobile-overlay");

hamburger.addEventListener("click", () => {
  mobOverlay.classList.toggle("open");
  navItems.classList.toggle("open");
  hamburger.classList.toggle("open");
});

var mobileDepartmentBtns = document.querySelectorAll(".mobile-department-btn");
var mobileDepartmentDetails = document.querySelectorAll(
  ".mobile-department-details"
);

for (var i; i < mobileDepartmentBtns.length; i++) {
  for (var j; j < mobileDepartmentDetails.length; j++) {
    mobileDepartmentBtn[i].addEventListener("click", () => {
      mobileDepartmentBtn[i].classList.toggle("open");
      mobileDepartmentDetails[j].classList.toggle("open");
    });
  }
}

// $('.box-money').tilt({
//     speed: 500,
//     perspective: 5000,
// });

var parallaxElements = $(".parallax"),
  parallaxQuantity = parallaxElements.length;

$(window).on("scroll", function() {
  window.requestAnimationFrame(function() {
    for (var i = 0; i < parallaxQuantity; i++) {
      var currentElement = parallaxElements.eq(i);
      var scrolled = $(window).scrollTop();

      currentElement.css({
        transform: "translate3d(0," + scrolled * -0.1 + "px, 0)"
      });
    }
  });
});

$(".header").on("click", "a", function(event) {
  event.preventDefault();
  var id = $(this).attr("href"),
    top = $(id).offset().top;
  $("body,html").animate({ scrollTop: top - 150 }, 500);
  if ($(window).width() < 768) {
    $(".hamburger").removeClass("open");
    $(".header-items").removeClass("open");
    $(".mobile-overlay").removeClass("open");
  }
});

const cashbackBtn = document.querySelector(".cashback-btn");
const cashbackForm = document.querySelector(".cashback-form-overlay");
const cashbackFormClose = document.querySelector(".cashback-form-close");

const cashbackFormBtn = document.querySelector(".cashback-form-btn");
const formFinish = document.querySelector(".form-finish");
const formContent = document.querySelector(".form-content");

function cashBackForm(elem) {
  cashbackForm.classList.toggle("open");
  formContent.style.display = "flex";
  cashbackFormBtn.style.display = "block";
  cashbackFormBtn.disabled = true;
  formFinish.style.display = "none";
}
cashbackFormBtn.addEventListener("click", () => {
  formContent.style.display = "none";
  cashbackFormBtn.style.display = "none";
  formFinish.style.display = "flex";
});

var boxDollar = document.querySelectorAll(".box-dollar");
var boxCent = document.querySelectorAll(".box-cent");
var boxCashback = document.querySelector(".box-cashback");

if (navigator.userAgent.search("Firefox") >= 0) {
  boxCent.forEach(obj => {
    obj.style.animation = "0s";
    console.log(obj);
  });
  boxDollar.forEach(obj => {
    obj.style.animation = "0s";
    console.log(obj);
  });
  boxCashback.style.animation = "0s";
}
function ValidPhone() {
  // var re = /^\+380\s(\d{2})\s(\d{3})\s(\d{2})\s(\d{2})$/;
  var re = /^((8|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  var myPhone = document.getElementById("tel").value;
  var check = document.querySelector(".check-tel");
  var wrongData = document.querySelector(".wrong-data");
  var valid = re.test(myPhone);
  if (valid) {
    check.classList.add("done");
    check.classList.remove("wrong");
  } else {
    check.classList.remove("done");
    check.classList.add("wrong");
    wrongData.style.animation =
      "shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both";
    setTimeout(function() {
      wrongData.style.animation = "none";
    }, 1000);
  }
}
function ValidFirstName() {
  var re = /^[А-Яа-яёЁЇїІіЄєҐґ]{2,14}$/;
  var firstName = document.getElementById("firstname").value;
  var check = document.querySelector(".check-firstname");
  var valid = re.test(firstName);
  if (valid) {
    check.classList.add("done");
    check.classList.remove("wrong");
  } else {
    check.classList.remove("done");
    check.classList.add("wrong");
  }
}
function ValidLastName() {
  var re = /^[А-Яа-яёЁЇїІіЄєҐґ]+$/;
  var firstName = document.getElementById("lastname").value;
  var check = document.querySelector(".check-lastname");
  var valid = re.test(firstName);
  if (valid) {
    check.classList.add("done");
    check.classList.remove("wrong");
  } else {
    check.classList.remove("done");
    check.classList.add("wrong");
  }
}
function ValidMiddleName() {
  var re = /^[А-Яа-яёЁЇїІіЄєҐґ]+$/;
  var firstName = document.getElementById("middlename").value;
  var check = document.querySelector(".check-middlename");
  var valid = re.test(firstName);
  if (valid) {
    check.classList.add("done");
    check.classList.remove("wrong");
  } else {
    check.classList.remove("done");
    check.classList.add("wrong");
  }
}
function ValidForm() {
  var cashbackFormBtn = document.querySelector(".cashback-form-btn");
  var checkTel = document
    .querySelector(".check-tel")
    .classList.contains("done");
  var checkFirstName = document
    .querySelector(".check-firstname")
    .classList.contains("done");
  var checkLastName = document
    .querySelector(".check-lastname")
    .classList.contains("done");
  var checkMiddleName = document
    .querySelector(".check-middlename")
    .classList.contains("done");

  if (
    (checkTel === true) &
    (checkFirstName === true) &
    (checkLastName === true) &
    (checkMiddleName === true)
  ) {
    cashbackFormBtn.disabled = false;
  } else {
    cashbackFormBtn.disabled = true;
  }
}

var $animation_elements = $(".animation-element");
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    //check to see if this current container is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("in-view");
    } else {
      $element.removeClass("in-view");
    }
  });
}

$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");
