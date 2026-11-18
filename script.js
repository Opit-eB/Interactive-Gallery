var DEFAULT_TEXT = "Hover over or focus an image below to display here.";

// Called on mouseover and focus. "element" is the figure; its <img> holds alt and src.
function upDate(element) {
  console.log("upDate fired");
  var previewPic = element.querySelector("img");
  console.log("alt:", previewPic.alt);
  console.log("src:", previewPic.src);

  var frame = document.getElementById("image");
  frame.style.backgroundImage = "url('" + previewPic.src + "')";
  frame.innerHTML = previewPic.alt;
}

// Called on mouseout and blur: restore the original state.
function unDo() {
  console.log("unDo fired");
  var frame = document.getElementById("image");
  frame.style.backgroundImage = "url('')";
  frame.innerHTML = DEFAULT_TEXT;
}

// Called on page load: make every figure reachable with the Tab key.
function addTabFocus() {
  console.log("Page loaded: adding tabindex");
  var figures = document.querySelectorAll("figure");
  for (var i = 0; i < figures.length; i++) {
    figures[i].setAttribute("tabindex", "0");
  }
}
