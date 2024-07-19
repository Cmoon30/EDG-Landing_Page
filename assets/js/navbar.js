export const navLinks = () => {
	const navLinks = $(".navlinks").children();

	navLinks.on("click", (event) => {
		navLinks.removeClass("active");
		$(event.target).addClass("active");
	});
};
