import {VStack } from "@chakra-ui/react";
import Hotel from './Hotel/Hotel';

const Hotels = ({data }) => {
  return (
    <VStack align='flex-start' spacing={14} marginLeft={4}>
        {data.map((item) => {
            return (
                <Hotel key={item.id} hotelData = {item}/>
            )
        })}
    </VStack>
  )
}
export default Hotels;