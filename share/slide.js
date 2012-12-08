// JavaScript Slide Presentation software.
// Copyright 2003-2009 by Akkana Peck.
// This software is licensed under the GNU public license --
// Share and enjoy!

// See a presentation on how to use this at
// http://shallowsky.com/linux/presentations/

//
// Slide navigation. List your slides here, in order.
//
var slides = new Array (
    "talk1.page",
    "talk2.page",
    "talk3.page",
    "talk4.page",
    "talk5.page",
    "talk6.page",
    "talk7.page",
    "talk8.page",
    "talk9.page",
    "talk10.page",
    "talk11.page",
    "talk12.page",
    "talk13.page",
    "talk14.page",
    "talk15.page",
    "talk16.page",
    "talk17.page",
    "talk18.page",
    "talk19.page",
    "talk20.page",
    "talk21.page",
    "talk22.page",
    "talk23.page",
    "talk24.page",
    "talk25.page",
    "talk26.page",
    "talk27.page",
    "talk28.page",
    "talk29.page",
    "talk30.page",
    "talk31.page",
    "talk32.page",
    "talk33.page",
    "talk34.page",
    "talk35.page",
    "talk36.page",
    "talk37.page",
    "talk38.page",
    "talk39.page",
    "talk40.page",
    "talk41.page",
    "talk42.page",
    "talk43.page",
    "talk44.page",
    "talk45.page",
    "talk46.page",
    "talk47.page",
    "talk48.page",
    "talk49.page",
    "talk50.page",
    "talk51.page",
    "talk52.page",
    "talk53.page",
    "talk54.page",
    "talk55.page",
    "talk56.page",
    "talk57.page",
    "talk58.page",
    "talk59.page",
    "talk60.page",
    "talk61.page",
    "talk62.page",
    "talk63.page",
    "talk64.page",
    "talk65.page",
    "talk66.page",
    "talk67.page",
    "talk68.page",
    "talk69.page",
    "talk70.page",
    "talk71.page",
    "talk72.page",
    "talk73.page",
    "talk74.page",
    "talk75.page",
    "talk76.page",
    "talk77.page",
    "talk78.page",
    "talk79.page",
    "talk80.page",
    "talk81.page",
    "talk82.page",
    "talk83.page",
    "talk84.page",
    "talk85.page",
    "talk86.page",
    "talk87.page",
    "talk88.page",
    "talk89.page",
    "talk90.page",
    "talk91.page",
    "talk92.page",
    "talk93.page",
    "talk94.page",
    "talk95.page",
    "talk96.page",
    "talk97.page",
    "talk98.page",
    "talk99.page",
    "talk100.page",
    "talk101.page",
    "talk102.page",
    "talk103.page",
    "talk104.page",
    "talk105.page",
    "talk106.page",
    "talk107.page",
    "talk108.page",
    "talk109.page",
    "talk110.page",
    "talk111.page",
    "talk112.page",
    "talk113.page",
    "talk114.page",
    "talk115.page",
    "talk116.page",
    "talk117.page",
    "talk118.page",
    "talk119.page",
    "talk120.page",
    "talk121.page",
    "talk122.page",
    "talk123.page",
    "talk124.page",
    "talk125.page",
    "talk126.page",
    "talk127.page",
    "talk128.page",
    "talk129.page",
    "talk130.page",
    "talk131.page",
    "talk132.page",
    "talk133.page",
    "talk134.page",
    "talk135.page",
    "talk136.page",
    "talk137.page",
    "talk138.page",
    "talk139.page",
    "talk140.page",
    "talk141.page",
    "talk142.page",
    "talk143.page",
    "talk144.page",
    "talk145.page",
    "talk146.page",
    "talk147.page",
    "talk148.page",
    "talk149.page",
    "talk150.page",
    "talk151.page",
    "talk152.page",
    "talk153.page",
    "talk154.page",
    "talk155.page",
    "talk156.page",
    "talk157.page",
    "talk158.page",
    "talk159.page",
    "talk160.page"
);

//
// Add the event listener.
// This has to be on keydown or keyup because webkit doesn't
// generate keypress events for nonprintable keys.
if (document.addEventListener) {		// DOM way
  document.addEventListener("keydown", onKeyPress, false);
}
else if (document.all)			// IE way
  document.attachEvent("onkeypress", onKeyPress);

