import { WorkCard } from "../components/Card";
import Spotify from "../assets/spotify.png";
import Portfolio from "../assets/portfolio.png";
import Blockchain from "../assets/blockchain.png";
import Covid from "../assets/covid.png";
export default function Work() {
  const work = [
    {
      title: "Spotify Clone",
      description: "A Spotify clone built with React, Recoil and Reactstrap ",
      image: Spotify,
      link: "https://github.com/aayussraut/spotify-clone",
    },
    {
      title: "Portfolio",
      description: "Portfolio built with React and TailwindCSS ",
      image: Portfolio,
      link: "https://github.com/aayussraut/Portfolio.git",
    },
    {
      title: "Decentralized KYC Sharing System",
      description:
        "A decentralized KYC sharing system built with React, Solidity and Bootstrap ",
      image: Blockchain,
      link: "https://github.com/aayussraut/Decentralized-KYC-Sharing-System",
    },
    {
      title: "Covid Update",
      description: "A Covid Update app built with Flutter and Dart ",
      image: Covid,
      link: "https://github.com/aayussraut/COVID-update.git",
    },
  ];
  return (
    <div className=" min-h-screen max:h-min bg-[#24242E] flex flex-col items-center text-white">
      <h1 className=" text-6xl xxs:mt-16 md:mt-32 font-semibold tracking-wider">
        My Recent Work
      </h1>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20">
        {work.map((item, index) => (
          <a href={item.link} key={index} target="_blank" rel="noreferrer">
            <WorkCard
              //   key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
