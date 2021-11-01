const elHumberger = document.querySelector('.hamburger-btn')
const elHeader = document.querySelector('.site-header')

elHumberger.addEventListener('click', function(){
	elHeader.classList.toggle('site-header--adaptive')
})