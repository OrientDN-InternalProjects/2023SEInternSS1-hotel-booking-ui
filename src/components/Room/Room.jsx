import { Box ,Image,Badge} from '@chakra-ui/react'

const Room = ({ room }) => {
    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
    }
  
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image h={400} src={room.urls[0]} alt={property.imageAlt} />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              {room.type}
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
            {room?.facilities?.map(f => {
            return (
                f.facilityName + "    " 
            ) 
          })}
              
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {room?.extraServices?.map(f => {
            return (
                f.serviceName + "    " 
            ) 
          })}
          </Box>
  
          <Box>
            {room.price.toLocaleString("en-US", { minimumFractionDigits:0}) }
            <Box as='span' color='gray.600' fontSize='sm'>
               VND
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }

  export default Room;