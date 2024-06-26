function addItemToBlogList(itemname, itemUrl) {
    const ul = document.getElementById("articleslist");
    const li = document.createElement("li");
    const link = document.createElement("a");
    
    link.href = itemUrl;  // Set the href attribute of the <a> element
    link.textContent = itemname;  // Set the text content of the <a> element
    
    li.appendChild(link);  // Append the <a> element to the <li> element
    ul.appendChild(li);  // Append the <li> element to the <ul> list
}

articles = [
    {"name":"Blog 1","url":"../public/blogs/blog1.md"}
]

function loadArticle(filename) {
    // Check if marked is loaded before using it
    if (typeof marked !== 'undefined') {
        const fileContent = fetch(`../public/blogs/${filename}`).responce
        const htmlContent = marked.parse(fileContent); // Use marked.parse() for parsing
        
        // Display the HTML content
        document.getElementById('articleDisplay').innerHTML = htmlContent;
    } else {
        console.error('Marked.js is not loaded or available.');
    }
}

async function fetchItems() {
    const ul = document.getElementById("articleslist");
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
    articles.forEach(article => {
        addItemToBlogList(article.name, article.url);
    });
}