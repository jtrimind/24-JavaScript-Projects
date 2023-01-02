'use strict';

const get_json = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const url = 'https://jtrimind.github.io/24-JavaScript-Projects/moviegame/movies.json';

const cast = document.querySelector('#cast');
const message_display = document.querySelector('#message-display');
const squares = document.querySelectorAll('.square');
const life = document.querySelector('#life');
const reset_button = document.querySelector('#reset-button');
const share_button = document.querySelector('#share-button');
const dialog = document.querySelector('#dialog');
const result = document.querySelector('#result');
const score_display = document.querySelector('#score-display');
let movies;
let picked_movie;
let score = 0;
let max_score = 0;

document.addEventListener('DOMContentLoaded', async () => {
  const setup = () => {
    if (life.value === 0) {
      result.textContent = '게임 오버';
      score_display.textContent = `점수: ${score} / ${max_score}`;
      dialog.show();
      return;
    }

    if (movies.length < 2) {
      result.textContent = '게임 클리어';
      score_display.textContent = `점수: ${score} / ${max_score}`;
      dialog.show();
      return;
    }

    const picked_movies = [];
    const idx1 = Math.floor(Math.random() * movies.length);
    picked_movies.push(movies[idx1]);
    movies.splice(idx1, 1);

    const idx2 = Math.floor(Math.random() * movies.length);
    picked_movies.push(movies[idx2]);
    movies.splice(idx2, 1);

    picked_movie = picked_movies[Math.floor(Math.random() * 2)];
    cast.textContent = picked_movie.cast;

    squares.forEach((square, index) => {
      square.style.backgroundImage = `url("${picked_movies[index].image_url}")`;
      square.style.backgroundSize = 'cover';
    });
  };

  const init = async () => {
    let json = await get_json(url);

    movies = json.movies;
    score = 0;
    max_score = movies.length / 2;
    dialog.close();
    message_display.textContent = '';
    life.value = 3;
    setup();
  };

  squares.forEach((square) => {
    square.addEventListener('click', () => {
      if (square.style.backgroundImage === `url("${picked_movie.image_url}")`) {
        message_display.textContent = '맞았습니다!';
        score += 1;
      } else {
        message_display.textContent = '틀렸습니다!';
        life.value -= 1;
      }
      setup();
    });
  });
  reset_button.addEventListener('click', init);
  share_button.addEventListener('click', () => {
    const url = 'https://jtrimind.github.io/24-JavaScript-Projects/moviegame/';
    const text = `이병헌 게임 점수: ${score} / ${max_score}`;
    const share_url = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(share_url, '_blank');
  });  

  await init();
});
