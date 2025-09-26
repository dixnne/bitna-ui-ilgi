// src/pages/units/Unit8TimePlanner.jsx
import React, { useState } from 'react';
import { 
  FaCalendarAlt, FaClock, FaBirthdayCake, FaPlaneDeparture, FaBook, 
  FaFilm, FaCoffee, FaUsers, FaTimes, FaRegCheckCircle, FaRegCircle,
  FaPalette, FaShoppingCart, FaBookReader // Asegúrate que todos los iconos usados estén aquí
} from 'react-icons/fa'; 
import { IoSparkles, IoMusicalNotes } from 'react-icons/io5';

// --- DATOS DE EJEMPLO ---
const weeklyScheduleData = {
  monday: [
    { time: "오전 아홉 시", activity: "한국어 수업 📚", icon: FaBook, details: "월요일 오전 아홉 시에 대학교에서 한국어 수업이 있습니다. 새로운 문법을 배울 거예요!" },
    { time: "오후 한 시", activity: "친구와 점심 약속 ☕", icon: FaCoffee, details: "오후 한 시에 아렐리하고 학교 근처 식당에서 맛있는 점심을 먹습니다." },
    { time: "오후 세 시", activity: "도서관에서 숙제하기", icon: FaBook, details: "점심 식사 후에 도서관에 가서 한국어 숙제를 할 겁니다." },
  ],
  tuesday: [
    { time: "오전 열 시", activity: "줌바 수업 💃", icon: IoSparkles, details: "화요일 오전 열 시에 줌바 수업에 갑니다. 신나는 음악에 맞춰 춤을 춥니다!" },
    { time: "오후 네 시", activity: "팀 프로젝트 회의", icon: FaUsers, details: "화요일 오후 네 시에 팀 프로젝트 회의가 있습니다. 온라인으로 만납니다." }
  ],
  wednesday: [
    { time: "저녁 일곱 시", activity: "K-드라마 보는 날! 🎬", icon: FaFilm, details: "수요일 저녁 일곱 시에 새로 시작한 K-드라마를 볼 겁니다. 정말 기대돼요!" }
  ],
  thursday: [
    { time: "오후 두 시", activity: "카페에서 한국어 공부 📖", icon: FaCoffee, details: "목요일 오후에는 조용한 카페에 가서 한국어 단어를 외울 거예요."}
  ],
  friday: [
    { time: "저녁 여덟 시", activity: "친구들과 저녁 식사 🍕", icon: FaUsers, details: "금요일 저녁 여덟 시에 시내에서 친구들을 만납니다. 맛있는 피자를 먹을 거예요!" }
  ],
  saturday: [
    { time: "오전 열한 시", activity: "공원에서 그림 그리기 🎨", icon: FaPalette, details: "토요일 오전에는 날씨가 좋으면 공원에 가서 그림을 그릴 겁니다." },
    { time: "오후 세 시", activity: "쇼핑!", icon: FaShoppingCart, details: "오후에는 새 옷을 사러 쇼핑몰에 갈 거예요."}
  ],
  sunday: [
    { time: "하루 종일", activity: "휴식 그리고 일기 쓰기 ✍️", icon: FaBookReader, details: "일요일은 쉬는 날! 밀린 일기도 쓰고, 다음 주 계획도 세울 거예요."}
  ],
};

// --- AÑADE IMAGEN A SPECIAL EVENTS DATA ---
const specialEventsData = [
  { 
    date: "2025-10-03", // Octubre 3, 2025
    eventName: "성태 씨 생일 파티! 🎂", 
    time: "저녁 여섯 시", 
    icon: FaBirthdayCake, 
    details: "시월 삼일은 성태 씨 생일입니다! 저녁 여섯 시에 친구 집에서 생일 파티를 합니다. 맛있는 케이크를 먹고 선물을 줄 거예요!",
    image: "https://placehold.co/400x300/FFC0CB/333?text=생일+파티" // REEMPLAZA
  },
  { 
    date: "2025-06-20", // Junio 20, 2025
    eventName: "칠레 여행 출발! ✈️", 
    time: "아침 아홉 시", 
    icon: FaPlaneDeparture, 
    details: "유월 이십일 금요일에 칠레에 갑니다! 아침 아홉 시 비행기입니다. 정말 기대됩니다! 산티아고에서 많은 것을 보고 배울 거예요.",
    image: "https://placehold.co/400x300/87CEEB/333?text=칠레+여행" // REEMPLAZA
  },
  { 
    date: "2025-07-15", // Julio 15, 2025
    eventName: "K-Pop 콘서트!", 
    icon: IoMusicalNotes, 
    time: "저녁 일곱 시 삼십분", 
    details: "칠월 십오일에 좋아하는 그룹의 콘서트에 갑니다! 저녁 일곱 시 삼십분에 시작합니다. 응원봉도 준비했어요!",
    image: "https://placehold.co/400x300/DDA0DD/333?text=K-Pop+콘서트" // REEMPLAZA
  }
];

