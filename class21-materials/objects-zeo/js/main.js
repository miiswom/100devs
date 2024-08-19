//Create a stopwatch object that has four properties and three methods

const stopwatch = {};

stopwatch.currentHour = 14;
stopwatch.color = 'black';
stopwatch.shape = 'cylinder';
stopwatch.buttons = 2;

stopwatch.tellTime = function (time) {
  return `The current hour is ${time}`;
};

stopwatch.start = function (str) {
  if(str.toLowerCase() === 'start') {
    return 'Starting...';
  }
};

stopwatch.stop = function(str) {
  if(str.toLowerCase() === 'stop') {
    return 'Stopping...';
  }
};

console.log(stopwatch);