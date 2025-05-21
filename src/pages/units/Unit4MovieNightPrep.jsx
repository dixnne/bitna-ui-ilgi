// src/pages/units/Unit4MovieNightPrep.jsx
import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaTimes, FaRegHeart, FaHeart, FaCartPlus, FaPlus, FaMinus, FaTrashAlt, FaGift } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

// --- IMPORTA TUS IMÁGENES DE PRODUCTOS AQUÍ ---
const initialProductsData = [
  {
    id: 1,
    name: "빼빼로",
    koreanName: "빼빼로 (Pepero)",
    priceKorean: "천오백 원", 
    priceNumeric: 1500,
    image: "https://placehold.co/150x150/FFD1DC/333?text=Pepero", // Imagen más cuadrada para layout horizontal
    description: "초콜릿 맛이 나는 맛있는 막대 과자예요.", 
    narrative: "영화 볼 때 빼빼로는 필수죠! 가게에서 '빼빼로 한 갑 주세요!'라고 말할 거예요. 이 빼빼로를 주세요!",
    category: "과자 (Snacks)",
    store: "빛나 마트 (Bitna Mart)"
  },
  {
    id: 2,
    name: "Banana Milk",
    koreanName: "바나나 우유 (Banana Uyu)",
    priceKorean: "천이백 원", 
    priceNumeric: 1200,
    image: "https://placehold.co/150x150/FFFACD/333?text=Banana+Milk", 
    description: "달콤하고 부드러운 바나나 맛 우유예요.", 
    narrative: "목이 마를 땐 역시 바나나 우유! '바나나 우유 하나 주세요.' 하면 딱 좋아요. 이 바나나 우유를 주세요.",
    category: "음료 (Drinks)",
    store: "빛나 마트 (Bitna Mart)"
  },
  {
    id: 3,
    name: "Shrimp Crackers",
    koreanName: "새우깡 (Saeukkang)",
    priceKorean: "천 원", 
    priceNumeric: 1000,
    image: "https://placehold.co/150x150/FFB347/333?text=Saeukkang", 
    description: "짭짤하고 바삭바삭한 새우 맛 과자예요.", 
    narrative: "영화 보면서 먹으면 시간 가는 줄 몰라요! '새우깡 한 봉지 주세요!' 해야겠어요. 이 새우깡을 주세요.",
    category: "과자 (Snacks)",
    store: "빛나 마트 (Bitna Mart)"
  },
  {
    id: 4,
    name: "K-Movie DVD",
    koreanName: "한국 영화 DVD",
    priceKorean: "만 오천 원", 
    priceNumeric: 15000,
    image: "https://placehold.co/150x150/A0C4FF/333?text=K-Movie+DVD", 
    description: "오늘 밤 볼 재미있는 한국 영화 DVD예요.", 
    narrative: "이 영화 정말 보고 싶었어요! '이 영화 DVD를 주세요.'라고 말해서 꼭 살 거예요. 이 DVD를 주세요.",
    category: "엔터테인먼트 (Entertainment)",
    store: "빛나 미디어 (Bitna Media)"
  },
  {
    id: 5,
    name: "Cozy Blanket",
    koreanName: "담요 (Damyo)",
    priceKorean: "이만 원", 
    priceNumeric: 20000,
    image: "https://placehold.co/150x150/E6E6FA/333?text=Blanket", 
    description: "영화를 볼 때 따뜻하게 덮을 담요예요.", 
    narrative: "밤에는 조금 쌀쌀할 수 있으니까... '이 예쁜 담요를 주세요!' 해서 따뜻한 영화의 밤을 보낼 거예요. 이 담요를 주세요.",
    category: "홈 (Home)",
    store: "빛나 홈 (Bitna Home)"
  },
  {
    id: 6,
    name: "Popcorn",
    koreanName: "팝콘 (Papkon)",
    priceKorean: "오천 원", 
    priceNumeric: 5000,
    image: "https://placehold.co/150x150/FFFDD0/333?text=Popcorn", 
    description: "영화관 필수템! 고소한 팝콘이에요.", 
    narrative: "영화에 팝콘이 빠질 수 없죠! '팝콘 큰 거 하나 주세요!' 외칠 거예요! 이 팝콘을 주세요.",
    category: "과자 (Snacks)",
    store: "빛나 마트 (Bitna Mart)"
  },
];

