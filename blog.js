const blogPosts = [
    {
        title: "Exploring the Future of AI",
        image: "ai-blog.jpg",
        summary: "Artificial Intelligence is transforming industries. Discover its future impact.",
        link: "#"
    },
    {
        title: "Top Web Development Trends",
        image: "webdev-blog.jpg",
        summary: "Stay ahead of the curve with the latest web development trends.",
        link: "#"
    },
    {
        title: "Productivity Tips for Remote Work",
        image: "remote-work-blog.jpg",
        summary: "Maximize your efficiency with these essential productivity tips for remote workers.",
        link: "#"
    }
];

function loadBlogPosts() {
    const blogContainer = document.getElementById('blog-container');

    blogPosts.forEach(post => {
        const blogHTML = `
            <article class="post">
                <img src="${post.image}" alt="${post.title}">
                <h3>${post.title}</h3>
                <p>${post.summary}</p>
                <a href="${post.link}">Read More</a>
            </article>
        `;

        blogContainer.innerHTML += blogHTML;
    });
}

document.addEventListener('DOMContentLoaded', loadBlogPosts);
