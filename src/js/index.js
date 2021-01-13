const logo = document.getElementById("logo");
const topIconsCards = document.querySelectorAll(".topIconCards");
const topIconsButtons = document.querySelectorAll(".topIcon");
const chatNow = document.querySelector(".chatOpt1");
const chatNowCard = document.querySelector(".chatNow");
const advisorProfileCard = document.querySelector(".advisorProfile");
const minimizeButton = document.querySelector(".minimize");
const maximizebutton = document.querySelector("#maximization");
const maximizedCard = document.querySelector(".maximizeChat");
const closeCard = document.getElementsByClassName("close");
const buttonVault = document.querySelector(".vault");
const cashflowCard = document.querySelector(".card-cashflow");
const rounder = document.querySelectorAll(".rounder");

function openCloseTopTabs() {
  for (let i = 0; i < topIconsButtons.length; i++) {
    topIconsButtons[i].addEventListener("click", (e) => {
      if (topIconsCards[parseInt(e.target.name)].classList.contains("hide")) {
        closeCards();
        removeRounder();
        toggleCard(topIconsCards[parseInt(e.target.name)]);
        rounder[e.target.name].classList.add("gray");
      } else {
        topIconsCards[parseInt(e.target.name)].classList.add("hide");
        rounder[e.target.name].classList.remove("gray");
      }
    });
  }
}

const composer = document.querySelectorAll(".composer");
const upload = document.querySelector(".upload");
const uploadButtons = document.querySelector(".upload-btn");

const filesPCard = document.querySelector(".uploadFileProgress");
const filesCard = document.querySelector(".uploadFile");

for (let i = 0; i < composer.length; i++) {
  composer[i].addEventListener("click", () => {
    filesPCard.classList.remove("none");
    filesPCard.classList.remove("hide");
  });
}

$(".composer").click(function () {
  $(this).parents(".card").addClass("hide").addClass("previous_card");
});

$(".uploadFileProgress .goBack").click(function () {
  $(".card.previous_card").removeClass("hide");
  $(this).parents(".card").addClass("hide");
});

$(".chatOpt1").click(function () {
  $(this).parents(".card").addClass("hide");
});

$(".chatNow .goBack1").click(function () {
  $(".selectionCard").removeClass("hide");
  $(this).parents(".card").addClass("hide");
});

$(
  ".selectionCard .close, .chatNow  .close, .advisorProfile .close,.chatting .close"
).click(function () {
  $(".r3").removeClass("gray");
});
$(".notify .close").click(function () {
  $(".r2").removeClass("gray");
});

$(".topIconCards .close,.uploadFileProgress .close").click(function () {
  $(".r1").removeClass("gray");
});

$(".openChat,.chatNow  .chatNow-name").click(function () {
  $(".chatting").removeClass("hide");
  $(this).parents(".card").addClass("hide").addClass("previous_Card");
});
$(".chatting .goBack").click(function () {
  $(this).parents(".card").addClass("hide");
  $(this)
    .parents(".card")
    .siblings(".previous_Card")
    .removeClass("hide")
    .removeClass("previous_Card");
});

$(".maximizeChat .close").click(function () {
  $(this).parents(".maximizeChat").addClass("hide");
  $(this).parents(".maximizeChat").siblings(".chatting").addClass("hide");
});

const dashBoardOptions = document.querySelectorAll(".option");

for (let i = 0; i < dashBoardOptions.length; i++) {
  dashBoardOptions[i].addEventListener("click", () => {
    takeOverSelected();
    dashBoardOptions[i].classList.add("selected");

    dashBoardOptions[i].classList.add("selected");
    document
      .querySelector(".dashboardOptions")
      .setAttribute("class", "dashboardOptions option" + i);
  });
}
for (let i = 0; i < dashBoardOptions.length; i++) {
  dashBoardOptions[i].addEventListener("click", () => {
    takeOverSelected();
    dashBoardOptions[i].classList.add("selected");

    dashBoardOptions[i].classList.add("selected");
    document
      .querySelector(".dashboardSettings")
      .setAttribute("class", "dashboardSettings option" + i);
  });
}


function takeOverSelected() {
  for (let i = 0; i < dashBoardOptions.length; i++) {
    dashBoardOptions[i].classList.remove("selected");
  }
}

function srcChange(element) {
  let src = element.src;
  let shortened = src.substring(0, src.length - 4);
  let extend = "Black.png";
  let extended = shortened + extend;
  element.src = extended;
  return extended;
}

