import {BQ} from "./core.js";

BQ({
    onDom: (a, e) => {
	document.addEventListener("DOMContentLoaded", a.arg);
	return a;
    },
    bind: (a, e) => {
	const ev = e[0];
	const handler = e[1];
	a.arg.addEventListener(ev, handler);
	return a;
    },
    setHtml: (a, e) => {
	a.arg.innerHTML = e[0];
	return a;
    },
    domGetId: (a, e) => {
	return BQ(document.getElementById(a.arg));
    },
    domGetQuery: (a, e) => {
	return BQ(document.querySelector(a.arg));
    },
    domGetQueryAll: (a, e) => {
	return BQ(document.querySelectorAll(a.arg));
    },
    domGetClass: (a, e) => {
	return BQ(document.getElementsByClassName(a.arg));
    },
}).extend();
