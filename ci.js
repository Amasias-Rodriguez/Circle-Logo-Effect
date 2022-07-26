const text = document.querySelector('.text p');
text.innerHTML = text.innerHTML.split("").map(
    (char, i) => 
    `<span style="transform:rotate(${i * 12.5}deg)">${char}</span>`
).join("")