function toggleCard(element) {
  if (element.classList.contains("hide")) {
    element.classList.remove("hide");
  } else {
    element.classList.add("hide");
  }
}

function closeCards() {
  for (let i = 0; i < topIconsCards.length; i++) {
    if (!topIconsCards[i].classList.contains("hide"))
      topIconsCards[i].classList.add("hide");
  }
}

function removeRounder() {
  for (let i = 0; i < rounder.length; i++) {
    if (rounder[i].classList.contains("gray")) {
      rounder[i].classList.remove("gray");
    }
  }
}

function cardAnimation(button, card) {
  button.addEventListener("click", () => {
    card.classList.toggle("hide");
  });
}
for (let i = 0; i < closeCard.length; i++) {
  closeCard[i].addEventListener("click", (e) => {
    let firstTarget = e.target.parentNode;
    let target = e.target.parentNode.parentNode;
    let secondTarget = e.target.parentNode.parentNode.parentNode;
    let thirdTarget = e.target.parentNode.parentNode.parentNode.parentNode;

    if (target.classList.contains("closable")) {
      target.classList.add("hide");
    }
    if (firstTarget.classList.contains("closable")) {
      firstTarget.classList.add("hide");
    }
    if (secondTarget.classList.contains("closable")) {
      secondTarget.classList.add("hide");
    }
    if (thirdTarget.classList.contains("closable")) {
      thirdTarget.classList.add("hide");
    }
  });
}

openCloseTopTabs();
cardAnimation(chatNow, chatNowCard);
chatNow.addEventListener("click", () => {
  const image = document.querySelector(".at");
  image.style.zIndex = "0";
});
// cardAnimation(openChat, chatting);
cardAnimation(maximizebutton, maximizedCard);

$(".advisorChat").click(function () {
  $(this).parents(".card").addClass("hide").addClass("last_opened_card");
  $(this).parents(".card").siblings(".advisorProfile ").removeClass("hide");
});

$(".advisorProfile .goBack1").click(function () {
  $(".last_opened_card").removeClass("hide");
  $(this).parents(".card").addClass("hide");
});
const searchSwitch = document.querySelector(".searchSwitch");

const searchHidden = document.querySelector(".hidden");
const magnify = document.querySelector(".magnify");
const magnifyInput = document.querySelector(".magnify input");
const menuItems = document.querySelector(".menu-items");
searchSwitch.style.color = "rgb(206,206,206)";

function toggleSearch() {
  magnify.classList.toggle("active");
  if (magnify.classList.contains('active')) {
    searchSwitch.style = `left:25px; color:#212121`;
    magnifyInput.style = `opacity:1;`;
    magnify.style.background = "#cecece";
    searchSwitch.src = `../../assets/images/png/magnifyActive.png`;
  } else {
    // searchSwitch.style = `transition: left 0s ease, right .3s ; color:#cecece`;
    searchSwitch.style = `left: unset; transition: left 0s ease, right .3s ; color:#cecece`;
    magnifyInput.style = `opacity:0;`;
    magnify.style.background = "#212121";
    searchSwitch.src = `../../assets/images/png/magnify.png`;
  }
}

searchSwitch.addEventListener("click", toggleSearch);
// searchHidden.addEventListener("click", toggleSearch);

function minimize() {
  minimizeButton.addEventListener("click", () => {
    maximizedCard.classList.add("hide");
  });
}
minimize();

function changeSetting(button, element) {
  button.addEventListener("click", () => {
    element.classList.remove("none");
  });
}

function hidePages() {
  const settingsPages = document.querySelectorAll(".set");
  for (let i = 0; i < settingsPages.length; i++) {
    settingsPages[i].classList.add("none");
  }
}
function hideCards() {
  const cardChange = document.querySelectorAll(".cardChange");
  for (let i = 0; i < cardChange.length; i++) {
    cardChange[i].classList.add("none");
    cardChange[i].classList.add("hide");
  }
}

function changeCardNavigation(button, element) {
  button.addEventListener("click", () => {
    hideCards();
    element.classList.remove("none");
    element.classList.remove("hide");
  });
}
const cashCard = document.querySelector(".card-cashflow");
const taxCard = document.querySelector(".taxplan");
const legalCard = document.querySelector(".planning");
const insuranceCard = document.querySelector(".insurance");
const rEstateCard = document.querySelector(".realEstate");
const investCard = document.querySelector(".card.investments");
const firstCard = document.querySelector(".firstCard");

