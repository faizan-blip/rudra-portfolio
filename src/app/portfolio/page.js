"use client"

import React, { useEffect, useState } from 'react';
import { Box, Fab, Grid, IconButton, Stack, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, Tooltip } from "@mui/material";
import Link from "next/link";
import styles from '@/app/styles/Navbar.module.css';
import { GoArrowUpRight } from "react-icons/go";
import {AiOutlineLink ,AiOutlineDownload} from 'react-icons/ai'
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { useSearchParams ,usePathname} from 'next/navigation'
 
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
      width: {md:"40%" , xs:"auto"},
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

const Frontend = () => {
    const [selectedData1, setSelectedData1] = useState(null);
    const graphicdata = [
        { heading: "Web App", name: "Crypto App design", redirect: <GoArrowUpRight fontSize={35} />, img: `/serviceposter.jpg` },
        { heading: "Website Design", name: "Crypto App design", redirect: <GoArrowUpRight fontSize={35} />, img: `/serviceposter.jpg` },
        { heading: "Ui design", name: "Crypto App design", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/serviceposter.jpg` },
        { heading: "App", name: "Crypto App design", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/serviceposter.jpg` },
        { heading: "Website Design", name: "Crypto App design", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/serviceposter.jpg` },
        { heading: "Ui design", name: "Crypto App design", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/serviceposter.jpg` },
      ];
      const handleCloseDialog1 = () => {
        setSelectedData1(null);
      };

      const handleFabClick1 = (data) => {
        setSelectedData1(data);
      };
    return(
        <Stack flexDirection='row' flexWrap='wrap' width='100%' justifyContent='center' gap='1.2em'>
          {graphicdata.map((data, id) => (
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
        <Fab className='hoveri' sx={{transform:"scale(0.5)" , background:"#fff !important"}}onClick={() => handleFabClick1(data)}>{data.redirect}</Fab>
        <Dialog open={selectedData1 !== null} onClose={handleCloseDialog1} PaperProps={{sx:{background:"#161513"}}}>
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
                    <Button onClick={handleCloseDialog1}   className="hoverbut" variant="outlined" sx={{ borderImageSource: "linear-gradient(to right, #ffa84b, #ff8a56, #b16cea) !important",borderImageSlice:"1 !important" , color:"#fff",borderRadius: "5px", gap: "0.5em", textTransform: "none" , fontWeight:"700" , width:"10em" }}>
                      Close
                    </Button>
                  </DialogActions>
                  </Dialog>
            </Box>
          ))}
        </Stack>
        
            );
          };

const Backend = () => {
    const [selectedData2, setSelectedData2] = useState(null);
    const uidata = [
        { heading: "Ui App", name: "Crypto App design", redirect: <GoArrowUpRight fontSize={35} />, img: `/serviceposter.jpg` },
        { heading: "Website Design", name: "Crypto App design", redirect: <GoArrowUpRight fontSize={35} />, img: `/serviceposter.jpg` },
        { heading: "Ui design", name: "Crypto App design", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/serviceposter.jpg` },
        { heading: "App", name: "Crypto App design", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/serviceposter.jpg` },
        { heading: "Website Design", name: "Crypto App design", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/serviceposter.jpg` },
        { heading: "Ui design", name: "Crypto App design", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/serviceposter.jpg` },
      ];

      const handleFabClick2 = (data) => {
        setSelectedData2(data);
      };

      const handleCloseDialog2 = () => {
        setSelectedData2(null);
      };

    return(
        <Stack flexDirection='row' flexWrap='wrap' width='100%' justifyContent='center' gap='1.2em'>
          {uidata.map((data, id) => (
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
        <Fab className='hoveri' sx={{transform:"scale(0.5)" , background:"#fff !important"}}onClick={() => handleFabClick2(data)}>{data.redirect}</Fab>
        <Dialog open={selectedData2 !== null} onClose={handleCloseDialog2} PaperProps={{sx:{background:"#161513"}}}>
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
                    <Button onClick={handleCloseDialog2}   className="hoverbut" variant="outlined" sx={{ borderImageSource: "linear-gradient(to right, #ffa84b, #ff8a56, #b16cea) !important",borderImageSlice:"1 !important" , color:"#fff",borderRadius: "5px", gap: "0.5em", textTransform: "none" , fontWeight:"700" , width:"10em" }}>
                      Close
                    </Button>
                  </DialogActions>
                  </Dialog>
            </Box>
          ))}
        </Stack>
        
            );
};

