import {  HStack, Icon } from "@chakra-ui/react"
import { Platform } from "../hooks/useGames"
import {FaWindows, FaPlaystation, FaApple, FaXbox, FaLinux, FaAndroid} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md'
import {BsGlobe} from 'react-icons/bs'
import {SiNintendo} from 'react-icons/si'
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[]
}


const PlatformIconList = ({ platforms }: Props) => {

    const iconsMap: { [key: string] : IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo : SiNintendo,
        max : FaApple,
        linux : FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid
    }

  return (
    <HStack marginY={'10px'}>
        {platforms.map(platform => (
            <Icon as={iconsMap[platform.slug]} 
             color="yellow.700"
            />
        ))}

    </HStack>
  )


}

export default PlatformIconList