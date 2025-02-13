"use client";

import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Catalog from "@/components/Catalog";
import AboutUs from "@/components/AboutUs";
import ChoiceShoes from "@/components/ChoiceShoes";
import Team from "@/components/Team";
import Questions from "@/components/Questions";
import ContacInfo from "@/components/ContactInfo";
import SendQuestion from "@/components/SendQuestion";
import Footer from "@/components/Footer";
import DetailedProdCard from "@/components/DetailedProdCard";
import Order from "@/components/Order";
import "leaflet/dist/leaflet.css";
import Authorization from "@/components/Authorization";

// Тип данных Sneaker
export interface Sneaker {
  id: number;
  name: string;
  description: string;
  article: string;
  in_stock: number;
  raiting: number;
  size: number[];
  price: number;
  sex: string;
  color: string[];
  compound: string;
  country: string;
  main_photo: string;
}

// Функция для загрузки кроссовок
export const fetchSneakers = async (id: string[], sex?:string[],sizes?:number[]): Promise<Sneaker[]> => {
  try {
      debugger
    console.log(sizes)
    const excludedIds = id.join(",");
    const response = await fetch(`http://127.0.0.1:8000/sneakers/?excluded_ids=${excludedIds}&sex=${sex}&sizes=${sizes}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Sneaker[] = await response.json();
    return data; // Возвращаем полученные данные
  } catch (err) {
    console.error(err);
    return []; // В случае ошибки возвращаем пустой массив
  }
};

// Главный компонент приложения
const Index = () => {
  // References для секций
  const HeaderRef = useRef<HTMLDivElement>(null);
  const CatalogRef = useRef<HTMLDivElement>(null);
  const AboutUsRef = useRef<HTMLDivElement>(null);
  const ChoiceShoesRef = useRef<HTMLDivElement>(null);
  const TeamRef = useRef<HTMLDivElement>(null);
  const ContacInfoRef = useRef<HTMLDivElement>(null);

  // Состояния
  const [ShowProd, SetShowProd] = useState(false);
  const [ShowBasket, setShowBasket] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [countBasketItem, setCountBasketItem] = useState(0);
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [currentSneaker, setCurrentSneaker] = useState<Sneaker>();
  const [id, setId] = useState<string[]>(["0"]);
  const [sex, setSex] = useState<string[]>([])
  const [sizes, setSizes] = useState<number[]>([])
  const [sneakerOnBasket, setSneakerOnBasket] = useState<Sneaker[]>([])
  const [userName, setUserName] = useState<string>()
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [showAuth, setShowAuth] = useState(false)

  const onGetSizes = (sizes:number[]) =>{setSizes(sizes)}
  const onGetName = (name:string) => {setUserName(name)}
  const onSetAuth = (flag:boolean) => {setIsAuth(flag)}

  const onTrashClick = (sneaker:Sneaker) => {
    if(sneakerOnBasket.indexOf(sneaker) != -1) {setSneakerOnBasket(sneakerOnBasket.filter(item => item !== sneaker));
      setCountBasketItem((prev) => prev - 1)
    }
}

  const handleSetShowAuth = () => {
    setShowAuth(prev => !prev)
    console.log(showAuth)
  }

const onClickBuy = async () => {
  try {
    debugger
    const response = await fetch(`http://127.0.0.1:8000/sneakers/`, {
      method: "POST", // Указываем метод POST
      headers: {
        "Content-Type": "application/json", // Указываем тип контента
      },
      body: JSON.stringify(sneakerOnBasket), // Преобразуем данные в JSON-строку
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log("Успешный ответ:");
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
  }
};
  
  const onCheckBoxClick = (flag:boolean, trueValue:string) => {
    debugger
    if(!flag){
      setSex([...sex, trueValue])
    }
      
    else{
      let indexToRemove = sex.indexOf(trueValue);
      if(indexToRemove != -1){
        setSex(sex.filter(item => item !== trueValue));
      }
    }
  }

  //Обработка загрузки
  const ShowMore = async () => {
    try {
      const newSneakers = await fetchSneakers(id,sex,sizes);

      if (newSneakers.length === 0) {
        console.log("Больше записей нет");
        return;
      }

      // Обновляем состояние
      setSneakers((prev) => [...prev, ...newSneakers]);

      // Обновляем список исключённых ID
      setId((prev) => [...prev, ...newSneakers.map((item) =>`${item.id}`)]);
    } catch (error) {
      console.error("Ошибка при загрузке кроссовок:", error);
    }
  };

  const loadWithFilter = async () => {
    setSneakers([])
    ShowMore()
  };

  // Открытие детального просмотра кроссовок
  const onClickProd = (value: boolean, data: Sneaker) => {
    SetShowProd(value);
    setCurrentSneaker(data);
  };

  // Управление корзиной
  const onShowBasket = (value: boolean) => setShowBasket(value);
  const onShowOrder = (value: boolean) => setShowOrder(value);
  const onCountBasketItem = (sneaker: Sneaker) => {
    setSneakerOnBasket((prev) => {
      if (prev.some((item) => item.id === sneaker.id)) {
        return prev; // Если товар уже есть, возвращаем текущее состояние
      }
  
      // Обновляем корзину и увеличиваем счётчик
      setCountBasketItem(prev.length + 1);
      return [...prev, sneaker];
    });
  };
  

  // Закрытие модальных окон
  const handleClick = () => {
    SetShowProd(false);
    setShowOrder(false);
    setShowAuth(false)
  };

  const onGetBasket = async():Promise<void> =>{
    try{
      debugger
      console.log(userName)
      const response = await fetch(`http://127.0.0.1:8000/Basket/?name=${userName}`)

      if(!response.status){console.log('Error')}

      const data:Sneaker[] = await response.json()

      setSneakerOnBasket(data)
    }
    catch{}
  }

  const onPostBasket = async():Promise<void> => {
    const id = sneakerOnBasket.map(item=>item.id).join(',')

    const data = {
      id,
      userName
    }

    try{
      debugger
      const response = await fetch(`http://127.0.0.1:8000/Basket/`,{
        method: "POST", // Указываем метод POST
        headers: {
          "Content-Type": "application/json", // Указываем тип контента
        },
        body: JSON.stringify(data), // Преобразуем данные в JSON-строку
      })

      if(!response.status){console.log('Error')}

    }
    catch{}
  }

  useEffect(() => {
    console.log(isAuth)
    if(isAuth)
      onPostBasket()

  },[sneakerOnBasket])

  // Загрузка начальных данных
  useEffect(() => {
    ShowMore()
  }, []);

  // Обновление списка исключённых ID
  useEffect(() => {
    setId(sneakers.map((item) => `${item.id}`));
    console.log(id);
  }, [sneakers]);

  return (
    <>
      <Authorization onSetAuth={onSetAuth} isAuth={isAuth} showAuth={showAuth} onGetName = {onGetName} onGetBasket={onGetBasket}></Authorization>
      {/* Модальное окно заказа */}
      <Order showOrder={showOrder} onClickBuy={onClickBuy} onTrashClick={onTrashClick} sneakers={sneakerOnBasket}/>

      {/* Детальный просмотр товара */}
      <DetailedProdCard ShowProd={ShowProd} sneaker={currentSneaker!} />

      <div
        onClick={ShowProd || showOrder || showAuth ? handleClick : () => {}}
        className="relative"
      >
        <div
          className={`z-[30] absolute inset-0 bg-gradient-to-t from-CustomGreyOp0 to-CustomGreyOp1 
            transition-opacity duration-2000 hover:opacity-0 pointer-events-none 
            ${ShowProd || ShowBasket || showOrder || showAuth ? "opacity-100 hover:opacity-0" : "opacity-0"}`}
        />
        <div className="flex flex-col gap-[50px]">
          {/* Header */}
          <Header
            onTrashClick={onTrashClick}
            sneakerOnBaset = {sneakerOnBasket}
            ref={HeaderRef}
            CatalogRef={CatalogRef}
            AboutUsRef={AboutUsRef}
            ChoiceShoesRef={ChoiceShoesRef}
            TeamRef={TeamRef}
            ContacInfoRef={ContacInfoRef}
            onShowBasket={onShowBasket}
            ShowBasket={ShowBasket}
            onShowOrder={onShowOrder}
            countBasketItem={sneakerOnBasket.length}
            onSetShowAuth={handleSetShowAuth}
            userName={userName ? userName : ''}
          />

          {/* Основные секции */}
          <Catalog
            loadWithFilter = {loadWithFilter}
            ref={CatalogRef}
            sneakers={sneakers}
            onClickDetailed={onClickProd}
            onCountBasketItem={onCountBasketItem}
            ShowMore = {ShowMore}
            onCheckBoxClick = {onCheckBoxClick}
            onGetSizes = {onGetSizes}
          />
          <AboutUs ref={AboutUsRef} />
          <ChoiceShoes ref={ChoiceShoesRef} />
          <Team ref={TeamRef} />
          <Questions />
          <ContacInfo ref={ContacInfoRef} />
          <SendQuestion />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;