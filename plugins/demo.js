import {$} from "./bq.js";

$("onDom").methodGet(() => {
    const counterel = $("counter").domGetId();
    let counter = 0;
    counterel.bind("click", () => {
	counter++;
	counterel.setHtml(counter);
    });
})();
