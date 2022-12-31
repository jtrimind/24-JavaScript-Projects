document.addEventListener('DOMContentLoaded', () => {
  const clock = document.createElement('div');
  clock.id = 'clock';
  document.body.appendChild(clock);

  setInterval(() => {
    const date = new Date();
    const isAm = date.getHours() < 12;
    const hours = (date.getHours() % 12).toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds} ${isAm ? 'AM' : 'PM'}`;
    clock.innerText = time;
  }, 1000);
});
