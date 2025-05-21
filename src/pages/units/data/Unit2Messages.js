import { FaUserCircle, FaMapMarkerAlt, FaGamepad, FaFutbol, FaPaw, FaDrumstickBite, FaUsers, FaImage, FaEllipsisH } from 'react-icons/fa';

const chatMessages = [
  {
    senderKey: "diana",
    text: "안녕~ 제 멕시코 친구들은 몬츠랑 아렐리예요. 그들은 제 대학 친구이에요 😊",
    time: "11:00 AM"
  },
  {
    senderKey: "diana",
    text: "친구들아, 여기는 윤솔이랑 송태예요. 그들은 한국 사람이에요!",
    time: "11:00 AM"
  },
  {
    senderKey: "monts",
    text: "안녕~ 저는 몬츠예요. 아구아스칼리엔테스에서 왔어요 🇲🇽",
    time: "11:01 AM",
    icon: FaMapMarkerAlt
  },
  {
    senderKey: "arely",
    text: "안녕!! 저는 아렐리예요. 만나서 반가워! 🥰",
    time: "11:02 AM",
    icon: FaGamepad
  },
  {
    senderKey: "yoonsol",
    text: "제 이름은 최윤솔이에요. 저는 E스포츠에 완전 진심이에요.",
    time: "11:03 AM"
  },
  {
    senderKey: "seongtae",
    text: "제 이름은 김성태예요. 윤솔과 나는 절친한 친구예요.",
    time: "11:04 AM"
  },
  {
    senderKey: "diana",
    text: "와~ ",
    time: "11:05 AM"
  },
  {
    senderKey: "seongtae",
    text: "이거 보세요, 제 최근 게임 스크린샷이에요!",
    imageUrl: "src/assets/uni1.jpg",
    time: "11:05 AM"
  },
  {
    senderKey: "diana",
    text: "하하, 고마워요 성태 씨! 꼭 같이 해요! 윤솔 씨는 게임 안 하세요?",
    time: "11:06 AM"
  },
  {
    senderKey: "yoonsol",
    text: "저는 게임은 잘 못하지만, 가끔 성태 따라서 PC방에 가요. 저는 운동을 더 좋아해요. 요즘 테니스 배워요! 🎾",
    time: "11:07 AM"
  },
  {
    senderKey: "monts",
    text: "테니스? 멋있다! (Tennis? Cool!) 저도 운동 좋아해요!",
    time: "11:08 AM"
  },
  {
    senderKey: "seongtae",
    text: "오, 테니스! 형, 정말 대단해요! 저는 축구 제일 좋아해요! ⚽️ 어제 친구들이랑 축구 했어요!",
    time: "11:09 AM",
    icon: FaFutbol,
    imageUrl: "https://placehold.co/300x200/34D399/FFFFFF?text=Soccer+Game"
  },
  {
    senderKey: "diana",
    text: "와, 다들 정말 활동적이네요! 저는 요즘 산책하는 거 좋아해요. 저희 집 근처에 공원이 있는데, 제 강아지 맥스랑 같이 가요. 🐶",
    time: "11:10 AM",
    icon: FaPaw
  },
  {
    senderKey: "diana",
    text: "이 아이가 맥스예요!",
    imageUrl: "https://placehold.co/250x200/FBBF24/FFFFFF?text=Max+the+Dog",
    time: "11:10 AM"
  },
  {
    senderKey: "yoonsol",
    text: "강아지요? 너무 귀엽겠다! 저는 고양이 한 마리 키워요. 이름은 '별'이에요. 밤하늘의 별처럼 예뻐서요. ✨",
    time: "11:11 AM"
  },
  {
    senderKey: "yoonsol",
    text: "우리 별이 사진이에요!",
    imageUrl: "https://placehold.co/200x250/A78BFA/FFFFFF?text=Byeol+the+Cat",
    time: "11:11 AM"
  },
  {
    senderKey: "arely",
    text: "Aww, Yoonsol's cat and Diana's dog are so cute! (윤솔 씨 고양이랑 디아나 씨 강아지 너무 귀여워요!)",
    time: "11:12 AM"
  },
  {
    senderKey: "seongtae",
    text: "저는 애완동물 없지만, 동물 다 좋아해요! 특히 시바견이요! 너무 귀여워요. 아, 갑자기 배고프네요. 점심 뭐 먹을까요?",
    time: "11:13 AM"
  },
  {
    senderKey: "diana",
    text: "점심이요? 저는 오늘 멕시코 음식 먹고 싶어요! 타코 어때요? 🌮",
    time: "11:14 AM"
  },
  {
    senderKey: "diana",
    text: "이런 타코요!",
    imageUrl: "https://placehold.co/300x150/F97316/FFFFFF?text=Yummy+Tacos",
    time: "11:14 AM"
  },
  {
    senderKey: "yoonsol",
    text: "저는 된장찌개 정말 좋아해요. 건강하고 맛있어요. 그리고 빛나 씨, 타코 정말 맛있어 보여요!",
    time: "11:15 AM"
  },
  {
    senderKey: "seongtae",
    text: "저는 당연히 치킨이죠! 🍗 한국 프라이드 치킨은 세계 최고예요! 빛나 씨, 멕시코에도 맛있는 치킨 있어요?",
    time: "11:16 AM",
    icon: FaDrumstickBite
  },
  {
    senderKey: "monts",
    text: "치킨! 저도 치킨 좋아해요! (Chicken! I like chicken too!)",
    time: "11:17 AM"
  },
  {
    senderKey: "diana",
    text: "네, 멕시코에도 맛있는 닭 요리 많아요! 다음에 한국 가면 꼭 같이 치맥 해요, 성태 씨! 오늘 대화 정말 즐거웠어요, 여러분! 😊",
    time: "11:18 AM"
  },
  {
    senderKey: "yoonsol",
    text: "저도요, 빛나 씨! 다음에 또 재미있는 이야기 많이 해요!",
    time: "11:19 AM"
  },
  {
    senderKey: "seongtae",
    text: "네! 다음에 게임도 같이 하고 맛있는 것도 같이 먹어요! 안녕히 계세요!",
    time: "11:20 AM"
  }
];

export default chatMessages;
