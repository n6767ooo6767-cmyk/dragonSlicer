import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

import { OrbitControls } from 
"https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js";


export function createViewer() {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );


    const renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    document.body.appendChild(
        renderer.domElement
    );


    const controls = new OrbitControls(
        camera,
        renderer.domElement
    );


    camera.position.z = 5;


    function animate() {

        requestAnimationFrame(animate);

        controls.update();

        renderer.render(
            scene,
            camera
        );

    }

    animate();


    return {
        scene,
        camera,
        renderer
    };
}

// 🚀 NovaSlicer 3D Viewer v0.0.1

export function createViewer() {

    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0x101018);


    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );


    const renderer = new THREE.WebGLRenderer({
        antialias: true
    });


    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );


    document.body.appendChild(
        renderer.domElement
    );


    // Свет
    const light = new THREE.HemisphereLight(
        0xffffff,
        0x444444,
        2
    );

    scene.add(light);


    // Камера
    camera.position.set(
        0,
        0,
        5
    );


    // Вращение мышью (простая версия)
    let rotation = 0;


    window.addEventListener(
        "mousemove",
        (event) => {

            rotation =
                event.clientX /
                window.innerWidth *
                Math.PI * 2;

        }
    );


    function animate() {

        requestAnimationFrame(
            animate
        );


        scene.rotation.y = rotation;


        renderer.render(
            scene,
            camera
        );

    }


    animate();


    return {
        scene,
        camera,
        renderer
    };
}
