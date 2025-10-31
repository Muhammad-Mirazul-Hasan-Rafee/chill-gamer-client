import { Canvas } from "@react-three/fiber";
import styles from "../styles";
import Games from "./Games";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Scene from "../components/Chopper/Scene";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

// form control - handle submit button
const handleSubmit = (e) => {
  e.preventDefault();
};

const Home = () => {
  return (
    <div
      className={`${styles.paddingX} h-auto border border-white text-white mt-6`}
    >
      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={2000}>
        {Games.map((game, idx) => {
          const gameImg = game.image;
          const gameTitle = game.title;

          return (
            <div key={idx} className="h-[310px] w-[400px]  p-6 rounded-lg">
              <div className="flex justify-center items-center mx-auto">
                <img
                  className="w-[330px] h-[168px] object-cover rounded-md"
                  src={gameImg}
                  alt={gameTitle}
                />
              </div>
              <div>
                <h3>{gameTitle}</h3>
                <p className="text-xs text-justify">{game.description}</p>
                <p className="text-sm mt-4">Rating: {game.Rating}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
      <br />
      <br />

     
      <br />

      <div className="grid grid-cols-2 gap-6 items-start w-[1200px] h-[1000px]">



        {/* Form */}
        <form className="flex flex-col justify-evenly">
           <h2 className="text-3xl text-center">Insert your favourite game</h2>
          {/* Game Title Field */}
          <label htmlFor="title" className="block mb-1 font-medium">
            Game Title:
          </label>
          <input
            type="text"
            placeholder="Game Title"
            className="input input-primary w-[300px] text-gray-400"
          />
          {/* Game Short Description Field */}
          <label htmlFor="title" className="block mb-1 font-medium">
            Description:
          </label>
          <input
            type="text"
            placeholder="Description"
            className="input input-primary w-[300px] text-gray-400"
          />
          {/* Game Iamge Field */}
          <label htmlFor="title" className="block mb-1 font-medium">
            Image URL:
          </label>
          <input
            type="text"
            placeholder="Url"
            className="input input-primary w-[300px] text-gray-400"
          />
          {/* Game Rating Field */}
          <label htmlFor="rating" className="block mb-1 font-medium">
            Rating (1-10):
          </label>
          <input
            type="text"
            placeholder="Rating"
            className="input input-primary w-[300px] text-gray-400"
          />
          <br />
          {/* Submit Button */}
          <div className="flex justify-end w-[305px]">
            <button onClick={handleSubmit} className="btn btn-primary btn-outline w-[100px] active:!bg-[#FFF] active:!text-black">Submit</button>
          </div>
        </form>




        {/* Animation Chopper */}
        <div className="w-[680px] h-[470px] flex justify-start">
          {/* <h4 className="text-3xl text-center">Explore gaming experience</h4> */}
          <Canvas
            camera={{ position: [0, 2.6, 13], fov: 70}} style={{ width: '50vw', height: '120vh' }}
          >
            {/* Ambient light =  full scene will be slightly lighten */}
            <ambientLight intensity={1.2} />

            {/* Directional light = from a little bit height */}
            <directionalLight position={[5, 10, 5]} intensity={1.5} />
            <OrbitControls
              minDistance={3}
              maxDistance={30}
              autoRotate
              autoRotateSpeed={1}
              enableZoom={false}
              minPolarAngle={Math.PI/2}
               maxPolarAngle={Math.PI / 2}
            />

            {/* light from a little bit below */}
            <pointLight position={[0, -5, 5]} intensity={1.5} />

            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Home;
