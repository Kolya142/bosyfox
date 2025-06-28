function doSearch(query) {
}

function doFunc(query) {
    if (query === "news") {
	return "https://news.ycombinator.com/";
    }
}

function tick() {
    const date = new Date();
    const h = date.getHours();
    applyTheme(themes[h > 18 || h < 6 ? "dark" : "chromium"]);
}

export function load(source) {
    return {
	doFunc: doFunc,
	tick: tick,
	plugid: "org.bosy.userplug"
    };
}
