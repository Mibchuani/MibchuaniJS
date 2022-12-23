
button.onclick = function () {
fetch(`https://jsonplaceholder.typicode.com/users/USER_ID/posts${id}`)
    .then(value => value.json())
    .then(posts =>{
        console.log(posts);
        for (const post of posts) {
            let usersPost = document.createElement('div');

            usersPost.innerText = `${user.id} -- ${user.post}`;
            container.append(usersDiv);
        }
    }
}