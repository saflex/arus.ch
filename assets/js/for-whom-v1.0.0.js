$(document).ready( function() {


  function get_addr()
  {
    var ip = ''; 
    var country = ''; 
    $.get("http://ipinfo.io", function(response) { 
      ip = response.ip;
      console.log(response.country);
      country = response.country;
        $('#country [value="'+country+'"]').attr("selected", "selected").trigger('refresh');

      }, "jsonp");

   return country;
 } 

      get_addr();/*определяем страну*/

      


     
      $('.action-btn.btn1.bv1').click(function (){

      })

      


      $(".form_main_check input").on("focus blur", function(e){
        $('.form-padding').removeClass('now_act');
        $(this).parent().addClass('now_act');

      });


      function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test( $email );
      }
      $('.form_main_check [type=email]').on('blur', function () {
       if ( !validateEmail($(this).val()) || ($(this).val() == '') ) { 
        $(this).parent().removeClass('form_suc');
        $(this).parent().addClass('form_err');

      } else {
       $(this).parent().removeClass('form_err');
       $(this).parent().addClass('form_suc');


     }

});

    $('.form_main_check [type=text]').on('blur', function () {
       if ($(this).val() == '') { 
        $(this).parent().removeClass('form_suc');
        $(this).parent().addClass('form_err');

      } else {
       $(this).parent().removeClass('form_err');
       $(this).parent().addClass('form_suc');


     }
   });

      function ValidPhone($phone) {
        var re = /^\d[\d\(\)\ -]{4,14}\d$/ ;
        return re.test($phone);
      } 

  $('.form_main_check [type=tel]').on('blur', function () {
   if ( !ValidPhone($(this).val()) || ($(this).val() == '') ) { 
    $(this).parent().removeClass('form_suc');
    $(this).parent().addClass('form_err');

  } else {
   $(this).parent().removeClass('form_err');
   $(this).parent().addClass('form_suc');

   
 }
});


  // $(".form_main_check").submit(function(e) {
  //   e.preventDefault();

  //   var form = $(this); 
  //   var error = false; 


  //   var $form = $(this);
  //   $form.find('button[type=submit]').attr('disabled', 'disabled');

  //   form.find('input').each( function(){ 

  //         if ($(this).val() == '') { 
  //              // alert('Заполните поле "'+$(this).attr('placeholder')+'"!'); 
  //              $(this).parent().addClass('form_err');
  //              $(this).parent().removeClass('form_suc');
  //              error = true; 
  //            } else {
  //             $(this).parent().removeClass('form_err');
  //             $(this).parent().addClass('form_suc');
  //           }
  //         });
    

  //   var url = $form.attr('action');
  //   if (!error) { 

  //       $.ajax({
  //           type: "POST",
  //           dataType: 'json',
  //           url: url,
  //           data: $form.serialize(),
  //           success: function(data)
  //           {
  //               // $form.find('button[type=submit]').attr('disabled', false);

  //               console.log(data);
  //                   var response = '';


  //                   if(data.response.sent){
  //                       document.location = "/success";
  //                   }

  //                   // response = success;
  //               // alert(1);
  //                   // document.location = "/success";

  //                   $form.find('button[type=submit]').attr('disabled', true);
  //           }
  //       });
  //     }
  //   });



  $('#bottom_form [type=email]').on('blur', function () {
    let email = $(this).val();

    if (email.length > 0
      && (email.match(/.+?\@.+/g) || []).length !== 1) {
      $(this).parent().removeClass('form_suc');
    $(this).parent().addClass('form_err');

  } else {
    $(this).parent().removeClass('form_err');
    $(this).parent().addClass('form_suc');
    
  }
});

  $('#bottom_form [type=text]').on('blur', function () {
   if ($(this).val() == '') { 
    $(this).parent().removeClass('form_suc');
    $(this).parent().addClass('form_err');

  } else {
   $(this).parent().removeClass('form_err');
   $(this).parent().addClass('form_suc');

   
 }
});
});