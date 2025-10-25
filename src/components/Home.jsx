import styles from "../styles";
import Games from "./Games";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

      <div className="flex justify-between">
        {/* Form */}
        <form>
          {/* Name Field */}
          {/* <label htmlFor="name" className="block mb-1 font-medium">Your Name:</label>
        <input type="text" placeholder="Name" className="input input-primary text-gray-400" /> */}

          {/* Email Field */}
          {/* <label htmlFor="email" className="block mb-1 font-medium">Email:</label>
        <input type="email" placeholder="Email" className="input input-primary text-gray-400" /> */}

          {/* Game Title Field */}
          <label htmlFor="title" className="block mb-1 font-medium">
            Game Title:
          </label>
          <input
            type="text"
            placeholder="Game Title"
            className="input input-primary text-gray-400"
          />

          {/* Game Short Description Field */}
          <label htmlFor="title" className="block mb-1 font-medium">
            Description:
          </label>
          <input
            type="text"
            placeholder="Description"
            className="input input-primary text-gray-400"
          />

          {/* Game Iamge Field */}
          <label htmlFor="title" className="block mb-1 font-medium">
            Image URL:
          </label>
          <input
            type="text"
            placeholder="Url"
            className="input input-primary text-gray-400"
          />

          {/* Game Rating Field */}
          <label htmlFor="rating" className="block mb-1 font-medium">
            Rating (1-10):
          </label>
          <input
            type="text"
            placeholder="Primary"
            className="input input-primary text-gray-400"
          />

          <br />

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="btn btn-primary btn-outline w-[100px] active:!bg-[#FFF] active:!text-black"
          >
            Submit
          </button>
        </form>
        {/* Animation Div */}
        <div className="border border-amber-400 w-auto">
          <h3>Here will stay the model</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
