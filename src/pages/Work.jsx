import { WorkCard } from "../components/Card";
import Spotify from "../assets/spotify.png";
import Blockchain from "../assets/blockchain.png";
import BlogTalk from "../assets/blogtalk.png";
import ReactMovwave from "../assets/react-movWave.png";
import NextMovwave from "../assets/next-movWave.png";
import DarazUiClone from "../assets/daraz-ui-clone.png";
import { useInView } from "react-intersection-observer";

export default function Work() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px",
  });

  const work = [
    {
      title: "MovWave2.0 - A Movie Database",
      description: "A Movie Database app built with Next.JS and TMDB API ",
      image: NextMovwave,
      githubLink: "https://github.com/aayussraut/next-movWave",
      projectDemoLink: "https://next-mov-wave.vercel.app/",
    },
    {
      title: "Spotify Clone",
      description: "A Spotify clone built with React, Recoil and Reactstrap ",
      image: Spotify,
      githubLink: "https://github.com/aayussraut/spotify-clone",
      projectDemoLink: "https://spotify-ui-clone-d2j8.onrender.com/",
    },

    {
      title: "Daraz Homepage Clone",
      description:
        "A Daraz Homepage clone built with Next.JS,Shadcn and TailwindCSS ",
      image: DarazUiClone,
      githubLink: "https://github.com/aayussraut/daraz-ui-clone",
      projectDemoLink: "https://daraz-ui-clone.vercel.app/",
    },
    {
      title: "BlogTalk",
      description: "A BlogApp with realtime chat built with React and Sails ",
      image: BlogTalk,
      githubLink: "https://github.com/rabin245/sails-blog-app",
    },
    {
      title: "Decentralized KYC Sharing System",
      description:
        "A decentralized KYC sharing system built with React, Solidity and Bootstrap ",
      image: Blockchain,
      githubLink:
        "https://github.com/aayussraut/Decentralized-KYC-Sharing-System",
    },
    {
      title: "MovWave - A Movie Database",
      description: "A Movie Database app built with React, Redux and TMDB API ",
      image: ReactMovwave,
      githubLink: "https://github.com/aayussraut/movWave",
      projectDemoLink: "https://mov-wave.vercel.app/",
    },
  ];
  return (
    <div
      id="work"
      className=" min-h-screen max:h-min bg-[#24242E] flex flex-col items-center text-white px-5 md:px-24 xl:px-12 2xl:px-48"
    >
      <div ref={ref} className={`slide-in ${inView ? "visible" : ""}`}>
        <h1 className=" xxs:text-4xl sm:text-6xl xxs:mt-16 md:mt-28 font-semibold tracking-wider  whitespace-pre-line text-center ">
          My Recent Work
        </h1>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-0 lg:gap-x-20">
          {work.map((item, index) => (
            <a
              href={item.link}
              key={index}
              target="_blank"
              rel="noreferrer"
              className="md:mb-10 xl:odd:mb-10 xl:even:mt-10"
            >
              <WorkCard
                title={item.title}
                description={item.description}
                image={item.image}
                githubLink={item.githubLink}
                projectDemoLink={item.projectDemoLink}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
