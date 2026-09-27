function YandexMap() {
  return (
    <div className="map-wrapper">
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=30.3351%2C59.9343&z=11&l=map&pt=30.3351%2C59.9343"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
        style={{ borderRadius: '18px', display: 'block', border: 'none' }}
        title="Yandex Map"
      ></iframe>
    </div>
  )
}

export default YandexMap
