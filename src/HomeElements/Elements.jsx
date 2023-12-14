import {BannerLayer } from 'react-scroll-parallax';
export const background: BannerLayer = {
    image:
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    
  };
  export const headline: BannerLayer = {
    translateY: [-10, 80],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h1 className="text-6xl md:text-8xl text-white font-bold drop-shadow-3xl  bg-cover bg-clip-text ">
          SHARVIL
        </h1>
        <br />
        <h1 className="text-6xl md:text-8xl text-transparent font-bold drop-shadow-3xl bg-text-bg bg-cover bg-clip-text ">
          BUSINESS GROUP
        </h1>
      </div>
    ),
  };
  export const headline3: BannerLayer = {
    rota: [-80, 80],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h1 className="text-6xl md:text-8xl text-white font-bold drop-shadow-3xl  bg-cover bg-clip-text ">
          Pravin Yadav
        </h1>
      </div>
    ),
  };
  export const foreground: BannerLayer = {
    image:
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png',
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  export const gradientOverlay: BannerLayer = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,

    children: (
      <div style={{
      }} className="absolute inset-0 bg-gradient-to-t from-gray-500 to-blue-900" />
    ),
  };
  export const background2: BannerLayer = {
    image:
      "layer-base.png",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    speed: -10
  };
  export const headline2: BannerLayer = {
    translateX: [-60, 60],
    scale: [0.1, 2, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    speed: 20,
    children: (
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h1 className="text-6xl md:text-8xl text-white font-bold drop-shadow-3xl  bg-cover bg-clip-text ">
          Shreshth Sapra
        </h1>
        <br />
        {/* <h1 className="text-6xl md:text-8xl text-transparent font-bold drop-shadow-3xl bg-text-bg bg-cover bg-clip-text ">
          React Developer
        </h1> */}
      </div>
    ),
  };
  export const foreground2: BannerLayer = {
    image:
      'layer-middle.png',
    translateY: [0, 15],
    scale: [1, 1.5, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };
  export const foreground3: BannerLayer = {
    image:
      'layer-front.png',
    translateY: [-20, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  export const gradientOverlay2: BannerLayer = {
    translateX: [-10, 110],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,

    children: (
      <div className="absolute "

        style={{
          height: "300px",
          width: "300px",
          background: "#F6F1D5",
          borderRadius: "100%",
          backdropFilter: "initial",
          boxShadow: " 0 0 55px 1px #F6F1D5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
        {/* <div
          
          style={
            {
              height:"30%",
              width:"30%",
              backgroundColor:"rgba(0,0,0,0.1)",
              borderRadius:"100%"
            }
          }
          ></div> */}
      </div>
    ),
  };
  // afternoon sun colro #yFAEFC8
  export const sun: BannerLayer = {
    translateY: [40, -1],
    translateX: [-10, 100],
    shouldAlwaysCompleteAnimation: true,
    expanded: true,
    speed:2,
    easing: [0, 0.25, 0.3, 0.7],
    children: (
      <div
        id='Sun'
        className="absolute "
        style={{
          height: "300px",
          width: "300px",
          background: "#ef4b22",
          borderRadius: "100%",
          backdropFilter: "initial",
          boxShadow: " 0 0 55px 1px #ef4b22",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
      </div>
    ),
  };