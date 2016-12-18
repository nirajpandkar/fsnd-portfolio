# Project Portfolio

> A front-end project for FSND Udacity.

You can visit the [portfolio](https://nirajpandkar.github.io/)

## Features

* Includes semantic tags - `<header>`, `<footer>` and `<section>`
* Bootstrap Grid layout utilized for responsiveness
* Responsive content for all the devices
* Responsive Images
* `srcset` attribute used for serving appropriate images for different viewports
* File structure followed 
    * `css/` for stylesheets
    * `images/` for images
* HTML style and formatting rules implemented
* CSS style and formatting rules implemented
* Made use of modal in Bootstrap for further information
* Added social plugins for personalization
* Used media queries for proper responsiveness of the website on different devices

## Problems

To improve performance, PageSpeed Insights suggests to inline CSS with `<style>` tag which can be done by using [`grunt-critical`](https://github.com/bezoerb/grunt-critical)
It drastically increases the performance(to 90 from 82 out of 100 on desktop and 87 from 66 out of 100 on mobile) but **inline styles are not allowed** according to **rubric**

I have tried that on a different branch for reference - [gh-pages](https://github.com/nirajpandkar/nirajpandkar.github.io/tree/gh-pages)
