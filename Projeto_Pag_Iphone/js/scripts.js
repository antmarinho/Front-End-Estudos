const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        })

        const buttom = e.target;

        const id = buttom.getAttribute("id");

        buttom.querySelector(".color").classList.add("selected");

        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);
        
        setTimeout(() => {
            image.classList.toggle("changing");
        },200);
    });
})
