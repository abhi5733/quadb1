import { Box, Button, Flex, FormLabel, Grid, Image, Input, Text, VStack , border, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'

const Summary = () => {

    const toast = useToast()

    const data = JSON.parse(localStorage.getItem("show"))
console.log(data)
const[toggle,setToggle] = useState(false)
 const [book,setBook] = useState(false)

const handleBooking=()=>{
    setBook(!book)
    setToggle(!toggle)
    {book? toast({
        title: 'Booking cancelled',
       position:"top" ,
        status: 'success',
        duration: 2000,
        isClosable: true,
      }) :toast({
        title: 'Booked Successfully',
       position:"top" ,
        status: 'success',
        duration: 2000,
        isClosable: true,
      })}
   
}

return (
   <Box>


    <VStack ml={["20px","30px","50px","50px"]} width={["300px","400px","500px","700px"]}  >
        <Box p="10px">
            <Image mt="20px" width={["200px","200px","300px","300px"]} src={data.show.image.medium} />
            <FormLabel >Summary</FormLabel>
            <Text>{data.show.summary}</Text> 
           
           <Flex>  <FormLabel >RunTime : </FormLabel>   <Text>{data.show.averageRuntime} minutes </Text> </Flex> 
           <Flex>  <FormLabel >Status : </FormLabel>  <Text>{data.show.status}</Text> </Flex>  
           <Flex>
  <FormLabel>Official Site:</FormLabel>
  <a  href={data.show.officialSite} target="_blank" rel="noopener noreferrer">
    <Text color="blue">{data.show.officialSite}</Text>
  </a>
</Flex>
           
           
            <Button  bgColor="blue.500" _hover={{bgColor:"blue.400" }} color="white" mt="5px" onClick={()=>setToggle(!toggle)} >{book?"Booked":"Book Now"}</Button>
        </Box>
    </VStack>
   

   {toggle && <VStack p="10px" borderColor="black" bgColor="gray.200" width={["200px","200px","300px","300px"]} boxShadow="2xl" borderRadius="5px" position="absolute" left="50%" top="50%" transform="translate(-50%,-50%)" as="form" >
    
  <Flex width="100%"    >   <FormLabel width="100%">Name</FormLabel>  <Text _hover={{cursor:"pointer"}} onClick={()=>setToggle(!toggle)} >X</Text>   </Flex>
    <Input disabled value={data.show.name} />
    <FormLabel width="100%">Genres</FormLabel>
    <Input disabled  value={data.show.genres}/>
    <FormLabel width="100%">Language</FormLabel>
    <Input disabled  value={data.show.language}/>
    <Button bgColor="blue.500" _hover={{bgColor:"blue.400" }} color="white" onClick={handleBooking} >{book?"Cancel Booking":"Book"}</Button>

    </VStack>}
  
    
   
   </Box>
  )
}

export default Summary
