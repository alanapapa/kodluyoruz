const posts = [
    { title: "1-Title", content: "1-Content" },
    { title: "2-Title", content: "2-Content" },
    { title: "3-Title", content: "3-Content" },
];

const newPostTitle = process.argv[2];
const newPostContent = process.argv[3];

const listPosts = () => {
    posts.map((post) => {
        console.log(post.title, '\n', post.content, '\n\n---');
    });
};

const addPost = (newPost) => {
    const p = new Promise((resolve, reject) => {
        posts.push(newPost);
        //reject('ERROR');
    });

    return p;
};


if (process.argv.length === 4) {
    addPost({ title: `${newPostTitle}`, content: `${newPostContent}` })
        .then(() => {
            listPosts();
        })
        .catch((err) => {
            console.log(err);
        });
} else {
    listPosts();
}

listPosts();
