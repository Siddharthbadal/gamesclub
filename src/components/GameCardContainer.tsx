import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box margin={3} borderRadius={10} overflow="hidden" width='350px'
    >
        {children}
    </Box>
  )
}

export default GameCardContainer