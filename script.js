const hamburgerToggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");
const seemore_btn = document.querySelector(".see-more");
const blog_content = document.querySelector(".gameinfo");
const footer = document.querySelector("footer")
var height = document.body.clientHeight;

const toggleNav = () => {
  hamburgerToggler.classList.toggle("open")

  const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ?  "false" : "true";
  hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

  navLinksContainer.classList.toggle("open")
}
const toggleMore = () => {
  blog_content.classList.toggle("more")

  // const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ?  "false" : "true";
  // hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

  // navLinksContainer.classList.toggle("open")
}
hamburgerToggler.addEventListener("click", toggleNav);
// seemore_btn.addEventListener("click", toggleMore);

new ResizeObserver(entries => {
  if(entries[0].contentRect.width <= 595){
    navLinksContainer.style.transition = "transform 0.3s ease-out";
    // navLinksContainer.style.height = `${height}px`
    // console.log(height);
    // console.log(footer.style.paddingBottom)
    // console.log(height-footer.style.height)
  } else {
    navLinksContainer.style.transition = "none"
  }
}).observe(document.body)

