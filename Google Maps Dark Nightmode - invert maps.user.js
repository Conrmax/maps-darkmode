// ==UserScript==
// @name          Google Maps Dark Nightmode - invert maps
// @namespace     http://userstyles.org
// @description	  Style to invert the actual map.
// @author        stormi & edited by Conrmax
// @homepage      https://userstyles.org/styles/76618
// @run-at        document-start
// @grant         GM_addStyle
// @include       /^https?:\/\/www\.google\..*/maps.*$/
// @version       0.20160202171513
// ==/UserScript==
(function() {var css = "";
if (false || (new RegExp("^https?://www\\.google\\..*/maps.*$")).test(document.location.href))
	css += [
		"@namespace url(http://www.w3.org/1999/xhtml);",
		"#scene {background: #222 !important}",
		"#app-container #scene /*.widget-scene-canvas */ {",
		"        filter: invert(100%) hue-rotate(180deg);",
		"        transform: translate3d(0,0,0);",
		"        -webkit-filter: invert(100%) hue-rotate(180deg);",
		"        -webkit-transform: translate3d(0,0,0)}"
	].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
