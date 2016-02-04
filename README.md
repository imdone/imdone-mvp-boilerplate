imdone-mvp-boilerplate
----

MVP boilerplate using gulp, sass, bootstrap, bootswatch, font-awesome and browserify

- [Working with Sass, Bootstrap and Gulp ← David Barreto](http://david-barreto.com/working-with-sass-bootstrap-and-gulp/)
- [Jade - Template Engine](http://jade-lang.com/api/)
- [gulp/browserify-uglify-sourcemap.md at master · gulpjs/gulp](https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md)
- <https://web.archive.org/web/20110511183447/http://bufferapp.com/pricing>
- [How To Create 15 Different CSS3 Transition Effects](http://blog.crazyegg.com/2012/04/23/css3-transition-effects/)
- [Home of free code snippets for Bootstrap | Bootsnipp.com](http://bootsnipp.com/)
- [Pleeease Play · Prefix CSS3, convert rem, CSS filters, pleeease.NEXT](http://pleeease.io/play/)

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
 },

 all: {
   theme: 'superhero' // A bootswatch theme name
 }
};
```
