// src/pages/units/Unit1SelfIntro.jsx
import React, { useState } from 'react';
// Import react-icons
import { 
  FaMapMarkerAlt, FaUniversity, FaGraduationCap, FaHeart as FaHeartSolid, FaPaw, 
  FaUserFriends, FaCamera, FaGamepad, FaPalette, FaFilm, FaRegHeart, FaRegCommentDots, FaShareSquare,
  FaBrain 
} from 'react-icons/fa';
import { IoSparkles, IoMusicalNotes, IoPlanet } from 'react-icons/io5'; // Corrected import path
import { GiYarn } from 'react-icons/gi';
import { BsPersonBadge } from 'react-icons/bs'; // Icon for Personality Traits post

// Import your images (replace with your actual image paths and names)
import userProfilePic from '../../assets/profile.jpg'; 
import profileCoverImage from '../../assets/profile-cover.JPG'; 
import postImage from '../../assets/post.jpg'; 
import mexicoMapImage from '../../assets/cerro.jpg'; 
import uniImage1 from '../../assets/uni1.jpg'; 
import uniImage2 from '../../assets/uni2.jpg';
import uniImage3 from '../../assets/uni3.jpg';
import crochetImage1 from '../../assets/crochet1.jpg'; 
import crochetImage2 from '../../assets/crochet2.jpg';
import artImage1 from '../../assets/art1.png'; 
import artImage2 from '../../assets/art3.jpg'; 
import artImage3 from '../../assets/art2.png'; 


// Placeholder avatars for comments
const btsRmAvatar = "https://placehold.co/40x40/7777DD/FFFFFF?text=RM";
const got7JacksonAvatar = "https://placehold.co/40x40/000000/FFFFFF?text=JW";
const got7BamBamAvatar = "https://placehold.co/40x40/FFD700/000000?text=BB";
const jinshiAvatar = "https://placehold.co/40x40/20B2AA/FFFFFF?text=JS";
const aquaOshiNoKoAvatar = "https://placehold.co/40x40/00FFFF/000000?text=AQ";
const seoYulAvatar = "https://placehold.co/40x40/D2B48C/FFFFFF?text=SY";
const riJeongHyeokAvatar = "https://placehold.co/40x40/006400/FFFFFF?text=RJH";
const kangCheolAvatar = "https://placehold.co/40x40/1E90FF/FFFFFF?text=KC";
const kangTaeMooAvatar = "https://placehold.co/40x40/4682B4/FFFFFF?text=KTM";

