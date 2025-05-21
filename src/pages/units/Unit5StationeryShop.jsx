// src/pages/units/Unit5StationeryShop.jsx
import React, { useState, useEffect } from 'react';
import { FaBook, FaPenFancy, FaStickyNote, FaShoppingCart, FaStore, FaTimes, FaRegCommentAlt, FaCheckCircle } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

// --- IMPORTA TUS IMÁGENES DE PRODUCTOS Y AVATAR ---
// Ejemplo: import notebookImg from '../../assets/unit5/notebook.png';
const stationeryProducts = [
  { 
    id: 'notebook', 
    name: '공책 (Cuaderno)', 
    koreanName: '공책',
    icon: FaBook, 
    image: 'https://placehold.co/150x150/FFD1DC/333?text=공책', // REEMPLAZA
    priceNumeric: 1500, 
    counter: '권',
    options: [
      { count: 1, nativeNumber: '한', display: '한 권 (1)' },
      { count: 2, nativeNumber: '두', display: '두 권 (2)' },
      { count: 3, nativeNumber: '세', display: '세 권 (3)' },
    ],
    description: "예쁜 그림이 있는 공책이에요."
  },
  { 
    id: 'pen', 
    name: '펜 (Bolígrafo)', 
    koreanName: '펜',
    icon: FaPenFancy, 
    image: 'https://placehold.co/150x150/A0C4FF/333?text=펜', // REEMPLAZA
    priceNumeric: 1000, 
    counter: '자루',
    options: [
      { count: 1, nativeNumber: '한', display: '한 자루 (1)' },
      { count: 2, nativeNumber: '두', display: '두 자루 (2)' },
      { count: 3, nativeNumber: '세', display: '세 자루 (3)' },
    ],
    description: "글씨가 잘 써지는 반짝이 펜이에요."
  },
  { 
    id: 'stickers', 
    name: '스티커 (Pegatinas)', 
    koreanName: '스티커',
    icon: FaStickyNote, 
    image: 'https://placehold.co/150x150/FFFACD/333?text=스티커', // REEMPLAZA
    priceNumeric: 500, 
    counter: '장',
    options: [
      { count: 1, nativeNumber: '한', display: '한 장 (1)' },
      { count: 2, nativeNumber: '두', display: '두 장 (2)' },
      { count: 5, nativeNumber: '다섯', display: '다섯 장 (5)' },
    ],
    description: "귀여운 동물 모양 스티커예요."
  },
];

const shopkeeperAvatar = 'https://placehold.co/100x100/CCDF92/333?text=사장님'; // REEMPLAZA

