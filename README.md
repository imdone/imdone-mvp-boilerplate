imdone-mvp-boilerplate
----

MVP boilerplate using gulp, sass, bootstrap, bootswatch, font-awesome and browserify

- [Working with Sass, Bootstrap and Gulp ← David Barreto](http://david-barreto.com/working-with-sass-bootstrap-and-gulp/)
- [Jade - Template Engine](http://jade-lang.com/api/)
- [gulp/browserify-uglify-sourcemap.md at master · gulpjs/gulp](https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md)

Config
----
### Add `.config.js` that looks like this...
```js
module.exports = {
 prod: {
   keen: {
     projectId: "<keen-project-id>",
     writeKey: "<keen-write-key"
   }
 },

 dev: {
   keen: {
     projectId: "<keen-project-id>",
     writeKey: "<keen-write-key"
   }
 }
};
```
