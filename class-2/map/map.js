mapboxgl.accessToken =
  "pk.eyJ1IjoiZHZycGNvbWFkIiwiYSI6ImNrczZlNDBkZzFnOG0ydm50bXR0dTJ4cGYifQ.VaJDo9EtH2JyzKm3cC0ypA";

const initMap = () => {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [-75.273611, 40.036894],
    zoom: 9.5,
  });

  return map;
};

const makeMap = () => {
  const map = initMap();

  var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: true,
    placeholder: "Type here to zoom to...",
    bbox: [-76.210785, 39.478606, -73.885803, 40.601963],
  });

  map.addControl(geocoder, "top-right");

  return map;
};

export default makeMap;