// Product Card Component - Horizontal Layout & Cuter Style
const ProductCard = ({ product, onProductClick, onAddToCart, onToggleFavorite, isFavorite, cartQuantity, onQuantityChange, onRemoveFromCart, isSelected, onSelect }) => {
  const isInCart = cartQuantity > 0;

  return (
    <div 
      className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 sm:p-4 flex space-x-3 sm:space-x-4 border-2 ${isSelected ? 'border-bitna-strong-pink ring-2 ring-bitna-strong-pink ring-offset-1' : 'border-transparent'}`}
    >
      {/* Checkbox */}
      <div className="flex-shrink-0 pt-1 flex items-center">
        <input 
          type="checkbox" 
          checked={isSelected}
          onChange={() => onSelect(product.id)}
          className="form-checkbox h-5 w-5 text-bitna-strong-pink rounded border-gray-300 focus:ring-bitna-strong-pink focus:ring-opacity-50 cursor-pointer" 
        />
      </div>
      
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg cursor-pointer flex-shrink-0 hover:opacity-80 transition-opacity"
        onClick={() => onProductClick(product)}
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/CCCCCC/FFFFFF?text=Error"; }}
      />
      <div className="flex-1 flex flex-col justify-between min-w-0"> {/* min-w-0 para que truncate funcione */}
        <div>
          <p className="text-xs text-bitna-muted-pink mb-0.5 truncate">{product.store}</p>
          <h3 
            className="font-single-day text-xl sm:text-2xl text-bitna-strong-pink cursor-pointer hover:underline truncate"
            onClick={() => onProductClick(product)}
            title={product.koreanName}
          >
            {product.koreanName}
          </h3>
          <p className="text-sm text-gray-700 font-semibold mt-1">{product.priceKorean} 
            <span className="text-xs text-gray-500 ml-1">({product.priceNumeric.toLocaleString()}원)</span>
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <button 
            onClick={(e) => { e.stopPropagation(); onToggleFavorite(product.id); }} 
            className={`p-1.5 rounded-full transition-colors duration-200 
                        ${isFavorite ? 'text-red-500 bg-red-100' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'}`}
            aria-label="Add to favorites"
          >
            {isFavorite ? <FaHeart size={18}/> : <FaRegHeart size={18}/>}
          </button>
          {isInCart ? (
            <div className="flex items-center border border-gray-300 rounded-md">
              <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-l-md disabled:opacity-50" onClick={(e) => {e.stopPropagation(); onQuantityChange(product.id, cartQuantity - 1)}} disabled={cartQuantity <= 1}>
                <FaMinus size={12}/>
              </button>
              <span className="px-2.5 text-sm font-medium text-gray-700">{cartQuantity}</span>
              <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-r-md" onClick={(e) => {e.stopPropagation(); onQuantityChange(product.id, cartQuantity + 1)}}>
                <FaPlus size={12}/>
              </button>
            </div>
          ) : (
            <button 
              className="bg-bitna-strong-pink text-white py-1.5 px-3 rounded-lg shadow-sm hover:bg-bitna-muted-pink transition-colors duration-200 text-xs font-semibold flex items-center"
              onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            >
              <FaCartPlus className="mr-1.5"/> 장바구니
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Product Detail Modal Component (sin cambios)
const ProductDetailModal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-in-out">
      <div className="bg-gradient-to-br from-bitna-light-pink via-white to-bitna-lime-green bg-opacity-95 p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
        <button onClick={onClose} className="absolute top-4 right-4 bg-white text-bitna-strong-pink rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors z-10" aria-label="Close modal">
          <FaTimes size={20} />
        </button>
        <div className="flex flex-col md:flex-row md:space-x-6 items-center md:items-start">
          <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-64 object-contain rounded-lg shadow-lg mb-4 md:mb-0 border-2 border-white" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/CCCCCC/FFFFFF?text=Error"; }}/>
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs text-bitna-muted-pink mb-1">{product.category}</p>
            <h2 className="font-single-day text-3xl md:text-4xl text-bitna-strong-pink mb-2">{product.koreanName}</h2>
            <p className="text-lg font-bold text-gray-800 mb-3">{product.priceKorean} <span className="text-sm text-gray-600">({product.priceNumeric.toLocaleString()}원)</span></p>
            <p className="text-gray-700 text-sm mb-4">{product.description}</p>
          </div>
        </div>
        <div className="mt-6 bg-white bg-opacity-70 p-4 rounded-lg shadow-inner border border-bitna-muted-pink">
          <h4 className="font-single-day text-xl text-bitna-strong-pink mb-2 flex items-center"><IoSparkles className="mr-2 text-yellow-400"/> 빛나의 생각 (Bitna's Thought):</h4>
          <p className="text-gray-700 italic text-sm leading-relaxed">"{product.narrative}"</p>
        </div>
        <div className="mt-6 flex justify-center md:justify-end space-x-3">
            <button className="flex items-center bg-bitna-strong-pink text-white py-2 px-5 rounded-lg shadow-md hover:bg-bitna-muted-pink transition-colors duration-200 text-sm font-semibold" onClick={() => onAddToCart(product)}>
                <FaCartPlus className="mr-2"/> 장바구니에 추가
            </button>
        </div>
      </div>
    </div>
  );
};

// Cart Summary Component
const CartSummary = ({ cartItems, products, selectedItemCount }) => {
  const subtotal = cartItems.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product ? product.priceNumeric * item.quantity : 0);
  }, 0);
  const shippingEst = subtotal > 0 && subtotal < 30000 ? 3000 : 0; 
  const total = subtotal + shippingEst;

  return (
    <div className="w-full lg:w-1/3 bg-bitna-light-pink p-6 rounded-2xl shadow-xl border-2 border-bitna-muted-pink sticky top-24">
      <h2 className="font-single-day text-3xl text-bitna-strong-pink mb-6 text-center flex items-center justify-center">
        <FaGift className="mr-2 text-bitna-muted-pink" />
        주문 요약
      </h2>
      <div className="space-y-3 text-sm mb-6">
        <div className="flex justify-between text-gray-700">
          <span>상품 합계:</span>
          <span className="font-semibold">{subtotal.toLocaleString()}원</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>배송비:</span>
          <span className="font-semibold">{shippingEst > 0 ? `${shippingEst.toLocaleString()}원` : "무료! (Free!)"}</span>
        </div>
        {subtotal > 0 && subtotal < 30000 && (
            <p className="text-xs text-green-600 text-center">✨ {(30000 - subtotal).toLocaleString()}원 더 추가하면 무료 배송! ✨</p>
        )}
        <div className="border-t-2 border-dashed border-bitna-muted-pink pt-3 mt-3 flex justify-between text-bitna-strong-pink font-bold text-lg">
          <span>총 주문 금액:</span>
          <span>{total.toLocaleString()}원</span>
        </div>
      </div>
      <button className="w-full bg-bitna-strong-pink text-white font-single-day text-2xl py-3.5 rounded-lg shadow-lg hover:bg-opacity-80 transition-all duration-200 active:scale-95">
        결제하기 ({selectedItemCount}) {/* Muestra items seleccionados */}
      </button>
      <p className="text-xs text-bitna-muted-pink mt-4 text-center">
        ✨ 즐거운 영화의 밤 되세요! ✨
      </p>
    </div>
  );
};


