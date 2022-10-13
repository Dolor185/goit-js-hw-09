import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix, { Notify } from 'notiflix';
const refs = {
    inputDate: document.querySelector('#datetime-picker') ,
    btnStart: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
}

let timerId = null;
let selectedDate = ''
refs.btnStart.disabled = true
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if(Date.now()>selectedDates[0]){
        Notify.info('Please choose a date in the future')
        return
      }
      selectedDate = selectedDates[0]
      refs.btnStart.disabled = false
     
    },
  };

  flatpickr(refs.inputDate, options)

  refs.btnStart.addEventListener('click', setTimer)

  function setTimer(){
    timerId = setInterval(()=>{
        const date = new Date
        const deltaTime = selectedDate - date
        if(deltaTime === 0){
          clearInterval(timerId)
          return
        }
        const { days, hours, minutes, seconds } = convertMs(deltaTime)
        updateTimerFace({ days, hours, minutes, seconds })
    },1000)
    
   
  }

  function updateTimerFace({ days, hours, minutes, seconds }){
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds

  }
  function addLeadingZero(val){
    return String(val).padStart(2, '0')
  }
 
 function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
export default refs 