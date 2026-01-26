import { APIProvider, Map } from '@vis.gl/react-google-maps';

const MapComponent = () => {
  // 시안에 있던 해운대 근처 좌표로 설정해둘게요!
  const defaultLocation = { lat: 35.1587, lng: 129.1604 };

  return (
    // 1. APIProvider로 감싸서 API를 로드합니다.
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div style={{ width: '100%', height: '100%' }}>
        <Map
          defaultCenter={defaultLocation}
          defaultZoom={14}
          gestureHandling={'greedy'}
          disableDefaultUI={true} // 디자인 시안처럼 깔끔하게 보이게 설정
          mapId="DEMO_MAP_ID" // 커스텀 마커(숫자 핀)를 쓰려면 나중에 실제 Map ID가 필요해요!
        />
      </div>
    </APIProvider>
  );
};

export default MapComponent;