// src/data/Unit6Data.js

// Importa los iconos que se usan directamente en los datos
import { 
    FaPlaneDeparture, 
    FaMapMarkedAlt, 
    FaMountain, 
    FaFutbol, 
    FaUmbrellaBeach, 
    FaGlassCheers, 
    FaBookOpen, 
    FaMoon, 
    FaUsers, 
    FaHeartBroken, 
    FaWater, 
    FaWineGlassAlt, 
    FaCity 
} from 'react-icons/fa';
import { 
    GiDesert, 
    GiSaltShaker 
} from 'react-icons/gi';

// Importa todas las imágenes necesarias para los flashbacks
// Carpeta 1
import stgo1_cover from '../../../assets/unit6/1/cover.jpg';
import stgo1_cafe from '../../../assets/unit6/1/cafe.jpg';
import stgo1_colocolo from '../../../assets/unit6/1/colocolo.jpg';
import stgo1_flag from '../../../assets/unit6/1/flag.jpg';
import stgo1_newyork from '../../../assets/unit6/1/newyork.jpg';
import stgo1_piojera from '../../../assets/unit6/1/piojera.jpg';
import stgo1_costanera from '../../../assets/unit6/1/costanera.jpg';
import stgo1_snow from '../../../assets/unit6/1/snow.jpg';

// Carpeta 2
import dunes1_2 from '../../../assets/unit6/2/dunes1.jpg';
import dunes2_2 from '../../../assets/unit6/2/dunes2.jpg';
import dunes3_2 from '../../../assets/unit6/2/dunes3.jpg';
import dunes4_2 from '../../../assets/unit6/2/dunes4.jpg';
import dunes5_2 from '../../../assets/unit6/2/dunes5.jpg';
import family_2 from '../../../assets/unit6/2/family.jpg';
import firstday_2 from '../../../assets/unit6/2/firstday.jpg';
import house_2 from '../../../assets/unit6/2/house.jpg';

// Carpeta 3
import beach_3 from '../../../assets/unit6/3/beach.jpg';
import beach2_3 from '../../../assets/unit6/3/beach2.jpg';
import club_3 from '../../../assets/unit6/3/club.jpg';
import dog_3 from '../../../assets/unit6/3/dog.jpg';
import door_3 from '../../../assets/unit6/3/door.jpg';
import first7_3 from '../../../assets/unit6/3/first7.jpg';
import hiking1_3 from '../../../assets/unit6/3/hiking1.jpg';
import hiking2_3 from '../../../assets/unit6/3/hiking2.jpg';
import homesunset_3 from '../../../assets/unit6/3/homesunset.jpg';
import islanegra_3 from '../../../assets/unit6/3/islanegra.jpg';
import islanegra2_3 from '../../../assets/unit6/3/islanegra2.jpg';
import neruda_3 from '../../../assets/unit6/3/neruda.jpg';
import sunset_3 from '../../../assets/unit6/3/sunset.jpg';
import uvm_3 from '../../../assets/unit6/3/uvm.jpg';
import waterfall1_3 from '../../../assets/unit6/3/waterfall1.JPG';
import waterfall2_3 from '../../../assets/unit6/3/waterfall2.JPG';

// Carpeta 4
import bike_4 from '../../../assets/unit6/4/bike.jpg';
import cactus_4 from '../../../assets/unit6/4/cactus.JPG';
import canyon_4 from '../../../assets/unit6/4/canyon.JPG';
import devilsthroat_4 from '../../../assets/unit6/4/devilsthroat.jpg';
import godzilla_4 from '../../../assets/unit6/4/godzilla.jpg';
import llama_4 from '../../../assets/unit6/4/llama.jpg';
import rocks_4 from '../../../assets/unit6/4/rocks.JPG';
import saltflat_4 from '../../../assets/unit6/4/saltflat.jpg';
import saltflat2_4 from '../../../assets/unit6/4/saltflat2.jpg';
import terremoto_4 from '../../../assets/unit6/4/terremoto.jpg';

// Carpeta 5
import breakfast_5 from '../../../assets/unit6/5/breakfast.jpg';
import mountain_5 from '../../../assets/unit6/5/mountain.jpg';
import wine_5 from '../../../assets/unit6/5/wine.jpg';

