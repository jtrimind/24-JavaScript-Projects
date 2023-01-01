'use strict';

const header = document.querySelector('#header');
const color_display = document.querySelector('#color-display');
const reset_button = document.querySelector('#reset-button');
const message_display = document.querySelector('#message-display');
const mode_buttons = document.querySelectorAll('.mode');
const squares = document.querySelectorAll('.square');
let num_squares = 6;

document.addEventListener('DOMContentLoaded', () => {
  const get_random_color = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  };

  const reset = () => {
    header.style.backgroundColor = '#2C8E99';
    let colors = [];

    squares.forEach((square, index) => {
      if (index < num_squares) {
        square.style.display = 'block';
        const random_color = get_random_color();
        colors.push(random_color);
        square.style.backgroundColor = random_color;
      } else {
        square.style.display = 'none';
      }
    });

    color_display.textContent = colors[Math.floor(Math.random() * num_squares)];
    message_display.textContent = '';
    reset_button.textContent = 'New Colors';
  };

  reset_button.addEventListener('click', reset);
  mode_buttons.forEach((button) => {
    button.addEventListener('click', () => {
      mode_buttons.forEach((button) => {
        button.classList.remove('selected');
      });
      button.classList.add('selected');

      num_squares = button.textContent === 'EASY' ? 3 : 6;

      reset();
    });
  });
  squares.forEach((square) => {
    square.addEventListener('click', () => {
      if (square.style.backgroundColor === color_display.textContent) {
        message_display.textContent = 'Correct!';
        header.style.backgroundColor = color_display.textContent;
        squares.forEach((square) => {
          square.style.backgroundColor = color_display.textContent;
        });
        reset_button.textContent = 'Play Again';
      } else {
        message_display.textContent = 'Try Again';
        square.style.backgroundColor = '#232323';
      }
    });
  });

  reset();
});
