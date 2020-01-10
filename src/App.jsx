import React from 'react';
import { init } from './utils/utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ADD: 0.12,
      renderer: null,
      scene: null,
      camera: null,
      cube: null
    };
  }

  componentDidMount = () => {
    const start = init();
    const { viewer } = this.refs;
    viewer.appendChild(start.renderer.domElement);
    const { renderer, scene, camera, cube } = start;
    this.setState({
      renderer,
      scene,
      camera,
      cube
    });
    this.mainLoop();
  };

  mainLoop = () => {
    const { ADD, cube, scene, camera, renderer } = this.state;
    if (scene !== null && cube !== null && camera !== null && renderer !== null) {
      cube.rotation.y -= ADD;
      if (cube.position.y <= -3 || cube.position.y >= 3) {
        this.setState({
          ADD: ADD * -1
        });
      }
      renderer.render(scene, camera);
    }
    requestAnimationFrame(this.mainLoop);
  };

  body = () => <div id="viewer"></div>;

  render() {
    return this.body();
  }
}

export default App;
