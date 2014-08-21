Javascript observeKeys function
===========

Triggers document level events when an objects properties change.

Event name is the dot path to the property.

**Very useful for Event-driven finite-state machine pattern in SPA's**

returns : 
```sh
"detail" : {
  "prop" : property name,
  "now" : new value,
  "was" : origional value
}
```

http://jsfiddle.net/h816e5ay/11/


You may need this object.watch pollyfill https://gist.github.com/eligrey/384583
