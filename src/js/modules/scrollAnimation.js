import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';


const init = () => {
	const locomotiveScroll = new LocomotiveScroll();
	const tl = gsap.timeline({paused: true});

	const el = document.querySelector('.footer__image');

	tl.to(el, {
		scale: 0,
		opacity: 0,
		duration: 10,
		ease: "linear"
	});
	tl.to(el, {
		scale: 1,
		opacity: 1,
		duration: 10,
		ease: "linear"
	});

	window.addEventListener('progressEvent', (e) => {
		const { progress } = e.detail;
		const progressFix = +(progress * 100).toFixed(0) + 25;

		const btnTop = $('#btnTop');
		const btnTopProgress = $('#btnTopProgress');

		$(btnTop).css('--p', progressFix + '%')

		if (progressFix > 100) {
			$(btnTop).addClass('is-show-arrow');
			$(btnTopProgress).html();
		} else {
			$(btnTop).removeClass('is-show-arrow');
			$(btnTopProgress).html(progressFix + '%');
		}
	});

	window.addEventListener("scrollScale", (e) => {
		const { progress } = e.detail;

		tl.progress(progress);
	});
};

export default {
	init
};