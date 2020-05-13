function mapInit() {
  var map = new ymaps.Map(document.querySelector('.map'), {
    center: [34.871955, -111.756269],
    zoom: 9,
    controls: [],
  });

  var placemark = new ymaps.Placemark(map.getCenter(), {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon-map-marker.svg',
    iconImageSize: [27, 27],
    iconImageOffset: [-13, -13]
  });

  map.geoObjects.add(placemark);
}

ymaps.ready(mapInit);
