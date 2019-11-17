$(document).ready(function(){

    // IconArea + TextArea
  function disappear(target) {
    if ($(target).is(":visible")) {
      $("#textArea").children().not($(target)).fadeOut("slow");
    }
  }

  function fadeToggle(button, target) {
    $(button).click(function(e) {
      e.stopPropagation();
      $(target).fadeToggle("slow");
      disappear(target);
    });
  };

  function disappearPhone(div) {
    $(div).click(function() {
      $(this).fadeOut("slow");
    });
    if ($(div).is(":visible")) {
      $(".Bulle").not($(div)).fadeOut("slow");
    }
    $(document).click(function() {
      if (!$(this.target).is(div)) {
        $(div).fadeOut("slow");
      }
    });
  };

  function fadeTogglePhone(button, target) {
    $(button).click(function(e) {
      e.stopPropagation();
      $(target).fadeToggle("slow");
      disappearPhone(target)
    });
    ;
  };

  if (window.matchMedia("(min-width: 992px)").matches) {
    /* the view port is at least 992 pixels wide */
    // Menu Contact 

    $( "#button" ).click(function() {
      $("#menu").toggle("slow");
    });

    $( "#button02" ).click(function() {
      $("#menu02").toggle("slow");
    });

    fadeToggle("#Astronaute", "#Présentation02");
    fadeToggle("#Comète", "#Formation02");
    fadeToggle("#Fusée", "#Compétences02");
    fadeToggle("#Lune", "#Hobbies02");

    // Courbe Texte 

    new CircleType(document.getElementById('Nom'))
    .dir(-1)
    .radius(250);

    new CircleType(document.getElementById('Titre00'))
    .dir(-1)
    .radius(150);

    new CircleType(document.getElementById('Titre01'))
    .dir(-1)
    .radius(150);

    new CircleType(document.getElementById('Titre02'))
    .dir(-1)
    .radius(150);

    new CircleType(document.getElementById('Titre03'))
    .dir(-1)
    .radius(150);

    new CircleType(document.getElementById('Titre04'))
    .dir(-1)
    .radius(150);

    new CircleType(document.getElementById('Titre05'))
    .dir(-1)
    .radius(150);

  // } else if (window.matchMedia("(min-width: 768px)").matches) {
  //   /* the view port is at least 768 pixels wide */
  //   // Menu Contact 

  //   $( "#button" ).click(function() {
  //     $('#menu').toggle("slow");
  //   });

  //   $( "#button02" ).click(function() {
  //     $('#menu02').toggle("slow");
  //   });

  //   // Sections

  //   fadeTogglePhone("#Astronaute", "#Présentation");
  //   fadeTogglePhone("#Comète", "#Formation");
  //   fadeTogglePhone("#Fusée", "#Compétences");
  //   fadeTogglePhone("#Lune", "#Hobbies");

  //   // Courbe Texte 

  //   new CircleType(document.getElementById('Nom'))
  //   .dir(-1)
  //   .radius(250);

  //   new CircleType(document.getElementById('Titre00'))
  //   .dir(-1)
  //   .radius(250);

  //   new CircleType(document.getElementById('Titre01'))
  //   .dir(-1)
  //   .radius(250);

  //   new CircleType(document.getElementById('Titre02'))
  //   .dir(-1)
  //   .radius(250);

  //   new CircleType(document.getElementById('Titre03'))
  //   .dir(-1)
  //   .radius(250);

  //   new CircleType(document.getElementById('Titre04'))
  //   .dir(-1)
  //   .radius(250);

  //   new CircleType(document.getElementById('Titre05'))
  //   .dir(-1)
  //   .radius(250);

  } else {
    /* the view port is less than 992 pixels wide */
    // Menu Contact 

    $( "#button" ).click(function() {
      $('#menu').toggle("slow");
    });

    $( "#button02" ).click(function() {
      $('#menu02').toggle("slow");
    });

    // Sections

    fadeTogglePhone("#Astronaute", "#Présentation");
    fadeTogglePhone("#Comète", "#Formation");
    fadeTogglePhone("#Fusée", "#Compétences");
    fadeTogglePhone("#Lune", "#Hobbies");

    // Courbe Texte 

    new CircleType(document.getElementById('Nom'))
    .dir(-1)
    .radius(250);

    new CircleType(document.getElementById('Titre00'))
    .dir(-1)
    .radius(150);

    new CircleType(document.getElementById('Titre01'))
    .dir(-1)
    .radius(250);

    new CircleType(document.getElementById('Titre02'))
    .dir(-1)
    .radius(150);

    new CircleType(document.getElementById('Titre03'))
    .dir(-1)
    .radius(150);

    new CircleType(document.getElementById('Titre04'))
    .dir(-1)
    .radius(150);

    new CircleType(document.getElementById('Titre05'))
    .dir(-1)
    .radius(150);
  }
});

  



    // var button = document.getElementById("button");
    // var menu = document.getElementById("menu");
    // var button02 = document.getElementById("button02");
    // var menu02 = document.getElementById("menu02");
    // // var links = document.getElementById("links")
    
    // // button.addEventListener("click", function(){
    // //     var ddl = document.createElement("li");
    // //     ddl.textContent = "Téléchargez-moi !";
    // //     ddl.appendChild(links);

    // //     var message = document.createElement("li");
    // //     message.textContent = "Envoyez un message !";
    // //     message.appendChild(links);

    // //     menu.classList.toggle("open");
    // // });

    // button.addEventListener("click", function(){
    //   if (menu.style.display === "flex") {
    //       menu.style.display = "none";
    //       menu.style.transitionDuration = "0";
    //     } else {
    //       menu.style.display = "flex";
    //       menu.style.transitionDuration = "0.5s";
    //     }
    // });

    // button02.addEventListener("click", function(){
    //   if (menu02.style.display === "flex") {
    //       menu02.style.display = "none";
    //     } else {
    //       menu02.style.display = "flex";
    //     }

    //   // document.getElementById("menu").style.transition = "5s";
    // });

