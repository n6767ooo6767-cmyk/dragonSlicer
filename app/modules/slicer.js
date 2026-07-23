// 🔪 NovaSlicer Slicer v0.0.1


export function sliceModel(model, layerHeight = 0.2) {

    console.log(
        "Starting slicing:",
        model
    );


    const layers = [];


    // Пока тестовая генерация слоёв
    const height = 10;


    const layerCount = Math.ceil(
        height / layerHeight
    );


    for (let i = 0; i < layerCount; i++) {

        layers.push({

            number: i + 1,

            height:
                i * layerHeight,

            paths: []

        });

    }


    console.log(
        "Layers created:",
        layers.length
    );


    return layers;

}