function Unit5StationeryShop() {
  const [view, setView] = useState('intro'); 
  const [cart, setCart] = useState([]); 
  const [narrativeText, setNarrativeText] = useState(
    "오늘은 내 한국어 일기를 더 예쁘게 꾸미고 싶어서 제일 좋아하는 문구점에 왔습니다! 💖 여기는 정말 귀여운 것들이 많아서 올 때마다 기분이 좋아집니다. 오늘은 새 공책하고 예쁜 펜, 그리고 스티커를 좀 사야겠습니다. 사장님께 어떻게 여쭤봐야 할까요? 연습, 연습!"
  );
  const [shopkeeperDialogue, setShopkeeperDialogue] = useState("");
  const [selectingProduct, setSelectingProduct] = useState(null);
  const [currentShoppingStep, setCurrentShoppingStep] = useState(0);
  const [narrativeKey, setNarrativeKey] = useState(0); // Para re-animar la caja de narrativa
  const [lastAddedItem, setLastAddedItem] = useState(null); // Para animación de "añadido"

  const shoppingGoals = ['notebook', 'pen', 'stickers'];

  useEffect(() => {
    setNarrativeKey(prevKey => prevKey + 1); // Animar caja de narrativa cuando cambie el texto
  }, [narrativeText]);

  useEffect(() => {
    if (lastAddedItem) {
      const timer = setTimeout(() => setLastAddedItem(null), 1500); // Limpiar después de 1.5s
      return () => clearTimeout(timer);
    }
  }, [lastAddedItem]);


  const handleEnterShop = () => {
    setView('shopping');
    setNarrativeText("음... 먼저 공책이 필요합니다. 예쁜 공책 세 권을 사고 싶습니다. (공책을 클릭해서 수량을 선택하세요!)");
    setShopkeeperDialogue("어서 오십시오! 무엇을 도와드릴까요?");
  };

  const handleProductCardClick = (product) => {
    if (view === 'shopping' && product.id === shoppingGoals[currentShoppingStep]) {
      setSelectingProduct(product);
    } else if (view === 'shopping') {
      alert("지금은 " + stationeryProducts.find(p => p.id === shoppingGoals[currentShoppingStep])?.name + "을/를 고를 차례예요!");
    }
  };

  const handleSelectQuantity = (product, quantityOption) => {
    const newItem = { 
      productId: product.id, 
      name: product.name,
      koreanName: product.koreanName,
      quantity: quantityOption.count, 
      nativeNumber: quantityOption.nativeNumber,
      counter: product.counter,
      priceNumeric: product.priceNumeric * quantityOption.count,
      image: product.image // Guardar imagen para el carrito
    };
    setCart(prevCart => [...prevCart, newItem]);
    setLastAddedItem(product.id); // Para animación
    setSelectingProduct(null);

    const nextShoppingStep = currentShoppingStep + 1;
    if (nextShoppingStep < shoppingGoals.length) {
      setCurrentShoppingStep(nextShoppingStep);
      const nextProductGoal = stationeryProducts.find(p => p.id === shoppingGoals[nextShoppingStep]);
      if (nextProductGoal?.id === 'pen') {
        setNarrativeText(`좋아! 이제 알록달록한 펜도 몇 자루 필요합니다. 특히 파란색 펜하고 분홍색 펜이 마음에 듭니다. (${nextProductGoal.name}을/를 클릭!)`);
      } else if (nextProductGoal?.id === 'stickers') {
        setNarrativeText(`그리고 내 일기를 더 특별하게 만들어 줄 스티커도 빼놓을 수 없습니다! 귀여운 동물 스티커 다섯 장이면 좋겠습니다. (${nextProductGoal.name}을/를 클릭!)`);
      }
    } else {
      setView('checkout');
      const orderSentence = constructOrderSentence();
      setNarrativeText(`다 고른 것 같습니다! 이제 사장님께 이렇게 말씀드릴 거예요:\n"${orderSentence}"`);
    }
  };

  const constructOrderSentence = () => {
    if (cart.length === 0) return "";
    const parts = cart.map(item => `${item.koreanName} ${item.nativeNumber} ${item.counter}`);
    return parts.join('하고 ') + " 주십시오.";
  };

  const handleCheckout = () => {
    const total = cart.reduce((sum, item) => sum + item.priceNumeric, 0);
    setShopkeeperDialogue(`네, ${constructOrderSentence()} 모두 해서 ${total.toLocaleString()}원입니다. 여기 있습니다. 감사합니다! 🎉`);
    setNarrativeText("오늘 정말 예쁜 문구류를 많이 샀습니다! 이제 내 일기가 더 빛날 거예요. 사장님도 정말 친절하셨습니다. 한국어로 물건 사는 것, 조금씩 익숙해지고 있습니다! 😊\n\n✨ 쇼핑 완료! ✨");
    setView('conclusion');
  };


  const QuantityModal = ({ product, onSelectQuantity, onClose }) => {
    if (!product) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
        <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md text-center transform transition-all duration-300 ease-out scale-95 hover:scale-100">
          <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
            <FaTimes size={20}/>
          </button>
          <h3 className="font-single-day text-3xl text-bitna-strong-pink mb-4">{product.name}</h3>
          <img src={product.image} alt={product.name} className="w-32 h-32 object-contain rounded-md mb-4 mx-auto border-2 border-bitna-light-pink p-1" />
          <p className="mb-5 text-gray-700">{product.name} 몇 {product.counter} 드릴까요?</p>
          <div className="space-y-3">
            {product.options.map(option => (
              <button
                key={option.count}
                onClick={() => onSelectQuantity(product, option)}
                className="w-full bg-bitna-lime-green text-green-800 font-semibold py-3 px-4 rounded-lg hover:bg-opacity-80 transition-colors transform hover:scale-105"
              >
                {option.display}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-bitna-light-pink via-pink-200 to-purple-200 py-8 px-4 pt-16 md:pt-20 flex flex-col items-center">
      <h1 className="font-single-day text-4xl md:text-6xl text-bitna-strong-pink mb-6 flex items-center justify-center animate-pulse-slow">
        <FaStore className="mr-3 text-bitna-muted-pink text-3xl md:text-5xl" />
        빛나의 문구점 쇼핑!
        <IoSparkles className="ml-3 text-yellow-400 text-3xl md:text-5xl" />
      </h1>

      {/* Diary Entry / Narrative Box */}
      <div 
        key={narrativeKey}
        className={`relative w-full max-w-2xl bg-yellow-100 border-2 border-yellow-300 p-5 rounded-xl shadow-lg mb-8 text-yellow-800 transform -rotate-1 
                    ${narrativeKey > 0 ? 'animate-attention-subtle' : ''}`}
      >
        <FaRegCommentAlt className="absolute -top-3 -left-3 text-3xl text-yellow-500 opacity-70 transform rotate-[-15deg]" />
        <p className="font-single-day text-lg md:text-xl whitespace-pre-line leading-relaxed text-center">{narrativeText}</p>
      </div>

      {view === 'intro' && (
        <button
          onClick={handleEnterShop}
          className="bg-bitna-strong-pink text-white font-single-day text-2xl py-3 px-10 rounded-full shadow-lg hover:bg-bitna-muted-pink transition-all duration-300 transform hover:scale-110 active:scale-100"
        >
          가게에 들어가기! 🛍️
        </button>
      )}

      {(view === 'shopping' || view === 'checkout' || view === 'conclusion') && (
        <div className="w-full max-w-4xl">
          {/* Shopkeeper Area */}
          {shopkeeperDialogue && (
            <div className="flex items-center justify-center mb-8 p-4 bg-white rounded-xl shadow-md max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
              <img src={shopkeeperAvatar} alt="사장님" className="w-20 h-20 rounded-full mr-4 border-2 border-bitna-lime-green p-0.5"/>
              <div className="relative bg-bitna-lime-green bg-opacity-70 p-4 rounded-lg text-sm text-green-800 shadow-sm">
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-bitna-lime-green border-r-opacity-70"></div> {/* Speech bubble tail */}
                <p className="font-semibold text-green-900">사장님:</p>
                <p className="whitespace-pre-line">{shopkeeperDialogue}</p>
              </div>
            </div>
          )}

          {/* Products Display */}
          {view === 'shopping' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {stationeryProducts.map(product => (
                <div 
                  key={product.id}
                  onClick={() => handleProductCardClick(product)}
                  className={`p-4 bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 cursor-pointer group transform hover:-translate-y-1 hover:shadow-2xl
                              ${shoppingGoals[currentShoppingStep] === product.id ? 'border-bitna-strong-pink ring-4 ring-bitna-strong-pink ring-opacity-50 animate-pulse-target' : 'border-transparent hover:border-bitna-muted-pink'}`}
                >
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-40 object-contain rounded-md mb-3 transition-transform duration-300 group-hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/CCCCCC/FFFFFF?text=Error"; }}/>
                    {lastAddedItem === product.id && (
                        <div className="absolute inset-0 bg-green-400 bg-opacity-70 flex items-center justify-center rounded-md animate-fade-out-fast">
                            <FaCheckCircle className="text-white text-4xl"/>
                        </div>
                    )}
                  </div>
                  <h3 className="font-single-day text-2xl text-bitna-strong-pink text-center truncate">{product.name}</h3>
                  <p className="text-center text-sm text-gray-500 mb-1">{product.description}</p>
                  <p className="text-center text-lg font-semibold text-bitna-muted-pink">{product.priceNumeric.toLocaleString()}원</p>
                </div>
              ))}
            </div>
          )}
          
          {/* Cart Display */}
          {(cart.length > 0 && (view === 'shopping' || view === 'checkout' || view === 'conclusion')) && (
            <div className="w-full max-w-lg mx-auto bg-bitna-light-pink p-5 rounded-xl shadow-xl mb-8 border-2 border-bitna-muted-pink">
              <h3 className="font-single-day text-3xl text-bitna-strong-pink text-center mb-4 flex items-center justify-center">
                <FaShoppingCart className="mr-3 text-bitna-muted-pink"/> 나의 장바구니
              </h3>
              <ul className="space-y-3">
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between items-center bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow text-sm">
                    <div className="flex items-center">
                        <img src={item.image} alt={item.name} className="w-10 h-10 object-contain rounded-md mr-3"/>
                        <span>{item.name} ({item.quantity} {item.counter})</span>
                    </div>
                    <span className="font-semibold text-gray-700">{(item.priceNumeric).toLocaleString()}원</span>
                  </li>
                ))}
              </ul>
              <p className="text-right font-bold text-bitna-strong-pink mt-4 text-xl border-t-2 border-dashed border-bitna-muted-pink pt-3">
                총액: {cart.reduce((sum, item) => sum + item.priceNumeric, 0).toLocaleString()}원
              </p>
            </div>
          )}

          {view === 'checkout' && (
            <div className="text-center">
              <button
                onClick={handleCheckout}
                className="bg-green-500 text-white font-single-day text-3xl py-4 px-10 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                사장님께 말씀드리기! 🛍️
              </button>
            </div>
          )}

          {view === 'conclusion' && cart.length > 0 && (
             <div className="text-center mt-4 p-4 bg-white rounded-lg shadow-md">
                <IoSparkles className="text-yellow-500 text-5xl mx-auto mb-3 animate-bounce" />
                <p className="text-xl font-semibold text-green-600">쇼핑 성공! (Shopping Success!)</p>
             </div>
          )}
        </div>
      )}
      <QuantityModal 
        product={selectingProduct} 
        onSelectQuantity={handleSelectQuantity} 
        onClose={() => setSelectingProduct(null)} 
      />
      <style jsx global>{`
        @keyframes pulseTarget {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(222, 49, 99, 0.5); } /* bitna-strong-pink */
          50% { transform: scale(1.02); box-shadow: 0 0 0 12px rgba(222, 49, 99, 0); }
        }
        .animate-pulse-target {
          animation: pulseTarget 1.8s infinite;
        }
        @keyframes attentionSubtle { /* For narrative box */
          0%, 100% { transform: scale(1) rotate(-1deg); }
          50% { transform: scale(1.02) rotate(-1deg); filter: brightness(1.05); }
        }
        .animate-attention-subtle {
          animation: attentionSubtle 1s ease-in-out 2;
        }
        @keyframes fadeOutFast {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(1.1); }
        }
        .animate-fade-out-fast {
            animation: fadeOutFast 0.7s ease-out forwards;
        }
        @keyframes pulseSlow { /* For main title sparkles */
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulseSlow 2.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default Unit5StationeryShop;
    