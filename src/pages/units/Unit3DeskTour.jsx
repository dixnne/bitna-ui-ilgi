// src/pages/units/Unit3DeskTour.jsx
import React, { useState, useEffect } from 'react';
import { FaTimes, FaStickyNote } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

import desk from '../../assets/unit3/desk.jpg';
import bag from '../../assets/unit3/bag.jpg';
import americano from '../../assets/unit3/americano.jpg';
import bambam from '../../assets/unit3/bambam.jpg';
import bts from '../../assets/unit3/bts.jpg';
import highlighters from '../../assets/unit3/highlighters.jpg';
import laptop from '../../assets/unit3/laptop.jpg';
import pens from '../../assets/unit3/pens.jpg';
import turtle from '../../assets/unit3/turtle.jpg';

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
  { id: 'bag', name: '가방', sentence: '가방은 정말 귀여워요. 나폴리 아이스크림 맛이에요.', position: 'top-[90%] left-[65%]', zIndex: 5, closeupImage: bag },
  { id: 'laptop', name: '노트북', sentence: '노트북에는 스티커가 많이 있어요.', position: 'top-[83%] left-[24%]', zIndex: 10, closeupImage: laptop },
  { id: 'americano', name: '아이스 아메리카노가', sentence: '아이스 아메리카노는 제가 가장 좋아해요.', position: 'top-[82%] left-[38.5%]', zIndex: 15, closeupImage: americano },
  { id: 'bambam', name: '뱀뱀', sentence: '뱀뱀은 정말 잘생겼어요!', position: 'top-[63%] left-[33%]', zIndex: 10, closeupImage: bambam },
  { id: 'bts', name: '방탄소년단은', sentence: '방탄소년단 음악을 좋아해요.', position: 'top-[65%] left-[21%]', zIndex: 15, closeupImage: bts },
  { id: 'highlighters', name: '스탠드', sentence: '형광펜 색상이 귀여워요.', position: 'top-[15%] right-[67%]', zIndex: 10, closeupImage: highlighters },
  { id: 'pens', name: '화분', sentence: '이 펜들을 많이 사용해요!', position: 'top-[75%] left-[20%]', zIndex: 10, closeupImage: pens },
  { id: 'turtle', name: '핸드폰', sentence: '이 라면 거북이를 만들었어요.', position: 'top-[50%] right-[10%]', zIndex: 15, closeupImage: turtle },
];

const narrativeStepsData = [
  { stepNumber: 1, targetObjectId: 'bag', narrativeText: '제 가방이 의자 위에 있어요 (1번)' },
  { stepNumber: 2, targetObjectId: 'laptop', narrativeText: '제 노트북은 노란 곰 앞에 있어요. (2번)' },
  { stepNumber: 3, targetObjectId: 'americano', narrativeText: '제 아이스 아메리카노가 마이크 앞에 있어요. (3번)' },
  { stepNumber: 4, targetObjectId: 'bambam', narrativeText: '제 뱀뱀 인형은 펜 용기 안에 있어요.(4번)' },
  { stepNumber: 5, targetObjectId: 'bts', narrativeText: '방탄소년단은 제 한국어 노트 왼쪽에 있어요(5번)' },
  { stepNumber: 6, targetObjectId: 'highlighters', narrativeText: '제 형광펜은 Butter 앨범 오른쪽에 있어요(6번)' },
  { stepNumber: 7, targetObjectId: 'pens', narrativeText: '제 펜은 방탄소년단 앞에  있어요(7번)' },
  { stepNumber: 8, targetObjectId: 'turtle', narrativeText: '제 라면 거북이가 PC 위에 있어요. (8번)' },
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
              내 책상 위의 객체들을 클릭하세요!
            </p>
          </div>

          {/* Post-it */}
          <div className="bg-bitna-lime-green bg-opacity-80 p-5 rounded-xl shadow-xl border-2 border-green-600 transform lg:-rotate-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:rotate-0">
            <h2 className="font-single-day text-2xl md:text-3xl text-green-800 mb-3 flex items-center">
              <FaStickyNote className="mr-3 text-green-700" />
              책상 탐험 시간!
            </h2>
            <p className="text-sm md:text-base text-green-900 opacity-90">
              제 책상에 오신 것을 환영해요! 😊 저는 매일 여기에서 공부해요. 오늘 빛나의 일기에서 우리는 제 공부 곳을 봐요.
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
            제 책상이 마음에 들었나요?
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
