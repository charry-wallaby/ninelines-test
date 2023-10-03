import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';

const init = () => {
	const locomotiveScroll = new LocomotiveScroll();
	const tl = gsap.timeline({paused: true});

	const $footerImg = $('.footer__image');
	const $btnTop = $('#btnTop');
	const $btnTopProgress = $('#btnTopProgress');
	const percentHeight = +(($(window).innerHeight() / $('html').height()) * 100).toFixed(0);

	tl.to($footerImg, {
		scale: 0,
		opacity: 0,
		duration: 10,
		ease: 'linear'
	});
	tl.to($footerImg, {
		scale: 1,
		opacity: 1,
		duration: 10,
		ease: 'linear'
	});

	$(window).on('progressEvent', (e) => {
		const { progress } = e.detail;
		const progressFix = +(progress * 100).toFixed(0) + percentHeight;

		$btnTop.css('--p', progressFix + '%');

		if (progressFix > 100) {
			$btnTop.addClass('is-show-arrow');
			$btnTopProgress.html();
		} else {
			$btnTop.removeClass('is-show-arrow');
			$btnTopProgress.html(progressFix + '%');
		}
	});

	$(window).on('scrollScale', (e) => {
		const { progress } = e.detail;

		tl.progress(progress);
	});
};

export default {
	init
};