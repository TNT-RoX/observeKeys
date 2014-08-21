function observeKeys(a, c) {
	c = c || a.constructor.name;
	for (var b in a) {
		"function" != typeof a[b] && (Object.prototype.toString.call(a[b]) ^ NaN, "object" != typeof a[b]) && a.watch(b, function(a, b, d) {
			document.dispatchEvent(new CustomEvent(c + a, {
				detail : {
					prop : a,
					now : d,
					was : b
				},
				bubbles : false,
				cancelable : true
			}));
			return d;
		}), a[b] instanceof Object && observeKeys(a[b], c + b + ".");
	}
};