function barFlow(element) {
  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener("click", (e) => {
      for (let i = 0; i < element.length; i++) {
        element[i].classList.remove("active");
      }
      e.target.classList.add("active");
    });
  }
}

//Cash flow options
const cashBar = document.getElementsByClassName("cash bar");
barFlow(cashBar);
//Investment options
const investBar = document.getElementsByClassName("invest bar");
barFlow(investBar);
//RealEstate options
const restateBar = document.getElementsByClassName("restate bar");
barFlow(restateBar);
//Insurance options
const insuranceBar = document.getElementsByClassName("inc bar");
barFlow(insuranceBar);
//Legal planning options
const legalBar = document.getElementsByClassName("legal bar");
barFlow(legalBar);
//Tax planning options
const taxBar = document.getElementsByClassName("tplan bar");
barFlow(taxBar);
const firstCrdBar = document.getElementsByClassName("firstCrd bar");
barFlow(firstCrdBar);

const growAssumptionBar = document.getElementsByClassName("assumbtion-bar");
barFlow(growAssumptionBar);

$(".dropdown-container i").click(function () {
  $(this).parents().siblings(".dropdown-content").slideToggle(400);

  $(this).parents(".dropdown-main").toggleClass("open");
  $(this)
    .parents(".dropdown-main")
    .siblings(".dropdown-main")
    .find(".dropdown-content")
    .slideUp(400);

  $(this)
    .parents(".dropdown-main")
    .siblings(".dropdown-main")
    .removeClass("open");
});

$(".contact").click(function () {
  $(".uploadFileProgress").addClass("hide");
  if (
    !$(".chatNow").hasClass("hide") ||
    !$(".advisorProfile ").hasClass("hide") ||
    !$(".chatting  ").hasClass("hide") ||
    !$(".maximizeChat   ").hasClass("hide")
  ) {
    $(
      ".chatNow,.advisorProfile,.chatting,.maximizeChat,.selectionCard "
    ).addClass("hide");
    $(this).parents().removeClass("gray");
  }
});

$(".alert,.vault").click(function () {
  if (
    !$(".chatNow").hasClass("hide") ||
    !$(".advisorProfile").hasClass("hide") ||
    !$(".chatting").hasClass("hide") ||
    !$(".maximizeChat ").hasClass("hide")
  ) {
    $(
      ".chatNow,.advisorProfile,.chatting,.maximizeChat,.selectionCard"
    ).addClass("hide");
  }
});

// sliding bar in side panels

$slideLine1 = $(".slide-bar");
$currentItem = $(".active");

$(function () {
  if ($currentItem[0]) {
    $slideLine1.css({
      // width: $currentItem.width(),
      left: $currentItem.position().left,
    });
  }
  $(".bar").click(function () {
    $(this)
      .siblings(".slide-bar")
      .css({
        width: $(this).width(),
        left: $(this).position().left,
      });
  });
});

