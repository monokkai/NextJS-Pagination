"use client";

import React, { ReactNode, useState } from "react";
import styled from "./styles/ProductCard.module.css";
import Button from "./components/ui/button/button";
import ProductCard, { IImage } from "./components/ProductCard";

// const cars: Isrc[] = [
//   {
//     title: "Porshe 911 900-Rocket",
//     src: "/900-rocket.png",
//     alt: "900-rocket",
//     description:
//       "The best car you ever could buy is availiable right now in our car shop!",
//     price: 250000,
//   },
//   {
//     title: "Mercedes AMG GT",
//     src: "/amg-gt.jpg",
//     alt: "amg-gt",
//     description:
//       "The best car you ever could buy is availiable right now in our car shop!",
//     price: 250000,
//   },
//   {
//     title: "BMW M4",
//     src: "/bmw-m4.jpg",
//     alt: "bmw-m4",
//     description:
//       "The best car you ever could buy is availiable right now in our car shop!",
//     price: 250000,
//   },
//   {
//     title: "Ferrari Spider",
//     src: "/ferrar-spider.jpeg",
//     alt: "ferrari-spider",
//     description:
//       "The best car you ever could buy is availiable right now in our car shop!",
//     price: 250000,
//   },
//   {
//     title: "Ford Mustang",
//     src: "/ford-mustang.jpg",
//     alt: "ford-mustang",
//     description:
//       "The best car you ever could buy is availiable right now in our car shop!",
//     price: 250000,
//   },
//   {
//     title: "Maybach 900",
//     src: "/maybach-900.jpg",
//     alt: "maybach-900",
//     description:
//       "The best car you ever could buy is availiable right now in our car shop!",
//     price: 250000,
//   },
// ];

