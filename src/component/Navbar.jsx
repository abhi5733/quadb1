import { Box, Flex , Image, Text } from '@chakra-ui/react'
import React from 'react'
import image from "../images/movie.png"
import black1 from "../images/black1.png"
import { Link } from 'react-router-dom'

const Navbar = () => {

    

  return (
  <Box width="100%" bgColor="blue.400"   textAlign="center" margin="auto" >
    <Flex> <Link to="/" > <Image src={black1} height={["50px","80px","100px","100px"]} ml={["10px","20px","20px","20px"]} width="200px"  />  </Link> </Flex>
  </Box>
  )
}

export default Navbar
