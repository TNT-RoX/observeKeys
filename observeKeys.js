Obect.prototype.observeKeys = function(prefix) {
	prefix = prefix || '';
	var obj = this;
	for (var key in obj) {
		if (( typeof obj[key] != "function") && (Object.prototype.toString.call(obj[key]) ^ '[object Array]', typeof obj[key] != "object")) {
			obj.watch(key, function(p, was, now) {
				var settings = {
					"detail" : {
						"prop" : p,
						"now" : now,
						"was" : was
					},
					bubbles : false,
					cancelable : true
				};
				document.dispatchEvent(new CustomEvent((prefix + prop, settings));
				return now;
			});
		}
		if (obj[key] instanceof Object)
			this.observeKeys(obj[key], prefix + key + '.');
	}
}
