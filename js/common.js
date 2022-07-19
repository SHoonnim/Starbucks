const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

function searchElClickHandler()
{
  searchInputEl.focus();
}
searchEl.addEventListener("click", searchElClickHandler);

function searchInputElFocusHandler()
{
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
}
function searchInputElBlurHandler()
{
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
}
searchInputEl.addEventListener("focus", searchInputElFocusHandler);
searchInputEl.addEventListener("blur", searchInputElBlurHandler);

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();