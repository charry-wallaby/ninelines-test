import Preloader from 'ninelines-preloader';
import gsap from 'gsap';

const tl = gsap.timeline();
const el = document.querySelector('.preloader__image');

tl.to(el, {
	x: '250%',
	y: '-150%',
	duration: 6
});

Preloader.init(
	[
		'/images/logo.png',
		'/images/boy.png',
		'/images/hands.png',
	]
)
	.then(() => {
		$('html').removeClass('is-lock-scroll');
		$('.preloader').css('display', 'none');
	});