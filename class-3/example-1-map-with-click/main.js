// from: https://docs.mapbox.com/help/tutorials/add-points-pt-3/

mapboxgl.accessToken =
  "pk.eyJ1IjoiZHZycGNvbWFkIiwiYSI6ImNrczZlNDBkZzFnOG0ydm50bXR0dTJ4cGYifQ.VaJDo9EtH2JyzKm3cC0ypA";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/examples/cjgiiz9ck002j2ss5zur1vjji",
  center: [-87.661557, 41.893748],
  zoom: 10.7,
});

map.on("click", (event) => {
  const features = map.queryRenderedFeatures(event.point, {
    layers: ["chicago-parks"],
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];

  const popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    )
    .addTo(map);
});
