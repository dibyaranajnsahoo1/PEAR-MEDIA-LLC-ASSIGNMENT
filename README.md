# PEAR-MEDIA-LLC-ASSIGNMENT



This HTML and CSS code represents a "Coupon Wheel" web application. It consists of a wheel with different coupon options that can be spun by the user. When the wheel stops spinning, a coupon is randomly selected, and the result is displayed.

Here's a breakdown of the code:

HTML:

The code starts with the usual doctype declaration and the opening <html> tag.
The <head> section includes the title of the webpage and two external CSS files: bootstrap.min.css from the Bootstrap framework and styles.css, which contains custom styles.
The <body> section contains the main content of the webpage.
Inside the <div> container with the class container text-center, there's a heading <h1> with the text "Coupon Wheel".
The coupon wheel itself is represented by a <div> element with the class wheel-container.
Within the wheel container, there's another <div> element with the class wheel, which represents the spinning wheel.
The wheel is divided into six slices, each represented by a <div> element with a unique class, e.g., slice-1, slice-2, etc. The text inside each slice represents a different coupon percentage.
An image of an arrow is included inside the wheel container, represented by an <img> element with the class arrow. This arrow indicates the current position of the wheel.
A button with the id spin-btn and the class btn btn-primary is provided to allow the user to spin the wheel.
The result of the spin is displayed inside a <div> element with the id result.
CSS:

The custom styles are defined in the styles.css file.
The background of the webpage is set to a gradient using the background property and the linear-gradient() function.
An animation called gradient is created using the @keyframes rule. This animation transitions the background position to create a gradient effect that continuously changes over time.
Various styles are applied to different elements to create the visual appearance of the coupon wheel, including colors, positioning, and transformations.
The rotate animation is defined using the @keyframes rule. It rotates the wheel from 0 to 360 degrees.
JavaScript:

The JavaScript code is not included in the provided HTML file but is assumed to be in a separate file called script.js.
It includes an event listener that triggers the spinWheel() function when the spin button is clicked.
The spinWheel() function is responsible for animating the wheel, pausing the animation after a certain time, randomly selecting a winning coupon slice, and updating the result accordingly.
Overall, this code creates an interactive coupon wheel that engages users and provides them with randomized coupon offers.