function Unit4MovieNightPrep() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([
    { id: 1, quantity: 1 },
    { id: 3, quantity: 2 },
  ]);
  const [favoriteItems, setFavoriteItems] = useState([2]);
  const [selectedItems, setSelectedItems] = useState({}); // { productId: boolean }

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (productToAdd) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productToAdd.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { id: productToAdd.id, quantity: 1 }];
    });
    if(selectedProduct) setSelectedProduct(null);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
        handleRemoveFromCart(productId);
        return;
    }
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    setSelectedItems(prev => {
        const newSelected = {...prev};
        delete newSelected[productId];
        return newSelected;
    });
  };

  const handleToggleFavorite = (productId) => {
    setFavoriteItems(prevFavs => 
      prevFavs.includes(productId) 
        ? prevFavs.filter(id => id !== productId)
        : [...prevFavs, productId]
    );
  };

  const handleSelectItem = (productId) => {
    setSelectedItems(prev => ({
        ...prev,
        [productId]: !prev[productId]
    }));
  };

  const handleSelectAll = (event) => {
    const newSelectedItems = {};
    if (event.target.checked) {
        initialProductsData.forEach(p => newSelectedItems[p.id] = true);
    }
    setSelectedItems(newSelectedItems);
  };
  
  const getSelectedItemsCount = () => {
    return Object.values(selectedItems).filter(Boolean).length;
  };

  const handleDeleteSelected = () => {
    const itemsToKeep = cartItems.filter(item => !selectedItems[item.id]);
    setCartItems(itemsToKeep);
    setSelectedItems({}); // Clear selection
  };


  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-purple-100 to-bitna-light-pink py-8 px-4 pt-16 md:pt-20">
      <div className="container mx-auto">
        <header className="text-center mb-10 md:mb-12 relative">
          <h1 className="font-single-day text-4xl md:text-6xl text-bitna-strong-pink mb-2 flex items-center justify-center">
            <IoSparkles className="text-yellow-400 text-3xl md:text-4xl mr-2 animate-pulse" />
            빛나의 영화의 밤 마트!
            <IoSparkles className="text-yellow-400 text-3xl md:text-4xl ml-2 animate-pulse" />
          </h1>
          <p className="text-lg md:text-xl text-bitna-muted-pink mb-4">
            오늘 밤 최고의 영화를 위해 맛있는 간식과 필요한 물건들을 골라봐요! 🍿🎬
          </p>
          <div className="absolute top-0 right-0 -mt-4 md:-mt-2">
            <button className="relative text-bitna-strong-pink hover:text-bitna-muted-pink p-2">
              <FaShoppingCart size={30} />
              {cartItems.reduce((acc, item) => acc + item.quantity, 0) > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row lg:space-x-8 items-start">
          {/* Product Listing (Left Column) */}
          <div className="w-full lg:w-2/3 space-y-4 mb-8 lg:mb-0"> {/* Reduced space-y from 6 to 4 */}
            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                <label htmlFor="selectAll" className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
                    <input 
                        type="checkbox" 
                        id="selectAll" 
                        className="form-checkbox h-4 w-4 text-bitna-strong-pink rounded focus:ring-bitna-strong-pink"
                        onChange={handleSelectAll}
                        checked={initialProductsData.length > 0 && getSelectedItemsCount() === initialProductsData.length}
                    />
                    <span>모두 선택 ({getSelectedItemsCount()}개 항목)</span>
                </label>
                <button 
                    className="text-sm text-red-500 hover:text-red-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleDeleteSelected}
                    disabled={getSelectedItemsCount() === 0}
                >
                    <FaTrashAlt className="inline mr-1"/> 선택 삭제
                </button>
            </div>
            {initialProductsData.map((product) => { // Muestra todos los productos
                const cartItem = cartItems.find(item => item.id === product.id);
                return (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onProductClick={handleProductClick} 
                    onAddToCart={handleAddToCart}
                    onToggleFavorite={handleToggleFavorite}
                    isFavorite={favoriteItems.includes(product.id)}
                    cartQuantity={cartItem ? cartItem.quantity : 0}
                    onQuantityChange={handleQuantityChange}
                    onRemoveFromCart={handleRemoveFromCart} // Para el botón de basura en la tarjeta
                    isSelected={!!selectedItems[product.id]}
                    onSelect={handleSelectItem}
                  />
                );
            })}
          </div>

          {/* Cart Summary (Right Column) */}
          <CartSummary cartItems={cartItems.filter(item => selectedItems[item.id])} products={initialProductsData} selectedItemCount={getSelectedItemsCount()} />
        </div>
      </div>
      <ProductDetailModal product={selectedProduct} onClose={handleCloseModal} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default Unit4MovieNightPrep;
