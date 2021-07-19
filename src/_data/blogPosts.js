"use strict";

const fetch = require("node-fetch");

module.exports = async () => {
	console.log("Fetching blog posts…");

	return await fetch("https://dynasty-api.herokuapp.com/api/v1/blogs")
		.then((res) => res.json())
		.then((json) => {
			// prune the data to return only what we want
			return {
				posts: json,
			};
		});
};
