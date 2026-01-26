import MapComponent from '../components/GoolgeMap';

const CoursePage = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {/* 이제 지도가 화면 가득 뜰 거예요! */}
      <MapComponent />
      
      {/* 여기에 나중에 헤더랑 바텀시트를 올리면 됩니다 */}
    </div>
  );
};

export default CoursePage;