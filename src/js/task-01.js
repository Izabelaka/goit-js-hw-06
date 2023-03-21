let categories = document.querySelectorAll('.item');

console.log(`Number of categories:  ${categories.length}`)

categories.forEach(category => {
    let categoryName = category.querySelector('h2').textContent;
    const categoryEl = category.querySelectorAll("li").length;
    console.log(`Category: ${categoryName}\nElements: ${categoryEl}`);
})