function onKeyPress(e)
{
  // IE doesn't see the event argument passed in, so get it this way:
  if (window.event) e = window.event;

  if (typeof console != "undefined")
    console.log("key press, char code " + e.charCode + ", key code " + e.keyCode
                + ", " + e.ctrlKey + ", " + e.altKey + ", " + e.metaKey );

  if (e.ctrlKey || e.altKey || e.metaKey) {
    return;
  }

  if (e.shiftKey) {
    switch (e.keyCode) {
      case 33:    // e.DOM_VK_PAGE_UP:
      case 33:    // e.DOM_VK_PAGE_UP:
        tableOfContents();
        e.preventDefault();
    }
    return;
  }

  // Mozilla uses charCode for printable characters, keyCode for unprintables:
  if (e.charCode) {
    switch (e.charCode) {
      case 32:
        nextSlide();
        e.preventDefault();
        return;
    }
  }

  // Use numeric values rather than DOM_VK_* so that non-mozilla browsers
  // might work.
  switch (e.keyCode) {
    case 32:    // e.DOM_VK_SPACE:
    case 34:    // e.DOM_VK_PAGE_DOWN:
    case 39:    // e.DOM_VK_RIGHT:
      nextSlide();
      e.preventDefault();
      return;
    case 8:     // e.DOM_VK_BACK_SPACE:
    case 33:    // e.DOM_VK_PAGE_UP:
    case 37:    // e.DOM_VK_LEFT:
      prevSlide();
      e.preventDefault();
      return;
    case 36:    // e.DOM_VK_HOME:
    //case 38:    // e.DOM_VK_UP:
      firstSlide();
      e.preventDefault();
      return;
    case 35:    // e.DOM_VK_END:
      lastSlide();
      e.preventDefault();
      return;
    // The Logitech Presenter's F5/ESC button sometimes sends ESC,
    // sometimes F5. I can't figure out the rule, so treat them the same:
    case 27:     // e.DOM_VK_ESC:
    case 116:    // e.DOM_VK_F5:
      firstSlide();
      e.preventDefault();
      return;
  }
}

function indexOfPage() {
  var url = document.URL;
  var question = document.URL.lastIndexOf("?");
  var lastslash;
  if (question > 0)
    lastslash = document.URL.lastIndexOf("/", question);
  else
    lastslash = document.URL.lastIndexOf("/");
  var filename = url.substring(lastslash+1, url.length);

  // JS 1.6 has Array.indexOf, but that doesn't work in Opera/Konq/etc.
  if (slides.indexOf) return slides.indexOf(filename);
  var i;
  for (i=0; i<slides.length; ++i) {
    if (slides[i] == filename) return i;
  }
  return 0;
}

function nextSlide() {
  var i = indexOfPage();
  if (i >= slides.length - 1) {
    return;
  }
  window.location = slides[i+1];
}

function firstSlide() {
  window.location = slides[0];
}

function lastSlide() {
  window.location = slides[slides.length-1];
}

function tableOfContents() {
  var text = "<h2>Table of Contents</h2>\n<small>\n";
  var i;
  for (i=0; i<slides.length; ++i)
    text += '<a href="' + slides[i] + '">' + slides[i] + '</a><br>\n'
  text += "</small>\n"
  body = document.getElementsByTagName("body")[0];
  body.innerHTML = text;
}

function prevSlide() {
  var i = indexOfPage();
  if (i <= 0) {return;}
  window.location = slides[i-1];
}

function initpage() {
  var body = document.getElementsByTagName("body")[0];
  nextdiv = document.createElement("div");
  nextdiv.id = "nextdiv";
  nextdiv.style.position = "absolute";
  body.appendChild(nextdiv);

  var i = indexOfPage();
  if (i >= slides.length - 1) {
    nextdiv.innerHTML = "The end";
    return;
  }
  nextname = slides[i+1];
  slash = nextname.lastIndexOf('/');
  if (slash < 0)
    slash = 0;
  else
    slash += 1;
  dot = nextname.lastIndexOf('.');
  if (dot < 0)
    nextdiv.innerHTML = "Next: " + nextname.substring(slash);
  else
    nextdiv.innerHTML = "Next: " + nextname.substring(slash, dot);
}
