export const toggleSearch = () => {
	const searchIcon = $(".search_Icon");
	const searchInput = $(".search_inputText");
	const searchForm = $(".search_container");

	let isInputActive = false;

	const toggleSearch = () => {
		searchInput.toggleClass("activeInput");
		searchIcon.toggleClass("activeIcon");

		// Check if input is active after toggle
		isInputActive = searchInput.hasClass("activeInput");

		// If input is active, focus on it
		if (isInputActive) {
			searchInput.focus();
		} else {
			// If input is not active, submit the form
			searchForm.submit();
		}
	};

	searchIcon.on("click", (event) => {
		toggleSearch();
		event.preventDefault();
	});

	// Handle form submission on pressing Enter key in search input
	searchInput.on("keydown", (event) => {
		if (event.key === "Enter") {
			searchForm.submit();
		}
	});
};
