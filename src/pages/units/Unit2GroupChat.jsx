// src/pages/units/Unit2GroupChat.jsx
import React, { useState } from 'react';
import { IoChatbubblesSharp } from 'react-icons/io5';
import { FaMapMarkerAlt, FaGamepad, FaFutbol, FaPaw, FaDrumstickBite, FaUsers, FaImage, FaEllipsisH, FaTimes } from 'react-icons/fa';
import { BsFillChatFill, BsPeopleFill, BsPlusCircleFill } from 'react-icons/bs';

// Assuming chatMessages is still imported from a separate file if you moved it
import chatMessages from './data/Unit2Messages'; 
import montsPfp from '../../assets/unit2/monts.jpg';
import younsolPfp from '../../assets/unit2/younsol.jpg';
import sungtaePfp from '../../assets/unit2/sungtae.jpg';
import arelyPfp from '../../assets/unit2/arely.jpg';
import dianaPfp from '../../assets/unit2/diana.jpg';
import esmePfp from '../../assets/unit2/esme.jpg';

// Participant Data
const participants = {
  diana: { name: "빛나", avatar: dianaPfp, isCurrentUser: true },
  yoonsol: { name: "윤솔", avatar: younsolPfp, isCurrentUser: false },
  seongtae: { name: "성태", avatar: sungtaePfp, isCurrentUser: false},
  arely: { name: "아렐리", avatar: arelyPfp, isCurrentUser: false },
  monts: { name: "먼츠", avatar: montsPfp, isCurrentUser: false },
  esme: { name: "에스메", avatar: esmePfp, isCurrentUser: false},
};

/**
 * A lightbox component to display an enlarged version of an image.
 * It overlays the screen and can be closed by clicking outside the image or on the close button.
 *
 * @param {object} props - The component props.
 * @param {string} props.imageUrl - The URL of the image to display.
 * @param {Function} props.onClose - The function to call when the lightbox should be closed.
 * @returns {JSX.Element|null} The rendered lightbox component or null if no image URL is provided.
 */
const ImageLightbox = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4" 
      onClick={onClose} 
    >
      <div className="relative max-w-3xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}> 
        <img 
          src={imageUrl} 
          alt="Enlarged chat" 
          className="rounded-lg object-contain max-w-full max-h-full"
        />
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-white text-bitna-strong-pink rounded-full p-1.5 md:p-2 shadow-lg hover:bg-gray-200 transition-colors focus:outline-none ring-2 ring-white"
          aria-label="Close image"
        >
          <FaTimes size={18} />
        </button>
      </div>
    </div>
  );
};

/**
 * A component that renders a single chat message bubble.
 * It styles the bubble differently for the current user versus other chat participants.
 * It can display text, an image, or an icon.
 *
 * @param {object} props - The component props.
 * @param {string} props.sender - The name of the message sender.
 * @param {string} props.text - The text content of the message.
 * @param {string} props.time - The timestamp of the message.
 * @param {boolean} props.isCurrentUser - True if the message is from the current user.
 * @param {string} props.avatar - The URL for the sender's avatar image.
 * @param {React.ElementType} [props.icon] - An optional icon component to display.
 * @param {string} [props.imageUrl] - An optional URL for an image to display in the message.
 * @param {Function} props.onImageClick - The function to call when the message's image is clicked.
 * @returns {JSX.Element} The rendered message bubble component.
 */
