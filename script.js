document.addEventListener('DOMContentLoaded', () => {
    fetch('articles.json')
        .then(response => response.json())
        .then(data => {
            displayCategories(data);
            displayArticles(data);
        })
        .catch(error => console.error('Error al cargar los artículos:', error));
});

function displayCategories(articles) {
    const categoryIndex = document.getElementById('category-index');
    const categories = [...new Set(articles.map(article => article.category))];

    categories.forEach(category => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = "#";
        a.textContent = category;
        a.addEventListener('click', () => filterByCategory(category, articles));
        li.appendChild(a);
        categoryIndex.appendChild(li);
    });
}

function displayArticles(articles) {
    const articleContent = document.getElementById('article-content');
    articleContent.innerHTML = '';

    articles.forEach(article => {
        const articleElement = document.createElement('article');

        const title = document.createElement('h2');
        title.textContent = article.title;
        articleElement.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `Autor: ${article.author}`;
        articleElement.appendChild(author);

        const created = document.createElement('p');
        created.textContent = `Fecha de creación: ${article.created}`;
        articleElement.appendChild(created);

        const content = document.createElement('p');
        content.textContent = article.article;
        articleElement.appendChild(content);

        articleContent.appendChild(articleElement);
    });
}

function filterByCategory(category, articles) {
    const filteredArticles = articles.filter(article => article.category === category);
    displayArticles(filteredArticles);
}
