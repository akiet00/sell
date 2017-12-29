
window.onload = function loadImages(){
  var img = '';
  for(var i=0; i<3; i++){
    img += "<img src='resources/img/pc" + (i+1).toString() + ".jpg'>";
    //img += "<img src='resources/img/pc1.jpg' style='width:100%'>";
  }
  $('#image-container').append("<p>These pictures were taken from the actual machine. More pics could be provided per request.")
  $('#image-container').append(img)
  console.log(img)
}