const MessageBubble = ({ sender, text, time, isCurrentUser, avatar, icon, imageUrl, onImageClick }) => {
  const bubbleClasses = isCurrentUser
    ? "bg-bitna-lime-green text-gray-800 self-end rounded-l-xl rounded-tr-xl"
    : "bg-white text-gray-700 self-start rounded-r-xl rounded-tl-xl shadow-md";
  
  const textAlign = isCurrentUser ? "text-right" : "text-left";

  return (
    <div className={`flex items-end mb-4 w-full ${isCurrentUser ? "justify-end" : "justify-start"}`}>
      {!isCurrentUser && (
        <img src={avatar} alt={sender} className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 md:mr-3 border-2 border-bitna-light-pink shadow-sm flex-shrink-0" />
      )}
      <div className={`max-w-[70%] md:max-w-[60%]`}>
        {!isCurrentUser && (
          <p className={`text-xs text-gray-500 mb-0.5 ml-1 ${textAlign}`}>{sender}</p>
        )}
        <div className={`px-4 py-2.5 ${bubbleClasses}`}>
          {text && <p className="text-sm md:text-base whitespace-pre-wrap">{text}</p>}
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt="Chat image" 
              className="mt-2 rounded-lg max-w-full h-auto max-h-48 object-contain cursor-pointer hover:opacity-80 transition-opacity" 
              onClick={() => onImageClick(imageUrl)}
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x150/CCCCCC/FFFFFF?text=Error"; }}
            />
          )}
          {icon && !imageUrl && <div className={`mt-1 flex ${isCurrentUser ? 'justify-end' : 'justify-start'} opacity-70`}>{React.createElement(icon, {className: "text-xl"})}</div>}
        </div>
        <p className={`text-xs text-gray-400 mt-0.5 ${textAlign}`}>{time}</p>
      </div>
      {isCurrentUser && (
        <img src={avatar} alt={sender} className="w-8 h-8 md:w-10 md:h-10 rounded-full ml-2 md:ml-3 border-2 border-bitna-lime-green shadow-sm flex-shrink-0" />
      )}
    </div>
  );
};

/**
 * The second unit page of the diary, simulating a group chat application.
 * This page introduces the user's Korean friends through a mock chat conversation.
 * It includes a chat window with message bubbles and a sidebar with participant info.
 *
 * @returns {JSX.Element} The rendered group chat page.
 */
