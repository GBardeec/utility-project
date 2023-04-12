const time = document.querySelector('.watch-container__text');

function changeOfTime() {
    const data = new Date();
    const seconds = data.getSeconds();
    const minutes = data.getMinutes();
    const hours = data.getHours();
    time.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function startChange() {
    changeOfTime();
    setInterval(changeOfTime, 1000);
}

startChange();