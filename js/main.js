
var wtf;

//TYPED 

    $(function(){

            $("#typed").typed({
                // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
                stringsElement: $('#typed-strings'),
                typeSpeed: 30,
                backDelay: 0,
                loop: false,
                contentType: 'html', // or text
                // defaults to false for infinite loop
                loopCount: false,
            });
              $("#typed2").typed({
                // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
                stringsElement: $('#typed-strings2'),
                typeSpeed: 30,
                backDelay: 0,
                loop: false,
                contentType: 'html', // or text
                // defaults to false for infinite loop
                loopCount: false,
            });

  

        });


//SCROLL

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});





// MENU MOBILE / DESK -- AUTOMATIC SCROLLING
//  =================================================


      // Config
      // =================================================

      var $root           = $('html'),
          $nav_header     = $('#homesliders'),
          $navicon        = $('[data-navicon="button"]'),
          homesliders     = $('#homesliders').height(),
          lideres         = $('#lideres').height(),
          trabalhos       = $('#trabalhos').height(),
          agenciaoffset   = lideres * 2 - 100,
          trabalhosoffset = lideres * 3 - 100,
          lideresoffset   = lideres * 4 - 100,
          clientesoffset  = lideres * 5 - 100,
          contatooffset   = lideres * 6 - 100,
          $imgoff         = $(".currentpage>img"),
          $textoff        = $(".currentpage>span"),
          hero_height     = $('.hero').height(),
          eventType       = ((document.ontouchstart !== null) ? 'click' : 'touchstart');


    function scrollwtf() {
      wtf =  $(window).scrollTop();
      return wtf; 
    }

    var alllinks = $('.sidebar-nav li a');
    var homescrolling = $('.menu01>a');
    var agenciacrolling = $('.menu02>a');
    var trabalhocrolling = $('.menu03>a');
    var leadscrolling = $('.menu04>a');
    var clientescrolling = $('.menu05>a');
    var vagascrolling = $('.menu06>a');
    var contatoscrolling = $('.menu07>a');


   $( document ).ready(function() {

        function hideURLbar() {
          if (window.location.hash.indexOf('#') == -1) {
            window.scrollTo(0, 1);
          }
        }

        if (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('Android') != -1) {
            addEventListener("load", function() {
                    setTimeout(hideURLbar, 0);
            }, false);
        }

     $(window).scroll(function (argument) {

         scrollwtf();

          if ( wtf >= homesliders && wtf <= agenciaoffset) {
              alllinks.removeClass('active');
              alllinks.children().removeClass('hovered');
              agenciacrolling.addClass('active');
              agenciacrolling.children().addClass('hovered');
             $imgoff.attr('src', 'img/menu/ico02.gif');
             $textoff.html('AGÊNCIA');
          }

          else if ( wtf >= agenciaoffset && wtf <= trabalhosoffset) {
             $('#trabalhos').show; 
              alllinks.removeClass('active');
              alllinks.children().removeClass('hovered');
              trabalhocrolling.addClass('active');
              trabalhocrolling.children().addClass('hovered');
              $imgoff.attr('src', 'img/menu/ico03.gif');
              $textoff.html('TRABALHOS');
          }

          else if ( wtf >= trabalhosoffset && wtf <= lideresoffset ) {
              alllinks.removeClass('active');
              alllinks.children().removeClass('hovered');
              leadscrolling.addClass('active');
              leadscrolling.children().addClass('hovered');
              $imgoff.attr('src', 'img/menu/ico04.gif');
              $textoff.html('LÍDERES');
          }

          else if ( wtf >= lideresoffset && wtf <= clientesoffset ) {
              alllinks.removeClass('active');
              alllinks.children().removeClass('hovered');
              clientescrolling.addClass('active');
              clientescrolling.children().addClass('hovered');
              $imgoff.attr('src', 'img/menu/ico04.gif');
              $textoff.html('CLIENTES');
          }

          else if ( wtf >= clientesoffset && wtf <= contatooffset ) {
              alllinks.removeClass('active');
              alllinks.children().removeClass('hovered');
              contatoscrolling.addClass('active');
              contatoscrolling.children().addClass('hovered');
              $imgoff.attr('src', 'img/menu/ico04.gif');
              $textoff.html('CONTATO');
          }

          else {
              alllinks.removeClass('active');
              alllinks.children().removeClass('hovered');
              $imgoff.attr('src', 'img/menu/ico01.gif');
              $textoff.html('HOME');
              homescrolling.addClass('active');
              homescrolling.children().addClass('hovered');
          }
       });
    });


// ANCHORS






