let url = new URL(location.href);
let post = url.searchParams.get('posts')
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(value => value.json())
    .then(value => {
        for (const post of value) {
            let postDiv = document.createElement('div');

            postDiv.innerText = `${post.id} ${post.body}`
        }
        document.body.append(postDiv);
    })