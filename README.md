Javascript observeKeys function
===========

Triggers document level events when an objects properties change.

Event name is the dot path to the property.

**Very useful for Event-driven finite-state machine pattern**

returns : 
```sh
"detail" : {
  "prop" : property name,
  "now" : new value,
  "was" : origional value
}
```

http://jsfiddle.net/h816e5ay/11/