const daysOfWeekKorean = {
  monday: "월요일",
  tuesday: "화요일",
  wednesday: "수요일",
  thursday: "목요일",
  friday: "금요일",
  saturday: "토요일",
  sunday: "일요일",
};

/**
 * A modal component that displays the details of a selected calendar event.
 * It shows the event's title, time, details, and an optional image.
 *
 * @param {object} props - The component props.
 * @param {object} props.event - The event data object to display.
 * @param {Function} props.onClose - Function to call to close the modal.
 * @param {string} [props.dayName] - The name of the day (e.g., "Monday") for weekly events.
 * @param {string} [props.dateString] - The formatted date string for monthly events.
 * @returns {JSX.Element|null} The rendered event modal or null if no event is selected.
 */
const EventModal = ({ event, onClose, dayName, dateString }) => {
  if (!event) return null;
  const displayTitle = event.activity || event.eventName;
  const displayTime = event.time;
  const displayDetails = event.details;
  const displayImage = event.image;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-bitna-light-pink via-white to-bitna-lime-green p-6 rounded-2xl shadow-2xl w-full max-w-lg relative transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white text-bitna-strong-pink rounded-full p-1.5 shadow-lg hover:bg-gray-200 transition-colors z-10"
          aria-label="Close modal"
        >
          <FaTimes size={18} />
        </button>
        <div className="text-center mb-4 pt-4">
          {event.icon && React.createElement(event.icon, { className: "text-5xl text-bitna-strong-pink mx-auto mb-3" })}
          <h3 className="font-single-day text-3xl text-bitna-strong-pink">{displayTitle}</h3>
          {dayName && <p className="text-sm text-bitna-muted-pink">{dayName}</p>}
          {dateString && <p className="text-sm text-bitna-muted-pink">{dateString}</p>}
          <p className="text-lg font-semibold text-gray-700 mt-1">{displayTime}</p>
        </div>
        
        {displayImage && (
          <img 
            src={displayImage} 
            alt={displayTitle}
            className="w-full h-48 object-cover rounded-xl shadow-lg mb-4 border-2 border-white"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/CCCCCC/FFFFFF?text=이벤트+이미지"; }}
          />
        )}

        <div className="bg-white bg-opacity-70 p-4 rounded-lg shadow-inner max-h-40 overflow-y-auto">
          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{displayDetails}</p>
        </div>
      </div>
    </div>
  );
};


/**
 * The eighth unit page of the diary, designed as an interactive time planner.
 * It allows users to toggle between a weekly schedule view and a monthly calendar view.
 * Users can click on events to see more details in a modal window.
 *
 * @returns {JSX.Element} The rendered time planner page.
 */
