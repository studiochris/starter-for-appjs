Starter for AppJS
=================

Includes the basic building blocks needed to begin an AppJS project with custom window chrome. 

Instructions and Contents
---------------------------

Download and extract the project into an already extracted copy of the AppJS distributable package for the platform of your choice. 

The following files are overwritten from the Hello World app sample that is distributed in the distributable package:

`data/app.js`

The main configuration file for the AppJS initial window and application

`data/content/index.html` 

The main index file that is loaded into the initial window in AppJS. This includes the main HTML for the custom window.

`data/content/style.css` 

The main stylesheet for `index.html`. It includes styling for native scrollbars, custom window chrome in 8 different OS configurations. Add the different OS classes from this stylesheet to the `.app` `<div>` to change the window appearance.

And the following files are added:

`data/content/js/window.js`

Contains basic controls for the custom chrome window. Uses jQuery for the time being, but may be refactored into plain JavaScript at some point.

`data/content/libs/jquery.js`

jQuery 1.8.2 minified. Required for the window controls to function. For the jQuery license, see [jquery.org/license](http://jquery.org/license).


MIT License
---------------------------

Copyright © 2012 studio|chris and other contributors.
[studiochris.us](http://www.studiochris.us)
[github.com/studiochris/starter-for-appjs](https://github.com/studiochris/starter-for-appjs)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

