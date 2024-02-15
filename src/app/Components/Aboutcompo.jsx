
"use client";

import { motion } from "framer-motion";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useRouter } from "next/navigation";

const Aboutcompo = () => {
  const edudata = [
    { name: "Stanford University", position: "Full Stack Web Developer", year: "2021-2024" },
    { name: "Harvard University", position: "Software Engineer", year: "2019-2021" },
    { name: "MIT", position: "Frontend Developer", year: "2017-2019" }
  ];
  const workdata = [
    { name: "Apple", position: "Full Stack Web Developer", year: "2021-2024" },
    { name: "IserVu", position: "Software Engineer", year: "2019-2021" },
    { name: "Twitter", position: "Frontend Developer", year: "2017-2019" }
  ];

  
  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 , transition: { delay: 2.5 } },
  };

  const educationAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 2 } },
  };

  const route = useRouter()
  return (
    <>
      <Stack flexDirection='column' justifyContent='center' alignItems='center' gap='5em'>
      <Stack flexDirection='column' gap='2em' width={{md:"60%" , xs:"auto"}} alignItems='center' justifyContent='center' padding='0 0em'>
          <motion.div initial="hidden" animate="visible" variants={educationAnimation} style={{display:"flex" , flexDirection:"column" , gap:"1em"}}>
            <Typography
              fontWeight="500"
              fontSize="39px"
             sx={{ color: "transparent",
             backgroundImage: "linear-gradient(to right, #b16cea,#ff8a56)",
             backgroundClip: "text"}}
            >
             Education
            </Typography>
          </motion.div>
          <Stack flexDirection={{lg:"row" , xs:"column"}} gap='1em' width={{md:"100%" , xs:"auto"}} justifyContent='space-evenly' alignItems='center' flexWrap={{lg:"nowrap" , xs:"wrap"}} padding='0em 0.5em'>
           <Stack  width={{lg:"60%" , md:"70%" , sm:"80%" , xs:"auto"}}  className="border" flexDirection='column' borderColor='#fff' height='100%' sx={{ border:"1px solid rgba(255, 255, 255, 0.125)" , backdropFilter:"blur(16px) saturate(180%)" , background:"rgba(30, 30, 30, 0.75)"}} padding={{sm:"1em 1em" , xs:"0.5em 0.5em"}} borderRadius='10px' gap='0.2em'>
     <Box component='img' src="/grad.jpg" sx={{width:"100%" , borderRadius:"7px"}}/>
     <Typography color='#f5f5f5' fontWeight='700' fontSize='18px' marginTop='1em'>Veer Surendra Sai University Of Technology</Typography>
                  <Stack flexDirection='row' justifyContent='space-between'>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>Electronics and Telecommunication</Typography>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>● 2020-2024</Typography>
                  </Stack>
           </Stack>
           <Stack flexDirection='column' gap='1em'  width={{lg:"40%" , md:"60%" , sm:"80%" , xs:"auto"}} minWidth="300px"height='100%'>
           <Stack width={{md:"100%" , xs:"auto"}}   className="border" flexDirection='column' borderColor='#fff' height='11.5em' sx={{ border:"1px solid rgba(255, 255, 255, 0.125)" , backdropFilter:"blur(16px) saturate(180%)" , background:"rgba(30, 30, 30, 0.75)"}} padding='1.4em 1em' borderRadius='10px'>
           <Stack width='100%' height='80%'>
           <Box component='img' src="/grad.jpg" sx={{width:"100%", height:"100%" , borderRadius:"7px"}}/>
           </Stack>
           <Stack flexDirection='column' width='auto' height='20%'>
     <Typography color='#f5f5f5' fontWeight='700' fontSize='18px' marginTop='0.4em'>St Paul's</Typography>
                  <Stack flexDirection='row' justifyContent='space-between' gap='1em'>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>PCMB</Typography>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>● 2018-2020</Typography>
                  </Stack>
                  </Stack>
</Stack>
<Stack width={{md:"100%" , xs:"auto"}}   className="border" flexDirection='column' borderColor='#fff' minWidth="300px" height='11.5em' sx={{ border:"1px solid rgba(255, 255, 255, 0.125)" , backdropFilter:"blur(16px) saturate(180%)" , background:"rgba(30, 30, 30, 0.75)"}} padding='1.4em 1em' borderRadius='10px'>
           <Stack width={{md:"100%" , xs:"auto"}} height='80%'>
           <Box component='img' src="/grad.jpg" sx={{width:"100%", height:"100%" , borderRadius:"7px"}}/>
           </Stack>
           <Stack flexDirection='column' width='100%' height='20%'>
     <Typography color='#f5f5f5' fontWeight='700' fontSize='18px' marginTop='0.4em'>St Paul's</Typography>
                  <Stack flexDirection='row' justifyContent='space-between' gap='1em'>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>PCMB</Typography>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>● 2018-2020</Typography>
                  </Stack>
                  </Stack>
</Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack flexDirection={{md:"row" , xs:"column"}} gap={{xl:"20em",lg:"10em" , md:"10em" , sm:"2em" ,xs:"2em" }} width={{md:"55%" , xs:"auto"}} justifyContent='space-between'>
          <motion.div initial="hidden" animate="visible" variants={educationAnimation} style={{display:"flex" , flexDirection:"column" , gap:"1em"}}>
            <Typography
              fontWeight="500"
              fontSize="39px"
             sx={{ color: "transparent",
             backgroundImage: "linear-gradient(to right, #b16cea,#ff8a56)",
             backgroundClip: "text"}}
            >
             Work <span style={{  fontWeight:"700"}}>Experince</span>
            </Typography>
            <Stack 
  position='relative' 
  width='4em' 
  padding='2em 0.5em' 
  sx={{
    background: "#1e1e1e",
    overflow: 'visible', // Set overflow to 'visible' to allow Typography to overflow
  }}
>
  <Typography 
    position='absolute' 
    left='139%' 
    top='50%' 
    fontSize='17px' 
    fontWeight='500' 
    color='#fff' 
    sx={{
      transform: 'translate(-50%, -50%)', // Center the Typography
      width: '180%', // Make Typography wider than the Stack to overflow
      display:"flex", alignItems:"center",gap:"1em",cursor:"pointer"
    }}
    onClick={()=> route.push('/about/experience') }
  >
    View More <HiOutlineArrowNarrowRight fontSize='20'/>
  </Typography>
</Stack>

          </motion.div>
          <Stack flexDirection='column' gap='1em' width='100%'>
            {workdata.map((data, id) => (
              <motion.div key={id} initial="hidden" animate="visible" variants={fadeInLeft}>
                <Stack className="border" flexDirection='column' width={{sm:"100%" , xs:"auto"}} borderColor='#fff' height='auto' sx={{ border:"1px solid #1e1e1e" }} padding='1em 1em' borderRadius='10px'>
                  <Typography color='#f5f5f5' fontWeight='700' fontSize='20px'>{data.name}</Typography>
                  <Stack flexDirection='row' justifyContent='space-between'>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>{data.position}</Typography>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>● {data.year}</Typography>
                  </Stack>
                </Stack>
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Aboutcompo;
