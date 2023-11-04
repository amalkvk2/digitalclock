function clock() {
  const weeks = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let day = date.getDay();

  const timeFormat = hour >= 12 ? "PM" : "AM";

  if (hour > 12) {
    hour -= 12;
  }
  const minutes = minute < 10 ? "0" + minute : minute;
  const seconds = second < 10 ? "0" + second : second;
  const hours = hour < 10 ? "0" + hour : hour;

  hour1.innerHTML = `${hours}`;
  minute1.innerHTML = `${minutes}`;
  second1.innerHTML = `${seconds}`;
  days.innerHTML = `${weeks[day - 1]}`;
  format.innerHTML = `${timeFormat}`;

  setTimeout(() => {
    clock();
  }, 1000);
}
clock();
