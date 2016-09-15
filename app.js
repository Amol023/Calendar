'use strict'

function layOutDay(events) {
  const copy = events.slice();
  copy.forEach((event) => {
    event['start'] = timeConverter(event['start']);
    event['end'] = timeConverter(event['end']);
  });

  const eventBox = document.getElementById('trial-container');

  // const emptyNode = document.createTextNode('');
  const trialBox = document.createElement('div');
  trialBox.style.background='black';
  trialBox.style.position = 'relative';
  trialBox.style.left = '100px';
  trialBox.style.width= "500px";
  trialBox.style.height = '500px';

  // trialBox.appendChild(emptyNode);

  eventBox.appendChild(trialBox);

  return copy;
}
console.log(layOutDay([{start: 30, end: 150}, {start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670} ]))

//  helper function to manipulate the input times
function timeConverter(timeInMinutes) {
  //  starts with 9:00 AM
  const initialTime = [9, 0];
  //  counts the hours after 9
  let newHour = Math.round(timeInMinutes / 60) + 9;
  //  counts the minutes
  let newMinute = Math.round(timeInMinutes % 60);

  //  output in 12 hour format
  initialTime[0] = newHour > 12 ? newHour - 12 : newHour;
  initialTime[1] = newMinute > 0 ? newMinute : '00';

  timeInMinutes = initialTime.join(':');

  //  resetting the helper array
  initialTime[0] = 9;
  initialTime[1] = 0;
  return timeInMinutes;
}















//  input -- [ {start: 30, end: 150}, {start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670} ]


//  output -- Layout according to the requirements
