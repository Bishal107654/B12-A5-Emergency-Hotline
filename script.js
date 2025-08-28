// Initial counts
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// DOM elements
const heartCountBtn = document.getElementById("heartCountBtn");
const coinCountBtn = document.getElementById("coinCountBtn");
const copyCountBtn = document.getElementById("copyCountBtn");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

// Heart icon click
document.querySelectorAll(".heart-icon").forEach(icon => {
    icon.addEventListener("click", () => {
        heartCount++;
        heartCountBtn.innerHTML = `${heartCount} <img class="w-[20px]" src="assets/heart.png" alt="">`;
    });
});

// Copy button click
document.querySelectorAll(".copy-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const number = btn.closest(".card-body").querySelector(".hotline-number").innerText;
        navigator.clipboard.writeText(number).then(() => {
            copyCount++;
            copyCountBtn.innerText = `${copyCount} Copy`;
            alert(`Hotline number ${number} copied to clipboard!`);
        });
    });
});

// Call button click
document.querySelectorAll(".call-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const cardBody = btn.closest(".card-body");
        const serviceName = cardBody.querySelector(".card-title").innerText;
        const number = cardBody.querySelector(".hotline-number").innerText;

        if (coinCount < 20) {
            alert("Not enough coins to make the call!");
            return;
        }

        coinCount -= 20;
        coinCountBtn.innerHTML = `${coinCount} <img class="w-[20px]" src="assets/coin.png" alt="">`;

        const time = new Date().toLocaleTimeString();
        alert(`Calling ${serviceName} at ${number}`);

        // Add to history
        const div = document.createElement("div");
        div.classList.add("history-item", "mb-2");
        div.innerText = `${serviceName} - ${number} at ${time}`;
        historyList.prepend(div);
    });
});

// Clear History
clearHistoryBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
});
