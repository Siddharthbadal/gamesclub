import { Badge } from "@chakra-ui/react";

interface Props{
    score: number;
}

const CriticScore = ({score }: Props) => {
  let color = score > 91 ? "yellow.500" : score > 75 ? "green.500" : 'gray.400';
    return (
    <Badge fontSize={'14px'} paddingX={2} color={color}
    borderRadius={'4px'}>
        {score}
    </Badge>
  )
}

export default CriticScore