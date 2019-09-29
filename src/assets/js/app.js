import $ from "jquery";
import "what-input";

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require("foundation-sites");

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

Foundation.Abide.defaults.patterns["dashes_only"] = /^\d{3}-\d{3}-\d{4}$/;
Foundation.Abide.defaults.patterns[
  "password"
] = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,50}$/;

$(document).foundation();

// grab an element
var siteHeader = document.querySelector("#siteHeader");
// construct an instance of Headroom, passing the element
var headroom = new Headroom(siteHeader);
// initialise
headroom.init();
