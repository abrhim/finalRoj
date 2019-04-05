import React from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';


mapboxgl.accessToken = 'pk.eyJ1IjoiYWJyaGltIiwiYSI6ImNqdTNxNHM2NDBwdWUzeXFnNjVwMnZieW4ifQ.02GZQRKI5JQfQazLQhINSw';

class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11'
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
        position: 'absolute',
        top:100,
        bottom:0,
      width: '100%'
    };
    return <div style={style} ref={el => this.mapContainer = el} />;
  }
}

export default Map;
// ReactDOM.render(<Map />, document.getElementById('app'));