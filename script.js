const countdown = document.getElementById('countdown');

const newYearDate = new Date("Jan 1, 2024 00:00:00").getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();

  const timeRemaining = newYearDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    countdown.innerHTML = "Happy New Year!";
  }
}, 1000);
