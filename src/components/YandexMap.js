import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YandexMap = () => (
  <YMaps>
    <Map state={{ center: [55.121, 61.363], zoom: 14, controls: ['zoomControl', 'typeSelector'] }}
      width='100%' height='100%' instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }}>
      <Placemark
        geometry={{
          coordinates: [55.120993, 61.364150]
        }}
        properties={{
          hintContent: '<strong>Столярная мастерская</strong><br />ул. Блюхера 91',
          balloonContentHeader: 'Столярная мастерская',
          balloonContentBody: 'ул. Блюхера 91'
        }}
        options={{
          preset: 'islands#redDotIcon',
        }}
      />

    </Map>
  </YMaps>
);

export default YandexMap