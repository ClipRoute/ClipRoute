import { useState } from 'react';
import Header from '../components/common/Header';
import { CourseInputCard } from '../components/CourseInputCard';
import DestinationModal from '../components/TravelDateSelector/DestinationModal';
import bellicon from "../assets/icons/bell-icon.svg";


interface Destination {
  regionId: number;
  regionName: string;
  imageUrl: string;
}

const HomePage = () => {
  const [isDestinationModalOpen, setIsDestinationModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedDays, setSelectedDays] = useState<number | null>(null);

 
  return (
    <div className="bg-white min-h-screen">
      <Header
        left={<span className='px-[10px] py-2 text-xl font-semibold text-[#42BCEB]'>Cliproute</span>}
        right={<img src={bellicon} alt="notifications" className='w-[24px] h-[24px]'/>}
      />

      <main className='px-[20px] pt-6'>
        <h1 className='text-[20px] font-bold pb-[15px]'>
          대표 여행 유튜버들의 국내 여행 코스를 한 눈에!
        </h1>

        <CourseInputCard 
          region={selectedDestination} 
          travelDays={selectedDays}
          onLocationClick={() => setIsDestinationModalOpen(true)}
          onDateClick={() => setSelectedDays(3)} 
        />

        <div className="flex justify-end mt-4">
          <button 
          className="px-5 py-3 rounded-xl font-bold bg-[#42BCEB] text-white active:opacity-80 transition-all"
          onClick={() => {
            console.log("코스 생성 버튼 클릭됨");
          }}>
            코스 생성하기
          </button>
        </div>

        <DestinationModal 
          isOpen={isDestinationModalOpen}
          onClose={() => setIsDestinationModalOpen(false)}
          onSelect={(dest) => setSelectedDestination(dest)} 
        />

        <div className="mt-12 pt-8 border-t border-gray-100">
           <h2 className="font-bold text-[18px]">대표 지역 / 인기 영상 속 코스</h2>
           <p className="text-[14px] text-gray-400 mt-1">현재 가장 인기 있는 대표 지역은 제주, 부산입니다.</p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;