$('.dropdown-button').dropdown({
  inDuration: 300,
  outDuration: 225,
  constrainWidth: false, 
  hover: true, 
  // Activate on hover
  gutter: 0, 
  belowOrigin: false,
  alignment: 'left', 
  stopPropagation: false 
});
$(document).ready(function() {
  $('select').material_select();
});
