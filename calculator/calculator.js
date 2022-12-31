'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let memory = 0;
  let operator = '=';
  let inputmode = 'number';

  const calculator = document.createElement('div');
  calculator.classList.add('calculator');
  calculator.classList.add('border');
  calculator.classList.add('flex-column');
  document.body.appendChild(calculator);

  const display = document.createElement('span');
  display.classList.add('display');
  display.classList.add('border');
  display.innerText = '0';
  calculator.appendChild(display);

  const upper_pannel = document.createElement('div');
  calculator.appendChild(upper_pannel);

  ['+', '-', '×', '÷'].forEach((element) => {
    const btn = document.createElement('button');
    btn.textContent = element;
    btn.classList.add('operator');
    upper_pannel.appendChild(btn);

    btn.addEventListener('click', () => {
      if (inputmode === 'number') {
        if (operator === '+') {
          memory += Number(display.innerText);
        } else if (operator === '-') {
          memory -= Number(display.innerText);
        } else if (operator === '×') {
          memory *= Number(display.innerText);
        } else if (operator === '÷') {
          memory /= Number(display.innerText);
        } else {
          memory = Number(display.innerText);
        }
        display.innerText = memory;
      }
      inputmode = 'operator';
      operator = element;
    });
  });

  const lower_pannel = document.createElement('div');
  calculator.appendChild(lower_pannel);

  const left_pannel = document.createElement('div');
  left_pannel.classList.add('left-pannel');
  left_pannel.classList.add('flex-column');
  lower_pannel.appendChild(left_pannel);

  const left_elements = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, '.', 'C'],
  ];
  left_elements.forEach((elements) => {
    const div = document.createElement('div');
    left_pannel.appendChild(div);

    elements.forEach((element) => {
      const btn = document.createElement('button');
      btn.textContent = element;
      div.appendChild(btn);

      if (element === 'C') {
        btn.addEventListener('click', () => {
          memory = 0;
          operator = '=';
          inputmode = 'number';

          display.innerText = '0';
        });
      } else {
        btn.addEventListener('click', () => {
          if (inputmode === 'operator') {
            if (operator === '=') {
              memory = 0;
            }

            display.innerText = '0';
            inputmode = 'number';
          }

          if (display.innerText === '0') {
            display.innerText = '';
          }
          display.innerText += element;
        });
      }
    });
  });

  const right_pannel = document.createElement('div');
  right_pannel.classList.add('right-pannel');
  lower_pannel.appendChild(right_pannel);
  const btn = document.createElement('button');
  btn.textContent = '=';
  btn.classList.add('equal');
  right_pannel.appendChild(btn);

  btn.addEventListener('click', () => {
    if (operator === '+') {
      memory += Number(display.innerText);
    } else if (operator === '-') {
      memory -= Number(display.innerText);
    } else if (operator === '×') {
      memory *= Number(display.innerText);
    } else if (operator === '÷') {
      memory /= Number(display.innerText);
    } else {
      memory = Number(display.innerText);
    }
    display.innerText = memory;
    inputmode = 'operator';
    operator = '=';
  });
});
