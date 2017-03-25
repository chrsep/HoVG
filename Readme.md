History of Video Game Infographic
==================================

An experiment to learn more about the popular front-end-stack available today and to explore various ways to build websites for the modern web. Naming scheme and grouping used here are still unconventional and messy since we are kind of experimenting on that part. So is the css structure.

The animation api ([react-transition-group](https://facebook.github.io/react/docs/animation.html)) we used here are not the recommended one to use with react. It as an escape hatch made to fill the void until a better solution is found, even [redux](http://redux.js.org/) developers [refused](https://github.com/reactjs/redux/issues/1520) to support it, preventing us from using redux. It will be replaced by something new in the future. For now [react-motion](https://github.com/chenglou/react-motion) is recommended. We decided just to use this old API to save time because we already understand it.



How to use:
-----------
1. `npm i` to install dependencies
2. `npm run watch` to start webpack-dev-server with hot reloading enabled on localhost:3000

Dependencies
------------

**Framework:**
[React](https://facebook.github.io/react/)
- [react-router ](https://github.com/reactjs/react-router)
- [react-transition-group](https://facebook.github.io/react/docs/animation.html)

**Module Bundler:**
- [Webpack](https://webpack.github.io/)
- [babel-loader(presets: es2015, react)](https://babeljs.io/)
- [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [react-css-modules](https://github.com/gajus/react-css-modules)
- [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)

**CSS:**
- [PostCSS](https://github.com/postcss/postcss)
- [CSSNext](http://cssnext.io/)
- [PreCSS](https://github.com/jonathantneal/precss)

**Animation:**
[GSAP](http://greensock.com/gsap)
