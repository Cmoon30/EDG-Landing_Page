export const navLinks = () => {
	const navLinks = $(".navlinks").children();
	const pageContainers = $(".pageContainer");
	const loading = $(".loadingIndicator");
	const notFoundMessage = $(".notFoundMessage");

	let defaultIndex = 0;

	const navTab = (index) => {
		navLinks.removeClass("active");
		$(navLinks[index]).addClass("active");

		if (index >= pageContainers.length) {
			loading.hide();
			notFoundMessage.show();
			document.documentElement.scrollTop = 0;
			$("body").css("overflow", "hidden");
			return;
		}
		$("body").css("overflow", "hidden");

		notFoundMessage.hide();
		loading.show();
		document.documentElement.scrollTop = 0;

		setTimeout(() => {
			pageContainers.removeClass("activePage");
			$(pageContainers[index]).addClass("activePage");
			loading.hide();
			$("body").css("overflow", "auto");
		}, 1000);
	};

	navLinks.on("click", (event) => {
		const index = $(event.target).index();
		navTab(index);
	});

	navTab(defaultIndex);
};
