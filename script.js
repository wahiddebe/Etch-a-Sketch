const container = document.querySelector('#container')
generateBox(16)

function generateBox(input) {
    let inputMin = input - 1
    let totalBox = input * input
    for (let index = 0; index < totalBox; index++) {
        const box = document.createElement('div')
        let bgColor1 = Math.floor(Math.random() * 256)
        let bgColor2 = Math.floor(Math.random() * 256)
        let bgColor3 = Math.floor(Math.random() * 256)
        box.classList.add('box')
        box.dataset.opacity = 0
        box.dataset.bgcolor = `${bgColor1},${bgColor2},${bgColor3}`
        box.addEventListener('mouseenter', function () {
            let hoverInteract = parseFloat(box.dataset.opacity)
            if (box.dataset.opacity < 1) {
                hoverInteract = Math.round((hoverInteract + 0.10) * 100) / 100;
                box.dataset.opacity = hoverInteract
            }
            box.style.backgroundColor = `rgba(${box.dataset.bgcolor},${hoverInteract})`

        });
        let width = `calc((100% - (${inputMin} * 8px)) / ${input})`;
        box.style.width = width
        container.appendChild(box)

    }
}
function inputBox() {
    let inputNum
    const boxs = document.querySelectorAll('.box')

    while ((inputNum = prompt("maks 100:")) !== null && (isNaN(inputNum) || inputNum > 100)) {
        alert("Max 100!");
    }
    if (!inputNum) return
    console.log(inputNum)
    boxs.forEach(child => {
        child.remove()
    });
    return generateBox(inputNum)
}



