window.addEventListener('load', function() {
 document.querySelectorAll(".metric").forEach(e=>{e.style.display=''}); document.querySelectorAll(".imperial").forEach(e=>{e.style.display='none'});
})
	
	document.getElementById("calculator").addEventListener('click', function (event) {
    if (event.target && event.target.matches("input[type='radio']")) {
        switch(document.calculator.units.value) {
  case "metric":
						document.querySelectorAll(".metric").forEach(e=>{e.style.display=''}); document.querySelectorAll(".imperial").forEach(e=>{e.style.display='none'});
    break;
  case "imperial":
						document.querySelectorAll(".metric").forEach(e=>{e.style.display='none'}); document.querySelectorAll(".imperial").forEach(e=>{e.style.display=''});
    break;
}
			
    }
});

function rectangle() {
	let w = Number(document.calculator.width.value);
	let l = Number(document.calculator.length.value);
	let d = Number(document.calculator.depth.value);
	let z = 1.0 * w * l * d;
	document.calculator.total.value = Math.round(z * 100)/100;
	
}
