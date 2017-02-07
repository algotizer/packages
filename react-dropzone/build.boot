(set-env!
  :resource-paths #{"resources"}
  :dependencies '[[cljsjs/boot-cljsjs "0.5.2"  :scope "test"]
                  [cljsjs/react "15.3.1-0"]
                  [cljsjs/react-dom "15.3.1-0"]])

(require '[cljsjs.boot-cljsjs.packaging :refer :all])

(def +lib-version+ "3.9.2")
(def +version+ (str +lib-version+ "-0"))
(def +lib-folder+ (format "react-dropzone-%s" +lib-version+))

(task-options!
 pom  {:project     'cljsjs/react-dropzone
       :version     +version+
       :description "Simple HTML5 drag-drop zone for files with React.js."
       :url         "https://github.com/okonet/react-dropzone"
       :scm         {:url "https://github.com/cljsjs/packages"}
       :license     {"MIT" "http://opensource.org/licenses/MIT"}})

(require '[cljsjs.boot-cljsjs.packaging :refer :all]
         '[boot.core :as boot]
         '[boot.tmpdir :as tmpd]
         '[clojure.java.io :as io]
         '[boot.util :refer [sh]])

(deftask download-react-dropzone []
  (download :url (format "https://github.com/okonet/react-dropzone/archive/v%s.zip" +lib-version+)
              :checksum "2CA33E97573FD673270F106A78FC9CF3"
              :unzip true))

(deftask build []
  (let [tmp (boot/tmp-dir!)]
    (with-pre-wrap
      fileset
      (doseq [f (boot/input-files fileset)]
        (let [target (io/file tmp (tmpd/path f))]
          (io/make-parents target)
          (io/copy (tmpd/file f) target)))
      (io/copy
       (io/file tmp "main.js")
       (io/file tmp +lib-folder+ "main.js"))
      (io/copy
       (io/file tmp "webpack.config.js")
       (io/file tmp +lib-folder+ "webpack-cljsjs.config.js"))
      (binding [*sh-dir* (str (io/file tmp +lib-folder+))]
        ((sh "npm" "install"))
        ((sh "npm" "install" "webpack"))
        ((sh "npm" "run" "build"))
        ((sh "./node_modules/.bin/webpack" "--config" "webpack-cljsjs.config.js")))
      (-> fileset (boot/add-resource tmp) boot/commit!))))

(deftask package []
  (comp
    (download-react-dropzone)
    (build)
    (sift :move {#".*react-dropzone.inc.js" "cljsjs/react-dropzone/development/react-dropzone.inc.js"})
    (sift :include #{#"^cljsjs"})
    (minify :in "cljsjs/react-dropzone/development/react-dropzone.inc.js"
            :out "cljsjs/react-dropzone/production/react-dropzone.min.inc.js")
    (deps-cljs :name "cljsjs.react-dropzone"
               :requires ["cljsjs.react"])
    (pom)
    (jar)))
