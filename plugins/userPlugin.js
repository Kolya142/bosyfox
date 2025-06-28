function doSearch(query) {
}

function doFunc(query) {
    if (query === "news") {
	return "https://news.ycombinator.com/";
    }
}

export function load(source) {
    return {
	doFunc: doFunc,
	plugid: "org.bosy.userplug"
    };
}
