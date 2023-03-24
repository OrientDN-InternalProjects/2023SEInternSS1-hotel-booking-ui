import { useState, useEffect } from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import {
  Previous,
  Paginator,
  PageGroup,
  Page,
  Next,
  generatePages
} from 'chakra-paginator';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import Hotels from '../../components/HotelList/Hotels';
import { getHotelPaged} from '../../services/hotel-service';

const HotelPage= () =>{
  const itemLimit = 3;
  const [pagesQuantity, setPagesQuantity] = useState(0);
  const [curPage, setCurPage] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const normalStyles = {
    bg: 'white'
  };

  const activeStyles = {
    bg: 'blue.300'
  };

  const handlePageChange = (page) => {
    setCurPage(page);
  };
  console.log(curPage);
  useEffect(() =>{
    setLoading(true);
    getHotelPaged(curPage, itemLimit).then((res) => {
        setData(res.data.data.items);
        setPagesQuantity(res.data.data.totalPage);
    });
    setLoading(false);
  },[curPage]);


  console.log(data);
  console.log(pagesQuantity);
//   useEffect(() => {
//     const pagesTotal = Math.ceil(items.length / itemLimit);

//     setPagesQuantity(pagesTotal);
//   }, [items.length]);

  return (
    <Box>
      <Hotels data = {data} />
      <Flex>
        <Spacer />
        <Paginator
          onPageChange={handlePageChange}
          pagesQuantity={pagesQuantity}>
          <Previous bg="white">
            <CgChevronLeft />
          </Previous>
          <PageGroup>
            {generatePages(pagesQuantity)?.map((page) => (
              <Page
                key={`paginator_page_${page}`}
                page={page}
                normalStyles={normalStyles}
                activeStyles={activeStyles}
              />
            ))}
          </PageGroup>
          <Next bg="white">
            <CgChevronRight />
          </Next>
        </Paginator>
      </Flex>
    </Box>
  );
}

export default HotelPage;