function Unit2GroupChat() {
  const [enlargedImageUrl, setEnlargedImageUrl] = useState(null);

  const handleImageClick = (imageUrl) => {
    setEnlargedImageUrl(imageUrl);
  };

  const closeLightbox = () => {
    setEnlargedImageUrl(null);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-purple-100 to-bitna-light-pink py-4 px-2 md:px-4 pt-10 flex flex-col lg:flex-row items-start justify-center lg:space-x-4">
        
        {/* Introduction Box (Post-it Style Sidebar - MUTED PINK THEME) */}
        <div className="w-full max-w-xl lg:max-w-xs xl:max-w-sm bg-bitna-muted-pink bg-opacity-80 p-6 rounded-xl shadow-xl border-2 border-bitna-strong-pink transform lg:rotate-2 order-first lg:order-none mb-6 lg:mb-0 transition-all duration-300 ease-in-out lg:hover:scale-105 lg:hover:shadow-2xl lg:hover:rotate-0">
          <h2 className="font-single-day text-3xl text-white text-center mb-4 flex items-center justify-center">
            <FaUsers className="mr-3 text-bitna-light-pink opacity-90" />
            나의 한국 친구들
          </h2> 
          <div className="space-y-3 text-md text-white opacity-95">
            <p className="mb-2">
              안녕하세요! 저는 두 명의 한국 친구가 있어요. 이름은 윤솔하고 성태예요. 얘들은 항상 제 한국어 공부를 도와줘요.
              오늘 빛나의 일기에서 저는 얘들을 소개해요!
            </p>
            <div className="bg-bitna-muted-pink bg-opacity-50 p-3 rounded-lg border border-bitna-strong-pink border-opacity-70">
              <h3 className="font-semibold text-white mb-1">윤솔</h3>
              <p className="text-bitna-light-pink opacity-90">
                윤솔은 진짜 멋있어요. 우리는 발로란트를 같이 이야기해요. 그리고 윤솔은 항상 제 한국어 숙제를 도와줘요.
              </p>
            </div>
            <div className="bg-bitna-muted-pink bg-opacity-50 p-3 rounded-lg border border-bitna-strong-pink border-opacity-70">
              <h3 className="font-semibold text-white mb-1">성태</h3>
              <p className="text-bitna-light-pink opacity-90">
                성태는 정말 재미있어요. 우리는 항상 많이 웃어요. 저는 얘 하고 포트나이트를 해요.
              </p>
            </div>
          </div>
        </div>

        {/* KakaoTalk-like Chat Window */}
        <div className="w-full max-w-3xl bg-gray-200 rounded-xl shadow-2xl flex flex-col h-[80vh] md:h-[75vh] order-2 lg:order-none overflow-hidden">
          
          {/* Top Window Bar */}
          <div className="h-7 md:h-8 bg-gray-300 flex items-center px-3 space-x-1.5 border-b border-gray-400 flex-shrink-0">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-xs text-gray-700 font-medium ml-2 flex-1 text-center">빛나톡 (BitnaTalk) ✨</span>
          </div>

          {/* Main Chat Content (Sidebar + Chat Area) */}
          <div className="flex flex-1 overflow-hidden">
            {/* Left Sidebar (Friends/Chats List - Visible on md and up) */}
            <div className="hidden md:flex flex-col w-20 bg-bitna-lime-green bg-opacity-80 border-r border-green-500">
              <div className="p-2 space-y-3 mt-2">
                <button className="p-2 text-green-800 hover:bg-green-200 rounded-md w-full"><BsPeopleFill size={24} className="mx-auto"/></button>
                <button className="p-2 text-green-800 bg-green-100 bg-opacity-70 ring-2 ring-green-600 rounded-md w-full"><BsFillChatFill size={24} className="mx-auto"/></button>
                <button className="p-2 text-green-800 hover:bg-green-200 rounded-md w-full"><BsPlusCircleFill size={24} className="mx-auto"/></button>
                <button className="p-2 text-green-800 hover:bg-green-200 rounded-md w-full"><FaEllipsisH size={24} className="mx-auto"/></button>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-green-200 p-1">
                {Object.values(participants).map(p => (
                  <div key={p.name} className={`p-2 rounded-md hover:bg-green-200 hover:bg-opacity-50 cursor-pointer ${p.name === "빛나" ? "bg-green-200 bg-opacity-50" : ""}`}>
                    <img src={p.avatar} alt={p.name} className="w-10 h-10 rounded-lg border border-green-600 mx-auto"/>
                    <p className="text-xs text-green-900 truncate text-center mt-1">{p.name.split(" ")[0]}</p>
                  </div>
                ))}
                <div className="p-2 text-center text-xs text-green-800">친구 {Object.keys(participants).length}명</div>
              </div>
            </div>

            {/* Right Chat Area */}
            <div className="flex-1 flex flex-col bg-slate-100">
              <div className="p-3 md:p-4 bg-bitna-strong-pink text-white flex items-center justify-between shadow-md flex-shrink-0">
                <div className="flex items-center">
                  <IoChatbubblesSharp className="text-2xl md:text-3xl mr-2 text-bitna-lime-green" />
                  <h2 className="font-single-day text-xl md:text-2xl">🌮 김치 타코 연합 🌶️ </h2>
                </div>
                <div className="flex -space-x-2">
                  {Object.values(participants).slice(0,4).map(p => (
                    <img key={p.name} src={p.avatar} alt={p.name} className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white"/>
                  ))}
                </div>
              </div>

              <div className="flex-1 p-3 md:p-6 space-y-2 md:space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-bitna-muted-pink scrollbar-track-bitna-light-pink bg-slate-100">
                {chatMessages.map((msg, index) => {
                  const senderInfo = participants[msg.senderKey];
                  return (
                    <MessageBubble
                      key={index}
                      sender={senderInfo.name}
                      text={msg.text}
                      time={msg.time}
                      isCurrentUser={senderInfo.isCurrentUser}
                      avatar={senderInfo.avatar}
                      icon={msg.icon}
                      imageUrl={msg.imageUrl}
                      onImageClick={handleImageClick}
                    />
                  );
                })}
              </div>

              <div className="p-3 md:p-4 border-t-2 border-gray-300 bg-white flex-shrink-0">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <button className="p-2 text-gray-500 hover:text-bitna-strong-pink">
                    <FaImage size={22} />
                  </button>
                  <input
                    type="text"
                    placeholder="메시지를 입력하세요..."
                    className="flex-1 p-2 md:p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-bitna-lime-green focus:border-transparent outline-none text-sm"
                    disabled
                  />
                  <button className="p-2 md:p-3 bg-bitna-lime-green text-gray-800 rounded-xl hover:bg-green-400 transition-colors font-semibold text-sm">
                    전송
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Render Lightbox */}
      <ImageLightbox imageUrl={enlargedImageUrl} onClose={closeLightbox} />
    </>
  );
}

export default Unit2GroupChat;
