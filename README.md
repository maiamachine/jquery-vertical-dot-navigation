# jQuery Vertial Dot Navigation


jQuery Vertical Dot Navigation is a lightweight jQuery plugin that easily allows you to add navigation to a long scrolling page.  The plugin automatically detects the number of content sections on your page and adds a corresponding dot to the navigation.  Clicking on that dot will smoothly scroll the user to its corresponding section.

## Setup

Include the jQuery library (included as a bower component in this repository for convenience but available from many other repositories and CDNs as well).  Include the jQuery Vertical Dot Nav javascript file found in the js directory of this repository.  You will also need to include the jQuery Vertical Dot Nav css file found in the css directory.

````html 
  <script src="bower_components/jquery/dist/jquery.min.js"></script>
  <script src="js/jq-vertical-dot-nav.js"></script>
  <link rel="stylesheet" href="css/jq-vertical-dot-navigation.css">
````

To use the plugin call the verticalDotNav method on the element representing each section on your page.  This element can be a repeating HTML node (such as a section or a div) or a class (such as "main-container").  Example:

````javascript
$('section').verticalDotNav();
````

This will initiate the plugin with the default functionality: 
* Nav is aligned on the right
* Nav dots ares 10px wide by 10px high
* Nav dots are displayed as circles
* Nav dots have a white border and a transparent background (reversed on hover)
* Nav background is gray (hex #666)
* Scroll speed is 1000ms

All of these options can be customized by passing an object into the verticalDotNav method.  See below.

## Options

To customize the appearance of the navigation you can pass an oject into the verticalDotNav method.  Options include:

| Property      | Options            | Default  | 
| ------------- |:------------------:| --------:|
| align         | "right", "left"    | "right"  |
| dot_size      | number             | 10       |
| dot_style     | "circle", "square" | "cirlce" |
| dot_color     | valid hex value    | "#fff"   |
| nav_color     | valid hex value    | "#666"   |
| scroll_speed  | number             | 1000     |

Below is an example showing how you might call the plugin with options:

````javascript
$('section').verticalDotNav({
		align : "left", 
		scroll_speed : 2000,
		dot_size: 20,
		dot_style: "circle",
		dot_color: "#efefef",
		nav_color: "#000000"
	});
````

## Sample

This repository includes a sample page with three sections and the vertical dot navigation.  All images in this repository are for demonstration only.  The styles.css file is also intended for the demo and is not required to use the plugin.  The sample uses Bootstrap which is not required and is simly used for styling.

## Responsive

This plugin works in responsive designs although you may want ot adjust the styling under certain breakpoints depending on your design.







