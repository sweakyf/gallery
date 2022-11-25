function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayElement(array) {
    return array[getRandomInt(0, array.length - 1)];
}

const MAX_COMMENT_COUNT = 5;
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

const usedCommentIds = [];

function getComment(maxPictureId) {
    let commentId = getRandomInt(1, MAX_COMMENT_COUNT * maxPictureId);
    while (usedCommentIds.includes(commentId)) {
        commentId = getRandomInt(1, MAX_COMMENT_COUNT * maxPictureId);
    }

    usedCommentIds.push(commentId);

    return {
        id: commentId,
        message: getRandomArrayElement(messages),
        user: {
            avatar: `./img/avatar-${getRandomInt(1, MAX_AVATAR_COUNT)}.svg`,
            name: getRandomArrayElement(usernames),
        }
    };
}

const usedPictureIds = [];

function getPicture(maxPictureId) {
    const comments = [];
    const commentCount = getRandomInt(0, MAX_COMMENT_COUNT);

    while (comments.length < commentCount) {
        comments.push(getComment(maxPictureId));
    }

    let pictureId = getRandomInt(1, maxPictureId);
    while (usedPictureIds.includes(pictureId)) {
        pictureId = getRandomInt(1, maxPictureId);
    }

    usedPictureIds.push(pictureId);

    return {
        id: pictureId,
        url: `./photos/${getRandomInt(1, MAX_PHOTO_COUNT)}.jpg`,
        description: getRandomArrayElement(descriptions),
        likes: getRandomInt(MIN_LIKE_COUNT, MAX_LIKE_COUNT),
        comments: comments
    }
}

function getPictures(count) {
    const arrayPictures = [];

    while (arrayPictures.length < count) {
        arrayPictures.push(getPicture(count))
    }

    return arrayPictures;
}

console.log(getPictures(2));

// не трогать
// const getItem = function () {
//     return {};
// };

// const items1 = new Array(10).fill(null).map(() => getItem());
// const items2 = Array.from({length: 10}, () => getItem());
