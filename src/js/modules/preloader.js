import Preloader from 'ninelines-preloader';
import gsap from 'gsap';

const tl = gsap.timeline();
const preloaderImg = document.querySelector('.preloader__image');
const orientScreen = window.matchMedia('(orientation: portrait)');

const arrayImages = [
	'images/logo.png',
	'images/boy.png',
	'images/hands.png'
];

const imageAnimate = (el, posX, posY) => {
	tl.to(el, {
		x: posX,
		y: posY,
		duration: 6
	});
}

if (orientScreen.matches === true) {
	imageAnimate(preloaderImg, '170%', '-400%');
} else {
	imageAnimate(preloaderImg, '500%', '-250%');
}

Preloader.init(
	arrayImages
)
	.then(() => {
		$('html').removeClass('is-lock-scroll');
		$('.preloader').css('display', 'none');
	});