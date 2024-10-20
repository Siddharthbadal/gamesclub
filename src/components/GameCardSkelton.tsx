import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkelton = () => {
  return (
        <Card margin={1} borderRadius={10} overflow="hidden" width='350px'>
            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText   />
            </CardBody>
        </Card>
  )
}

export default GameCardSkelton