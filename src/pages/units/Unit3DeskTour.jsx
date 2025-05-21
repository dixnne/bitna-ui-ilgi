// src/pages/units/Unit3DeskTour.jsx
import React, { useState, useEffect } from 'react';
import { FaTimes, FaStickyNote } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

import desk from '../../assets/unit3/desk.jpeg';

// Component for the numbered, semi-transparent markers
const NumberedMarker = ({ number, isTarget, onClick, position, zIndex }) => {
  return (
    <div
      className={`absolute w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center 
                  bg-bitna-strong-pink bg-opacity-60 text-white text-lg md:text-xl font-bold 
                  cursor-pointer transform transition-all duration-200 hover:bg-opacity-80 hover:scale-110
                  ${isTarget ? 'animate-pulse ring-4 ring-bitna-lime-green ring-opacity-75' : ''}
                  ${position}`} // Position is now relative to its direct parent
      onClick={onClick}
      style={{ zIndex: zIndex }} // This zIndex is for the marker itself within its parent
      title={`Objeto ${number}`}
    >
      {number}
    </div>
  );
};

const initialDeskObjectsData = [
  { id: 'chair', name: '의자', sentence: '이것은 제 의자예요. 아주 편해요.', position: 'top-[75%] left-[50%]', zIndex: 5, closeupImage: 'https://placehold.co/200x150/E9D5FF/4A5568?text=Silla+Zoom' },
  { id: 'laptop', name: '노트북', sentence: '노트북이 책상 위에 있어요. 이걸로 공부해요.', position: 'top-[40%] left-[50%]', zIndex: 10, closeupImage: 'https://placehold.co/200x150/C6F6D5/2F855A?text=Laptop+Zoom' },
  { id: 'mug', name: '컵', sentence: '컵 안에 따뜻한 차가 있어요.', position: 'top-[45%] left-[70%]', zIndex: 15, closeupImage: 'https://placehold.co/200x150/FFC0CB/800080?text=Taza+Zoom' },
  { id: 'books', name: '책들', sentence: '한국어 책들이에요. 재미있어요!', position: 'top-[50%] left-[25%]', zIndex: 10, closeupImage: 'https://placehold.co/200x150/A7E6FF/0077CC?text=Libros+Zoom' },
  { id: 'pencils', name: '연필꽂이', sentence: '펜들이 연필꽂이 안에 있어요.', position: 'top-[35%] left-[30%]', zIndex: 15, closeupImage: 'https://placehold.co/200x150/FEEBC8/975A16?text=Lapices+Zoom' },
  { id: 'lamp', name: '스탠드', sentence: '밤에는 스탠드를 켜요.', position: 'top-[20%] right-[20%]', zIndex: 10, closeupImage: 'https://placehold.co/200x150/F9E79F/B7791F?text=Lampara+Zoom' },
  { id: 'plant', name: '화분', sentence: '작은 화분이에요. 귀여워요!', position: 'top-[60%] left-[15%]', zIndex: 10, closeupImage: 'https://placehold.co/200x150/9AE6B4/276749?text=Planta+Zoom' },
  { id: 'phone', name: '핸드폰', sentence: '제 핸드폰이에요. 항상 필요해요.', position: 'top-[65%] right-[25%]', zIndex: 15, closeupImage: 'https://placehold.co/200x150/CBD5E0/4A5568?text=Celular+Zoom' },
];

const narrativeStepsData = [
  { stepNumber: 1, targetObjectId: 'chair', narrativeText: '제 책상에 오신 것을 환영해요! 먼저, 의자에 앉아 볼까요? (1번 표시를 클릭!)' },
  { stepNumber: 2, targetObjectId: 'laptop', narrativeText: '좋아요! 이제 노트북을 켤 시간이에요. (2번 표시를 클릭!)' },
  { stepNumber: 3, targetObjectId: 'books', narrativeText: '한국어 공부를 해야 해요! 책을 찾아보세요. (3번 표시를 클릭!)' },
  { stepNumber: 4, targetObjectId: 'pencils', narrativeText: '필기도구가 필요해요. 연필꽂이를 클릭하세요! (4번 표시를 클릭!)' },
  { stepNumber: 5, targetObjectId: 'mug', narrativeText: '목이 말라요. 컵에 뭐가 있을까요? (5번 표시를 클릭!)' },
  { stepNumber: 6, targetObjectId: 'lamp', narrativeText: '조금 어두워요. 스탠드를 켤까요? (6번 표시를 클릭!)' },
  { stepNumber: 7, targetObjectId: 'plant', narrativeText: '제 작은 화분도 한번 보세요! (7번 표시를 클릭!)' },
  { stepNumber: 8, targetObjectId: 'phone', narrativeText: '마지막으로 핸드폰을 확인해 볼까요? (8번 표시를 클릭!)' },
  { stepNumber: 9, targetObjectId: null, narrativeText: '책상 준비 완료! 오늘도 빛나는 하루 보내세요! ✨ (책상 투어 끝!)' },
];


