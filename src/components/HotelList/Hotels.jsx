import React from 'react'
import {VStack } from "@chakra-ui/react";
import Hotel from './Hotel/Hotel';

const Hotels = ({ books }) => {
  return (
    <VStack align='flex-start' spacing={14} marginLeft={4}>
        {books.map((item, key) => {
            return (
                <Hotel key={item.id} {...item}/>
            )
        })}
    </VStack>
  )
}

export default Hotels