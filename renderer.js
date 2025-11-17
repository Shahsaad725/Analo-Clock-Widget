window.addEventListener("DOMContentLoaded", () => {
    const analogClock = document.getElementById("analogClock");
    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");

    const clockSize = analogClock.offsetWidth;
    const clockRadius = clockSize / 2;
    const numberRadius = clockRadius - 18;

    const offsetX = 12;
    const offsetY = 12;

    // place numbers
    for (let i = 1; i <= 12; i++) {
        const num = document.createElement("div");
        num.className = "number";
        num.textContent = i;

        const angle = (i * 30 - 90) * (Math.PI / 180);

        const x = clockRadius + numberRadius * Math.cos(angle) - 10 - offsetX;
        const y = clockRadius + numberRadius * Math.sin(angle) - 10 - offsetY;

        num.style.left = `${x}px`;
        num.style.top = `${y}px`;

        analogClock.appendChild(num);
    }

    function updateClock() {
        const now = new Date();
        console.log("Local time:", now.toString());

        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const secondDeg = seconds * 6;
        const minuteDeg = minutes * 6 + seconds * 0.1;
        const hourDeg = (hours % 12) * 30 + minutes * 0.5 + seconds * (0.5/60);

        secondHand.style.transform = `rotate(${secondDeg}deg)`;
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
        hourHand.style.transform = `rotate(${hourDeg}deg)`;
    }

    updateClock();
    setInterval(updateClock, 1000);
});
