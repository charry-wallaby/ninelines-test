import header from '../components/header';
import helpers from '../helpers';

/**
* Модуль "Плавный переход к якорю"
*/
const init = () => {
	helpers.$document.on('click.anchor', '.js-to-anchor', (e) => {
		e.preventDefault();
		e.stopPropagation();

		const thisItem = $(e.currentTarget);
		const id = thisItem.attr('href');
		const speed = thisItem.data('speed') || 500;
		const headerHeight = helpers.winWidth <= 1024 ? -helpers.$header.outerHeight(true) + 50 : -helpers.$header.outerHeight(true) - 50;
		const offset = helpers.$header.css('position') === 'fixed' || helpers.$header.css('position') === 'absolute' ? headerHeight : 0;

		console.log(headerHeight)

		thisItem.addClass('is-active');
		$('.js-to-anchor').not(thisItem).removeClass('is-active');

		header.closeMenu().then(() => {
			$('.js-burger').removeClass('is-active');
			helpers.scrollTo($(id), speed, offset);
		});
	});
};

const destroy = () => {
	helpers.$document.off('.anchor');
};

export default {
	init,
	destroy,
};
