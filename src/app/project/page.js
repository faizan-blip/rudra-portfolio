"use client"

import React, { Suspense, useEffect, useState } from 'react';
import { Box, Fab, Grid, IconButton, Stack, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, Tooltip } from "@mui/material";
import Link from "next/link";
import styles from '@/app/styles/Navbar.module.css';
import { GoArrowUpRight } from "react-icons/go";
import {AiOutlineLink ,AiOutlineDownload} from 'react-icons/ai'
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
 
const Cloud = () => {
    const alldata = [
      { heading: "App", name: "Crypto App design", redirect: <GoArrowUpRight fontSize={35} />, img: `/serviceposter.jpg` },
      { heading: "Website Design", name: "Crypto App design", redirect: <GoArrowUpRight fontSize={35} />, img: `/serviceposter.jpg` },
      { heading: "Ui design", name: "Crypto App design", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/serviceposter.jpg` },
      { heading: "App", name: "Crypto App design", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/serviceposter.jpg` },
      { heading: "Website Design", name: "Crypto App design", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/serviceposter.jpg` },
      { heading: "Ui design", name: "Crypto App design", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/serviceposter.jpg` },
    ];

    

   
    const [selectedData, setSelectedData] = useState(null);
    
    const handleFabClick = (data) => {
      setSelectedData(data);
    };


  
    const handleCloseDialog = () => {
      setSelectedData(null);
    };


  
  
    return (
<Stack flexDirection='row' flexWrap='wrap' width='100%' justifyContent='center' gap='1.2em'>
  {alldata.map((data, id) => (
    <Box key={id} sx={{ 
        zIndex:"1",
      position: 'relative',
      borderRadius: "10px",
      height: id % 2 === 0 ? "15em" : "18em",
      backgroundImage: `url(${data.img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "row",
      justifyContent:"space-between",
      alignItems: "flex-end",
      width: {md:"40%" , xs:"100%"},
      minWidth:"300px !important",
      padding: {sm:"1.5em 1.5em" , xs:"1em 1em"},
      overflow: 'hidden',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '40%',  // Adjust the height of the shadow overlay as needed
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
      }
    }}>
      <Stack flexDirection='column' gap='0.1em'>
        <Typography sx={{ 
          color: "transparent",
          backgroundImage: "linear-gradient(to right, #b16cea,#ff8a56)",
          backgroundClip: "text",
          fontWeight: "700",
          fontSize: "18px",
          zIndex:"2"
        }}>
          • {data.heading}
        </Typography>
        <Typography sx={{ 
          color:"#fff",
          fontWeight: "700",
          fontSize: "19px",
          zIndex:"2"
        }}>
          {data.name}
        </Typography>
      </Stack>
<Fab className='hoveri' sx={{transform:"scale(0.5)" , background:"#fff !important"}}onClick={() => handleFabClick(data)}>{data.redirect}</Fab>
<Dialog open={selectedData !== null} onClose={handleCloseDialog} PaperProps={{sx:{background:"#161513"}}}>
<DialogContent>
            <Box component='img' src={data.img} sx={{ width: "100%" , borderRadius:"10px" }} />
            <Box sx={{display:"flex" , flexDirection:"column" , gap:"0.7em" , marginTop:"0.8em" , width:"100%"}}>
            <Typography sx={{display:"flex" , width:"100%" ,  color: "transparent",
          backgroundImage: "linear-gradient(to right, #b16cea,#ff8a56)",
          backgroundClip: "text",
          fontWeight: "700",
          flexDirection:"row" , alignItems:"center" , gap:"0em",
          fontSize: "20px"}}>{data.name} <Tooltip placement='bottom' title='Portfolio' >
         <Fab className='hoveri' sx={{transform:"scale(0.5)" , background:"#fff !important"}}><AiOutlineLink fontSize={35} color='#161513' onClick={()=>{
          const href = `#`
          window.location.href = href;
          }}/></Fab>
          </Tooltip></Typography>
            <Typography sx={{display:"flex" , width:"100%" , fontWeight:"700"  , color:"#fff", flexDirection:"row" , alignItems:"start" , gap:"0.5em" }}>Tech Stack: <span><TbBrandNextjs fontSize={25}/> <FaNodeJs fontSize={25}/> <FaFigma fontSize={25}/></span> </Typography>
            <Typography sx={{display:"flex" , width:"100%" , color:"#fff" ,fontWeight:"700" , flexDirection:"row" , alignItems:"start" , gap:"0.5em" }}>Description: <span style={{fontSize:"16px" , fontWeight:"500"}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus assumenda nesciunt nobis quos, voluptate, laborum nulla consequuntur doloribus a explicabo reiciendis culpa, ?</span></Typography>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}   className="hoverbut" variant="outlined" sx={{ borderImageSource: "linear-gradient(to right, #ffa84b, #ff8a56, #b16cea) !important",borderImageSlice:"1 !important" , color:"#fff",borderRadius: "5px", gap: "0.5em", textTransform: "none" , fontWeight:"700" , width:"10em" }}>
              Close
            </Button>
          </DialogActions>
          </Dialog>
    </Box>
  ))}
</Stack>

    );
  };




const Portfolio = () => {

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
          fontSize={{lg:"39px",md:"35px" , sm:"35px" , xs:"30px"}}
        >
          My Projects
        </Typography>
        <Stack width={{md:"70%" , xs:"auto"}} marginTop={{sm:"1em" , xs:"1em"}} justifyContent='center' flexDirection='row' >
        <Cloud/>
      </Stack>
      </Stack>
      </Suspense>
    </>
  );
};

export default Portfolio;
