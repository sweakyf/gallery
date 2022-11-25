function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayElement(array) {
    return array[getRandomInt(0, array.length - 1)];
}

function getComment(count) {
    return [
        {
            id: getRandomInt(1, MAX_COMMENT_COUNT * count),
            message: getRandomArrayElement(messages),
            user: {
                avatar: `./img/avatars/${getRandomInt(1, MAX_AVATAR_COUNT)}.svg`,
                name: getRandomArrayElement(usernames),
            }
        }
    ]
}

const MAX_COMMENT_COUNT = 10;
const MAX_AVATAR_COUNT = 6;
const MAX_PHOTO_COUNT = 25;
const MIN_LIKE_COUNT = 15;
const MAX_LIKE_COUNT = 200;

const descriptions = [
    'красивая картинка',
    'крутая картинка',
    'классная картинка',
    'прикольная картинка',
];

const messages = [
    'круто',
    'красиво',
    'классно',
    'прикольно',
    'фу'
];

const usernames = [
    'Павел',
    'Артём',
    'Никита',
    'Антон',
];

function getPictures(count) {
    const arrayPictures = [];

    while (arrayPictures.length < count) {
        const picture = {
            id: getRandomInt(1, count),
            url: `./photos/${getRandomInt(1, MAX_PHOTO_COUNT)}.jpg`,
            description: getRandomArrayElement(descriptions),
            likes: getRandomInt(MIN_LIKE_COUNT, MAX_LIKE_COUNT),
            comments: [
                getComment(count)
            ]
        }
        arrayPictures.push(picture)
    }

    return arrayPictures;
}

console.log(getPictures(10));

const getItem = function () {
    return {};
};

const items = new Array(10).fill(null).map(() => getItem());

console.log(items);
