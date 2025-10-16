$(document).ready(function() {
  
  $("#menuToggle").click(function() {
    $("#navLinks").toggleClass("active");
  });

  $('.btn[data-toggle="modal"]').click(function() {
    var name = $(this).data('name');
    var role = $(this).data('role');
    var phone = $(this).data('phone');
    var email = $(this).data('email');
    var img = $(this).data('img');

    $('#modal-name').text(name);
    $('#modal-role').text(role);
    $('#modal-phone').text('Phone: ' + phone);
    $('#modal-email').text('Email: ' + email);
    $('#modal-img').attr('src', img);
  });
});