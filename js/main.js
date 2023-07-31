let input=document.getElementById("input")
let head=document.getElementById("head")

input.addEventListener("mouseout", show)

function show(){
	head.style.color=input.value
	console.log(input.value)
}
