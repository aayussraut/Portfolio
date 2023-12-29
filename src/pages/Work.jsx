import { WorkCard } from "../components/Card";
import Spotify from "../assets/spotify.png";
import Blockchain from "../assets/blockchain.png";
import BlogTalk from "../assets/blogtalk.png";
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
      title: "BlogTalk",
      description: "A BlogApp with realtime chat built with React and Sails ",
      image: BlogTalk,
      link: "https://github.com/rabin245/sails-blog-app",
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
    <div
      id="work"
      className=" min-h-screen max:h-min bg-[#24242E] flex flex-col items-center text-white px-5 md:px-24 xl:px-12 2xl:px-48"
    >
      <h1 className=" xxs:text-4xl sm:text-6xl xxs:mt-16 md:mt-32 font-semibold tracking-wider  whitespace-pre-line text-center ">
        My Recent Work
      </h1>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-0 lg:gap-20">
        {work.map((item, index) => (
          <a
            href={item.link}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="md:odd:mb-10 md:even:mt-10"
          >
            <WorkCard
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
