# cljsjs/react-dropzone

[](dependency)
```clojure
[cljsjs/react-dropzone "3.9.2-0"] ;; latest release
```
[](/dependency)

This jar comes with `deps.cljs` as used by the [Foreign Libs][flibs] feature
of the Clojurescript compiler. After adding the above dependency to your project
you can require the packaged library like so:

```clojure
(ns application.core
  (:require cljsjs.react-dropzone))
```

Calling react dropzone example
```clojure
(js/React.createElement js/Dropzone.default)
```

[flibs]: https://github.com/clojure/clojurescript/wiki/Packaging-Foreign-Dependencies