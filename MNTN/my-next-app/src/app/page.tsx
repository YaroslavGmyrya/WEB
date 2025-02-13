"use client"
import Hero from "@/components/Hero";
import MainContent from "@/components/MainContent";
import Card from "@/components/Card";
import Footer from "@/components/Footer"
import { useInView } from 'react-intersection-observer'
import { useState,useEffect} from "react";
import React from "react";



const index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [allowInViewChange, setAllowInViewChange] = useState(true); 

  const handleInViewChange = (id: string) => {
    if (allowInViewChange && id) {
      if (id === '0Start') {
        setActiveIndex(0);
      } else {
        setActiveIndex(parseInt(id));
      }
    }
  };

  const handleOnClick = (event: React.MouseEvent<HTMLUListElement>) => {
    const clickedElement = (event.target as HTMLElement).closest("li");
    const id = clickedElement?.getAttribute("id");

    if (id) {
      setActiveIndex(parseInt(id));
      setAllowInViewChange(false); 
      setTimeout(() => setAllowInViewChange(true), 500); 
    }
  };

  useEffect(() => {
    setActiveIndex(0)
  },[])

  return (
    <>
      <Hero
        onClick={handleOnClick}
        ref={React.createRef()}
        SetActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
        onInViewChange={handleInViewChange}
        id="0Start"
      />
      <MainContent>
        <Card
          LightText="Get started"
          Header="What level of hiker are you?"
          Description="Determining what level of hiker you are can be an important tool when planning future hikes..."
          Inversion={false}
          Number="01"
          image="/01Image.svg"
          id="01"
          onInViewChange={handleInViewChange}
        />
        <Card
          LightText="Hiking Essentials"
          Header="Picking the right Hiking Gear!"
          Description="The nice thing about beginning hiking is that you don’t really need any special gear..."
          Inversion={true}
          Number="02"
          image="/02Image.svg"
          id="02"
          onInViewChange={handleInViewChange}
        />
        <Card
          LightText="where you go is the key"
          Header="Understand Your Map & Timing"
          Description="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag..."
          Inversion={false}
          Number="03"
          image="/03Image.svg"
          id="03"
          onInViewChange={handleInViewChange}
        />
      </MainContent>
      <Footer />
    </>
  );
};

export default index