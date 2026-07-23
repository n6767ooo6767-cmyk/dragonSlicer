// 🧊 NovaSlicer STL Loader v0.0.1

export function loadSTL(file, scene) {

    const loader = new THREE.STLLoader();


    const reader = new FileReader();


    reader.onload = function(event) {

        const geometry = loader.parse(
            event.target.result
        );


        geometry.computeVertexNormals();


        const material = new THREE.MeshStandardMaterial({

            color: 0x8b5cff,

            metalness: 0.2,

            roughness: 0.5

        });


        const model = new THREE.Mesh(
            geometry,
            material
        );


        // размер и положение
        model.scale.set(
            0.01,
            0.01,
            0.01
        );


        model.rotation.x = -Math.PI / 2;


        scene.add(model);


        console.log(
            "✅ STL loaded:",
            file.name
        );

    };


    reader.readAsArrayBuffer(file);

}
