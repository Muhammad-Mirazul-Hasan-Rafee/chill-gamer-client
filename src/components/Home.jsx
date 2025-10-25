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

      <h2 className="text-4xl">Insert your favourite game</h2>
      <br />

      <div className="flex justify-between items-start">
        {/* Form */}
        <form>
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
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="btn btn-primary btn-outline w-[100px] active:!bg-[#FFF] active:!text-black"
            >
              Submit
            </button>
          </div>
        </form>
        {/* Animation Chopper */}
        <div className="w-1/2 h-auto">
          <h2>Hey Chopper</h2>
          <Canvas camera={{ position: [0, 2, 10], fov: 60, near:0.1, far:1000 }}>
            {/* Ambient light পুরো scene টা হালকা উজ্জ্বল করবে */}
            <ambientLight intensity={2} />

            {/* Directional light একটু উঁচু দিক থেকে */}
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <OrbitControls minDistance={3} maxDistance={30} autoRotate autoRotateSpeed={1} />

            {/* একটু নিচ থেকে আলো */}
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
