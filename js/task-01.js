//
const categories = document.querySelectorAll(".item");
console.log(`Number of categories:`, categories.length);
//
const categoriesTitle = [];
categories.forEach((el) => {
  categoriesTitle.push(`Category: 
  ${el.querySelector("h2").textContent}
    Element: ${el.querySelectorAll(".item ul li").length}`);
});

console.log(...categoriesTitle);
