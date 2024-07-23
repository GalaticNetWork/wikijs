document.addEventListener('DOMContentLoaded', () => {
    fetch('articles.json')
        .then(response => response.json())
        .then(data => {
            displayTableOfContents(data);
            displayArticles(data);
        })
        .catch(error => console.error('Error al cargar los artículos:', error));
});

function displayTableOfContents(articles) {
    const tableOfContents = document.getElementById('table-of-contents');

    articles.forEach((article, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#article-${index}`;
        a.textContent = article.title;
        li.appendChild(a);
        tableOfContents.appendChild(li);
    });
}

function displayArticles(articles) {
    const articleContent = document.getElementById('article-content');
    articleContent.innerHTML = '';

    articles.forEach((article, index) => {
        const articleElement = document.createElement('article');
        articleElement.id = `article-${index}`;

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
