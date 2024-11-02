import { Button } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList,MenuItem } from '@chakra-ui/react/menu'
import {  BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatform'


export default function PlatformSelector() {

    const {data, error} = usePlatforms()
    if (error) return null;

  return (
    <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Platform
                <MenuList>
                        
                    {data.map(platform => 
                        <MenuItem key={platform.id}>
                            {platform.name}
                        </MenuItem>
                    )}
                       
                </MenuList>
            </MenuButton>
        
    </Menu>
  )
}
