module.exports = (eleventyConfig) => {
	let ejs = require("ejs");

	eleventyConfig.addPassthroughCopy("./src/assets");
	eleventyConfig.addWatchTarget("./src/assets");
	eleventyConfig.setLibrary("ejs", ejs);
	eleventyConfig.setEjsOptions({
		delimiter: "%",
	});

	return {
		passthroughFileCopy: true,
		markdownTemplateEngine: ejs,
		templateFormats: ["html", "ejs", "md"],
		dir: {
			input: "src",
			output: "public",
			include: "includes",
		},
	};
};
