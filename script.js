//your JS code here. If required.

document.addEventListener("DOMContentLoaded",funtion(){

	const removebut = document.getElementById("rem");
	const sel = document.getElementById("colorSelect");

	removebut.addEventListener("click",funtion(){

		const selcol = sel.options[sel.selectedIndex];
		sel.removeChild(selcol);
		
	});
});