import {
  Scene,
  PerspectiveCamera,
  Color,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  AxesHelper
} from 'three';

const createCube = (scene) => {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: 0x00a1cb });
  const cube = new Mesh(geometry, material);
  scene.add(cube);
  return cube;
};

const addAxis = (scene) => {
  scene.add(new AxesHelper(5));
};

const init = () => {
  const { innerWidth, innerHeight } = window;
  const scene = new Scene();
  scene.background = new Color(0xffffee);
  const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 1, 1000);
  camera.position.z = 5;
  const cube = createCube(scene);
  const renderer = new WebGLRenderer();
  renderer.setSize(innerWidth, innerHeight);
  return {
    renderer,
    scene,
    camera,
    cube
  };
};

export { init, createCube, addAxis };
