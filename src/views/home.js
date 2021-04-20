import Layout from "layout/default";
import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import lottie from "lottie-web";
import animation from "animations/animation.json";
import Fade from "react-reveal/Fade";

import { Controller, Scene } from 'react-scrollmagic';

const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.1],
      type: 'stop',
      frames: [10],
    },
    {
      visibility: [0.1, 0.9],
      type: 'seek',
      frames: [10, 199],
    },
    {
      visibility: [0.9, 1],
      type: 'stop',
      frames: [200],
    },
    
  ],
};

export const Home = () => {

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="h-[700px]">Scroll Down to see the magic ;)</div>
        <Lottie animationData={animation} interactivity={interactivity} className="h-96"/>
        <div className="h-[700px]"/>
        <Fade left>
        <div className="w-full">
          <img src={'https://img.rebenagesta.com/tony-montana-biuro.jpg'}/>
        </div>
        </Fade>
        
      </div>
    </Layout>
  );
};

export default Home;
