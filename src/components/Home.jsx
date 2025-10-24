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

const Home = () => {
  return (
    <div className={`${styles.paddingX} border border-white text-white mt-6`}>

      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={2000}>
        {Games.map((game, idx) => {
          const gameImg = game.image;
          const gameTitle = game.title;

          return (
            <div key={idx} className="bg-slate-700 h-[310px] w-[400px] p-6 rounded-lg border border-amber-400">
                <img className="w-[300px] h-[168px]" src={gameImg} alt={gameTitle}/>
                <div>
                  <h3>{gameTitle}</h3>
                  <p className="text-xs">{game.description}</p>
                </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Home;
