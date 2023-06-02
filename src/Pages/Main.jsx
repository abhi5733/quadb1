import { Box, Button, Grid , Image, Text} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {Navigate , Link , useNavigate} from "react-router-dom"
import  axios from "axios"
const Main = () => {
const[error,setError] = useState(false)
 const [load,setLoad] = useState(false)
    const [data,setData] = useState([])
const navigate = useNavigate()
    useEffect(()=>{
        setError(false)
        setLoad(true)
       
axios.get(" https://api.tvmaze.com/search/shows?q=all").then((res)=>{setError(false);setLoad(false);console.log(res.data);setData(res.data)})
.catch((err)=>{console.log(err);setLoad(false);setLoad(true);setError(true)})
    },[])

    const handleMovie=(el)=>{

        localStorage.setItem("show" , JSON.stringify(el))

navigate("/summary")
    
}

  return (
    <Box>
        {load && <Image margin="auto" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" />}
      
        {error && <Image src="https://cdn.dribbble.com/users/251873/screenshots/9288094/13539-sign-for-error-or-explanation-alert.gif"/>}
<Grid gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} margin="auto" gap={["10px","10px","20px","20px"]} > 
{data && data.map((el)=>{

return <Box fontWeight="semibold"  boxShadow="2xl" width={["250px","250px","300px","300px"]} margin="auto" p="10px"textAlign="center" > <Image  height="300px" width="100%" src={el.show.image.original} />
    <Text margin="auto" width ="100%"  >Name : {el.show.name}</Text> <Text margin="auto">Language : {el.show.language}</Text>
    <Text margin="auto">Genre : {el.show.genres.join(" ")}</Text>
   <Button onClick={()=>handleMovie(el)} bgColor="blue.500" _hover={{bgColor:"blue.400" }} color="white" m="5px">Read More</Button> 
    </Box>


})}

</Grid>

    </Box>
  )
}

export default Main
