// src/pages/units/Unit5HwachaePrep.jsx
import React, { useState, useEffect } from 'react';
import { FaListAlt, FaCheckCircle } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

// --- TUS IMÁGENES IMPORTADAS ---
import hwachaeBowlBgImg from '../../assets/unit5/bowl.PNG'; 
import ciderImg from '../../assets/unit5/cider.PNG';
import fruitsImg from '../../assets/unit5/fruits.PNG';
import iceImg from '../../assets/unit5/ice.PNG';    
import jellyImg from '../../assets/unit5/jelly.PNG';  
import milkImg from '../../assets/unit5/milk.PNG';   
import sojuImg from '../../assets/unit5/soju.PNG';   
import strawberriesImg from '../../assets/unit5/starwberries.PNG';
import watermelonImg from '../../assets/unit5/watermelon.PNG';

// Z-Index order: bowl (0), milk (1), soju (2), cider (3), strawberries (4), watermelon (5), fruits (6), ice (7), jelly (8)
const hwachaeIngredients = [
  { 
    id: 'watermelon', 
    name: '수박', 
    koreanName: '수박',
    emojiIcon: '🍉',
    image: watermelonImg, 
    counter: '개',
    narrativeAction: "수박을 준비합니다. 수박은 정말 큽니다.", 
    exampleSentence: "시장에서: '수박 한 개 주세요.'",
    zIndexValue: 5 
  },
  { 
    id: 'strawberry', 
    name: '딸기', 
    koreanName: '딸기',
    emojiIcon: '🍓', 
    image: strawberriesImg, 
    counter: '팩', 
    narrativeAction: "딸기 두 팩을 삽니다. 아주 신선합니다!", 
    exampleSentence: "시장에서: '딸기 두 팩 주세요'.'",
    zIndexValue: 4
  },
  { 
    id: 'milk', 
    name: '우유', 
    koreanName: '우유',
    emojiIcon: '🥛', 
    image: milkImg, 
    counter: '병', 
    narrativeAction: "우유 한 병을 냉장고에서 꺼냅니다. 시원합니다!", 
    exampleSentence: "슈퍼마켓에서: '우유 한 병 주세요.'",
    zIndexValue: 1 
  },
  { 
    id: 'chilsungcider', 
    name: '칠성사이다', 
    koreanName: '칠성사이다',
    emojiIcon: '🥤', 
    image: ciderImg, 
    counter: '병', 
    narrativeAction: "칠성사이다 한 병도 준비합니다!", 
    exampleSentence: "편의점에서: '칠성사이다 두 병 주세요.'",
    zIndexValue: 3
  },
  { 
    id: 'fruitCocktail', 
    name: '과일 통주림', 
    koreanName: '과일 통주림',
    emojiIcon: '🍍',
    image: fruitsImg, 
    counter: '개',
    narrativeAction: "과일 통주림 넣습니다. 더 달콤해집니다!", 
    exampleSentence: "슈퍼마켓에서: '과일 통주림 한 개 주세요.'",
    zIndexValue: 6
  },
  { 
    id: 'jelly', 
    name: '젤리', 
    koreanName: '젤리',
    emojiIcon: '🍬',
    image: jellyImg, 
    counter: '봉지',
    narrativeAction: "여러 가지 맛 젤리 두 봉지를 준비합니다. 알록달록 예쁩니다!", 
    exampleSentence: "슈퍼마켓에서: '이 과일 젤리 두 봉지 주세요.'",
    zIndexValue: 8 
  },
  { 
    id: 'ice', 
    name: '얼음', 
    koreanName: '얼음',
    emojiIcon: '🧊', 
    image: iceImg, 
    counter: '조각', 
    narrativeAction: "얼음 몇 조각을 넣습니다!", 
    exampleSentence: "편의점에서: '얼음 많이 주세요'",
    zIndexValue: 7
  },
  { 
    id: 'soju', 
    name: '소주', 
    koreanName: '소주',
    emojiIcon: '🍶', 
    image: sojuImg, 
    counter: '병',
    narrativeAction: "화채에는 소주 한 병을 맛있습니다!", 
    exampleSentence: "편의점에서: '소주 한 병 주세요.'",
    zIndexValue: 2
  },
];

/**
 * The fifth unit page of the diary, themed around preparing Hwachae, a Korean fruit punch.
 * This page is an interactive experience where users click on ingredients from a list
 * to "add" them to a bowl. Each click updates a dialogue box with information
 * about the ingredient and its counter in Korean.
 *
 * @returns {JSX.Element} The rendered Hwachae preparation page.
 */
