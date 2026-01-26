import mappinicon from '../assets/icons/mappin-icon.svg';
import calendaricon from '../assets/icons/calendar-icon.svg';


interface RegionData {
  regionId: number;
  regionName: string;
  imageUrl: string;
}

interface Props {
  region: RegionData | null;   
  travelDays: number | null;   
  onLocationClick: () => void;
  onDateClick: () => void;
}

export const CourseInputCard = ({ region, travelDays, onLocationClick, onDateClick }: Props) => {
  return (
    <div className="border-[1px] border-[#42BCEB] rounded-2xl py-1 px-[15px] bg-white">
      
      {/*여행지 선택*/}
      <div 
        onClick={onLocationClick}
        className="flex items-center gap-3 py-4 border-b cursor-pointer"
      >
        <img src={mappinicon} alt="location" className="w-6 h-6" />
        <span className="text-[#999] text-[14px]">
          여행지를 선택해 주세요
        </span>
      </div>

      {/*여행 날짜 선택*/}
      <div 
        onClick={onDateClick}
        className="flex items-center gap-3 py-4 cursor-pointer"
      >
        <img src={calendaricon} alt="calendar" className="w-6 h-6" />
        <span className="text-[#999] text-[14px]">
          여행지 날짜를 선택해주세요
        </span>
      </div>

    </div>
  );
};