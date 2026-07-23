// 🚀 NovaSlicer Website v0.0.1

console.log("NovaSlicer website loaded 🚀");


// Кнопка Download

const downloadButton = document.querySelector("button");

if (downloadButton) {

    downloadButton.addEventListener("click", () => {

        alert(
            "🚀 NovaSlicer v0.0.1\n\n" +
            "Скоро будет доступна первая версия!"
        );

    });

}


// Плавная прокрутка по кнопке Download

const link = document.querySelector("header a");

if (link) {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        document
            .querySelector("#download")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}