$(document).ready(function () {
  // sliding bar in sidebar
  $slideBar = $(".selected_bar");
  $selectedItem = $(".dashboard .selected");
  if ($selectedItem[0]) {
    $slideBar.css({
      top: $selectedItem.position().top,
    });
  }
  if ($("body").hasClass("profile_page")) {
    $(".dashboard")
      .on("mouseenter", function () {
        $(".selected_bar").css({
          top: $(".option.selected").position().top,
        });
        $(".option").click(function () {
          $(".selected_bar").css({
            top: $(this).position().top,
          });
        });
        $(".settings_option")
          .parents(".dashboard")
          .find(".selected_bar")
          .removeClass("new_selected");
          
      $('.dashboardOptions > .selected .imWrp img').css('filter','brightness(500)');
      })
      .on("mouseleave", function () {
        $slideBar.css({
          top: $(".dashboardSettings .option:nth-last-child(2)").position().top,
        });
        $(".settings_option")
          .parents(".dashboard")
          .find(".selected_bar")
          .addClass("new_selected");
          
      $('.dashboardOptions > .selected .imWrp img').css('filter','none');
      });

    if ($(".settings_option").hasClass("selected")) {
      $(".settings_option")
        .parents(".dashboard")
        .find(".selected_bar")
        .addClass("new_selected");
    } else {
      $(".settings_option")
        .parents(".dashboard")
        .find(".selected_bar")
        .removeClass("new_selected");
    }

    $(".option").click(function () {
      if ($(".settings_option").hasClass("selected")) {
        $(".settings_option")
          .parents(".dashboard")
          .find(".selected_bar")
          .addClass("new_selected");
      } else {
        $(".settings_option")
          .parents(".dashboard")
          .find(".selected_bar")
          .removeClass("new_selected");
      }
    });
  } else {
    $(window).resize(function () {
      if ($selectedItem[0]) {
        $slideBar.css({
          top: $selectedItem.position().top,
        });
      }
    });

    $(".dashboard")
      .on("mouseenter", function () {
        $(".selected_bar").css({
          top: $(".option.selected").position().top,
        });
        $(".option").click(function () {
          $(".selected_bar").css({
            top: $(this).position().top,
          });
          
        $('.dashboardOptions > .selected').siblings().find('.imWrp img').css('filter','none');
        $('.dashboardOptions > .selected .imWrp img').css('filter','brightness(500)');
        });
      })
      .on("mouseleave", function () {
        // $slideBar.css({
        //   top: $(".dashboardOptions .option:first-child").position().top,
        // });
        $(".selected_bar").css({
          top: $(".option.selected").position().top,
        });
        $('.dashboardOptions > .selected').siblings().find('.imWrp img').css('filter','none');
        $('.dashboardOptions > .selected .imWrp img').css('filter','brightness(500)');
      });
  }

  if ($(window).height() <= 660) {
    // $(".dashboard")
    //   .on("mouseenter", function () {
    //     $(".option").click(function () {
    //       $(".selected_bar").css({
    //         top: $(this).position().top,
    //       });
    //     });
    //   })
    //   .on("mouseleave", function () {
    //     $(".selected_bar").css({
    //       top: $(".option.selected").position().top,
    //     });
    //   });

    $(".dashboard-content").scroll(function () {
      $(".selected_bar").css({
        top: $(".option.selected").position().top,
      });
    });

    $(".dashboard").on("mouseleave", function () {
      $(".dashboard-content").scrollTop(0);
    });
  }
});

$(".tabSwitch .progress span").click(function () {
  var index = $(this).index();
  $(this).parents(".tabSwitch").siblings("span").removeClass("active");
});

// tabs

