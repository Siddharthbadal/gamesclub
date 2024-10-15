import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkelton = () => {
  return (
        <Card margin={5} borderRadius={10} overflow="hidden" >
            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText   />
            </CardBody>
        </Card>
  )
}

export default GameCardSkelton