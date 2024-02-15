"use client"

import { Box, Button, Stack, Typography } from "@mui/material";
import image from '/public/serviceposter.jpg'
import { useRouter } from "next/navigation";
import {motion} from 'framer-motion'

const Service = () => {


    const servicedata = [
        {
          name: "Frontend Development",
          url:"/portfolio/?frontend",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus assumenda nesciunt nobis quos, voluptate, laborum nulla consequuntur doloribus a explicabo reiciendis culpa, ? ",
          button: "View Project",
          img: `/serviceposter.jpg`,
          bgColor: "#161513", // Background color for the first item
        },
        {
            name: "Backend Development",
            url:"/portfolio/?backend",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus assumenda nesciunt nobis quos, voluptate, laborum nulla consequuntur doloribus a explicabo reiciendis culpa, ? ",
          button: "View Project",
          img: `/serviceposter.jpg`,
          bgColor: "#1e1e1e", // Background color for consecutive items
        },
        {
            name: "DevOps",
            url:"/portfolio/?devops",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus assumenda nesciunt nobis quos, voluptate, laborum nulla consequuntur doloribus a explicabo reiciendis culpa, ? ",
          button: "View Project",
          img: `/serviceposter.jpg`,
          bgColor: "#1e1e1e", // Background color for consecutive items
        },
        {
            name: "Cloud Solutions",
            url:"/portfolio/?cloud",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus assumenda nesciunt nobis quos, voluptate, laborum nulla consequuntur doloribus a explicabo reiciendis culpa, ? ",
          button: "View Project",
          img: `/serviceposter.jpg`,
          bgColor: "#161513", // Background color for the fourth item
        },
        // Add more service data as needed
      ];

      const route = useRouter()

      const fadeInright = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 , transition: { delay: 0.25 } },
      };

    return (  
        <>
           <Stack
        flexDirection='column'
        gap="2em"
        alignItems="center"
        minHeight='100vh'
        height="100%"
        bgcolor="#161513"
        padding={{md:"5em 0" , xs:"1em 0em"}}
      >
     <Typography
              sx={{
                color: "transparent",
                backgroundImage: "linear-gradient(to right, #b16cea,#ff8a56)",
                backgroundClip: "text",
              }}
              fontWeight="500"
              fontSize={{lg:"39px",md:"35px" , sm:"35px" , xs:"30px"}}
            >
              My Services
            </Typography>

            <Stack flexDirection='column'>
               {
                servicedata.map((data , id)=>(
                  <motion.div key={id} 
                  initial={{
                    // Initially hidden and invisible
                    opacity: 0,
                    y: id % 2 === 0 ? 20 : -20,
                  }}
                  animate="visible"
                  transition={{delay:0.25}}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  >
                   <Stack  flexDirection={{ md: id % 2 === 0 ? "row" : "row-reverse", xs: "column-reverse" }} justifyContent='center' alignItems='center'  bgcolor={data.bgColor}  padding={{xl:"3.5em 3em" , md:"3.5em 3em" , xs:"1.5em 0"}}>
                    <motion.div
                     variants={{
                      visible: {
                        opacity: 1,
                      },
                    }}
                    initial="initial"
                    animate="visible"
                    transition={{delay:0.25}}
                    >
                    <Stack className="content" flexDirection='column' gap={{sm:"1.1em" , xs:"0.7em"}} width={{lg:"60%" , xs:"auto"}} alignItems={id % 2 === 0 ? "end" : "start" } padding={{lg:"0 5em" , md:"0 3em" ,xs:"0 1em"}} >
                        <Typography  fontWeight="500" fontSize={{lg:"35px", md:"31px" , sm:"30px" , xs:"25px"}} color='#fff' alignSelf={id % 2 === 0 ? "start" : "start" } marginTop={{md:"0", xs:"1em"}}>{data.name}</Typography>
                        <Typography color='#d2d2d2' fontWeight='400' fontSize={{lg:"18px", md:"17px" , sm:"16px" , xs:"15px"}} >
                       {data.description}
                    </Typography>
                    <Button onClick={()=> route.push(`${data.url}`)} sx={{background: "linear-gradient(to right, #ffa84b, #ff8a56, #b16cea) !important", borderRadius: "5px", gap: "0.5em", textTransform: "none" , width:"11em" , color:"#fff" , fontWeight:"700" , alignSelf:id % 2 === 0 ? "start" : "start" , marginRight:"6em"   }}>{data.button}</Button>
                        </Stack>
                        </motion.div>
                        <Stack className="img" width={{md:"40%" , xs:"auto"}} flexDirection='row' justifyContent= {id % 2 === 0 ? "start" : "end" }  padding={{lg:"0 5em" , md:"0 3em" ,xs:"0 1em"}}>
                        <motion.div key={id} initial="hidden" animate="visible" variants={fadeInright} style={{display:"flex" , gap:"1em"}}><Box component='img' src={data.img} sx={{width:{xl:"420px",lg:"400px" ,md:"300px",sm:"300px", xs:"100%"} , borderRadius:"9px"}}/></motion.div>
                        </Stack>
                   </Stack>
                   </motion.div>
                ))
               }
            </Stack>
      </Stack>
        </>
    );
}
 
export default Service;