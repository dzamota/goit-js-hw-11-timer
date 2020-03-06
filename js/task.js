'use strict';

class CountdownTimer {
  constructor(obj) {
    this.querySelector = obj.selector;
    this.date = obj.targetDate;

    this.writeTime();
  }

  countTime() {
    const time = Date.parse(this.date) - Date.now();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
  }

  writeTime() {
    const days = document.querySelector('span[data-value="days"]');
    const hours = document.querySelector('span[data-value="hours"]');
    const mins = document.querySelector('span[data-value="mins"]');
    const secs = document.querySelector('span[data-value="secs"]');

    setInterval(() => {
      const currentTime = this.countTime();
      days.innerText =
        currentTime.days.toString().split('').length < 2
          ? ('00' + currentTime.days).slice(-2)
          : currentTime.days;
      hours.innerText = ('00' + currentTime.hours).slice(-2);
      mins.innerText = ('00' + currentTime.mins).slice(-2);
      secs.innerText = ('00' + currentTime.secs).slice(-2);
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020')
});

console.log(timer);