// Carpeta 6
import dunes_6 from '../../../assets/unit6/6/dunes.jpg';
import lastsunset_6 from '../../../assets/unit6/6/lastsunset.jpg';
import melvin_6 from '../../../assets/unit6/6/melvin.jpg';
import pandemuerto_6 from '../../../assets/unit6/6/pandemuerto.jpg';

const travelFlashbacksData = [
  { // Tema 1 - Carpeta 1
    id: 'stgoFirstWeek',
    themeTitleCoreano: '내 첫 산티아고 🏙️',
    themeTitleEspanol: 'Mi Primera Vez en Santiago',
    themeIcon: FaMapMarkedAlt,
    themeImage: stgo1_cover, 
    recuerdos: [
      { 
        id: 'santiago_colocolo',
        recuerdoTitleCoreano: '콜로콜로 경기!',
        recuerdoTitleEspanol: '¡Partido de Colo-Colo!',
        image: stgo1_colocolo, 
        narraciones: ['칠레 축구 경기를 봤어요.'], 
        albumStyle: { rotation: 'transform rotate-2', decoration: 'corner' } 
      },
      { 
        id: 'santiago_costanera',
        recuerdoTitleCoreano: '코스타네라 센터',
        recuerdoTitleEspanol: 'Costanera Center',
        image: stgo1_costanera, 
        narraciones: ['코스타네라 센터에 올라갔어요.', '산티아고 시내를 봤어요. 정말 높았어요!'], 
        albumStyle: { rotation: 'transform -rotate-1', decoration: 'tape' } 
      },
      { 
        id: 'santiago_flag',
        recuerdoTitleCoreano: '칠레 국기',
        recuerdoTitleEspanol: 'Bandera de Chile',
        image: stgo1_flag, 
        narraciones: ['산티아고에서 큰 칠레 국기를 봤어요.', '하얀색, 파란색, 빨간색이 있었어요.'], 
        albumStyle: { rotation: 'transform rotate-1', decoration: 'pin' } 
      },
      { 
        id: 'santiago_newyork',
        recuerdoTitleCoreano: '뉴욕 거리',
        recuerdoTitleEspanol: 'Calle Nueva York',
        image: stgo1_newyork, 
        narraciones: ['뉴욕에 갔어요', '뉴욕이 산티아고에서 거리예요'], 
        albumStyle: { rotation: 'transform -rotate-2', decoration: 'corner' } 
      },
      { 
        id: 'santiago_piojera',
        recuerdoTitleCoreano: '라 피오헤라',
        recuerdoTitleEspanol: 'La Piojera',
        image: stgo1_piojera, 
        narraciones: ['유명한 라 피오헤라에 갔어요.', '거기에서 떼레모토를 마셨어요.'], 
        albumStyle: { rotation: 'transform rotate-2', decoration: 'tape' } 
      },
      { 
        id: 'santiago_snow',
        recuerdoTitleCoreano: '안데스 산맥의 눈',
        recuerdoTitleEspanol: 'Nieve en los Andes',
        image: stgo1_snow, 
        narraciones: ['산티아고에서 안데스 산맥을 봤어요.', '산 위에 눈이 있었어요.'], 
        albumStyle: { rotation: 'transform -rotate-3', decoration: 'pin' } 
      },
      { 
        id: 'santiago_cafe',
        recuerdoTitleCoreano: '예쁜 카페',
        recuerdoTitleEspanol: 'Cafetería Bonita',
        image: stgo1_cafe, 
        narraciones: ['친구들하고 예쁜 카페에 갔어요.', '거기에서 커피를 마셨어요. 맛있었어요!'], 
        albumStyle: { rotation: 'transform rotate-1', decoration: 'corner' } 
      },
    ],
  },
  { // Tema 2 - Carpeta 2
    id: 'firstDayVina',
    themeTitleCoreano: '비냐 델 마르에서 첫날 🌅',
    themeTitleEspanol: 'Primer día en Viña',
    themeIcon: FaUsers,
    themeImage: firstday_2, 
    recuerdos: [ 
        { 
            id: 'vina_dunes1',
            recuerdoTitleCoreano: '콘콘의 모래 언덕',
            recuerdoTitleEspanol: 'Dunas de Concón 1',
            image: dunes1_2,
            narraciones: ['비냐 델 마르 옆에 콘콘 있어요. 모래 언덕에 갔어요.'],
            albumStyle: { rotation: 'transform -rotate-2', decoration: 'tape' } 
        },
        { 
            id: 'vina_dunes2',
            recuerdoTitleCoreano: '교환학생들 하고 모래 언덕',
            recuerdoTitleEspanol: 'Dunas 2',
            image: dunes2_2,
            narraciones: ['이 모든 사람들은 교환학생이에요.', '그날 그들을 만났어요.'],
            albumStyle: { rotation: 'transform rotate-1', decoration: 'pin' } 
        },
        { 
            id: 'vina_dunes3',
            recuerdoTitleCoreano: '일몰',
            recuerdoTitleEspanol: 'Dunas 3',
            image: dunes3_2,
            narraciones: ['모래 언덕에서 일몰을 봤어요.'],
            albumStyle: { rotation: 'transform rotate-3', decoration: 'corner' } 
        },
        { 
            id: 'vina_dunes4',
            recuerdoTitleCoreano: '모래 언덕 4',
            recuerdoTitleEspanol: 'Dunas 4',
            image: dunes4_2,
            narraciones: ['하늘이 정말 예뻤어요.'],
            albumStyle: { rotation: 'transform -rotate-1', decoration: 'tape' } 
        },
        { 
            id: 'vina_family',
            recuerdoTitleCoreano: '칠레 가족',
            recuerdoTitleEspanol: 'Con mi Familia Chilena',
            image: dunes5_2,
            narraciones: ['저는 칠레에서 친고하고 교환학생들하고 함께 살았어요.','멕시코 사람 세 명하고 노르웨이 사람 한 명이 있었어요'],
            albumStyle: { rotation: 'transform -rotate-1', decoration: 'corner' } 
        },
        { 
            id: 'vina_house',
            recuerdoTitleCoreano: '내 칠레 집',
            recuerdoTitleEspanol: 'La casa donde viví',
            image: house_2,
            narraciones: ['이 집은 제 비냐 델 마르에서 집이에요.'],
            albumStyle: { rotation: 'transform rotate-2', decoration: 'tape' } 
        },
    ]
  },
  { // Tema 3 - Carpeta 3
    id: 'vinaDelMarLife',
    themeTitleCoreano: '비냐 델 마르의 생활 🌊',
    themeTitleEspanol: 'La Vida en Viña del Mar',
    themeIcon: FaUmbrellaBeach,
    themeImage: beach_3, 
    recuerdos: [
        { 
            id: 'vina_beach2',
            recuerdoTitleCoreano: '해변에서',
            recuerdoTitleEspanol: 'En la playa',
            image: beach2_3,
            narraciones: ['해변에 갔어요.', '배구를 했어요'],
            albumStyle: { rotation: 'transform -rotate-1', decoration: 'pin' } 
        },
        { 
            id: 'vina_club',
            recuerdoTitleCoreano: '친구들하고 클럽',
            recuerdoTitleEspanol: 'Club con Amigos',
            image: club_3,
            narraciones: ['밤에 친구들하고 클럽에 갔어요.'],
            albumStyle: { rotation: 'transform rotate-2', decoration: 'tape' } 
        },
        { 
            id: 'vina_dog',
            recuerdoTitleCoreano: '해변의 강아지',
            recuerdoTitleEspanol: 'Perro en la Playa',
            image: dog_3,
            narraciones: ['해변에서 귀여운 강아지를 만났어요.'],
            albumStyle: { rotation: 'transform -rotate-2', decoration: 'corner' } 
        },
        { 
            id: 'vina_door',
            recuerdoTitleCoreano: '예쁜 문',
            recuerdoTitleEspanol: 'Puerta Bonita',
            image: door_3,
            narraciones: ['발파라이소에서 예쁜 문을 봤어요.'],
            albumStyle: { rotation: 'transform rotate-3', decoration: 'tape' } 
        },
        { 
            id: 'vina_hiking1',
            recuerdoTitleCoreano: '하이킹',
            recuerdoTitleEspanol: 'Senderismo 1',
            image: hiking1_3,
            narraciones: ['친구들하고 같이 하이킹을 갔어요.', '이 사람은 제 미국 친고예요. 이름을 브룩이에요'],
            albumStyle: { rotation: 'transform rotate-1', decoration: 'corner' } 
        },
        { 
            id: 'vina_islanegra2',
            recuerdoTitleCoreano: '이슬라 네그라',
            recuerdoTitleEspanol: 'Isla Negra 2',
            image: islanegra2_3,
            narraciones: ['네루다의 집, 이슬라 네그라에 갔어요.'],
            albumStyle: { rotation: 'transform -rotate-3', decoration: 'tape' } 
        },
        { 
            id: 'vina_islanegra',
            recuerdoTitleCoreano: '이슬라 네그라',
            recuerdoTitleEspanol: 'Isla Negra',
            image: islanegra_3,
            narraciones: ['우리는 엠파나다 하고 커피를 먹었어요'],
            albumStyle: { rotation: 'transform rotate-1', decoration: 'corner' } 
        },
        { 
            id: 'vina_neruda',
            recuerdoTitleCoreano: '네루다의 집',
            recuerdoTitleEspanol: 'Casa de Neruda (La Sebastiana)',
            image: neruda_3,
            narraciones: ['우리는 라 세바스티아나에 있어요', '이들은 칠레에서 가장 친한 친구들이에요.'],
            albumStyle: { rotation: 'transform rotate-2', decoration: 'pin' } 
        },
        { 
            id: 'vina_sunset',
            recuerdoTitleCoreano: '해변의 일몰',
            recuerdoTitleEspanol: 'Atardecer en la playa',
            image: sunset_3,
            narraciones: ['해변에서 일몰은 정말 아름다웠어요.'],
            albumStyle: { rotation: 'transform -rotate-1', decoration: 'corner' } 
        },
        { 
            id: 'vina_uvm',
            recuerdoTitleCoreano: 'UVM 대학교',
            recuerdoTitleEspanol: 'Universidad UVM',
            image: uvm_3,
            narraciones: ['저는 비냐 델 마르에서 UVM 대학교에 다녔어요.'],
            albumStyle: { rotation: 'transform rotate-1', decoration: 'tape' } 
        },
        { 
            id: 'vina_waterfall2',
            recuerdoTitleCoreano: '폭포',
            recuerdoTitleEspanol: 'Cascada 2',
            image: waterfall2_3,
            narraciones: ['하이킹 중에 폭포를 발견했어요.'],
            albumStyle: { rotation: 'transform rotate-2', decoration: 'corner' } 
        },
        { 
            id: 'vina_waterfall1',
            recuerdoTitleCoreano: '미아 ',
            recuerdoTitleEspanol: 'Cascada 1',
            image: waterfall1_3,
            narraciones: ['녀는 미아예요. 우리는 같이 재미있었어.'],
            albumStyle: { rotation: 'transform -rotate-2', decoration: 'pin' } 
        },
    ]
  },
  { 
    id: 'atacama_uyuni',
    themeTitleCoreano: '아타카마 & 우유니 ✨',
    themeTitleEspanol: 'Atacama y Uyuni',
    themeIcon: FaMoon,
    themeImage: saltflat2_4, 
    recuerdos: [
        {
            id: 'atacama_bike',
            recuerdoTitleCoreano: '자전거 투어',
            recuerdoTitleEspanol: 'Tour en Bicicleta',
            image: bike_4,
            narraciones: ['아타카마에서 자전거 투어를 했어요.', '우리는 악마의 목구멍으로 갔어요'],
            albumStyle: {
                rotation: 'transform rotate-1',
                decoration: 'tape'
            }
        },
        {
            id: 'atacama_canyon',
            recuerdoTitleCoreano: '협곡',
            recuerdoTitleEspanol: 'Cañón',
            image: canyon_4,
            narraciones: ['우리는 볼리비아의 협곡에 갔어요. 정말 멋있었어요.'],
            albumStyle: {
                rotation: 'transform rotate-2',
                decoration: 'corner'
            }
        },
        {
            id: 'atacama_godzilla',
            recuerdoTitleCoreano: '우유니 소금사막',
            recuerdoTitleEspanol: 'Roca Godzilla',
            image: godzilla_4,
            narraciones: ['우리는 우유니 소금사막에 갔어요.'],
            albumStyle: {
                rotation: 'transform rotate-3',
                decoration: 'pin'
            }
        },
        {
            id: 'atacama_llama',
            recuerdoTitleCoreano: '라마!',
            recuerdoTitleEspanol: '¡Llama!',
            image: llama_4,
            narraciones: ['여행 중에 귀여운 라마를 봤어요.'],
            albumStyle: {
                rotation: 'transform -rotate-2',
                decoration: 'corner'
            }
        },
        {
            id: 'uyuni_saltflat_2',
            recuerdoTitleCoreano: '우유니 소금사막',
            recuerdoTitleEspanol: 'Salar de Uyuni 2',
            image: saltflat2_4,
            narraciones: ['볼리비아에서 놀라운 친구들을 만났어요.', '우리는 포르투뇰을 발명했어요!'],
            albumStyle: {
                rotation: 'transform rotate-2',
                decoration: 'corner'
            }
        },
        {
            id: 'uyuni_terremoto',
            recuerdoTitleCoreano: '떼레모토!',
            recuerdoTitleEspanol: '¡Terremoto!',
            image: terremoto_4,
            narraciones: ['여행 중에 떼레모토를 마셨어요.'],
            albumStyle: {
                rotation: 'transform -rotate-3',
                decoration: 'tape'
            }
        },
    ]
  },
  { 
    id: 'mendoza',
    themeTitleCoreano: '멘도사 🇦🇷',
    themeTitleEspanol: 'Vino en Mendoza, Argentina',
    themeIcon: FaWineGlassAlt,
    themeImage: mountain_5, 
    recuerdos: [
        { 
            id: 'mendoza_breakfast',
            recuerdoTitleCoreano: '맛있는 아침 식사',
            recuerdoTitleEspanol: 'Desayuno Delicioso',
            image: breakfast_5,
            narraciones: ['멘도사에서 아침을 먹었어요.', '빵은 정말 맛있었어요.'],
            albumStyle: { rotation: 'transform rotate-2', decoration: 'pin' } 
        },
        { 
            id: 'mendoza_wine',
            recuerdoTitleCoreano: '멘도사의 와인',
            recuerdoTitleEspanol: 'Vino de Mendoza',
            image: wine_5,
            narraciones: ['우리는 와인을 많이 마셨어요.'],
            albumStyle: { rotation: 'transform -rotate-1', decoration: 'corner' } 
        },
        { 
            id: 'mendoza_mountain',
            recuerdoTitleCoreano: '안데스 산맥',
            recuerdoTitleEspanol: 'Cordillera de los Andes',
            image: mountain_5,
            narraciones: ['멘도사에서도 안데스 산맥을 봤어요.'],
            albumStyle: { rotation: 'transform -rotate-1', decoration: 'corner' } 
        },
    ]
  },
  { 
    id: 'finalDays', 
    themeTitleCoreano: '남아메리카에서 마지막 날들 👋',
    themeTitleEspanol: 'Últimos Días en Sudamérica',
    themeIcon: FaHeartBroken,
    themeImage: lastsunset_6, 
    recuerdos: [
        { 
            id: 'final_dunes',
            recuerdoTitleCoreano: '마지막 모래 언덕',
            recuerdoTitleEspanol: 'Las Últimas Dunas',
            image: dunes_6,
            narraciones: ['모래 언덕에 갔어요.', '작별 인사를 했어요.'],
            albumStyle: { rotation: 'transform rotate-1', decoration: 'tape' } 
        },
        { 
            id: 'final_melvin',
            recuerdoTitleCoreano: '멜빈',
            recuerdoTitleEspanol: 'Amigo Melvin',
            image: melvin_6,
            narraciones: ['우리는 멜빈을 마셨어요! 멜빈은 와인하고 멜론이에요.'],
            albumStyle: { rotation: 'transform -rotate-2', decoration: 'pin' } 
        },
        { 
            id: 'final_pandemuerto',
            recuerdoTitleCoreano: '판 데 무에르토',
            recuerdoTitleEspanol: 'Pan de Muerto',
            image: pandemuerto_6,
            narraciones: ['칠레에서 저는 판 데 무에르토를 만들었어요. 모두가 좋아했어요'],
            albumStyle: { rotation: 'transform rotate-2', decoration: 'corner' } 
        },
        { 
            id: 'final_lastsunset',
            recuerdoTitleCoreano: '마지막 일몰',
            recuerdoTitleEspanol: 'El Último Atardecer',
            image: lastsunset_6,
            narraciones: ['남아메리카에서 마지막 일몰을 봤어요. 슬펐어요.'],
            albumStyle: { rotation: 'transform -rotate-1', decoration: 'tape' } 
        },
    ]
  }
];

export default travelFlashbacksData;