const Devops = () => {
    
    const [selectedData3, setSelectedData3] = useState(null);

    const devdata = [
        { heading: " Ai-Ml App", name: "Crypto App design", redirect: <GoArrowUpRight fontSize={35} />, img: `/serviceposter.jpg` },
        { heading: "Website Design", name: "Crypto App design", redirect: <GoArrowUpRight fontSize={35} />, img: `/serviceposter.jpg` },
        { heading: "Ui design", name: "Crypto App design", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/serviceposter.jpg` },
        { heading: "App", name: "Crypto App design", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/serviceposter.jpg` },
        { heading: "Website Design", name: "Crypto App design", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/serviceposter.jpg` },
        { heading: "Ui design", name: "Crypto App design", redirect: <GoArrowUpRight  fontSize={35}/>, img: `/serviceposter.jpg` },
      ];
 

    
      const handleFabClick3 = (data) => {
        setSelectedData3(data);
      };
      
      const handleCloseDialog3 = () => {
        setSelectedData3(null);
      };
    return(
        <Stack flexDirection='row' flexWrap='wrap' width='100%' justifyContent='center' gap='1.2em'>
          {devdata.map((data, id) => (
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
        <Fab className='hoveri' sx={{transform:"scale(0.5)" , background:"#fff !important"}}onClick={() => handleFabClick3(data)}>{data.redirect}</Fab>
        <Dialog open={selectedData3 !== null} onClose={handleCloseDialog3} PaperProps={{sx:{background:"#161513"}}}>
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
                    <Button onClick={handleCloseDialog3}   className="hoverbut" variant="outlined" sx={{ borderImageSource: "linear-gradient(to right, #ffa84b, #ff8a56, #b16cea) !important",borderImageSlice:"1 !important" , color:"#fff",borderRadius: "5px", gap: "0.5em", textTransform: "none" , fontWeight:"700" , width:"10em" }}>
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
  const [selectedCategory, setSelectedCategory] = useState('cloud');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case 'cloud':
        return <Cloud />;
      case 'frontend':
        return <Frontend />;
      case 'backend':
        return <Backend />;
      case 'devops':
        return <Devops />;
      default:
        return null;
    }
  };

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const url = `${pathname}?${searchParams}`
  console.log(url)
  const isSelected0 = url === '/portfolio?cloud=' ;
  const isSelected = url === '/portfolio?frontend=' ;
      const isSelected1 = url === '/portfolio?backend=' ;
      const isSelected2 = url === '/portfolio?devops=' ;
    
  return (
    <>
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
          My Portfolio
        </Typography>
        <Stack flexDirection="row" justifyContent="center" gap={{md:"1.9em" , xs:"1em"}} flexWrap={{md:"nowrap" , xs:"wrap"}} >
          <Link
          className={isSelected0 ? styles.selected : styles.navLink1}
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontSize:{sm:"16px" , xs:"14px"}
            }}
            href="?cloud"
            onClick={() => handleCategoryClick('cloud')}
          >
            Cloud Solution
          </Link>
          <Link
            className={isSelected ? styles.selected : styles.navLink1}
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontSize:{sm:"16px" , xs:"14px"}
            }}
            href="?frontend"
            onClick={() => handleCategoryClick('frontend')}
          >
            Frontend Development
          </Link>
          <Link
            className={isSelected1 ? styles.selected : styles.navLink1}
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontSize:{sm:"16px" , xs:"14px"}
            }}
            href="?backend"
            onClick={() => handleCategoryClick('backend')}
          >
            Backend Development
          </Link>
          <Link
            className={isSelected2 ? styles.selected : styles.navLink1}
            style={{
              color: "#f5f5f5",
              textDecoration: "none",
              fontSize:{sm:"16px" , xs:"14px"}
            }}
            href="?devops"
            onClick={() => handleCategoryClick('devops')}
          >
            DevOps
          </Link>
        </Stack>
        <Stack width={{md:"70%" , xs:"auto"}} marginTop={{sm:"1em" , xs:"1em"}} justifyContent='center' flexDirection='row' >
        {renderContent()}
      </Stack>
      </Stack>
    </>
  );
};

export default Portfolio;
