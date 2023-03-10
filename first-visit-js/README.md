First Visit Js
==========

Tiny jQuery plugin to show hints and tips for users on their first visit to a page.

How to use
-------------

* Add a reference to jquery
* Add a reference to first-visit.js to head section of your page:

        <script src="first-visit.js"></script>

* Create div with hint text (you can use any class name you want):

        <div class="hint" style="display: none">
            Hello to first time visitors!
        </div>

* Init first-visit.js:

        $(function() {
            $('.hint').firstVisit();
        });

Options
-------

* `classToAdd` - you can add your own class when showing an element. Example:

        $(function() {
			$('.hint-for-newbies').firstVisit({
			    classToAdd: 'yellow-background'
			});
        });
    If you want to specify multiple classes, just add a space between them.

* `currentPathOnly` (boolean) - show element not for the whole website, but for current path only. It can be useful when you want to show hints for newbies for multiple pages of your website.

* `currentPathStartsWith` - useful when you want to display a hint for certain page, but have multiple paths like `/product/1`, `/product/2`, `/product/3`, etc. In this case just set `currentPathStartsWith` variable to `/product/`. A hint will be shown only once on set of pages. `currentPathOnly` option must be set to `true`. 


Dependencies
------------

* jquery
* [Modernizr](https://github.com/Modernizr/Modernizr) if you need support for old browsers.

License
---------

MIT