function openTabs(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

$(".cardChange .close").click(function () {
  setTimeout(function () {
    $(".cardChange .goBack").trigger("click");
  }, 1000);
});

$(".vault").click(function () {
  setTimeout(function () {
    $(".cardChange .goBack").trigger("click");
  }, 1000);
});

// tab slider

$slideLine = $(".slidebar");
$currentItem = $(".tablinks.active");

$(function () {
  if ($currentItem[0]) {
    $slideLine.css({
      width: $currentItem.width(),
      left: $currentItem.position().left,
    });
  }

  $(".tablinks").click(function () {
    $(this)
      .siblings(".slidebar")
      .css({
        width: $(this).width(),
        left: $(this).position().left,
      });
  });
});

// report tab

function openTabsPanel(evt, cityName) {
  var i, tabcontent1, tablinks1;
  tabcontent1 = document.getElementsByClassName("card_tabs");
  for (i = 0; i < tabcontent1.length; i++) {
    tabcontent1[i].style.display = "none";
  }
  tablinks1 = document.getElementsByClassName("dashboard-background");
  for (i = 0; i < tablinks1.length; i++) {
    tablinks1[i].className = tablinks1[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

$(".firstCard .tablinks").click(function () {
  $("#default_content").hide();
  $(this).parents(".card").find(".navigation").removeClass("onlyClose");
});
$(".firstCard .goBack").click(function () {
  $("#default_content").show();
  $(this).parents(".card").find(".tabcontent").hide();
  $(this).parents(".card").find(".tablinks").removeClass("active");
  $(this).parents(".card").find(".navigation").addClass("onlyClose");
});

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 0,
  dots: false,
  nav: true,
  nav: true,
  navText: [
    "<img src='../../assets/images/png/chatnowBack.png'>",
    "<img src='../../assets/images/png/chatnowBack.png'>",
  ],
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1200: {
      items: 5,
    },
    1920: {
      items: 6,
    }
  },
});


$(document).on('click', '#optionOne', function() {
  if ($(this).hasClass('selected')) {
    $('.main-section').css('background-color','#D2D2D0');
    $('#firstImg').css('fill','#D2D2D0');
    $('#secondImg').css('fill','#D2D2D0');
    $('.selected_bar').css('background-color','#D2D2D0');
  } else {
    
  }
})
$(document).on('click', '#optionTwo', function() {
  if ($(this).hasClass('selected')) {
    $('.main-section').css('background-color','#FFEBB5')
    $('#firstImg').css('fill','#FFEBB5');
    $('#secondImg').css('fill','#FFEBB5');
    $('.selected_bar').css('background-color','#FFEBB5');
  } else {
    
  }
})
$(document).on('click', '#optionTree', function() {
  if ($(this).hasClass('selected')) {
    $('.main-section').css('background-color','#ABD2B6');
    $('#firstImg').css('fill','#ABD2B6');
    $('#secondImg').css('fill','#ABD2B6');
    $('.selected_bar').css('background-color','#ABD2B6');
  } else {
    
  }
})
$(document).on('click', '#optionFour', function() {
  if ($(this).hasClass('selected')) {
    $('.main-section').css('background-color','#FFD5D5')
    $('#firstImg').css('fill','#FFD5D5');
    $('#secondImg').css('fill','#FFD5D5');
    $('.selected_bar').css('background-color','#FFD5D5');
  } else {
    
  }
})
$(document).on('click', '#optionFive', function() {
  if ($(this).hasClass('selected')) {
    $('.main-section').css('background-color','#D1ECFF');
    $('#firstImg').css('fill','#D1ECFF');
    $('#secondImg').css('fill','#D1ECFF');
    $('.selected_bar').css('background-color','#D1ECFF');
  } else {
    
  }
})
$(document).on('click', '#optionSix', function() {
  if ($(this).hasClass('selected')) {
    $('.main-section').css('background-color','#FFDFC7');
    $('#firstImg').css('fill','#FFDFC7');
    $('#secondImg').css('fill','#FFDFC7');
    $('.selected_bar').css('background-color','#FFDFC7');
  } else {
    
  }
})
$(document).on('click', '#optionSeven', function() {
  if ($(this).hasClass('selected')) {
    $('.main-section').css('background-color','#D7C5FF');
    $('#firstImg').css('fill','#D7C5FF');
    $('#secondImg').css('fill','#D7C5FF');
    $('.selected_bar').css('background-color','#D7C5FF');
  } else {
    
  }
})
$(document).on('click', '#optionEight', function() {
  if ($(this).hasClass('selected')) {
    $('.main-section').css('background-color','#DBCDC1');
    $('#firstImg').css('fill','#DBCDC1');
    $('#secondImg').css('fill','#DBCDC1');
    $('.selected_bar').css('background-color','#DBCDC1');
  } else {
    
  }
})
$(document).on('click', '.dashboardSettings .option', function() {
  if ($(this).hasClass('selected')) {
    $('.main-section').css('background-color','#D2D2D0');
    $('#firstImg').css('fill','#D2D2D0');
    $('#secondImg').css('fill','#D2D2D0');
    $('.selected_bar').css('background-color','#D2D2D0');
  } else {
    
  }
})

$(window).on('load', function () {
  initRemoveActiveClassFromMenu();
  initAddActiveClass();
  initLinkToProfileSection();
  initOpenCashFlow();
  initCloseSubbox();
  initChatBoxOpen();
  initHideOnClickOutside();
  initRemoveSlideBarPosition();
  initShowElementOnBackButtonClick();
  $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    e.target // newly activated tab
    e.relatedTarget // previous active tab
    console.log(e.target,e.relatedTarget)
  })
});

//change Icon Color on setting icons clicked
function initRemoveActiveClassFromMenu() {
  var dashboardHolder = $('.dashboardOptions');
  var settingsHolder = $('.dashboardSettings');
  var options = $('.option');
  options.each(function(){
    var option = $(this);
    var optionParent = option.parent();
    option.on('click',function(){
      option.siblings().removeClass("active");
      
      if(optionParent.hasClass('dashboardOptions')){
        var settingOption = settingsHolder.find('.option');
        settingOption.each(function(){
          $(this).removeClass('active');
        });
      }
      
      if(optionParent.hasClass('dashboardSettings')){
        var dashOption = dashboardHolder.find('.option');
        dashOption.each(function(){
          $(this).removeClass('active');
          $('.dashboardOptions > .option .imWrp img').css('filter','none');
        });
      }
    });
  });
}

//addActive class on upload popup modal
function initAddActiveClass() {
  $items = $(".upload-bar .tablinks");

  $items.each(function(){
    $currentItem = $(this);
    if($currentItem.hasClass('active')) {
      $slideLine.css({
        width: $currentItem.width(),
        left: $currentItem.position().left,
      });
    }
  });
}

