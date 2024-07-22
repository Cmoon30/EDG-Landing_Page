export const toggleSearch = () => {
	const searchIcon = $(".search_Icon");
	const searchInput = $(".search_inputText");

	const toggleSearch = () => {
		searchInput.toggleClass("activeInput");
		searchIcon.toggleClass("activeIcon");
	};

	searchIcon.on("click", () => {
		toggleSearch();
	});
};
