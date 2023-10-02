import './modules/preloader';
import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import backToTop from './modules/backToTop';
import scrollAnimation from './modules/scrollAnimation';

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();
backToTop.init();

header.init();
header.initScroll();
lazyLoading.init();

scrollAnimation.init();