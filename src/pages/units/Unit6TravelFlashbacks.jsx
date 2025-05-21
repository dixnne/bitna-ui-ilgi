// src/pages/units/Unit6TravelFlashbacks.jsx
import React, { useState } from 'react';
import { 
    FaPlaneDeparture, FaMapMarkedAlt, FaMountain, FaFutbol, FaUmbrellaBeach, 
    FaGlassCheers, FaBookOpen, FaCamera, FaMoon, FaStar, FaUsers, 
    FaHeartBroken, FaTimes, FaLandmark, FaPalette, FaWater, 
    FaWineGlassAlt, FaCity, FaThumbtack, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import { GiFlowerPot, GiDesert, GiSaltShaker, GiPaperClip } from 'react-icons/gi';
import { IoSparkles } from 'react-icons/io5';

// --- IMPORT YOUR ACTUAL IMAGES HERE ---
// Example:
// import primerVueloAeropuertoImg from '../../assets/unit6/primer_vuelo/aeropuerto.jpg';
// import primerVueloNubesImg from '../../assets/unit6/primer_vuelo/nubes.jpg';
// ... and so on for all images

const travelFlashbacksData = [
  {
    id: 'primerVuelo',
    themeTitleCoreano: '나의 첫 비행 ✈️',
    themeTitleEspanol: 'Mi Primer Vuelo',
    themeIcon: FaPlaneDeparture,
    themeImage: 'https://placehold.co/400x300/A0C4FF/333?text=Primer+Vuelo', // REEMPLAZA
    recuerdos: [
      {
        id: 'vuelo1_aeropuerto',
        recuerdoTitleCoreano: '공항에서의 설렘',
        recuerdoTitleEspanol: 'Emoción en el Aeropuerto',
        image: 'https://placehold.co/600x400/BEE3F8/2A4365?text=Aeropuerto+Foto', // REEMPLAZA
        narraciones: [
          '어제 처음으로 비행기를 탔어요.',
          '인천공항에서 정말 설렜어요. 비행기가 아주 컸어요!',
          '창가 자리에 앉아서 밖을 봤어요. 모든 것이 작아 보였어요.',
        ],
        albumStyle: { rotation: 'transform -rotate-2', decoration: 'tape' } 
      },
      {
        id: 'vuelo1_nubes',
        recuerdoTitleCoreano: '구름 위의 산책',
        recuerdoTitleEspanol: 'Paseo sobre las Nubes',
        image: 'https://placehold.co/600x400/E0FFFF/008080?text=Nubes+Foto', // REEMPLAZA
        narraciones: [
          '비행기가 하늘 높이 날았어요.',
          '창밖으로 구름을 봤어요. 구름이 솜사탕 같았어요!',
        ],
        albumStyle: { rotation: 'transform rotate-1', decoration: 'pin' }
      },
    ],
  },
  {
    id: 'santiagoLlegada',
    themeTitleCoreano: '나의 첫 산티아고 🇨🇱',
    themeTitleEspanol: 'Mi Primera Vez en Santiago',
    themeIcon: FaMapMarkedAlt,
    themeImage: 'https://placehold.co/400x300/FFDAB9/8B4513?text=Santiago+Chile', // REEMPLAZA
    recuerdos: [
      {
        id: 'santiago_moneda',
        recuerdoTitleCoreano: '모네다 궁 앞에서',
        recuerdoTitleEspanol: 'Frente al Palacio de la Moneda',
        image: 'https://placehold.co/600x400/FFE4B5/A0522D?text=La+Moneda+Foto', // REEMPLAZA
        narraciones: [
          '어제 산티아고에 도착했어요. 날씨가 정말 좋았어요.',
          '오후에 모네다 궁에 갔어요. 궁 앞에서 사진을 많이 찍었어요.',
        ],
        albumStyle: { rotation: 'transform rotate-2', decoration: 'corner' }
      },
      {
        id: 'santiago_san_cristobal',
        recuerdoTitleCoreano: '산 크리스토발 언덕',
        recuerdoTitleEspanol: 'Cerro San Cristóbal',
        image: 'https://placehold.co/600x400/90EE90/228B22?text=San+Cristobal+Foto', // REEMPLAZA
        narraciones: [
          '저녁에는 산 크리스토발 언덕에 올라갔어요.',
          '케이블카를 타고 올라갔어요. 조금 무서웠지만 재미있었어요!',
          '언덕 위에서 산티아고 야경을 봤어요. 반짝이는 불빛들이 정말 예뻤어요.',
        ],
        albumStyle: { rotation: 'transform -rotate-1', decoration: 'tape' }
      },
    ],
  },
  {
    id: 'farellones',
    themeTitleCoreano: '파레요네스의 눈 ❄️',
    themeTitleEspanol: 'Nieve en Farellones',
    themeIcon: FaMountain,
    themeImage: 'https://placehold.co/400x300/ADD8E6/00008B?text=Farellones+Nieve', // REEMPLAZA
    recuerdos: [
        {
            id: 'farellones_nieve_diversion', // Changed ID
            recuerdoTitleCoreano: '눈밭에서의 즐거움',
            recuerdoTitleEspanol: 'Diversión en la Nieve',
            image: 'https://placehold.co/600x400/F0FFFF/4682B4?text=Esqui+Farellones', // REEMPLAZA
            narraciones: [
                '어제 파레요네스에서 처음으로 눈을 봤어요! 정말 신기했어요.',
                '친구들과 눈싸움을 했어요. 옷이 다 젖었지만 재미있었어요.',
                '따뜻한 차를 마시면서 창밖의 눈을 봤어요. 아름다웠어요.',
            ]
        }
    ]
  },
  {
    id: 'coloColo',
    themeTitleCoreano: '콜로콜로 경기! ⚽',
    themeTitleEspanol: 'Partido del Colo-Colo',
    themeIcon: FaFutbol,
    themeImage: 'https://placehold.co/400x300/000000/FFFFFF?text=ColoColo+Logo', // REEMPLAZA
    recuerdos: [
        {
            id: 'colo_estadio_ambiente', // Changed ID
            recuerdoTitleCoreano: '경기장의 뜨거운 열기',
            recuerdoTitleEspanol: 'El Fervor del Estadio',
            image: 'https://placehold.co/600x400/32CD32/FFFFFF?text=Estadio+ColoColo', // REEMPLAZA
            narraciones: [
                '어제 콜로콜로 축구 경기를 봤어요. 경기장에 사람이 정말 많았어요.',
                '팬들의 응원 소리가 엄청 컸어요. 저도 같이 응원했어요!',
                '골이 들어갔을 때 모두가 환호했어요. 정말 신나는 경험이었어요!',
            ]
        }
    ]
  },
  {
    id: 'concon',
    themeTitleCoreano: '콘콘의 모래 언덕 🏜️',
    themeTitleEspanol: 'Dunas de Concón',
    themeIcon: GiDesert,
    themeImage: 'https://placehold.co/400x300/F4A460/FFFFFF?text=Dunas+Concon', // REEMPLAZA
    recuerdos: [
        {
            id: 'concon_sandboard_aventura', // Changed ID
            recuerdoTitleCoreano: '모래 언덕에서의 모험',
            recuerdoTitleEspanol: 'Aventura en las Dunas',
            image: 'https://placehold.co/600x400/DEB887/333?text=Sandboard+Concon', // REEMPLAZA
            narraciones: [
                '어제 콘콘에 가서 거대한 모래 언덕을 봤어요. 정말 멋있었어요!',
                '거기에서 샌드보드를 탔어요. 처음에는 조금 무서웠지만 정말 재미있었어요.',
                '모래 언덕 위에서 태평양 바다를 봤어요. 경치가 최고였어요.',
            ]
        }
    ]
  },
  {
    id: 'vinaDelMar',
    themeTitleCoreano: '비냐 델 마르에서의 휴식 🏖️',
    themeTitleEspanol: 'Estancia en Viña del Mar',
    themeIcon: FaUmbrellaBeach,
    themeImage: 'https://placehold.co/400x300/87CEEB/333?text=Vina+del+Mar+Playa', // REEMPLAZA
    recuerdos: [
        {
            id: 'vina_reloj_flores', // Changed ID
            recuerdoTitleCoreano: '꽃시계와 바닷가',
            recuerdoTitleEspanol: 'Reloj de Flores y la Costa',
            image: 'https://placehold.co/600x400/FFB6C1/333?text=Reloj+Flores+Vina', // REEMPLAZA
            narraciones: [
                '어제 비냐 델 마르에 갔어요. 날씨가 아주 따뜻했어요.',
                '유명한 꽃시계 앞에서 사진을 많이 찍었어요. 꽃들이 정말 아름다웠어요.',
                '오후에는 해변에서 산책했어요. 바다 냄새가 정말 좋았어요.',
            ]
        }
    ]
  },
  {
    id: 'paseosCercanos',
    themeTitleCoreano: '근처 명소 탐방 🚶‍♀️',
    themeTitleEspanol: 'Paseos en Lugares Cercanos',
    themeIcon: FaCity,
    themeImage: 'https://placehold.co/400x300/DDA0DD/333?text=Paseos+Cercanos', // REEMPLAZA
    recuerdos: [
        {
            id: 'paseo_valparaiso_arte', // Changed ID
            recuerdoTitleCoreano: '발파라이소의 다채로운 언덕',
            recuerdoTitleEspanol: 'Cerros Coloridos de Valparaíso',
            image: 'https://placehold.co/600x400/FF8C00/FFFFFF?text=Valparaiso+Cerros', // REEMPLAZA
            narraciones: [
                '어제 친구들과 함께 발파라이소에 갔어요. 정말 아름다운 도시였어요.',
                '알레그레 언덕에서 예쁜 벽화들을 많이 봤어요. 사진도 많이 찍었어요.',
                '항구에서 맛있는 해산물도 먹었어요. 잊지 못할 하루였어요.',
            ],
            albumStyle: { rotation: 'transform rotate-1', decoration: 'tape' }
        },
        {
            id: 'paseo_cajon_naturaleza', // Changed ID
            recuerdoTitleCoreano: '카혼 델 마이포의 자연',
            recuerdoTitleEspanol: 'Naturaleza en Cajón del Maipo',
            image: 'https://placehold.co/600x400/2E8B57/FFFFFF?text=Cajon+del+Maipo+Rio', // REEMPLAZA
            narraciones: [
                '지난 주말에 카혼 델 마이포에 갔어요. 공기가 정말 맑았어요.',
                '강가에서 잠시 쉬었어요. 물소리가 시원하고 마음이 편안해졌어요.',
                '산에서 멋진 풍경을 봤어요. 자연 속에서 정말 행복했어요.',
            ],
            albumStyle: { rotation: 'transform -rotate-2', decoration: 'pin' }
        }
    ]
  },
  {
    id: 'fiestas',
    themeTitleCoreano: '즐거운 파티 타임! 🎉',
    themeTitleEspanol: 'Fiestas Divertidas',
    themeIcon: FaGlassCheers,
    themeImage: 'https://placehold.co/400x300/FF69B4/FFFFFF?text=Fiesta+Amigos', // REEMPLAZA
    recuerdos: [
        {
            id: 'fiesta_intercambio_estudiantes', // Changed ID
            recuerdoTitleCoreano: '교환학생들과의 파티',
            recuerdoTitleEspanol: 'Fiesta con Estudiantes de Intercambio',
            image: 'https://placehold.co/600x400/DC143C/FFFFFF?text=Intercambio+Party', // REEMPLAZA
            narraciones: [
                '어제 여러 나라에서 온 교환학생 친구들과 파티를 했어요.',
                '각자 자기 나라 음식을 조금씩 가져와서 나눠 먹었어요. 정말 다양하고 맛있었어요.',
                '음악을 틀고 밤늦게까지 이야기하고 춤도 췄어요. 정말 즐거운 시간이었어요!',
            ]
        }
    ]
  },
  {
    id: 'pabloNeruda',
    themeTitleCoreano: '파블로 네루다의 집 ✒️',
    themeTitleEspanol: 'Casas de Pablo Neruda',
    themeIcon: FaBookOpen,
    themeImage: 'https://placehold.co/400x300/4682B4/FFFFFF?text=Neruda+Casa', // REEMPLAZA
    recuerdos: [
        {
            id: 'neruda_la_chascona_visita', // Changed ID
            recuerdoTitleCoreano: '라 차스코나에서의 오후',
            recuerdoTitleEspanol: 'Tarde en La Chascona',
            image: 'https://placehold.co/600x400/B0C4DE/333?text=La+Chascona+Interior', // REEMPLAZA
            narraciones: [
                '어제 산티아고에서 파블로 네루다의 집, 라 차스코나에 갔어요.',
                '집이 정말 독특하고 예술적이었어요. 시인의 물건들을 많이 봤어요.',
                '네루다의 시와 삶에 대해 더 많이 알게 되었어요. 감동적이었어요.',
            ]
        }
    ]
  },
  {
    id: 'atacama',
    themeTitleCoreano: '아타카마 사막의 별 ✨',
    themeTitleEspanol: 'Estrellas en Atacama',
    themeIcon: FaMoon,
    themeImage: 'https://placehold.co/400x300/2F4F4F/FFFFFF?text=Atacama+Noche', // REEMPLAZA
    recuerdos: [
        {
            id: 'atacama_valle_luna_estrellas', // Changed ID
            recuerdoTitleCoreano: '달의 계곡과 밤하늘',
            recuerdoTitleEspanol: 'Valle de la Luna y Cielo Nocturno',
            image: 'https://placehold.co/600x400/D2B48C/333?text=Valle+Luna+Estrellas', // REEMPLAZA
            narraciones: [
                '어제 아타카마 사막에서 달의 계곡에 갔어요. 풍경이 정말 달 표면 같았어요!',
                '저녁에는 별을 봤는데, 하늘에 별이 정말 많아서 숨이 막힐 것 같았어요.',
                '가이드 아저씨가 별자리에 대해 설명해 주셨어요. 신기했어요.',
            ]
        }
    ]
  },
  {
    id: 'uyuni',
    themeTitleCoreano: '우유니 소금 사막 🇧🇴',
    themeTitleEspanol: 'Salar de Uyuni, Bolivia',
    themeIcon: GiSaltShaker,
    themeImage: 'https://placehold.co/400x300/E6E6FA/0000CD?text=Salar+Uyuni', // REEMPLAZA
    recuerdos: [
        {
            id: 'uyuni_espejo_cielo', // Changed ID
            recuerdoTitleCoreano: '하늘을 담은 소금 사막',
            recuerdoTitleEspanol: 'El Desierto de Sal que Refleja el Cielo',
            image: 'https://placehold.co/600x400/B0E0E6/000080?text=Uyuni+Reflejo', // REEMPLAZA
            narraciones: [
                '어제 볼리비아 우유니 소금 사막에 갔어요. 정말 놀라운 곳이었어요.',
                '세상에서 가장 큰 거울 같았어요. 하늘과 땅이 하나가 된 것 같았어요.',
                '거기에서 재미있는 사진을 많이 찍었어요. 잊지 못할 경험이었어요.',
            ]
        }
    ]
  },
  {
    id: 'playasSudamerica',
    themeTitleCoreano: '남미의 아름다운 해변들 🌊',
    themeTitleEspanol: 'Playas Hermosas de Sudamérica',
    themeIcon: FaWater, // Changed icon
    themeImage: 'https://placehold.co/400x300/87CEFA/0000FF?text=Playas+Sudamerica', // REEMPLAZA
    recuerdos: [
        {
            id: 'playa_brasil_copacabana', // Example
            recuerdoTitleCoreano: '브라질 코파카바나 해변',
            recuerdoTitleEspanol: 'Playa Copacabana, Brasil',
            image: 'https://placehold.co/600x400/3CB371/FFFFFF?text=Copacabana', // REEMPLAZA
            narraciones: [
                '어제 브라질의 코파카바나 해변에서 하루를 보냈어요.',
                '따뜻한 바닷물에서 수영하고, 모래사장 위에서 책을 읽었어요.',
                '코코넛 워터도 마셨어요. 정말 시원하고 맛있었어요!',
            ]
        },
        {
            id: 'playa_colombia_tayrona', // Example
            recuerdoTitleCoreano: '콜롬비아 타이로나 국립공원 해변',
            recuerdoTitleEspanol: 'Playa Parque Tayrona, Colombia',
            image: 'https://placehold.co/600x400/20B2AA/FFFFFF?text=Tayrona', // REEMPLAZA
            narraciones: [
                '콜롬비아 타이로나 국립공원 안에 있는 해변에 갔어요.',
                '정글을 지나서 도착한 해변은 정말 천국 같았어요.',
                '맑은 물에서 스노클링을 했어요. 예쁜 물고기들을 많이 봤어요.',
            ]
        }
    ]
  },
  {
    id: 'mendoza',
    themeTitleCoreano: '멘도사의 와인 🇦🇷',
    themeTitleEspanol: 'Vino en Mendoza, Argentina',
    themeIcon: FaWineGlassAlt,
    themeImage: 'https://placehold.co/400x300/800000/FFFFFF?text=Mendoza+Vino', // REEMPLAZA
    recuerdos: [
        {
            id: 'mendoza_bodega_tour', // Changed ID
            recuerdoTitleCoreano: '와이너리 투어와 시음',
            recuerdoTitleEspanol: 'Tour por Bodega y Degustación',
            image: 'https://placehold.co/600x400/CD853F/FFFFFF?text=Bodega+Mendoza', // REEMPLAZA
            narraciones: [
                '어제 아르헨티나 멘도사에서 와이너리 투어를 했어요.',
                '포도밭이 정말 넓고 아름다웠어요. 와인 만드는 과정도 배웠어요.',
                '맛있는 와인을 여러 종류 마셔봤어요. 특히 말벡 와인이 기억에 남아요.',
            ]
        }
    ]
  },
  {
    id: 'amigosSudamerica',
    themeTitleCoreano: '여행 중 만난 친구들 🧑‍🤝‍🧑',
    themeTitleEspanol: 'Amigos Conocidos en el Viaje',
    themeIcon: FaUsers,
    themeImage: 'https://placehold.co/400x300/FF6347/FFFFFF?text=Amigos+Viajeros', // REEMPLAZA
    recuerdos: [ 
        {
            id: 'amigo_cusco_aventura', // Changed ID
            recuerdoTitleCoreano: '쿠스코에서 만난 독일 친구',
            recuerdoTitleEspanol: 'Amigo Alemán en Cusco',
            image: 'https://placehold.co/600x400/DAA520/333?text=Amigo+Cusco+Plaza', // REEMPLAZA
            narraciones: [
                '페루 쿠스코의 한 호스텔에서 새로운 친구를 사귀었어요.',
                '그 친구는 독일에서 왔어요. 같이 마추픽추 이야기를 하고 여행 계획을 세웠어요.',
                '서로의 여행 경험을 나누는 것은 정말 즐거웠어요. 지금도 가끔 연락해요.',
            ],
            albumStyle: { rotation: 'transform rotate-3', decoration: 'pin' }
        },
        {
            id: 'amigos_santiago_comida', // Changed ID
            recuerdoTitleCoreano: '산티아고 교환학생 친구들과 저녁 식사',
            recuerdoTitleEspanol: 'Cena con Amigos de Intercambio en Santiago',
            image: 'https://placehold.co/600x400/40E0D0/333?text=Amigos+Santiago+Comida', // REEMPLAZA
            narraciones: [
                '산티아고에서 여러 나라에서 온 교환학생 친구들을 많이 만났어요.',
                '어제 저녁에는 다 같이 모여서 한국 음식을 만들어 먹었어요. 제가 불고기를 만들었어요!',
                '그 친구들 덕분에 칠레 생활이 훨씬 더 재미있었어요.',
            ],
            albumStyle: { rotation: 'transform -rotate-1', decoration: 'tape' }
        }
    ]
  },
  {
    id: 'despedidaSantiagoFinal', // Changed ID to be unique
    themeTitleCoreano: '산티아고와의 작별 👋',
    themeTitleEspanol: 'Despedida de Santiago',
    themeIcon: FaHeartBroken,
    themeImage: 'https://placehold.co/400x300/E6E6FA/483D8B?text=Adios+Santiago+Vista', // REEMPLAZA
    recuerdos: [
        {
            id: 'despedida_aeropuerto_scl', // Changed ID
            recuerdoTitleCoreano: '공항에서의 마지막 인사',
            recuerdoTitleEspanol: 'Último Adiós en el Aeropuerto',
            image: 'https://placehold.co/600x400/FFEBCD/8A2BE2?text=Aeropuerto+Despedida', // REEMPLAZA
            narraciones: [
                '어제 산티아고를 떠나는 날이었어요. 공항에서 친구들과 작별 인사를 했어요.',
                '정말 슬펐지만, 칠레에서의 모든 좋은 추억들을 간직할 거예요.',
                '친구들에게 꼭 다시 만나자고 약속했어요. 고마웠어요, 산티아고!',
            ],
            albumStyle: { rotation: 'transform rotate-1', decoration: 'corner'}
        }
    ]
  }
];


// Theme Card Component
const FlashbackThemeCard = ({ theme, onThemeSelect }) => (
  <div 
    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-bitna-strong-pink group"
    onClick={() => onThemeSelect(theme)}
  >
    <div className="relative h-48 w-full">
      <img 
        src={theme.themeImage} 
        alt={theme.themeTitleEspanol} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/CCCCCC/FFFFFF?text=Error"; }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
      {theme.themeIcon && React.createElement(theme.themeIcon, { className: "absolute top-3 right-3 text-3xl text-white opacity-70 group-hover:opacity-100"})}
    </div>
    <div className="p-4">
      <h3 className="font-single-day text-2xl text-bitna-strong-pink truncate">{theme.themeTitleCoreano}</h3>
      <p className="text-sm text-bitna-muted-pink">{theme.themeTitleEspanol}</p>
    </div>
  </div>
);

// Recuerdo Card Component
const RecuerdoCard = ({ recuerdo, onRecuerdoSelect }) => {
  const rotationClass = recuerdo.albumStyle?.rotation || 'transform rotate-0';
  const decorationType = recuerdo.albumStyle?.decoration;

  return (
    <div 
      className={`relative p-2 bg-white rounded-md shadow-lg transform hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group ${rotationClass}`}
      onClick={() => onRecuerdoSelect(recuerdo)}
    >
      {decorationType === 'tape' && (
        <><div className="absolute -top-1 -left-1 w-8 h-4 bg-yellow-300 opacity-70 transform -rotate-45 rounded-sm group-hover:bg-yellow-400"></div><div className="absolute -bottom-1 -right-1 w-8 h-4 bg-yellow-300 opacity-70 transform -rotate-45 rounded-sm group-hover:bg-yellow-400"></div></>
      )}
      {decorationType === 'pin' && (
        <FaThumbtack className="absolute -top-2 -right-2 text-red-500 text-xl transform rotate-12 opacity-80 group-hover:opacity-100"/>
      )}
       {decorationType === 'corner' && (
        <><div className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-t-bitna-lime-green border-r-[20px] border-r-transparent opacity-60 group-hover:opacity-80"></div><div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-b-bitna-lime-green border-l-[20px] border-l-transparent opacity-60 group-hover:opacity-80"></div></>
      )}
      <img 
        src={recuerdo.image} 
        alt={recuerdo.recuerdoTitleEspanol} 
        className="w-full h-40 object-cover rounded-sm border border-gray-200" 
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/FFFFFF?text=Error"; }}
      />
      <div className="pt-2 px-1 text-center">
        <h4 className="font-single-day text-md text-bitna-strong-pink truncate">{recuerdo.recuerdoTitleCoreano}</h4>
        <p className="text-xs text-gray-500">{recuerdo.recuerdoTitleEspanol}</p>
      </div>
    </div>
  );
};

// Recuerdo Detail Modal
const RecuerdoDetailModal = ({ recuerdo, onClose, onNext, onPrev, currentIndex, totalInTheme }) => {
  if (!recuerdo) return null;

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < totalInTheme - 1;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-in-out">
      <div className="bg-gradient-to-br from-white via-bitna-light-pink to-pink-200 p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 bg-white text-bitna-strong-pink rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors z-20"
          aria-label="Close modal"
        >
          <FaTimes size={20} />
        </button>
        
        <h2 className="font-single-day text-3xl md:text-4xl text-bitna-strong-pink mb-2 text-center pt-8">{recuerdo.recuerdoTitleCoreano}</h2>
        <p className="text-center text-bitna-muted-pink text-sm mb-4 -mt-1">{recuerdo.recuerdoTitleEspanol}</p>
        <p className="text-center text-xs text-gray-500 mb-4">Recuerdo {currentIndex + 1} de {totalInTheme}</p>


        <div className="relative mb-6">
            {hasPrev && (
                <button 
                    onClick={onPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 bg-white bg-opacity-70 hover:bg-opacity-100 text-bitna-strong-pink p-2 rounded-full shadow-md z-10 transition-all hover:scale-110"
                    aria-label="Recuerdo anterior"
                >
                    <FaChevronLeft size={20}/>
                </button>
            )}
            <img 
              src={recuerdo.image} 
              alt={recuerdo.recuerdoTitleEspanol} 
              className="w-full max-h-[40vh] object-contain rounded-lg shadow-lg border-4 border-white"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/FFFFFF?text=Error"; }}
            />
            {hasNext && (
                 <button 
                    onClick={onNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 bg-white bg-opacity-70 hover:bg-opacity-100 text-bitna-strong-pink p-2 rounded-full shadow-md z-10 transition-all hover:scale-110"
                    aria-label="Siguiente recuerdo"
                >
                    <FaChevronRight size={20}/>
                </button>
            )}
        </div>
        
        <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
          <h5 className="font-semibold text-bitna-muted-pink">나의 일기 (My Diary Entry):</h5>
          {recuerdo.narraciones.map((narracion, index) => (
            <p key={index} className="bg-white bg-opacity-50 p-3 rounded-md shadow-sm">
              <IoSparkles className="inline mr-2 text-yellow-400" /> {narracion}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};


function Unit6TravelFlashbacks() {
  const [selectedTheme, setSelectedTheme] = useState(null); 
  const [selectedRecuerdo, setSelectedRecuerdo] = useState(null); 
  const [currentRecuerdoIndex, setCurrentRecuerdoIndex] = useState(0);

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    setSelectedRecuerdo(null); 
    setCurrentRecuerdoIndex(0); 
  };

  const handleRecuerdoSelect = (recuerdo) => {
    setSelectedRecuerdo(recuerdo);
    if (selectedTheme) {
      const index = selectedTheme.recuerdos.findIndex(r => r.id === recuerdo.id);
      setCurrentRecuerdoIndex(index);
    }
  };

  const handleCloseModal = () => {
    setSelectedRecuerdo(null);
  };

  const handleBackToThemes = () => {
    setSelectedTheme(null);
    setSelectedRecuerdo(null);
  }

  const handleNextRecuerdo = () => {
    if (selectedTheme && currentRecuerdoIndex < selectedTheme.recuerdos.length - 1) {
      const nextIndex = currentRecuerdoIndex + 1;
      setSelectedRecuerdo(selectedTheme.recuerdos[nextIndex]);
      setCurrentRecuerdoIndex(nextIndex);
    }
  };

  const handlePrevRecuerdo = () => {
    if (selectedTheme && currentRecuerdoIndex > 0) {
      const prevIndex = currentRecuerdoIndex - 1;
      setSelectedRecuerdo(selectedTheme.recuerdos[prevIndex]);
      setCurrentRecuerdoIndex(prevIndex);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-200 py-8 px-4 pt-16 md:pt-20">
      <div className="container mx-auto">
        <header className="text-center mb-10 md:mb-12">
          <h1 className="font-single-day text-4xl md:text-6xl text-bitna-strong-pink mb-2 flex items-center justify-center">
            <FaPlaneDeparture className="mr-3 text-bitna-muted-pink text-3xl md:text-5xl transform -rotate-12" />
            빛나의 남미 여행 일기!
            <IoSparkles className="ml-3 text-yellow-400 text-3xl md:text-5xl animate-pulse" />
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            어제 있었던 일들: 나의 칠레 교환학생과 남미 여행 이야기 ✈️🇨🇱🇧🇴🇦🇷
          </p>
        </header>

        {!selectedTheme ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {travelFlashbacksData.map((theme) => (
              <FlashbackThemeCard key={theme.id} theme={theme} onThemeSelect={handleThemeSelect} />
            ))}
          </div>
        ) : (
          <div>
            <button 
              onClick={handleBackToThemes}
              className="mb-8 bg-bitna-muted-pink text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-bitna-strong-pink transition-colors duration-200 flex items-center group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform transition-transform duration-200 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              모든 테마 보기 (All Themes)
            </button>
            <h2 className="font-single-day text-3xl md:text-4xl text-bitna-strong-pink mb-8 text-center">
              {selectedTheme.themeTitleCoreano}
            </h2>
            <div className="bg-bitna-light-pink p-4 md:p-6 rounded-2xl shadow-inner border-2 border-bitna-muted-pink">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {selectedTheme.recuerdos.map((recuerdo) => (
                  <RecuerdoCard key={recuerdo.id} recuerdo={recuerdo} onRecuerdoSelect={handleRecuerdoSelect} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <RecuerdoDetailModal 
        recuerdo={selectedRecuerdo} 
        onClose={handleCloseModal}
        onNext={handleNextRecuerdo}
        onPrev={handlePrevRecuerdo}
        currentIndex={currentRecuerdoIndex}
        totalInTheme={selectedTheme ? selectedTheme.recuerdos.length : 0}
      />
    </div>
  );
}

export default Unit6TravelFlashbacks;
