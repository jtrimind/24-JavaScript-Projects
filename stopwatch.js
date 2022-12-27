document.addEventListener('DOMContentLoaded', () => {
  let stopwatch = document.createElement('div');
  stopwatch.id = 'stopwatch';
  document.body.appendChild(stopwatch);

  let title = document.createElement('h1');
  title.textContent = 'STOPWATCH';
  stopwatch.appendChild(title);

  let subtitle = document.createElement('h2');
  subtitle.textContent = 'VANILLA JAVASCRIPT STOPWATCH';
  stopwatch.appendChild(subtitle);

  let timer = document.createElement('div');
  timer.textContent = '00:00:00';
  timer.id = 'timer';
  stopwatch.appendChild(timer);

  let buttons = document.createElement('div');
  stopwatch.appendChild(buttons);

  let start = document.createElement('button');
  start.textContent = 'Start';
  buttons.appendChild(start);

  let stop = document.createElement('button');
  stop.textContent = 'Stop';
  buttons.appendChild(stop);

  let reset = document.createElement('button');
  reset.textContent = 'Reset';
  buttons.appendChild(reset);

  let seconds = 0;
  let timerId;

  const toHHMMSS = (seconds) => {
    let sec_num = seconds;
    let HH = Math.floor(sec_num / 3600);
    let MM = Math.floor((sec_num - HH * 3600) / 60);
    let SS = sec_num - HH * 3600 - MM * 60;

    if (HH < 10) {
      HH = '0' + HH;
    }
    if (MM < 10) {
      MM = '0' + MM;
    }
    if (SS < 10) {
      SS = '0' + SS;
    }
    return HH + ':' + MM + ':' + SS;
  };

  start.addEventListener('click', () => {
    timerId = setInterval(() => {
      seconds++;
      timer.innerText = toHHMMSS(seconds);
    }, 1000);
  });

  stop.addEventListener('click', () => {
    clearInterval(timerId);
  });

  reset.addEventListener('click', () => {
    clearInterval(timerId);
    seconds = 0;
    timer.innerText = toHHMMSS(seconds);
  });
});
