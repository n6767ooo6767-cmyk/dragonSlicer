<script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"></script>
<script type="module" src="script.js"></script>

// 🚀 NovaSlicer v0.0.1

const fileInput = document.getElementById("modelFile");
const sliceButton = document.querySelector("button");


// Загрузка модели
fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];

    if (file) {
        alert(
            "🧊 Модель загружена:\n" + file.name
        );
    }
});


// Кнопка Slice
sliceButton.addEventListener("click", () => {

    const file = fileInput.files[0];

    if (!file) {
        alert("⚠️ Сначала выбери STL/OBJ/3MF модель!");
        return;
    }


    alert(
        "🔪 Начинаем нарезку...\n\n" +
        "Модель: " + file.name +
        "\n\nNovaSlicer v0.0.1"
    );

});
