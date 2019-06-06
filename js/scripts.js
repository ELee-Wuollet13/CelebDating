$(document).ready(function() {

  $("#quiz").submit(function(event) {
    event.preventDefault();
    var result = $("input:radio[name=q1]:checked").val();
    alert(result);
  });
// var score = parseInt(value)
});
