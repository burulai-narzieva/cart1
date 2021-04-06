import React, { useState } from 'react';
import './App.css';


function App() {

  const [cart, setCart] = useState ([]);

  const [products] = useState([
    {
      name: 'Букет цветов "Космополитен"',
      cost: '3100 руб.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu61GPgRyuO-1_D3NpV-K0TFOXv3oaK-od8g&usqp=CAU'

    },
    {
      name: 'Букет роз Мисти в шляпной коробке',
      cost: '2990 руб.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUbyLhnC7A7W1xMfM9tgvKgULXOHR0_q4sg&usqp=CAU'

    },
    {
      name: 'Букет цветов «Milano»',
      cost: '2190 руб.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLfmGfRLFq49tqSXxmRVt3mT3qUZ94eETHQg&usqp=CAU'

    },
    {
      name: 'Пряности - букет из разноцветных куст',
      cost: '3590 руб.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrS4H72wCzLBizxB-i0m25RY8bAyMTxbd30g&usqp=CAU'

    },
    {
      name: '25 роз Морнинг дью',
      cost: '3400 руб.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dji2pFcN7NC9335BqVq8mMRFFgfv_oWxWQ&usqp=CAU'

    },
    {
      name: 'Заказать Букет роз "Магия роскоши"',
      cost: '2600 руб.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO5_ESJHDckZDaO4AwrfZkmRh5GzcjJ4g8Jw&usqp=CAU'

    },
  
  ]);

  const addToCart = (product) => {
    setCart([...cart,product]);
  };


  return (
    <div className="App">
      <header>
        <button className='button2'> В корзине ({cart.length})</button>
      </header>
      <h1>ИНТЕРНЕТ МАГАЗИН ЦВЕТОВ </h1>
      <div className='products'>
        {products.map((prod, index) => (
          <div className='product' key={index}>
          <h3>{prod.name}</h3>
          <h4>{prod.cost}</h4>
          <img src={prod.image} alt={prod.name}/>
          <button className='button' onClick={() => addToCart(products)}>
            Добавить в корзину</button>
          </div>
        ))}
      </div>  
    </div>
  );
}

export default App;