// Helper component for profile "posts" or sections
const ProfilePost = ({ 
  icon, 
  title, 
  children, 
  bgColor = 'bg-bitna-light-pink', 
  textColor = 'text-bitna-strong-pink', 
  contentBg = 'bg-white',
  initialLikes = 0,
  comments = [] 
}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className={`p-4 md:p-6 rounded-xl shadow-lg ${bgColor} mb-6 transform hover:scale-[1.02] transition-transform duration-300`}>
      <h3 className={`font-single-day text-2xl md:text-3xl ${textColor} mb-3 flex items-center`}>
        {icon && React.createElement(icon, { className: "mr-3 text-2xl" })}
        {title}
      </h3>
      <div className={`${contentBg} p-4 rounded-lg shadow-inner`}>
        {children}
      </div>
      {/* Post Actions: Likes, Comments, Share */}
      <div className={`mt-4 pt-3 border-t ${contentBg === 'bg-white' ? 'border-gray-200' : 'border-gray-300 opacity-50'} flex justify-around items-center`}>
        <button 
          onClick={handleLike}
          className={`flex items-center space-x-1 text-sm ${liked ? 'text-bitna-strong-pink' : textColor} hover:opacity-70 transition-opacity`}
        >
          {liked ? <FaHeartSolid className="text-bitna-strong-pink" /> : <FaRegHeart />}
          <span>{likes} Likes</span>
        </button>
        <button className={`flex items-center space-x-1 text-sm ${textColor} hover:opacity-70 transition-opacity`}>
          <FaRegCommentDots />
          <span>Comment</span>
        </button>
        <button className={`flex items-center space-x-1 text-sm ${textColor} hover:opacity-70 transition-opacity`}>
          <FaShareSquare />
          <span>Share</span>
        </button>
      </div>

      {/* Comments Section */}
      {comments.length > 0 && (
        <div className="mt-4 pt-3">
          <h4 className={`text-sm font-semibold ${textColor} mb-2`}>{comments.length} Comments:</h4>
          <div className="space-y-3 max-h-40 overflow-y-auto pr-2">
            {comments.map((comment, index) => (
              <div key={index} className="flex items-start space-x-2 text-xs">
                <img 
                  src={comment.avatar || `https://placehold.co/32x32/CCCCCC/757575?text=${comment.author.substring(0,1)}`} 
                  alt={comment.author} 
                  className="w-8 h-8 rounded-full object-cover border border-gray-300" 
                />
                <div className={`${contentBg === 'bg-white' ? 'bg-gray-100' : 'bg-white bg-opacity-20'} p-2 rounded-lg flex-1`}>
                  <p className={`font-semibold ${textColor} opacity-90`}>{comment.author}</p>
                  <p className={`${contentBg === 'bg-white' ? 'text-gray-600' : 'text-gray-100'}`}>{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

function Unit1SelfIntro() {
  const userName = "반짝반짝 빛나를 소개해요!"; // "Introducing Bitna, the Shining Star!"
  const koreanName = "빛나"; // "Shining Star"
  const universityName = "UAA";
  const major = "컴퓨터 시스템 엔지니어링"; // Computer Systems Engineering
  const favoriteGame = "발로란트"; // Valorant
  const chineseZodiac = "물양"; // Water Sheep
  const mbtiType = "ENTP"; // ENTP

  const introPostComments = [
    { author: "RM", avatar: btsRmAvatar, text: "빛나 씨, 열정이 보여요! 창의적인 모습 좋아요. 계속 잘하세요~ 화이팅!" },
    { author: "Jinshi", avatar: jinshiAvatar, text: "음, 흥미로워요. 노력하는 모습이 멋져요. 계속 빛나세요." }
  ];


  const personalityPostComments = [
    { author: "ENTP friend", text: "ENTP power! Let's debate something fun!" },
    { author: "Astrology Fan", text: "Water Sheep are so creative! Love it!" }
  ];



  const universityPostComments = [
    { author: "Aqua", avatar: aquaOshiNoKoAvatar, text: "이 프로필, 정말 멋져요. 스타 느낌 나요. 빛을 잃지 마세요!" },
    { author: "강철", avatar: kangCheolAvatar, text: "이야기가 잘 쓰였어요, 빛나 씨. 다음 이야기도 기대할게요!" }
  ];

  
  const likesPostComments = [
    { author: "잭슨", avatar: got7JacksonAvatar, text: "Yo, Bitna! 프로필 너무 좋아요! 🔥 계속 멋지게 해요!" },
    { author: "뱀뱀", avatar: got7BamBamAvatar, text: "에이~ 빛나 누나! 취향 최고예요! 스끄엣~ 😉" },
    { author: "서율", avatar: seoYulAvatar, text: "빛나 님, 글에서 좋은 기분이 느껴져요. 그 기분 계속 지켜요." },
    { author: "리정혁", avatar: riJeongHyeokAvatar, text: "빛나 동무, 프로필 잘 만들었소. 보기 좋소. 계속 그렇게 하시오." },
    { author: "강태무", avatar: kangTaeMooAvatar, text: "잘 했어요. 프로필이 아주 좋아요. 열심히 하는 모습 보기 좋아요." }
  ];



  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-bitna-light-pink via-bitna-muted-pink to-bitna-strong-pink py-12 px-4 md:px-8 pt-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Profile Header with Image */}
        <div className="h-40 md:h-48 relative">
          <img 
            src={profileCoverImage} 
            alt="Profile Cover" 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x200/CCDF92/333?text=Cover+Image"; }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <IoPlanet className="absolute bottom-4 left-4 text-white text-4xl opacity-70 transform rotate-12" />
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 sm:-mt-20 mb-6">
            <div className="relative group">
              <img 
                src={userProfilePic} 
                alt={userName} 
                className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/128x128/E195AB/FFEDFA?text=Yo"; }}
              />
              <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-opacity duration-300">
                <FaCamera className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <h1 className="font-single-day text-3xl md:text-4xl text-bitna-strong-pink">{userName}</h1>
              <p className="text-bitna-muted-pink text-lg flex items-center justify-center sm:justify-start">
                <IoSparkles className="mr-1 text-yellow-400" /> {koreanName}
              </p>
            </div>
            <button className="mt-4 sm:mt-0 sm:ml-auto bg-bitna-strong-pink text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-bitna-muted-pink transition-colors duration-200 text-sm">
              Follow ✨
            </button>
          </div>

          <div className="text-center border-b border-gray-200 pb-6 mb-6">
            <p className="text-gray-700 text-lg"> 
              안녕하세요! 👋 저는 디아나예요. 
            </p> {/* "Hello! My name is Diana." */}
            <p className="text-gray-600 mt-1">
              한국 친구들이 제 한국 이름을 지어줬어요. 그래서 제 한국 이름은 <span className="font-bold text-bitna-strong-pink">{koreanName}</span>예요.
            </p> {/* "My Korean friends gave me my Korean name. So my Korean name is Bitna." */}
            <p className="text-sm text-gray-500 mt-2 italic">
              "저는 제 색깔로 세상을 칠하고 싶어요." - My motto! 
            </p> {/* "I want to paint the world with my colors." */}
          </div>

          {/* Post 1: This is me! */}
          <ProfilePost 
            icon={FaUserFriends} 
            title="이게 저예요" 
            bgColor="bg-bitna-lime-green" 
            textColor="text-gray-800" 
            contentBg="bg-white"
            initialLikes={125}
            comments={introPostComments}
          >
            <img 
              src={postImage} 
              alt="This is me" 
              className="rounded-lg shadow-md w-full max-h-80 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCDF92/333?text=Yo+de+nuevo"; }}
            />
            <p className="mt-3 text-center text-gray-700">
              사진에 보이는 사람이 저, <span className="font-bold text-bitna-strong-pink">{koreanName}</span>예요! ✨ 만나서 반가워요!
            </p> {/* "This person is me, Bitna! Nice to meet you!" */}
            <p className="mt-3 text-center text-gray-700">
              오늘 제 한국어 일기를 시작 해요.
            </p> {/* "Today I start my Korean diary." */}
          </ProfilePost>

          {/* Post 2: Personality Traits (MBTI & Chinese Zodiac) - NEW POST */}
          <ProfilePost
            icon={BsPersonBadge} // New icon for this post
            title="나의 성격 유형"
            bgColor="bg-sky-100" // Using sky blue as the main background for this post
            textColor="text-sky-700"
            initialLikes={110}
            comments={personalityPostComments}
          >
            <div className="space-y-4">
              {/* MBTI Section */}
              <div className="p-3 bg-white rounded-lg shadow"> {/* Inner items can be white or a lighter shade */}
                <h4 className="font-semibold text-sky-700 mb-1 flex items-center"><FaBrain className="mr-2 text-sky-500"/> 나의 MBTI 성격 유형 🧠</h4>
                <p className="text-gray-700 text-sm">
                  제 <span className="font-bold">MBTI</span>는 <span className="font-bold">{mbtiType}</span>예요. 
                </p> {/* "My MBTI is ENTP." */}
                <p className="text-gray-700 text-sm">
                  저는 이야기하는 것을 좋아해요.
                </p> {/* "I love talking." */}
                <p className="text-gray-700 text-sm">
                  그리고 저는 새로운 것을 좋아해요.
                </p> {/* "And I love new things." */}
                <p className="text-gray-700 text-sm">
                  여러분도 <span className="font-bold">{mbtiType}</span>예요? 손! 🙋‍♀️ 
                </p> {/* "Are you also ENTP? Hands up!" */}
              </div>
              {/* Chinese Zodiac Section */}
              <div className="p-3 bg-white rounded-lg shadow">
                <h4 className="font-semibold text-red-700 mb-1 flex items-center"><FaPaw className="mr-2 text-red-500"/> 나의 띠:</h4>
                <p className="text-gray-700 text-sm">
                  제 띠는 <span className="font-bold">{chineseZodiac}띠</span>예요. {chineseZodiac} 화이팅!
                </p> {/* "My zodiac sign is Water Sheep. Go Water Sheep!" */}
              </div>
            </div>
          </ProfilePost>

          {/* Post 3: My Hometown */}
          <ProfilePost 
            icon={FaMapMarkerAlt} 
            title="나의 고향"
            initialLikes={98}
            comments={[{author: "Amigo de México", text: "¡Qué padre que muestres nuestras raíces! Saludos."}]}
          >
            <img 
              src={mexicoMapImage} 
              alt="Map of Mexico" 
              className="rounded-lg shadow-md w-full max-h-60 object-cover object-[50%_75%] mb-3"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/E195AB/FFEDFA?text=Mexico"; }}
            />
            <p className="text-gray-700 text-center">
              저는 <span className="font-bold text-bitna-muted-pink">멕시코</span> 사람이에요. 🇲🇽 
            </p> {/* "I am Mexican. Long live Mexico!" */}
          </ProfilePost>

          {/* Post 4: My University Life */}
          <ProfilePost 
            icon={FaUniversity} 
            title="나의 대학교생활"
            initialLikes={150}
            comments={universityPostComments}
          >
            <p className="text-gray-700 mb-3">
              저는 <span className="font-bold text-bitna-muted-pink">{universityName}</span> 대학생이에요. 
              <span className="font-bold text-bitna-muted-pink">{major}</span> 공부해요. 👩‍🎓  
            </p> {/* "I am a university student at UAA. I study Computer Systems Engineering." */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {[uniImage1, uniImage2, uniImage3].map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`University ${index + 1}`} 
                  className="rounded-md shadow-sm object-cover h-40 w-full"
                  onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/100x100/FFEDFA/333?text=Uni${index+1}`; }}
                />
              ))}
            </div>
            <div className="mt-3 p-3 bg-bitna-light-pink rounded-lg">
              <h4 className="font-semibold text-bitna-strong-pink mb-1 flex items-center"><FaGraduationCap className="mr-2"/> 졸업 후 꿈:</h4>
              <p className="text-gray-700 text-sm">
                저는 웹 개발자가 되고 싶어요! 🚀 {/* I want to be a web developer! */}
              </p>  
            </div>
          </ProfilePost>

          {/* Post 5: My Favorite Things (Rainbow Order) */}
          <ProfilePost 
            icon={FaHeartSolid} 
            title="내가 좋아하는 것들"
            initialLikes={300} 
            comments={likesPostComments}
          >
            <div className="space-y-6">
              {/* 1. Orange: K-Dramas */}
              <div className="p-3 bg-orange-100 rounded-lg shadow">
                <h4 className="font-semibold text-orange-700 mb-1 flex items-center"><FaFilm className="mr-2 text-orange-500"/> K-드라마 🎬</h4>
                <p className="text-gray-700 text-sm">
                  한국 드라마 보는 것을 정말 좋아해요! 최근에 본 드라마는 "알함브라 궁전의 추억"이에요.
                </p> {/* "I really love watching Korean dramas! The last drama I watched was 'Memories of the Alhambra'." */}
              </div>
              
              {/* 2. Pink: Crochet */}
              <div className="p-3 bg-pink-100 rounded-lg shadow">
                <h4 className="font-semibold text-pink-700 mb-1 flex items-center"><GiYarn className="mr-2 text-pink-500"/> 코바늘 뜨개질 🧶</h4>
                <p className="text-gray-700 text-sm mb-2">
                  제 취미는 코바늘 뜨개질이에요. 이것은 제 작품이에요:
                </p> {/* "My hobby is crochet. This is my work:" */}
                <div className="grid grid-cols-2 gap-2">
                  <img src={crochetImage1} alt="Crochet project 1" className="rounded-md shadow-sm object-cover h-80 w-full" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/FFC0CB/333?text=Crochet1"; }}/>
                  <img src={crochetImage2} alt="Crochet project 2" className="rounded-md shadow-sm object-cover h-80 w-full" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/FFC0CB/333?text=Crochet2"; }}/>
                </div>
              </div>

              {/* 3. Blue: Video Games */}
              <div className="p-3 bg-blue-100 rounded-lg shadow">
                <h4 className="font-semibold text-blue-700 mb-1 flex items-center"><FaGamepad className="mr-2 text-blue-500"/> 비디오 게임 🎮</h4>
                <p className="text-gray-700 text-sm">
                  저는 PC 게임을 좋아해요! 제가 좋아하는 게임은 <span className="font-bold">{favoriteGame}</span>에요.
                  같이 할래요? 😉
                </p>  {/* "I love video games! I play {favoriteGame}. Want to play together?" */}
              </div>

              {/* 4. Indigo: Art */}
              <div className="p-3 bg-indigo-100 rounded-lg shadow">
                <h4 className="font-semibold text-indigo-700 mb-1 flex items-center"><FaPalette className="mr-2 text-indigo-500"/> 미술 🎨</h4>
                <p className="text-gray-700 text-sm">
                  저는 미술을 사랑해요! 
                </p> {/* "I love art! I enjoy doing art." */}
                <p className="text-gray-700 text-sm">
                  그림을 좋아해요.
                </p> {/* "I like drawing and painting." */}
                <p className="text-gray-700 text-sm">
                  무지개도 좋아하구요! 🌈
                </p> {/* "I really love rainbows!" */}
                <p className="text-gray-700 text-sm mb-2"> 
                  아래는 제 작품이에요:
                </p> {/* "Here is my art:" */}
                <div className="grid grid-cols-3 gap-2">
                  <img src={artImage1} alt="Art project 1" className="rounded-md shadow-sm object-cover h-60 w-full" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x120/A8D1D1/333?text=Art1"; }}/>
                  <img src={artImage2} alt="Art project 2" className="rounded-md shadow-sm object-cover h-60 w-full" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x120/A8D1D1/333?text=Art2"; }}/>
                  <img src={artImage3} alt="Art project 3" className="rounded-md shadow-sm object-cover h-60 w-full" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x120/A8D1D1/333?text=Art3"; }}/>
                </div>
              </div>
              
              {/* 5. Purple: K-Pop */}
              <div className="p-3 bg-purple-100 rounded-lg shadow">
                <h4 className="font-semibold text-purple-700 mb-2 flex items-center"><IoMusicalNotes className="mr-2 text-purple-500"/>K-Pop 🎶💜</h4>
                <div className="mb-3">
                  <p className="text-gray-700 text-sm font-semibold">✨ GOT7 (갓세븐):</p>
                  <p className="text-gray-700 text-sm pl-2">
                    정말 좋아하는 그룹이에요! 제 최애는 <span className="font-bold">잭슨</span>이랑 <span className="font-bold">뱀뱀</span>이에요! 갓세븐 포에버!
                  </p> {/* "I really love this group! My favorites are Jackson and BamBam! GOT7 forever!" */}
                </div>
                <div>
                  <p className="text-gray-700 text-sm font-semibold">✨ BTS (방탄소년단):</p>
                  <p className="text-gray-700 text-sm pl-2">
                    BTS도 너무너무 사랑해요! 제 최애는 <span className="font-bold">RM</span>이에요. 그의 가사와 지혜를 존경해요.
                  </p> {/* "I also love BTS! My favorite is RM. I admire his lyrics and wisdom." */}
                </div>
              </div>
            </div>
          </ProfilePost>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-700 text-lg font-single-day">
              감사해요! <IoSparkles className="inline text-yellow-400" />
            </p> {/* "Thank you for checking out my profile!" */}
            <p className="text-bitna-muted-pink mt-2">
              다음에 또 봐요! 안녕! 👋
            </p> {/* "See you next time! Bye!" */}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Unit1SelfIntro;