function Unit3DeskTour() {
  const [activeBubbleObjectId, setActiveBubbleObjectId] = useState(null);
  const [currentNarrativeStepIndex, setCurrentNarrativeStepIndex] = useState(0);
  const [mainNarrativeDisplay, setMainNarrativeDisplay] = useState(narrativeStepsData[0].narrativeText);
  const [narrativeKey, setNarrativeKey] = useState(0); 

  useEffect(() => {
    setNarrativeKey(prevKey => prevKey + 1);
  }, [mainNarrativeDisplay]);

  const handleObjectClick = (clickedObjectId) => {
    setActiveBubbleObjectId(clickedObjectId); 
  };
  
  const handlePopupClose = () => {
    const closedBubbleObjectId = activeBubbleObjectId; 
    setActiveBubbleObjectId(null); 

    const currentStepDetails = narrativeStepsData[currentNarrativeStepIndex];

    if (currentStepDetails && closedBubbleObjectId === currentStepDetails.targetObjectId) {
      const nextStepIndex = currentNarrativeStepIndex + 1;
      if (nextStepIndex < narrativeStepsData.length) {
        setCurrentNarrativeStepIndex(nextStepIndex);
        setMainNarrativeDisplay(narrativeStepsData[nextStepIndex].narrativeText); 
      } else {
         setCurrentNarrativeStepIndex(narrativeStepsData.length - 1);
         setMainNarrativeDisplay(narrativeStepsData[narrativeStepsData.length - 1].narrativeText); 
      }
    }
  };

  const getObjectData = (objectId) => {
    return initialDeskObjectsData.find(obj => obj.id === objectId);
  };
  
  const currentTargetObjectId = narrativeStepsData[currentNarrativeStepIndex]?.targetObjectId;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-bitna-light-pink to-purple-200 py-8 px-4 pt-10 flex flex-col items-center">
      
      <div className="w-full max-w-5xl lg:max-w-6xl flex flex-col lg:flex-row lg:space-x-6 items-start">
        {/* Sidebar: Introductory Post-it, Title, Subtitle & Narrative Message Box */}
        <div className="w-full lg:w-[300px] xl:w-[350px] flex-shrink-0 order-first lg:order-none mb-8 lg:mb-0 flex flex-col space-y-6">

          {/* Page Title and Subtitle (Moved to Sidebar) */}
          <div className="text-center bg-white bg-opacity-50 p-4 rounded-xl shadow-md border border-gray-200">
            <h1 className="font-single-day text-3xl md:text-4xl text-bitna-strong-pink mb-1 flex items-center justify-center">
              <IoSparkles className="mr-2 text-yellow-400" />
              빛나의 책상 투어!
              <IoSparkles className="ml-2 text-yellow-400" />
            </h1>
            <p className="text-md md:text-lg text-bitna-muted-pink">
              내 책상 위 물건들을 클릭하며 이야기를 따라가 보세요!
            </p>
          </div>

          {/* Post-it */}
          <div className="bg-bitna-lime-green bg-opacity-80 p-5 rounded-xl shadow-xl border-2 border-green-600 transform lg:-rotate-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:rotate-0">
            <h2 className="font-single-day text-2xl md:text-3xl text-green-800 mb-3 flex items-center">
              <FaStickyNote className="mr-3 text-green-700" />
              책상 탐험 시간!
            </h2>
            <p className="text-sm md:text-base text-green-900 opacity-90">
              제 책상에 오신 것을 환영해요! 😊 여기에는 제가 매일 사용하는 여러 물건들이 있어요.
              아래 <span className="font-bold text-green-700">안내 메시지</span>를 따라 물건들을 하나씩 클릭해보세요.
              각 물건을 클릭하면 한국어로 그 물건에 대한 재미있는 설명이 나올 거예요!
            </p>
          </div>

          {/* Narrative Message Box */}
          <div 
            key={narrativeKey} 
            className={`w-full p-4 rounded-lg shadow-md text-center 
                        bg-bitna-muted-pink text-white border border-bitna-strong-pink
                        ${narrativeKey > 0 ? 'animate-pulse-once' : ''}`}
          >
            <p className="font-semibold text-md">{mainNarrativeDisplay}</p>
          </div>
        </div>

        {/* Main Content Area (Desk Only) */}
        <div className="w-full flex-1 flex flex-col items-center justify-center lg:pt-0">
          {/* Desk Area with Placeholder for your actual desk photo */}
          <div 
            className="w-full max-w-2xl md:max-w-3xl aspect-[4/3] bg-gray-300 rounded-2xl shadow-2xl relative p-2 border-4 border-gray-400 group" 
          >
            <img 
              src={desk}
              alt="Mi escritorio"
              className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
            />

            {initialDeskObjectsData.map((obj) => {
              const narrativeInfo = narrativeStepsData.find(step => step.targetObjectId === obj.id);
              const stepNumber = narrativeInfo ? narrativeInfo.stepNumber : null;
              if (!stepNumber) return null; 

              // Determine if this object's bubble is active to apply a higher z-index to its container
              const isActiveContainer = activeBubbleObjectId === obj.id;

              return (
                // Each marker's PARENT div. This will get a higher z-index when its bubble is active.
                <div 
                  key={obj.id} 
                  className={`absolute ${obj.position}`} // Position classes for the container
                  style={{ zIndex: isActiveContainer ? 99 : obj.zIndex }} // Higher z-index for active container
                >
                  <NumberedMarker
                    number={stepNumber}
                    isTarget={obj.id === currentTargetObjectId}
                    onClick={() => handleObjectClick(obj.id)}
                    position="transform -translate-x-1/2 -translate-y-1/2" // Centers marker within this parent
                    zIndex={1} // zIndex of marker relative to this parent
                  />
                  
                  {activeBubbleObjectId === obj.id && (() => {
                    const objectData = getObjectData(activeBubbleObjectId);
                    if (!objectData) return null;
                    return (
                      <div 
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 -translate-y-1 w-64 p-3 bg-white rounded-lg shadow-xl border border-gray-300 flex flex-col items-center"
                        // The popup itself has a z-index relative to its parent (the div above).
                        // A high value like z-50 here is good practice within this new stacking context.
                        style={{ zIndex: 50 }} 
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button 
                          onClick={handlePopupClose} 
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-700 z-10" // z-10 to be above the image in the bubble
                          aria-label="Cerrar"
                        >
                          <FaTimes />
                        </button>
                        <img 
                          src={objectData.closeupImage} 
                          alt={`${objectData.name} close-up`}
                          className="w-full h-40 object-contain rounded-md mb-2 border border-gray-200"
                          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x150/CCCCCC/FFFFFF?text=Error+Imagen"; }}
                        />
                        <p className="text-sm text-gray-700 text-center">{objectData.sentence}</p>
                      </div>
                    );
                  })()}
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-center text-sm text-bitna-muted-pink">
            이야기를 따라 물건을 클릭하거나 자유롭게 탐색해보세요!
          </p>
        </div>
      </div>
      {/* CSS for the pulse-once animation */}
      <style jsx global>{`
        @keyframes pulseOnce {
          0%, 100% { transform: scale(1); opacity: 1; }
          25% { transform: scale(1.03); opacity: 0.8; }
          50% { transform: scale(1); opacity: 1; }
          75% { transform: scale(1.03); opacity: 0.8; }
        }
        .animate-pulse-once {
          animation: pulseOnce 0.8s ease-in-out 2; // Play twice
        }
      `}</style>
    </div>
  );
}

export default Unit3DeskTour;