function Unit8TimePlanner() {
  const [currentView, setCurrentView] = useState('weekly');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDayName, setSelectedDayName] = useState('');
  const [selectedDateString, setSelectedDateString] = useState('');

  // --- FIJAR EL CALENDARIO A OCTUBRE 2025 PARA DEMOSTRACIÓN ---
  const displayYear = 2025;
  const displayMonth = 9; // 0-11, so 9 is October

  const daysInDisplayMonth = new Date(displayYear, displayMonth + 1, 0).getDate();
  const firstDayOfDisplayMonth = new Date(displayYear, displayMonth, 1).getDay(); 

  const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  // Nota: Si quieres que el título del mes en español también aparezca, puedes añadirlo aquí:
  // const monthNamesWithSpanish = ["1월 (Enero)", "2월 (Febrero)", ..., "10월 (Octubre)", ...];


  const handleEventClick = (eventData, dayName = '', dateString = '') => {
    setSelectedEvent(eventData);
    setSelectedDayName(dayName);
    setSelectedDateString(dateString);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const renderWeeklyView = () => (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {Object.entries(daysOfWeekKorean).map(([dayKey, dayName], dayIndex) => (
        <div 
          key={dayKey} 
          className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-bitna-light-pink transform hover:shadow-2xl transition-shadow duration-300"
        >
          <div className={`p-3 flex items-center justify-between ${dayIndex % 2 === 0 ? 'bg-bitna-muted-pink' : 'bg-bitna-lime-green'} bg-opacity-80`}>
            <h3 className={`font-single-day text-3xl ${dayIndex % 2 === 0 ? 'text-white' : 'text-green-800'}`}>{dayName}</h3>
            <IoSparkles className={`text-2xl ${dayIndex % 2 === 0 ? 'text-pink-100' : 'text-yellow-400'}`} />
          </div>
          <div className="p-4 md:p-6">
            {weeklyScheduleData[dayKey] && weeklyScheduleData[dayKey].length > 0 ? (
              <ul className="space-y-4">
                {weeklyScheduleData[dayKey].map((event, index) => (
                  <li 
                    key={index} 
                    onClick={() => handleEventClick(event, dayName)}
                    className="flex items-start space-x-3 p-3 bg-bitna-light-pink bg-opacity-50 rounded-lg shadow-sm hover:bg-pink-200 cursor-pointer transition-colors group"
                  >
                    <div className="pt-1">
                      {event.icon ? React.createElement(event.icon, {className: "text-xl text-bitna-strong-pink group-hover:text-pink-700"}) : <FaRegCircle className="text-xl text-bitna-muted-pink"/>}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 group-hover:text-bitna-strong-pink">{event.time}</p>
                      <p className="text-sm text-gray-600 group-hover:text-gray-800">{event.activity}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-400 text-center italic py-4">오늘은 특별한 계획이 없습니다! (No special plans today!)</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderMonthlyView = () => {
    const calendarDays = [];
    const dayOffset = (firstDayOfDisplayMonth === 0 ? 6 : firstDayOfDisplayMonth -1); 
    for (let i = 0; i < dayOffset ; i++) { 
        calendarDays.push(<div key={`empty-${i}`} className="bg-gray-50 bg-opacity-50 border border-gray-200 rounded-lg p-1 h-24 md:h-28"></div>);
    }

    for (let day = 1; day <= daysInDisplayMonth; day++) {
      const dateStr = `${displayYear}-${String(displayMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const eventsOnThisDay = specialEventsData.filter(event => event.date === dateStr);
      calendarDays.push(
        <div 
          key={day} 
          className={`p-2 h-24 md:h-28 rounded-lg text-xs md:text-sm relative transition-all duration-200 group
                      ${eventsOnThisDay.length > 0 ? 'bg-bitna-lime-green bg-opacity-40 hover:bg-opacity-60 cursor-pointer shadow-md' : 'bg-white hover:bg-gray-50 border border-gray-200'}`}
          onClick={eventsOnThisDay.length > 0 ? () => handleEventClick(eventsOnThisDay[0], '', `${monthNames[displayMonth]} ${day}일`) : undefined}
        >
          <span className={`font-bold ${eventsOnThisDay.length > 0 ? 'text-green-700' : 'text-gray-700'}`}>{day}</span>
          {eventsOnThisDay.length > 0 && (
            <div className="absolute bottom-1 right-1 md:bottom-1.5 md:right-1.5 flex flex-col items-end space-y-0.5">
              {eventsOnThisDay.slice(0, 2).map(event => ( 
                <div key={event.eventName} className={`p-1 rounded-full shadow-sm ${eventsOnThisDay.length > 0 ? 'bg-white bg-opacity-70' : ''}`}>
                    {event.icon && React.createElement(event.icon, {className: "text-bitna-strong-pink text-sm md:text-md"})} 
                </div>
              ))}
            </div>
          )}
           {eventsOnThisDay.length > 2 && (
             <div className="absolute top-1 right-1 text-xs text-bitna-strong-pink font-bold">+{eventsOnThisDay.length - 2}</div>
           )}
        </div>
      );
    }

    return (
      <div className="bg-white bg-opacity-80 p-4 md:p-6 rounded-2xl shadow-xl border-2 border-bitna-light-pink">
        <h3 className="font-single-day text-4xl text-bitna-strong-pink mb-6 text-center">{monthNames[displayMonth]} {displayYear}</h3>
        <div className="grid grid-cols-7 gap-1 md:gap-2 text-center text-sm font-single-day text-bitna-muted-pink mb-2">
          {["월", "화", "수", "목", "금", "토", "일"].map(d => <div key={d} className="p-1">{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1 md:gap-2">
          {calendarDays}
        </div>
      </div>
    );
  };


  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-200 py-8 px-4 pt-16 md:pt-20">
      <div className="container mx-auto">
        <header className="text-center mb-10 md:mb-12">
          <h1 className="font-single-day text-4xl md:text-6xl text-bitna-strong-pink mb-2 flex items-center justify-center">
            <FaCalendarAlt className="mr-3 text-bitna-muted-pink text-3xl md:text-5xl" />
            빛나의 마법 시간표 ✨
            <IoSparkles className="ml-3 text-yellow-400 text-3xl md:text-5xl animate-pulse" />
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            나의 일주일과 특별한 날들을 한국어로 계획해 봐요! (Let's plan my week and special days in Korean!)
          </p>
        </header>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setCurrentView('weekly')}
            className={`py-2 px-6 rounded-full font-semibold transition-all duration-300
                        ${currentView === 'weekly' ? 'bg-bitna-strong-pink text-white shadow-lg scale-105' : 'bg-white text-bitna-muted-pink hover:bg-pink-100'}`}
          >
            주간 보기 (Weekly)
          </button>
          <button
            onClick={() => setCurrentView('monthly')}
            className={`py-2 px-6 rounded-full font-semibold transition-all duration-300
                        ${currentView === 'monthly' ? 'bg-bitna-strong-pink text-white shadow-lg scale-105' : 'bg-white text-bitna-muted-pink hover:bg-pink-100'}`}
          >
            월간 보기 (Monthly)
          </button>
        </div>

        {currentView === 'weekly' ? renderWeeklyView() : renderMonthlyView()}

      </div>
      <EventModal event={selectedEvent} onClose={handleCloseModal} dayName={selectedDayName} dateString={selectedDateString} />
    </div>
  );
}

export default Unit8TimePlanner;
