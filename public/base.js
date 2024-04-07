$(document).ready(function () {
console.log( "ready!" );

    $('#age_verification_modal').modal({
        backdrop: 'static', keyboard: false
    });
    
    $(function(){
        $('#cookie_close_button').click(function(){
//                $('#cookie_toast').addClass("remove");
            $("#cookie_toast").hide();
        });
    }); 
    
    $( document ).ready(function() {
        if (localStorage.getItem("pageloadcount")) {
            $("#cookie_toast").hide();
            $("#age_verification_modal").hide();
        } else {
            $("#cookie_toast").addClass('show');
            $("#age_verification_modal").modal('show');
        }
        localStorage.setItem("pageloadcount", "1");
    });


    function hasTouch() {
        return 'ontouchstart' in document.documentElement
               || navigator.maxTouchPoints > 0
               || navigator.msMaxTouchPoints > 0;
    }


    if (hasTouch()) { // remove all the :hover stylesheets
        try { // prevent exception on browsers not supporting DOM styleSheets properly
            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;

                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;

                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {}
    }
    
    
    
    $('.modal').on('show.bs.modal', function (e) {
        var button = e.relatedTarget;
        if ($(button).hasClass('no-modal')) {
            e.stopPropagation();
        }
    });
    

    
    $(function() {
        const observer = new IntersectionObserver(
          ([e]) => e.target.toggleAttribute("stuck", e.intersectionRatio < 1),
          { threshold: [1] }
        );

        observer.observe(document.querySelector(".sticky-top"));
    });
    
    $(".accordion-link").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).text("Edit");
        }
        else{
            $(this).addClass("active");
            $(this).text("Cancel");
        }    
    });
    
    $(".change-link").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).text("Change");
        }
        else{
            $(this).addClass("active");
            $(this).text("Cancel");
        }    
    });
    
    $(".show-more-link").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).text("Details");
        }
        else{
            $(this).addClass("active");
            $(this).text("Close");
        }    
    });
    
    
    // STILL NEEDS PAGE SPECIFIC JS LIBRARY REFERENCE
    $(function(){
        $('#input_phone').usPhoneFormat({
            format: '(xxx) xxx-xxxx'
        });
    });
    
    
        // GREAT WHEN YOU DON'T WANT PERENTHESES AROUND AREA CODE
//            $(document).ready(function () {
//                $("#input_phone").keyup(function () {
//                    if ($(this).val().length == 3) {
//                        $(this).val($(this).val() + "-");
//                    }
//                    else if ($(this).val().length == 7) {
//                        $(this).val($(this).val() + "-");
//                    }
//                    else if ($(this).val().length == 14) {
//                        $(this).val($(this).val() + "-");
//                    }
//                });
//            });

//    $(".accordion-link").click(function() { 
//      $(".accordion-link").not($(this)).text("Edit");
//    });


    // Disabling form submission if emails don't match
    $(function() {
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');

        // check match

        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            var email = $("#input_email").val();
            var confirmemail = $("#confirm_email").val();
            if(email !== confirmemail){ 
            form.classList.add('was-validated');
              $("#emails_match").addClass("active");
              event.preventDefault();
              event.stopPropagation();              
            }
            else{
              $("#emails_match").removeClass("active");
            }
           
          }, false);
        });
      }, false);
    });
    
    
    // Disabling form submission if passwords don't match
    $(function() {
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');

        // check match

        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            var password = $("#input_password").val();
            var confirmpassword = $("#confirm_password").val();
            if(password !== confirmpassword){ 
            form.classList.add('was-validated');
              $("#passwords_match").addClass("active");
              event.preventDefault();
              event.stopPropagation();              
            }
            else{
              $("#passwords_match").removeClass("active");
            }
           
          }, false);
        });
      }, false);
    });
    
    
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function() {
        'use strict';
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();
    
    
    
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    

    var progressAnimate = 2500;
    $(".progress-bar-animated").each(function(i) {
//      $(this).progressAnimate(progressAnimate * i).animate({
      $(this).animate({
        width: $(this).attr('aria-valuenow') + '%'
      }, progressAnimate);
    });
    
    
    $('.carousel-container').slick({
        speed: 600,
        arrows: false,
        slidesToShow: 6,
        // slidesToScroll: 1,
        infinite: true,
        dots: false,
        fade: false,
        // speed: 300,
        useCSS: true,
        variableWidth: false,
        vertical: false,
        autoplay: true,
        // autoplaySpeed: 2000,
        // variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        speed: 10000,
        cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    // centerMode: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 823,
                settings: {
                    // centerMode: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                //   centerMode: true,
                //   centerPadding: '24px',
                //   focusOnSelect: true,
                  arrows: false,
                  infinite: true,
                }
            },
        ]
    });
    
});