import { ParallaxBanner, BannerLayer, Parallax } from 'react-scroll-parallax';
import bgimg from "./assets/background.jpg"
import { background, background2, foreground, foreground2, foreground3, gradientOverlay, gradientOverlay2, headline, headline2, headline3, sun } from './HomeElements/Elements';
import video from "./assets/Untitled design.mp4"
export default function ParallelX() {




  return (
    <div style={{ overflow: "hidden" }} >
      
      <ParallaxBanner

        style={{ minHeight: "100vh" }}
        layers={[background, headline, sun, foreground, gradientOverlay]}
        className="aspect-[2/1]"


      >


      </ParallaxBanner>
      <ParallaxBanner
        style={{ minHeight: "100vh" }}


        layers={[background2, headline2, gradientOverlay2, foreground2, foreground3]}


      />


      <ParallaxBanner
        style={{ minHeight: "100vh" }}
        layers={[foreground]}
        className="aspect-[2/1]"
      >
        <video  autoPlay ={true} loop muted= {true} src={video}></video>
      </ParallaxBanner>
      <div style={{ height: "100vh", backgroundImage: "url('background.jpg')", backgroundSize: "cover" }}>
        <Parallax
          scaleX={[0, 3]}
          speed={-10}
          opacity={[0, 1]}


        >
          <h1
            className='text-white font-bold drop-shadow-3xl  bg-cover bg-clip-text'
            style={{
              fontSize: "10vw",
              color: "#fff",
              textAlign: "center",
            }}>Pravin</h1>
        </Parallax>
        <Parallax
          translateX={['-100px', '0px']}
          scale={[0.75, 1]}
          rotate={[0, 180]}
          easing={[1, 0.5, 1, 0]}
          speed={10}
          style={{
            display: "flex",
            justifyContent: "flex-start"
          }}
        >
          <h1 style={{
            fontSize: "10vw",
            color: "#fff",
            textAlign: "center",
            height: "100px",
            width: "100px",
            borderRadius: "5%",
            border: "10px solid blue"
          }}></h1>
        </Parallax>
        <Parallax
          translateX={['-100px', '0px']}
          scale={[0.75, 1]}
          rotate={[0, 180]}
          easing={[1, 0.5, 1, 1.54]}
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <h1 style={{
            fontSize: "10vw",
            color: "#fff",
            textAlign: "center",
            height: "100px",
            width: "100px",
            borderRadius: "5%",
            border: "10px solid red"
          }}></h1>
        </Parallax>
        <Parallax
          translateX={['-100px', '0px']}
          scale={[0.5, 1]}
          rotate={[180, -360]}
          easing={[0, 0.5, 1, 1.54]}
          style={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <h1 style={{
            fontSize: "10vw",
            color: "#fff",
            textAlign: "center",
            height: "100px",
            width: "100px",
            borderRadius: "5%",
            border: "10px solid yellow"
          }}></h1>
        </Parallax>

        
      </div>

      <div className="h-[100vh]">
      <div style={{ height: "100vh", backgroundImage: "url('https://siteorigin.com/wp-content/uploads/2021/05/nick-woods-jefferson-unsplash.jpeg')", backgroundSize: "cover" }}>
        <Parallax
          scaleX={[0, 3]}
          speed={-10}
          opacity={[0, 1]}


        >
        <img src="text-img.webp" alt="" />
        </Parallax>
        <Parallax
          translateX={['-100px', '0px']}
          scale={[0.75, 1]}
          rotate={[0, 180]}
          easing={[1, 0.5, 1, 0]}
          speed={10}
          style={{
            display: "flex",
            justifyContent: "flex-start"
          }}
        >
          <h1 style={{
            fontSize: "10vw",
            color: "#fff",
            textAlign: "center",
            height: "100px",
            width: "100px",
            borderRadius: "5%",
            border: "10px solid blue"
          }}></h1>
        </Parallax>
        <Parallax
          translateX={['-100px', '0px']}
          scale={[0.75, 1]}
          rotate={[0, 180]}
          easing={[1, 0.5, 1, 1.54]}
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <h1 style={{
            fontSize: "10vw",
            color: "#fff",
            textAlign: "center",
            height: "100px",
            width: "100px",
            borderRadius: "5%",
            border: "10px solid red"
          }}></h1>
        </Parallax>
        <Parallax
          translateX={['-100px', '0px']}
          scale={[0.5, 1]}
          rotate={[180, -360]}
          easing={[0, 0.5, 1, 1.54]}
          style={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <h1 style={{
            fontSize: "10vw",
            color: "#fff",
            textAlign: "center",
            height: "100px",
            width: "100px",
            borderRadius: "5%",
            border: "10px solid yellow"
          }}></h1>
        </Parallax>


      </div>
      </div>
    </div >


  );
}