import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import { STLLoader } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/STLLoader.js";

export async function loadSTL(file, scene) {

    const loader = new STLLoader();

    const buffer = await file.arrayBuffer();

    const geometry = loader.parse(buffer);

    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
        color: 0x8b5cff,
        metalness: 0.15,
        roughness: 0.6
    });

    const mesh = new THREE.Mesh(
        geometry,
        material
    );

    // Центрируем модель
    geometry.computeBoundingBox();

    const box = geometry.boundingBox;

    const center = new THREE.Vector3();

    box.getCenter(center);

    mesh.position.sub(center);

    scene.add(mesh);

    console.log("✅ STL loaded:", file.name);

    return mesh;
}
