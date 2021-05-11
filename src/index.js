const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const ref = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.body
};

ref.startBtn.addEventListener('click', onChangeColor);
ref.stopBtn.addEventListener('click', onStopChangeColor);

let timeId;

function onChangeColor(evt) {
    timeId = setInterval(() => {
       ref.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);

    ref.startBtn.disabled = true
}

function onStopChangeColor(evt) {
    clearInterval(timeId);
    
    ref.startBtn.disabled = false
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
