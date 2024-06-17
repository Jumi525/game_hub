import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Games } from "./entitys";
import OptimisedImage from "./optimedImage";

const useCards = (games: Games) => {
  const Platform_icons = [
    BsGlobe,
    MdPhoneIphone,
    SiNintendo,
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
  ];
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    andiod: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  const critics =
    games.metacritic <= 35
      ? "red"
      : games.metacritic <= 75
      ? "yellow"
      : games.metacritic > 75
      ? "green"
      : "";
  const Images = OptimisedImage(games.background_image);
  return { Images, iconMap, games, critics };
};

export default useCards;
