"use client"

import { Button, Stack, Typography } from "@mui/material";
import {motion} from 'framer-motion'
import { Suspense } from "react";
const Experience = () => {

    const workdata = [
        { name: "Apple", position: "Full Stack Web Developer", year: "2021-2024" },
        { name: "IserVu", position: "Software Engineer", year: "2019-2021" },
        { name: "Twitter", position: "Frontend Developer", year: "2017-2019" },
        { name: "Apple", position: "Full Stack Web Developer", year: "2021-2024" },
        { name: "IserVu", position: "Software Engineer", year: "2019-2021" },
        { name: "Twitter", position: "Frontend Developer", year: "2017-2019" },
        { name: "Apple", position: "Full Stack Web Developer", year: "2021-2024" },
        { name: "IserVu", position: "Software Engineer", year: "2019-2021" },
        { name: "Twitter", position: "Frontend Developer", year: "2017-2019" }
      ];
      const fadeInLeft = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 , transition: { delay: 0.25 } },
      };
    
      const compnydata = [
        { name: "Igdrones" },
        { name: "Company2" },
        { name: "Company3" },
        { name: "Company4" },
        { name: "Company5" },
        { name: "Company6" },
        { name: "Company3" },
        { name: "Company4" },
        { name: "Company5" },
        { name: "Company6" }
      ];
    
    return ( 
        <>
        <Suspense>
 <Stack
        flexDirection="column"
        gap="2em"
        alignItems="center"
        height="100%"
        minHeight="100vh"
        bgcolor="#161513"
        padding={{ md: "4em 0", xs: "1em 1em" }}
      >
        <Typography
          sx={{
            color: "transparent",
            backgroundImage:
              "linear-gradient(to right, #b16cea,#ff8a56)",
            backgroundClip: "text",
          }}
          fontWeight="500"
          fontSize={{lg:"40px",md:"35px" , sm:"35px" , xs:"30px"}}
        >
          My Experience
        </Typography>
        <Stack flexDirection='row' width={{md:"70%" , xs:"100%"}} justifyContent='center' gap='2em' flexWrap='wrap'>
        {workdata.map((data, id) => (
              <motion.div key={id} initial="hidden" animate="visible" variants={fadeInLeft} style={{display:"flex" , gap:"1em"}}>
                <Stack className="border" flexDirection='column' width='100%' minWidth={{sm:"auto" , xs:"300px"}} borderColor='#fff' height='auto' sx={{ border:"1px solid #1e1e1e" }} padding='1em 1em' borderRadius='10px'>
                  <Typography color='#f5f5f5' fontWeight='700' fontSize='20px'>{data.name}</Typography>
                  <Stack flexDirection='row' justifyContent='space-between' gap='3em' >
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>{data.position}</Typography>
                    <Typography color='#d2d2d2' fontWeight='400' fontSize='14px'>● {data.year}</Typography>
                  </Stack>
                </Stack>
              </motion.div>
            ))}
        </Stack>
        <Stack flexDirection='column' alignItems='center' padding='4em 0' gap='2em' marginTop='1.7em'>
        <motion.div initial="hidden" animate="visible" variants={fadeInLeft}>
          <Typography
            sx={{
              color: "transparent",
              backgroundImage: "linear-gradient(to right, #b16cea,#ff8a56)",
              backgroundClip: "text",
              textAlign: "center"
            }}
            fontWeight="500"
            fontSize={{lg:"40px",md:"35px" , sm:"35px" , xs:"30px"}}
          >
            Companies <span style={{color:"#fff"}}>I've Worked With</span> 
          </Typography>
        </motion.div>
        <Stack flexDirection='row' width={{md:"60%" , xs:"100%"}} justifyContent='center' gap='1.5em' flexWrap='wrap'>
          {compnydata.map((data, id) => (
            <motion.div key={id} initial="hidden" animate="visible" variants={fadeInLeft} style={{display:"flex" , gap:"1em"}}>
              <Button variant="contained" sx={{textTransform:"none", background:"rgba(30, 30, 30, 0.75) !important", border:"1px solid", borderImageSource:"linear-gradient(to right, #b16cea,#ff8a56)", borderImageSlice:"1",backdropFilter:"blur(16px) saturate(180%)", color:"#fff" , fontWeight:"700" , minWidth:"150px" , minHeight:"100px"}}>
                {data.name}
              </Button>
            </motion.div>
          ))}
        </Stack>
      </Stack>
        </Stack>
        </Suspense>
        </>
    );
}
 
export default Experience;