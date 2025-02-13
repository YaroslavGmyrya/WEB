"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import React, { forwardRef } from "react";

interface ContactInfo{
    ref?: React.Ref<HTMLDivElement>;
}
const ContactInfo = forwardRef<HTMLDivElement, ContactInfo>((props,ref) => {

  const [help, setHelp] = useState(false);

  const handleEnterMouse = () => {
    setHelp(true);
  };

  const handleLeaveMouse = () => {
    setHelp(false);
  };

  return (
    <div ref={ref} className="relative w-full h-[618px] flex pl-[180px] pr-[180px] pt-[30px] bg-contact_bg justify-between">
      <div className="flex flex-col gap-[40px]">
        <div>Контакты</div>
        <div className="flex gap-[15px] items-center">
          <div>Главный офис</div>
          <div
            onMouseEnter={handleEnterMouse}
            onMouseLeave={handleLeaveMouse}
            className="relative z-[30] w-[20px] h-[20px] bg-white flex justify-center items-center rounded-full shadow-md select-none"
          >
            ?
          </div>

            <div className={`bg-[url('/Help.svg')] bg-cover bg-no-repeat w-[380px] h-[92px] absolute z-[20] top-[10px] left-[280px] transition-opacity duration-1000 ${help ? "opacity-100 visible" : "opacity-0"}`}>
              <div className="py-[10px] px-[15px] text-[14px] font-normal text-custom_gray_text">Адрес и телефон для корреспонденции, инвесторов. Вопросы о доставке, качестве обслуживания и товара просьба задавать в отдел продаж</div>
           </div>
          
        </div>

        <div className="flex flex-col gap-[15px] text-custom_gray_text">
          <div className="text-[30px]">+7 800 789 89 89</div>
          <div className="text-[18px]">г. Санкт-Петербург, Комсомольская, 43 к1</div>
        </div>

        <div>отдел продаж</div>

        <div className="flex flex-col gap-[15px] text-custom_gray_text">
          <div className="text-[30px]">+7 800 789 89 89</div>
          <div className="text-[18px]">г. Санкт-Петербург, Комсомольская, 43 к1</div>
        </div>
        <div className="flex gap-[20px]">
          <img src='VKLogo.svg'></img>
          <img src='InstLogo.svg'></img>
        </div>
      </div>

      <MapContainer className="relative z-[1] w-[600px] h-[500px]" center={[59.930477, 30.363448]} zoom={11.8} style={{ height: "500px", width: "600px"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[59.930477, 30.363448]}>
        <Popup>Местоположение</Popup>
      </Marker>

      <Marker position={[59.953063, 30.325453]}>
        <Popup>Местоположение</Popup>
      </Marker>

      <Marker position={[59.942557, 30.431197]}>
        <Popup>Местоположение</Popup>
      </Marker>

    </MapContainer>

    </div>
  );
})

export default ContactInfo;
