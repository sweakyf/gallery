
function getPictures(count) {
    const picture = {
        id:1,
        url: './photos/1.jpg',
        description: "природа",
        likes: 122,
        comments: [
            {
                id:1,
                message:' asadd',
                user: {
                    avatar:'./img/avatars/1.svg',
                    name: 'username',
                }
            }
        ]
    };


    const arrayPictures = [];

    while (arrayPictures.length < count) {
        arrayPictures.push(picture)
}

    return arrayPictures;
}

console.log(getPictures(3));