const cars: IImage[] = [
  {
    id: 1,
    name: "Смартфон Galaxy S21",
    description: "Смартфон с 6.2-дюймовым экраном и тройной камерой.",
    price: 150,
    src: "https://via.placeholder.com/200?text=Товар+1",
  },
  {
    id: 2,
    name: "Ноутбук Dell XPS 13",
    description: "Мощный ноутбук с процессором Intel Core i7.",
    price: 300,
    src: "https://via.placeholder.com/200?text=Товар+2",
  },
  {
    id: 3,
    name: "Наушники Sony WH-1000XM4",
    description: "Беспроводные наушники с активным шумоподавлением.",
    price: 450,
    src: "https://via.placeholder.com/200?text=Товар+3",
  },
  {
    id: 4,
    name: "Планшет Apple iPad Air",
    description: "Планшет с Retina дисплеем и поддержкой Apple Pencil.",
    price: 600,
    src: "https://via.placeholder.com/200?text=Товар+4",
  },
  {
    id: 5,
    name: "Камера Canon EOS R5",
    description: "Профессиональная беззеркальная камера с 45 МП.",
    price: 750,
    src: "https://via.placeholder.com/200?text=Товар+5",
  },
  {
    id: 6,
    name: "Часы Garmin Fenix 6",
    description: "Спортивные часы с GPS и функцией мониторинга здоровья.",
    price: 900,
    src: "https://via.placeholder.com/200?text=Товар+6",
  },
  {
    id: 7,
    name: "Электрическая зубная щетка Oral-B",
    description: "Электрическая зубная щетка с датчиком давления.",
    price: 1050,
    src: "https://via.placeholder.com/200?text=Товар+7",
  },
  {
    id: 8,
    name: "Геймпад Xbox Wireless",
    description: "Беспроводной геймпад для консоли Xbox.",
    price: 1200,
    src: "https://via.placeholder.com/200?text=Товар+8",
  },
  {
    id: 9,
    name: "Монитор LG UltraWide 29",
    description: "Широкоформатный монитор для продуктивной работы.",
    price: 1350,
    src: "https://via.placeholder.com/200?text=Товар+9",
  },
  {
    id: 10,
    name: "Клавиатура Logitech MX Keys",
    description: "Клавиатура с подсветкой и бесшумными клавишами.",
    price: 1000,
    src: "https://via.placeholder.com/200?text=Товар+10",
  },
  {
    id: 11,
    name: "Мышь Razer DeathAdder V2",
    description: "Игровая мышь с высокой чувствительностью.",
    price: 1150,
    src: "https://via.placeholder.com/200?text=Товар+11",
  },
  {
    id: 12,
    name: "Внешний жесткий диск Seagate",
    description: "Внешний жесткий диск на 1 ТБ для хранения данных.",
    price: 1300,
    src: "https://via.placeholder.com/200?text=Товар+12",
  },
  {
    id: 13,
    name: "Умная колонка Amazon Echo",
    description: "Умная колонка с поддержкой Alexa и Bluetooth.",
    price: 1450,
    src: "https://via.placeholder.com/200?text=Товар+13",
  },
  {
    id: 14,
    name: "Кофеварка De'Longhi Magnifica",
    description: "Кофеварка с функцией приготовления капучино.",
    price: 1600,
    src: "https://via.placeholder.com/200?text=Товар+14",
  },
  {
    id: 15,
    name: "Холодильник Samsung Family Hub",
    description: "Холодильник с сенсорным экраном и Wi-Fi.",
    price: 1750,
    src: "https://via.placeholder.com/200?text=Товар+15",
  },
  {
    id: 16,
    name: "Пылесос Dyson V11",
    description: "Беспроводной пылесос с длительным временем работы.",
    price: 1900,
    src: "https://via.placeholder.com/200?text=Товар+16",
  },
  {
    id: 17,
    name: "Стиральная машина Bosch Serie 4",
    description: "Стиральная машина с функцией сушения.",
    price: 2050,
    src: "https://via.placeholder.com/200?text=Товар+17",
  },
  {
    id: 18,
    name: "Микроволновая печь Panasonic",
    description: "Микроволновая печь с инверторным управлением.",
    price: 2200,
    src: "https://via.placeholder.com/200?text=Товар+18",
  },
  {
    id: 19,
    name: "Фитнес-браслет Xiaomi Mi Band 6",
    description: "Фитнес-браслет с мониторингом активности и сна.",
    price: 2350,
    src: "https://via.placeholder.com/200?text=Товар+19",
  },
  {
    id: 20,
    name: "Техника для стирки LG TWINWash",
    description: "Умная техника для стирки с двумя барабанами.",
    price: 2000,
    src: "https://via.placeholder.com/200?text=Товар+20",
  },
  {
    id: 21,
    name: "Проектор Epson Home Cinema",
    description: "Проектор с высокой яркостью и разрешением Full HD.",
    price: 2150,
    src: "https://via.placeholder.com/200?text=Товар+21",
  },
  {
    id: 22,
    name: "Кинотеатр на дому Samsung",
    description: "Кинотеатр на дому с системой объемного звука.",
    price: 2300,
    src: "https://via.placeholder.com/200?text=Товар+22",
  },
  {
    id: 23,
    name: "Виртуальная реальность Oculus Quest 2",
    description: "Виртуальные очки для игр и развлечений.",
    price: 2450,
    src: "https://via.placeholder.com/200?text=Товар+23",
  },
  {
    id: 24,
    name: "Гироскутер Xiaomi",
    description: "Гироскутер с управлением через приложение.",
    price: 2600,
    src: "https://via.placeholder.com/200?text=Товар+24",
  },
  {
    id: 25,
    name: "Электросамокат Ninebot",
    description: "Электросамокат с максимальной скоростью 25 км/ч.",
    price: 2750,
    src: "https://via.placeholder.com/200?text=Товар+25",
  },
  {
    id: 26,
    name: "Рюкзак The North Face",
    description:
      "Удобный рюкзак для путешествий и повседневного использования.",
    price: 2900,
    src: "https://via.placeholder.com/200?text=Товар+26",
  },
  {
    id: 27,
    name: "Спортивная обувь Adidas Ultraboost",
    description: "Легкие спортивные кроссовки для бега.",
    price: 3050,
    src: "https://via.placeholder.com/200?text=Товар+27",
  },
  {
    id: 28,
    name: "Футболка Nike Dri-FIT",
    description: "Футболка из дышащего материала для тренировок.",
    price: 3200,
    src: "https://via.placeholder.com/200?text=Товар+28",
  },
  {
    id: 29,
    name: "Джинсы Levi's 501",
    description: "Классические джинсы с прямым кроем.",
    price: 3350,
    src: "https://via.placeholder.com/200?text=Товар+29",
  },
  {
    id: 30,
    name: "Сумка Michael Kors",
    description: "Стильная сумка для документов и ноутбука.",
    price: 3000,
    src: "https://via.placeholder.com/200?text=Товар+30",
  },
  {
    id: 31,
    name: "Пальто Calvin Klein",
    description: "Элегантное пальто для холодной погоды.",
    price: 3150,
    src: "https://via.placeholder.com/200?text=Товар+31",
  },
  {
    id: 32,
    name: "Шарф Burberry",
    description: "Шарф из натуральной шерсти.",
    price: 3300,
    src: "https://via.placeholder.com/200?text=Товар+32",
  },
  {
    id: 33,
    name: "Парфюм Chanel No. 5",
    description: "Популярный парфюм с цветочными нотами.",
    price: 3450,
    src: "https://via.placeholder.com/200?text=Товар+33",
  },
  {
    id: 34,
    name: "Косметика L'Oreal",
    description: "Косметика для ухода за кожей с витаминами.",
    price: 3600,
    src: "https://via.placeholder.com/200?text=Товар+34",
  },
  {
    id: 35,
    name: "Шампунь Pantene Pro-V",
    description: "Шампунь для нормальных и сухих волос.",
    price: 3750,
    src: "https://via.placeholder.com/200?text=Товар+35",
  },
  {
    id: 36,
    name: "Крем для лица Nivea",
    description: "Крем для лица с защитой от солнца.",
    price: 3900,
    src: "https://via.placeholder.com/200?text=Товар+36",
  },
  {
    id: 37,
    name: "Зубная паста Sensodyne",
    description: "Зубная паста для чувствительных зубов.",
    price: 4050,
    src: "https://via.placeholder.com/200?text=Товар+37",
  },
  {
    id: 38,
    name: "Сыр моцарелла Galbani",
    description: "Сыр моцарелла для пиццы и салатов.",
    price: 4200,
    src: "https://via.placeholder.com/200?text=Товар+38",
  },
  {
    id: 39,
    name: "Кофе Lavazza",
    description: "Кофе в зернах с ярким вкусом и ароматом.",
    price: 4350,
    src: "https://via.placeholder.com/200?text=Товар+39",
  },
  {
    id: 40,
    name: "Шоколад Milka",
    description: "Шоколад с нежной текстурой.",
    price: 4000,
    src: "https://via.placeholder.com/200?text=Товар+40",
  },
  {
    id: 41,
    name: "Чай Lipton",
    description: "Чай с натуральными ароматами.",
    price: 4150,
    src: "https://via.placeholder.com/200?text=Товар+41",
  },
  {
    id: 42,
    name: "Орехи Mix Nuts",
    description: "Смесь орехов для закусок.",
    price: 4300,
    src: "https://via.placeholder.com/200?text=Товар+42",
  },
  {
    id: 43,
    name: "Сухофрукты Sun-Maid",
    description: "Сухофрукты для здорового перекуса.",
    price: 4450,
    src: "https://via.placeholder.com/200?text=Товар+43",
  },
  {
    id: 44,
    name: "Вино Cabernet Sauvignon",
    description: "Вино с ярким вкусом и ароматом.",
    price: 4600,
    src: "https://via.placeholder.com/200?text=Товар+44",
  },
  {
    id: 45,
    name: "Пиво Heineken",
    description: "Пиво с легким хмелевым вкусом.",
    price: 4750,
    src: "https://via.placeholder.com/200?text=Товар+45",
  },
  {
    id: 46,
    name: "Соки Tropicana",
    description: "Соки из свежих фруктов.",
    price: 4900,
    src: "https://via.placeholder.com/200?text=Товар+46",
  },
  {
    id: 47,
    name: "Энергетик Red Bull",
    description: "Энергетик для бодрости и энергии.",
    price: 5050,
    src: "https://via.placeholder.com/200?text=Товар+47",
  },
  {
    id: 48,
    name: "Вода San Pellegrino",
    description: "Минеральная вода с газом.",
    price: 5200,
    src: "https://via.placeholder.com/200?text=Товар+48",
  },
  {
    id: 49,
    name: "Печенье Oreo",
    description: "Песочное печенье с кремовой начинкой.",
    price: 5350,
    src: "https://via.placeholder.com/200?text=Товар+49",
  },
  {
    id: 50,
    name: "Конфеты Kinder",
    description: "Конфеты с шоколадной оболочкой.",
    price: 5000,
    src: "https://via.placeholder.com/200?text=Товар+50",
  },
];

const maxItems: number = 8;
const Home: React.FC = (): ReactNode => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = Math.ceil(cars.length / maxItems);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleInputChange = (e: any) => {
    const pageNumber: number = e.target.value;

    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  const start = (currentPage - 1) * maxItems;
  return (
    <div className={styled.main}>
      <h1 className={styled.head}>List of Cars</h1>

      <div className={styled.container}>
        {cars.slice(start, start + maxItems).map((car, key) => (
          <div className={styled.card} key={key}>
            <ProductCard
              id={car.id}
              name={car.name}
              src={car.src}
              // alt={car.alt}
              price={car.price}
              description={car.description}
            />
            <Button />
          </div>
        ))}

        <div className={styled.navigation}>
          <p>
            Страница {currentPage} из {totalPages}
          </p>
          <div className={styled.navElements}>
            <button
              onClick={handlePrevPage}
              style={{ color: currentPage === 1 ? "gray" : "white" }}
            >
              Назад
            </button>
            <input
              type="number"
              value={currentPage}
              onChange={handleInputChange}
              max={totalPages}
            />
            <button
              onClick={handleNextPage}
              style={{ color: currentPage === totalPages ? "gray" : "white" }}
            >
              Вперед
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