//link to profile section
function initLinkToProfileSection() {
  var profileMax = $('.maximize');
  var profileLink = $('.edit');
  initOpenProfile(profileMax);
  initOpenProfile(profileLink);
}

//link to profile section 
function initOpenProfile($link) {
  $link.on("click",function(e) {
    e.preventDefault();
    var option = $(".option");
    option.each(function(){
      $(this).removeClass('active selected');
      if($(this).hasClass("settings_option")){
        $(this).addClass("active selected");
        $(".selected_bar").css({
          top: $(".option.selected").position().top,
        });
        $('.imWrp img').css('filter','none');
      }
      $('.dashboardOptions').removeClass("option1 option2 option3 option4 option5 option6 option7");
      $('.dashboardOptions').addClass("option10");
      $('.main-content').removeClass('active show');
      $('.main-content.Settings').addClass('active show');
      $('.card').addClass('hide');
    })
  });
}

//cash flow tab content show
function initOpenCashFlow() {
  let mainHolder = $('.card');
  let holder = $('.cashButton0').parent();
  let oldTarget = $('.card_tabs');
  let target = mainHolder.find("#cash");
    holder.on('click',function() {
      oldTarget.css("display","none");
      target.css("display","block");
    });
}

//close all the popupbox which are not closed
function initCloseSubbox() {
  var alert1 = $('.alert1');
  var topIconUser = $('.topIcon.user')
  closepopup(alert1);
  closepopup(topIconUser);
}

//close all the popupbox which are not closed
function closepopup($arg) {
  $arg.on("click",function(){
    if(!$('.uploadFileProgress').hasClass('hide')|| !$('.advisorProfile').hasClass('hide') || !$('.chatting').hasClass('hide')|| !$('.maximizeChat').hasClass('hide') || !$('.chatNow').hasClass('hide')) {
      $('.uploadFileProgress').addClass('hide');
      $('.advisorProfile').addClass('hide');
      $('.chatting').addClass('hide');
      $('.maximizeChat').addClass('hide');
      $('.chatNow').addClass('hide')
    }
  });
}

//show chat box
function initChatBoxOpen() {
  var opener = $('#maximization');
  var target = $('.maximizeChat');
  opener.on("click",function(){
    if(!target.hasClass('.hide')) {
      $('.maximizedAdvisors').removeClass('hide');
    }
  });
}

//hide on click outside
function initHideOnClickOutside() {
  $(document).click(function (event) {
    var $target = $(event.target)
    if (!$target.closest('.magnify ').length && $('.magnify input').is(':visible')) {
      $('.magnify').removeClass('active')
        searchSwitch.style = `left:25px; transition: left 3s ease, right .3s; color:#cecece`;
        magnifyInput.style = `opacity:0;`;
        magnify.style.background = "#212121";
        searchSwitch.src = `../../assets/images/png/magnify.png`;
    }
  })
}

function initRemoveSlideBarPosition() {
  var rounderHolder = $('.r1.rounder');
  var progressborder = $('.progress-border');
  rounderHolder.on("click",function() {
    progressborder.each(function(i,e) {
      let slidebar = e.find('.slide-bar');
      let currentPosition = e.find('.bar.active');
      slidebar.css({
        width: currentPosition.width(),
        left: currentPosition.position().left,
      });
    });
  });

  var composerImgHolder = $('.composer');
  var uploadbar = $('.upload-bar');
  composerImgHolder.on("click",function() {
    uploadbar.each(function() {
      let slidebar1 = uploadbar.find('.slidebar');
      let currentPosition1 = uploadbar.find('.upload-btn.active');
      slidebar1.css({
        width: currentPosition1.width(),
        left: currentPosition1.position().left,
      });
    });
  });
}

function initShowElementOnBackButtonClick() {
  var btn = $('.uploadFileProgress .navigation .goBack');
  var holder = $('.firstCard');
  btn.on("click",function(){
    if(holder.hasClass('previous_card')) {
      var tabcontent = holder.find('.card_tabs');
      console.log(tabcontent);
      var setvalue;
      tabcontent.each(function(){
        if($(this).is(':visible')) {
          setvalue = true;
          console.log(setvalue)
        }
        else {
          setvalue = false;
          console.log(setvalue)
        }
      });
      if(setvalue === false) {
      $('.inner_content').css("display","block");
      }
    }
  });
}