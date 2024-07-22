import { navLinks } from "./assets/js/navLink.js";
import { toggleSearch } from "./assets/js/button.js";

const functions = () => {
	navLinks();
	toggleSearch();
};

$(document).ready(() => {
	functions();
});
