export const navLinks = () => {
	const navLinks = $(".navlinks").children();
	const pageContainers = $(".pageContainer");

	let defaultIndex = 0;

	const navTab = (index) => {
		pageContainers.removeClass("activePage");
		$(pageContainers[index]).addClass("activePage");

		navLinks.removeClass("active");
		$(navLinks[index]).addClass("active");
	};

	navLinks.on("click", (event) => {
		const index = $(event.target).index();
		navTab(index);
	});

	navTab(defaultIndex);
};
