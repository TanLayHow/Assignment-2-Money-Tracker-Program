var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

document.querySelector('.navbar').onmousemove = (e) => {
	const x = e.pageX - e.target.offsetLeft
	const y = e.pageY - e.target.offsetTop
	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
}

window.onscroll = function() {myFunction()};
var header = document.getElementById("navbar");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
