const destinationDate = new Date(2020, 7, 9, 21, 41);

console.log(destinationDate);

const prepareValue = value => value < 10 ? `0${value}` : value;

const getEnding = days => {
  if (days === 1) return 'день';
  if (days > 4) return 'днів';
  return 'дня';
};

const getTime = ms => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor((ms / 1000 / 3600) % 24);
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  return `${days} ${getEnding(days)} ${hours}:${prepareValue(minutes)}:${prepareValue(seconds)}`;
};

const getDifference = () => {
  const currentDate = new Date();
  const time = document.getElementById('time');
  time.innerHTML = getTime(destinationDate.getTime() - currentDate.getTime());
};

window.onload = getDifference;

setInterval(() => getDifference(), 1000);



