const PHOTO_COUNT = 25;

const NAMES = ['Артём', 'Анна', 'Иван', 'Мария', 'Денис', 'Ольга'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

let commentId = 0;

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const createMessage = () => {
  let message = getRandomArrayElement(MESSAGES);

  if (getRandomInteger(1, 2) === 2) {
    message += ` ${getRandomArrayElement(MESSAGES)}`;
  }

  return message;
};

const createComment = () => {
  commentId++;

  return {
    id: commentId,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES)
  };
};

const createComments = () => {
  const comments = [];
  const commentCount = getRandomInteger(0, 30);

  for (let i = 0; i < commentCount; i++) {
    comments.push(createComment());
  }

  return comments;
};

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: `Фотография из моего альбома №${id}`,
  likes: getRandomInteger(15, 200),
  comments: createComments()
});

const createPhotos = () => {
  const photos = [];

  for (let i = 1; i <= PHOTO_COUNT; i++) {
    photos.push(createPhoto(i));
  }

  return photos;
};

createPhotos();
