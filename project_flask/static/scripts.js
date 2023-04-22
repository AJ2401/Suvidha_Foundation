// Step 9: Create scripts.js
// - Add functionality for the logout button

$('#sm').hide();
$('#gd').hide();
$('#dm').hide();
$('#cw').hide();
$('#wd').hide();
$('#ml').hide();
$(document).ready(function () {
  $('#sm').hide();
  $('#gd').hide();
  $('#dm').hide();
  $('#cw').hide();
  $('#wd').hide();
  $('#ml').hide();
})

var x;
function func(x) {
  $('#over').hide();
  $('#sm').hide();
  $('#gd').hide();
  $('#dm').hide();
  $('#cw').hide();
  $('#wd').hide();
  $('#ml').hide();
  switch (x) {
    case 1:
      $('#sm').show();
      break;
    case 2:
      $('#gd').show();
      break;
    case 3:
      $('#dm').show();
      break;
    case 4:
      $('#cw').show();
      break;
    case 5:
      $('#wd').show();
      break;
    case 6:
      $('#ml').show();
      break;
    default:
      $('#over').show();
      $('#sm').hide();
      $('#gd').hide();
      $('#dm').hide();
      $('#cw').hide();
      $('#wd').hide();
      $('#ml').hide();
      break;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  // Get the logout button element
  const logoutButton = document.querySelector('.navbar .nav-item a[href="Logout"]');

  // Attach a click event listener to the logout button
  if (logoutButton) {
    logoutButton.addEventListener('click', (e) => {
      e.preventDefault();

      // Confirm the user wants to log out
      if (confirm('Do you want to log out?')) {
        // Perform the logout action (redirect to the home page or perform other actions as needed)
        window.location.href = '/'; // Redirect to the home page
      }
    });
  }
});
