/* 

1번 항목이 클릭되면 어쩌구는 디스플레이 블락, 다른 건 논이 되도록.
배열 안에 콘텐츠들 집어넣고 ("어쩌구"+ -1) 번 항목들은 디스플레이 블락, 다른 건 논이 된다.

*/

console.log("runnn");

document.addEventListener("DOMContentLoaded", function(){

	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var img3 = document.getElementById("img3");
	var img4 = document.getElementById("img4");

	document.getElementById('step1').addEventListener("click", function(){
		img1.style.display = "block";
		img2.style.display = 'none';
		img3.style.display = 'none';
		img4.style.display='none';

		console.log("run1");
	});

	document.getElementById('step2').addEventListener("click", function(){
		img1.style.display = "none";
		img2.style.display = 'block';
		img3.style.display = 'none';
		img4.style.display='none';

		console.log("run2");
	});

	document.getElementById('step3').addEventListener("click", function(){
		img1.style.display = "none";
		img2.style.display = 'none';
		img3.style.display = 'block';
		img4.style.display='none';

		console.log("run3");
	});

	document.getElementById('step4').addEventListener("click", function(){
		img1.style.display = "none";
		img2.style.display = 'none';
		img3.style.display = 'none';
		img4.style.display='block';

		console.log("run4");
	});

})