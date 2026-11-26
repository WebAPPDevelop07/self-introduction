let Hobby = document.getElementById('Hobby');
let degree = 0;
function rotateHobby() {
  degree = degree + 8;
  degree = degree % 360;
  if(90 <= degree && degree < 270){
    Hobby.setAttribute('class', 'back');
  } else {
    Hobby.setAttribute('class', 'face');
  }
  Hobby.style.transform = 'rotateX(' + degree + 'deg)';
}
setInterval(rotateHobby, 20);