function Unit5HwachaePrep() {
  const [bitnaDialogue, setBitnaDialogue] = useState("오늘 친구들 하고 저는 화채를 만듭니다! 어떤 재료가 필요입니까? 🍉🍓🥛");
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [dialogueKey, setDialogueKey] = useState(0);

  useEffect(() => {
    setDialogueKey(prevKey => prevKey + 1);
  }, [bitnaDialogue]);

  const handleIngredientClick = (ingredient) => {
    setBitnaDialogue(`${ingredient.narrativeAction}\n\n${ingredient.exampleSentence}`);
    setCheckedIngredients(prev => ({ ...prev, [ingredient.id]: true }));
  };
  
  const allIngredientsChecked = hwachaeIngredients.every(ing => checkedIngredients[ing.id]);

  const ingredientsInBowl = hwachaeIngredients
    .filter(ing => checkedIngredients[ing.id])
    .sort((a, b) => a.zIndexValue - b.zIndexValue); 

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-bitna-light-pink via-pink-200 to-purple-200 py-8 px-4 pt-10 flex flex-col items-center">
      
      <h1 className="font-single-day text-4xl md:text-6xl text-bitna-strong-pink mb-8 flex items-center justify-center text-center">
        <span className="text-5xl md:text-7xl mr-3">🍉</span>
        친구들 하고 미친 화채!
        <span className="text-4xl md:text-6xl ml-3">🍓</span>
      </h1>

      <div className="w-full max-w-5xl lg:max-w-6xl flex flex-col lg:flex-row lg:space-x-8 items-start">
        {/* Columna Izquierda: Post-it y Caja de Diálogo */}
        <div className="w-full lg:w-[300px] xl:w-[350px] flex-shrink-0 order-first lg:order-none mb-8 lg:mb-0 flex flex-col space-y-6">
          <div className="bg-bitna-lime-green bg-opacity-80 p-5 rounded-xl shadow-xl border-2 border-green-600 transform lg:-rotate-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:rotate-0">
            <h2 className="font-single-day text-2xl md:text-3xl text-green-800 mb-3 flex items-center">
              <FaListAlt className="mr-3 text-green-700" />
              화채를 만들어요!
            </h2>
            <p className="text-sm md:text-base text-green-900 opacity-90">
              오늘 빛나의 일기에서 우리는 소주를 마시고 싶어요. 그레서 화채 하고 소주를 만들어요.
            </p>
          </div>

          <div 
            key={dialogueKey}
            className={`relative w-full bg-bitna-muted-pink text-white p-5 rounded-xl shadow-lg border-2 border-bitna-strong-pink 
                        ${dialogueKey > 0 ? 'animate-attention-subtle' : ''}`}
          >
            <IoSparkles className="absolute -top-3 -left-3 text-3xl text-yellow-300 opacity-80 transform rotate-[-15deg]" />
            <p className="font-single-day text-lg md:text-xl whitespace-pre-line leading-relaxed text-center">{bitnaDialogue}</p>
          </div>
        </div>

        {/* Columna Derecha: Área de Cocina */}
        <div className="w-full flex-1 flex flex-col">
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Sub-Columna Izquierda de Cocina: Lista de Ingredientes */}
            <div className="w-full md:w-1/2 bg-white bg-opacity-80 p-6 rounded-2xl shadow-xl mb-6 md:mb-0">
              <h3 className="font-single-day text-2xl text-bitna-strong-pink mb-6 text-center">필요한 재료:</h3>
              <div className="grid grid-cols-2 gap-3">
                {hwachaeIngredients.map(ingredient => (
                  <div
                    key={ingredient.id}
                    onClick={() => handleIngredientClick(ingredient)}
                    className={`p-2.5 rounded-lg shadow-md flex items-center space-x-2 text-left cursor-pointer transition-all duration-200 transform hover:scale-105 
                                ${checkedIngredients[ingredient.id] ? 'ring-2 ring-green-500 bg-green-100 opacity-70' : 'bg-bitna-light-pink hover:bg-pink-200'}`}
                  >
                    <span className="text-2xl sm:text-3xl">{ingredient.emojiIcon}</span>
                    <span className="flex-1 text-xs sm:text-sm font-semibold text-gray-700">{ingredient.name}</span>
                    {checkedIngredients[ingredient.id] && <FaCheckCircle className="text-green-600 text-lg sm:text-xl"/>}
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-Columna Derecha de Cocina: Hwachae Bowl */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="w-full bg-white bg-opacity-80 p-6 rounded-2xl shadow-xl">
                <h3 className="font-single-day text-2xl text-bitna-strong-pink mb-4 text-center">✨ 화채 그릇 ✨</h3>
                {/* AUMENTADO EL TAMAÑO DEL BOWL */}
                <div className="w-full max-w-sm sm:max-w-md aspect-square mx-auto rounded-2xl shadow-lg bg-bitna-strong-pink relative overflow-hidden border-2 border-gray-300">
                  {/* Imagen de fondo del bol */}
                  <img 
                    src={hwachaeBowlBgImg} 
                    alt="Hwachae Bowl"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    style={{ zIndex: 0 }} 
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/E0E0E0/AAAAAA?text=Bowl+BG"; }}
                  />
                  
                  {ingredientsInBowl.length === 0 && !allIngredientsChecked && ( 
                    <div className="absolute inset-0 flex items-center justify-center z-5">
                       <p className="text-gray-500 italic bg-white bg-opacity-70 px-2 py-1 rounded">재료를 추가하세요!</p>
                    </div>
                  )}

                  {/* Ingredientes superpuestos */}
                  {ingredientsInBowl.map((ingredient) => (
                      <img
                        key={ingredient.id}
                        src={ingredient.image} 
                        alt={ingredient.name}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                        style={{ zIndex: ingredient.zIndexValue }} 
                        title={ingredient.name}
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/CCCCCC/FFFFFF?text=Error"; }}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mensaje Final */}
          {allIngredientsChecked && (
            <div className="mt-8 w-full max-w-3xl mx-auto p-6 bg-bitna-strong-pink text-white rounded-xl shadow-2xl text-center transform hover:scale-105 transition-transform duration-300">
              <IoSparkles className="text-yellow-300 text-5xl mx-auto mb-3 animate-bounce" />
              <h3 className="font-single-day text-3xl mb-2">미친 화채가 여기 왔어요!</h3>
            </div>
          )}
        </div>
      </div>
      <style jsx global>{`
        @keyframes attentionSubtle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); filter: brightness(1.05); }
        }
        .animate-attention-subtle {
          animation: attentionSubtle 0.7s ease-in-out 2;
        }
      `}</style>
    </div>
  );
}

export default Unit5HwachaePrep;
