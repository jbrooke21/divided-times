$(document).ready(function() {

  var $internationalDrop = $("#international-drop");
      $politicsDrop = $("#politics-drop");
      $businessDrop = $("#business-drop");
      $technologyDrop = $("#technology-drop");
      $cultureDrop = $("#culture-drop");
      $blogsDrop = $("#blogs-drop");

  function hide (elementShown) {
      $internationalDrop.hide();
      $politicsDrop.hide();
      $businessDrop.hide();
      $technologyDrop.hide();
      $cultureDrop.hide();
      $blogsDrop.hide();

      show(elementShown);
  }

  function show (element) {
    element.show();
  }



  $(document).on("click", "li.international", function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

      hide($internationalDrop); 

      $("#slide-down").slideDown();
    
    }
  });

  $(document).on("click", "li.politics", function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

      hide($politicsDrop);

      $("#slide-down").slideDown();
    }
  });

  $(document).on("click", "li.business", function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

      hide($businessDrop);

      $("#slide-down").slideDown();
    }
  });

  $(document).on("click", "li.technology", function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

      hide($technologyDrop);

      $("#slide-down").slideDown();
    }
  });

  $(document).on("click", "li.culture", function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

      hide($cultureDrop);

      $("#slide-down").slideDown();
    }
  });

  $(document).on("click", "li.blogs", function(event) {
    event.preventDefault();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#slide-down").slideUp();
    } else {
      $("#primary-nav li").removeClass("active");
      $(this).addClass("active");

      hide($blogsDrop);

      $("#slide-down").slideDown();
    }
  });

});