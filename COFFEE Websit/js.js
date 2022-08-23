/*--------------------------- header -----------------------------*/

let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');}


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');}


let cartItem = document.querySelector('.carts');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');}

/*-------------------------- about --------------------------*/

document.querySelector('.about .content .btn').onclick = () => {
		document.querySelector('.about .show').style.display = 'block';}
	
document.querySelector('.about .show .pop button').onclick = () => {
	document.querySelector('.about .show').style.display = 'none';}

/*-------------------------- menu --------------------------*/

document.querySelectorAll('.menu .boxs .box .btn').forEach(box => {
	box.onclick = () => {
		document.querySelector('.menu .show').style.display = 'block';}})

document.querySelector('.menu .show .pop .btn').onclick = () => {
	document.querySelector('.menu .show').style.display = 'none';}

/*-------------------------- blogs --------------------------*/

document.querySelectorAll('.blogs .boxs .box .image img').forEach(box => {
	box.onclick = () => {
		document.querySelector('.blogs .show1').style.display = 'block';
		document.querySelector('.blogs .show1 img').src = box.getAttribute('src')}})
	
document.querySelector('.blogs .show1 span').onclick = () => {
	document.querySelector('.blogs .show1').style.display = 'none';}

//--------------------

document.querySelectorAll('.blogs .boxs .box .content .btn').forEach(box => {
	box.onclick = () => {
		document.querySelector('.blogs .show2').style.display = 'block';}})

document.querySelector('.blogs .show2 .pop .btn').onclick = () => {
	document.querySelector('.blogs .show2').style.display = 'none';}

/*-------------------------- contact --------------------------*/

document.querySelector('.contact form .btn').onclick = () => {
		document.querySelector('.contact .show').style.display = 'block';}
	
document.querySelector('.contact .show .pop button').onclick = () => {
	document.querySelector('.contact .show').style.display = 'none';}

